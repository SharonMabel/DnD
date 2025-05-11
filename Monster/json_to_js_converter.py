import json
import re
from bs4 import BeautifulSoup # Zum Parsen von HTML-Inhalten

# Zielstruktur eines Monsters in deiner DM.html (aus deinem Code abgeleitet)
MONSTER_TEMPLATE = {
    "id": 0,
    "name": "",
    "type": "",        # Wird aus "meta" extrahiert (z.B. "Large aberration")
    "alignment": "",   # Wird aus "meta" extrahiert (z.B. "lawful evil")
    "ac": 0,
    "hp": 0,
    "speed": "",
    "attributes": {"str": 10, "dex": 10, "con": 10, "int": 10, "wis": 10, "cha": 10},
    "saves": {},       # z.B. {"con": 6, "int": 8, "wis": 6}
    "skills": "",
    "damage_res": "",  # In JSON "Damage Resistances"
    "damage_imm": "",  # In JSON "Damage Immunities"
    "condition_imm": "", # In JSON "Condition Immunities"
    "senses": "",
    "languages": "",
    "cr": "",          # Nur der Wert, z.B. "10"
    "features": [],    # Aus JSON "Traits"
    "actions": [],     # Aus JSON "Actions"
    "bonus_actions": [], # Versuchen, aus Actions/Legendary Actions zu extrahieren oder leer lassen
    "reactions": [],   # Versuchen, aus Actions/Legendary Actions zu extrahieren oder leer lassen
    "legendary_actions": [], # Aus JSON "Legendary Actions"
    "spellcasting": False,
    "details": ""      # Für zusätzliche Infos oder schwer zu parsende Blöcke
}

def parse_html_content_to_array(html_string):
    """Extrahiert Text aus <p><em><strong>Name.</strong></em> Beschreibung</p> Strukturen."""
    if not html_string:
        return []
    
    soup = BeautifulSoup(html_string, 'html.parser')
    items = []
    
    # Versucht verschiedene Strukturen zu erfassen
    # Fall 1: <p><em><strong>Überschrift.</strong></em> Text</p>
    for p_tag in soup.find_all('p'):
        strong_tag = p_tag.find('strong')
        if strong_tag and strong_tag.em: # <em><strong>Überschrift.</strong></em>
            title = strong_tag.em.get_text(strip=True)
            description = strong_tag.em.parent.get_text(strip=True)[len(title):].strip()
            if description.startswith('.'): # Manchmal bleibt ein Punkt übrig
                 description = description[1:].strip()
            items.append(f"{title} {description}".strip())
        elif strong_tag: # Nur <strong>Überschrift.</strong>
            title = strong_tag.get_text(strip=True)
            description = strong_tag.parent.get_text(strip=True)[len(title):].strip()
            if description.startswith('.'):
                 description = description[1:].strip()
            items.append(f"{title} {description}".strip())
        elif p_tag.get_text(strip=True): # Nur <p>Text</p>
             items.append(p_tag.get_text(strip=True))

    # Fallback für Listen <ul><li>...</li></ul> (z.B. in Flameskull spells)
    if not items:
        for li_tag in soup.find_all('li'):
            items.append(li_tag.get_text(strip=True))
            
    # Wenn immer noch nichts gefunden wurde, aber Text da ist, als Ganzes nehmen
    if not items and soup.get_text(strip=True):
        items.append(soup.get_text(strip=True).replace('\n', ' '))
        
    return items

def convert_srd_monster(srd_monster, monster_id):
    new_monster = {**MONSTER_TEMPLATE} # Tiefe Kopie für jedes Monster
    new_monster["attributes"] = {**MONSTER_TEMPLATE["attributes"]}
    new_monster["saves"] = {}
    new_monster["features"] = []
    new_monster["actions"] = []
    new_monster["legendary_actions"] = []
    new_monster["bonus_actions"] = []
    new_monster["reactions"] = []

    new_monster["id"] = monster_id
    new_monster["name"] = srd_monster.get("name", "Unknown Monster")

    # Meta: "Size type, alignment"
    meta = srd_monster.get("meta", "")
    parts = meta.split(',')
    if len(parts) > 0:
        size_type_parts = parts[0].strip().split(' ', 1) # "Large aberration" -> ["Large", "aberration"]
        if len(size_type_parts) == 2:
            new_monster["type"] = f"{size_type_parts[0].capitalize()} {size_type_parts[1]}"
        else:
            new_monster["type"] = parts[0].strip()
    if len(parts) > 1:
        new_monster["alignment"] = parts[1].strip()

    # AC
    ac_str = srd_monster.get("Armor Class", "0")
    ac_match = re.search(r"(\d+)", ac_str)
    if ac_match: new_monster["ac"] = int(ac_match.group(1))

    # HP
    hp_str = srd_monster.get("Hit Points", "0")
    hp_match = re.search(r"(\d+)", hp_str)
    if hp_match: new_monster["hp"] = int(hp_match.group(1))
    # Optional: HP-Würfel im Detail speichern
    hp_dice_match = re.search(r"\(.+\)", hp_str)
    if hp_dice_match:
        new_monster["details"] = (new_monster["details"] + f"HP Dice: {hp_dice_match.group(0)}. ").lstrip()


    new_monster["speed"] = srd_monster.get("Speed", "").strip()

    # Attribute
    for attr_key in ["STR", "DEX", "CON", "INT", "WIS", "CHA"]:
        attr_val_str = srd_monster.get(attr_key, "10")
        new_monster["attributes"][attr_key.lower()] = int(attr_val_str) if attr_val_str else 10
        
    # Saving Throws (z.B. "CON +6, INT +8, WIS +6")
    saves_str = srd_monster.get("Saving Throws", "")
    if saves_str:
        for save_part in saves_str.split(','):
            match = re.match(r"\s*(\w+)\s*\+\s*(\d+)", save_part.strip())
            if match:
                new_monster["saves"][match.group(1).lower()] = int(match.group(2))

    new_monster["skills"] = srd_monster.get("Skills", "")
    new_monster["damage_res"] = srd_monster.get("Damage Resistances", "")
    new_monster["damage_imm"] = srd_monster.get("Damage Immunities", "")
    new_monster["condition_imm"] = srd_monster.get("Condition Immunities", "")
    new_monster["senses"] = srd_monster.get("Senses", "")
    new_monster["languages"] = srd_monster.get("Languages", "")

    # Challenge Rating (CR)
    cr_str = srd_monster.get("Challenge", "0")
    cr_match = re.search(r"([\d/]+)", cr_str)
    if cr_match: new_monster["cr"] = cr_match.group(1)
    else: new_monster["cr"] = cr_str.split(" ")[0] # Fallback, falls kein XP Teil da ist

    # Traits -> Features
    new_monster["features"] = parse_html_content_to_array(srd_monster.get("Traits", ""))
    
    # Actions
    new_monster["actions"] = parse_html_content_to_array(srd_monster.get("Actions", ""))

    # Legendary Actions
    legendary_actions_html = srd_monster.get("Legendary Actions")
    if legendary_actions_html:
        # Entferne den einleitenden Satz "The X can take 3 legendary actions..."
        soup_legendary = BeautifulSoup(legendary_actions_html, 'html.parser')
        first_p = soup_legendary.find('p')
        if first_p and "can take 3 legendary actions" in first_p.get_text():
            first_p.decompose() # Entfernt den ersten <p> Tag
        new_monster["legendary_actions"] = parse_html_content_to_array(str(soup_legendary))


    # Reactions (manchmal in "Reactions" Sektion oder innerhalb von "Legendary Actions")
    reactions_html = srd_monster.get("Reactions")
    if reactions_html:
         new_monster["reactions"] = parse_html_content_to_array(reactions_html)

    # Spellcasting (oft in Traits oder als eigener Abschnitt)
    traits_text_lower = srd_monster.get("Traits", "").lower()
    actions_text_lower = srd_monster.get("Actions", "").lower()
    if "spellcasting" in traits_text_lower or "innate spellcasting" in traits_text_lower or \
       "spellcasting" in actions_text_lower or "innate spellcasting" in actions_text_lower or \
       srd_monster.get("Spells"): # Manchmal gibt es ein direktes "Spells" Feld
        new_monster["spellcasting"] = True
        if srd_monster.get("Spells"): # Falls es ein extra Spells Feld gibt, füge es zu Details
            new_monster["details"] = (new_monster["details"] + f"Spells: {srd_monster.get('Spells')}. ").lstrip()


    # Aufräumen von leeren Feldern, damit sie nicht als `null` im JS erscheinen, wenn sie optional sind.
    for key in ["damage_res", "damage_imm", "condition_imm", "skills", "senses", "languages", "details"]:
        if not new_monster[key]:
            new_monster[key] = "" # Leerer String statt None für JS

    return new_monster

if __name__ == "__main__":
    srd_json_file = "srd_5e_monsters.json"
    output_js_file = "srd_monster_data_output.js"
    
    try:
        with open(srd_json_file, 'r', encoding='utf-8') as f:
            srd_data = json.load(f)
    except FileNotFoundError:
        print(f"FEHLER: Die Datei '{srd_json_file}' wurde nicht im selben Ordner wie das Skript gefunden.")
        exit()
    except json.JSONDecodeError:
        print(f"FEHLER: Die Datei '{srd_json_file}' enthält kein valides JSON.")
        exit()

    all_monsters_for_js = []
    for i, srd_monster_entry in enumerate(srd_data):
        print(f"Verarbeite Monster: {srd_monster_entry.get('name', 'Unbekannt')}...")
        # +1 da deine IDs bei 1 starten, falls du das Monster "Aramil" behalten willst, erhöhe den Startwert.
        # Wenn Aramil das einzige Monster in der alten Liste war, kannst du bei 1 starten,
        # und Aramil manuell später hinzufügen oder die ID anpassen.
        # Für eine komplett neue Liste:
        current_id = i + 1 
        
        converted_monster = convert_srd_monster(srd_monster_entry, current_id)
        all_monsters_for_js.append(converted_monster)

    # Schreibe die JavaScript-Array-Struktur
    with open(output_js_file, 'w', encoding='utf-8') as f:
        f.write("const monsterData = ")
        # json.dumps mit indent für Lesbarkeit; manuelles Ersetzen von Python None zu JS null
        json_string = json.dumps(all_monsters_for_js, indent=2)
        json_string = json_string.replace("true", "true") # Sicherstellen, dass es klein geschrieben ist
        json_string = json_string.replace("false", "false")
        json_string = json_string.replace("null", "null") # json.dumps macht das korrekt
        f.write(json_string)
        f.write(";\n")
    
    print(f"\nVerarbeitung abgeschlossen. {len(all_monsters_for_js)} Monster wurden in '{output_js_file}' geschrieben.")
    print("Die Datei ist jetzt bereit, in dein HTML-Projekt eingebunden zu werden.")
    print("Du kannst den Inhalt kopieren und die `monsterData` Variable in `DM.html` ersetzen,")
    print("oder die Datei per <script src=\"srd_monster_data_output.js\"></script> einbinden.")