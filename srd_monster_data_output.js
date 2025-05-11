const monsterData = [
  {
    "id": 1,
    "name": "Aboleth",
    "type": "Large aberration",
    "alignment": "lawful evil",
    "ac": 17,
    "hp": 135,
    "speed": "10 ft., swim 40 ft.",
    "attributes": {
      "str": 21,
      "dex": 9,
      "con": 15,
      "int": 18,
      "wis": 15,
      "cha": 18
    },
    "saves": {
      "con": 6,
      "int": 8,
      "wis": 6
    },
    "skills": "History +12, Perception +10",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 20",
    "languages": "Deep Speech, Telepathy 120 ft.",
    "cr": "10",
    "features": [
      "Amphibious.",
      "Mucous Cloud.",
      "Probing Telepathy."
    ],
    "actions": [
      "Multiattack.",
      "Tentacle.",
      "Tail.",
      "Enslave (3/Day).",
      "Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Swipe.",
      "Psychic Drain"
    ],
    "spellcasting": false,
    "details": "HP Dice: (18d10 + 36). "
  },
  {
    "id": 2,
    "name": "Acolyte",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 10,
    "hp": 9,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 10,
      "con": 10,
      "int": 10,
      "wis": 14,
      "cha": 11
    },
    "saves": {},
    "skills": "Medicine +4, Religion +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Any one language (usually Common)",
    "cr": "1/4",
    "features": [
      "Spellcasting.",
      "Cantrips (at will): light, sacred flame, thaumaturgy",
      "1st level (3 slots): bless, cure wounds, sanctuary"
    ],
    "actions": [
      "Club."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (2d8). "
  },
  {
    "id": 3,
    "name": "Adult Black Dragon",
    "type": "Huge dragon",
    "alignment": "chaotic evil",
    "ac": 19,
    "hp": 195,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 23,
      "dex": 14,
      "con": 21,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "saves": {
      "dex": 7,
      "con": 10,
      "wis": 6,
      "cha": 8
    },
    "skills": "Perception +11, Stealth +7",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
    "languages": "Common, Draconic",
    "cr": "14",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Acid Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (17d12 + 85). "
  },
  {
    "id": 4,
    "name": "Adult Blue Dragon",
    "type": "Huge dragon",
    "alignment": "lawful evil",
    "ac": 19,
    "hp": 225,
    "speed": "40 ft., burrow 30 ft., fly 80 ft.",
    "attributes": {
      "str": 25,
      "dex": 10,
      "con": 23,
      "int": 16,
      "wis": 15,
      "cha": 19
    },
    "saves": {
      "dex": 5,
      "con": 11,
      "wis": 7,
      "cha": 9
    },
    "skills": "Perception +12, Stealth +5",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
    "languages": "Common, Draconic",
    "cr": "16",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Lightning Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (18d12 + 108). "
  },
  {
    "id": 5,
    "name": "Adult Brass Dragon",
    "type": "Huge dragon",
    "alignment": "chaotic good",
    "ac": 18,
    "hp": 172,
    "speed": "40 ft., burrow 30 ft., fly 80 ft.",
    "attributes": {
      "str": 23,
      "dex": 10,
      "con": 21,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "saves": {
      "dex": 5,
      "con": 10,
      "wis": 6,
      "cha": 8
    },
    "skills": "History +7, Perception +11, Persuasion +8, Stealth +5",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
    "languages": "Common, Draconic",
    "cr": "13",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Fire Breath.",
      "Sleep Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (15d12 + 75). "
  },
  {
    "id": 6,
    "name": "Adult Bronze Dragon",
    "type": "Huge dragon",
    "alignment": "lawful good",
    "ac": 19,
    "hp": 212,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 25,
      "dex": 10,
      "con": 23,
      "int": 16,
      "wis": 15,
      "cha": 19
    },
    "saves": {
      "dex": 5,
      "con": 11,
      "wis": 7,
      "cha": 9
    },
    "skills": "Insight +7, Perception +12, Stealth +5",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
    "languages": "Common, Draconic",
    "cr": "15",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Lightning Breath.",
      "Repulsion Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (17d12 + 102). "
  },
  {
    "id": 7,
    "name": "Adult Copper Dragon",
    "type": "Huge dragon",
    "alignment": "chaotic good",
    "ac": 18,
    "hp": 184,
    "speed": "40 ft., climb 40 ft., fly 80 ft.",
    "attributes": {
      "str": 23,
      "dex": 12,
      "con": 21,
      "int": 18,
      "wis": 15,
      "cha": 17
    },
    "saves": {
      "dex": 6,
      "con": 10,
      "wis": 7,
      "cha": 8
    },
    "skills": "Deception +8, Perception +12, Stealth +6",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
    "languages": "Common, Draconic",
    "cr": "14",
    "features": [
      "Legendary Resistance (3/Day)"
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Acid Breath.",
      "Slowing Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (16d12 + 80). "
  },
  {
    "id": 8,
    "name": "Adult Gold Dragon",
    "type": "Huge dragon",
    "alignment": "lawful good",
    "ac": 19,
    "hp": 256,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 27,
      "dex": 14,
      "con": 25,
      "int": 16,
      "wis": 15,
      "cha": 24
    },
    "saves": {
      "dex": 8,
      "con": 13,
      "wis": 8,
      "cha": 13
    },
    "skills": "Insight +8, Perception +14, Persuasion +13, Stealth +8",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 24",
    "languages": "Common, Draconic",
    "cr": "17",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Fire Breath.",
      "Weakening Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (19d12 + 133). "
  },
  {
    "id": 9,
    "name": "Adult Green Dragon",
    "type": "Huge dragon",
    "alignment": "lawful evil",
    "ac": 19,
    "hp": 207,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 23,
      "dex": 12,
      "con": 21,
      "int": 18,
      "wis": 15,
      "cha": 17
    },
    "saves": {
      "dex": 6,
      "con": 10,
      "wis": 7,
      "cha": 8
    },
    "skills": "Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
    "languages": "Common, Draconic",
    "cr": "15",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Poison Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (18d12 + 90). "
  },
  {
    "id": 10,
    "name": "Adult Red Dragon",
    "type": "Huge dragon",
    "alignment": "chaotic evil",
    "ac": 19,
    "hp": 256,
    "speed": "40 ft., climb 40 ft., fly 80 ft.",
    "attributes": {
      "str": 27,
      "dex": 10,
      "con": 25,
      "int": 16,
      "wis": 13,
      "cha": 21
    },
    "saves": {
      "dex": 6,
      "con": 13,
      "wis": 7,
      "cha": 11
    },
    "skills": "Perception +13, Stealth +6",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 23",
    "languages": "Common, Draconic",
    "cr": "17",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Fire Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (19d12 + 133). "
  },
  {
    "id": 11,
    "name": "Adult Silver Dragon",
    "type": "Huge dragon",
    "alignment": "lawful good",
    "ac": 19,
    "hp": 243,
    "speed": "40 ft., fly 80 ft.",
    "attributes": {
      "str": 27,
      "dex": 10,
      "con": 25,
      "int": 16,
      "wis": 13,
      "cha": 21
    },
    "saves": {
      "dex": 5,
      "con": 12,
      "wis": 6,
      "cha": 10
    },
    "skills": "Arcana +8, History +8, Perception +11, Stealth +5",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
    "languages": "Common, Draconic",
    "cr": "16",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Cold Breath.",
      "Paralyzing Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (18d12 + 126). "
  },
  {
    "id": 12,
    "name": "Adult White Dragon",
    "type": "Huge dragon",
    "alignment": "chaotic evil",
    "ac": 18,
    "hp": 200,
    "speed": "40 ft., burrow 30 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 22,
      "dex": 10,
      "con": 22,
      "int": 8,
      "wis": 12,
      "cha": 12
    },
    "saves": {
      "dex": 5,
      "con": 11,
      "wis": 6,
      "cha": 6
    },
    "skills": "Perception +11, Stealth +5",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
    "languages": "Common, Draconic",
    "cr": "13",
    "features": [
      "Ice Walk.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Cold Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (16d12 + 96). "
  },
  {
    "id": 13,
    "name": "Air Elemental",
    "type": "Large elemental",
    "alignment": "neutral",
    "ac": 15,
    "hp": 90,
    "speed": "0 ft., fly 90 ft. (hover)",
    "attributes": {
      "str": 14,
      "dex": 20,
      "con": 14,
      "int": 6,
      "wis": 10,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Auran",
    "cr": "5",
    "features": [
      "Air Form."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Whirlwind (Recharge 4\u20136).",
      "If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 24). "
  },
  {
    "id": 14,
    "name": "Allosaurus",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 51,
    "speed": "60 ft.",
    "attributes": {
      "str": 19,
      "dex": 13,
      "con": 17,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 15",
    "languages": "--",
    "cr": "2",
    "features": [
      "Pounce."
    ],
    "actions": [
      "Bite.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 18). "
  },
  {
    "id": 15,
    "name": "Ancient Black Dragon",
    "type": "Gargantuan dragon",
    "alignment": "chaotic evil",
    "ac": 22,
    "hp": 367,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 27,
      "dex": 14,
      "con": 25,
      "int": 16,
      "wis": 15,
      "cha": 19
    },
    "saves": {
      "dex": 9,
      "con": 14,
      "wis": 9,
      "cha": 11
    },
    "skills": "Perception +16, Stealth +9",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 26",
    "languages": "Common, Draconic",
    "cr": "21",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Acid Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (21d20 + 147). "
  },
  {
    "id": 16,
    "name": "Ancient Blue Dragon",
    "type": "Gargantuan dragon",
    "alignment": "lawful evil",
    "ac": 22,
    "hp": 481,
    "speed": "40 ft., burrow 40 ft., fly 80 ft.",
    "attributes": {
      "str": 29,
      "dex": 10,
      "con": 27,
      "int": 18,
      "wis": 17,
      "cha": 21
    },
    "saves": {
      "dex": 7,
      "con": 15,
      "wis": 10,
      "cha": 12
    },
    "skills": "Perception +17, Stealth +7",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
    "languages": "Common, Draconic",
    "cr": "23",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Lightning Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (26d20 + 208). "
  },
  {
    "id": 17,
    "name": "Ancient Brass Dragon",
    "type": "Gargantuan dragon",
    "alignment": "chaotic good",
    "ac": 20,
    "hp": 297,
    "speed": "40 ft., burrow 40 ft., fly 80 ft.",
    "attributes": {
      "str": 27,
      "dex": 10,
      "con": 25,
      "int": 16,
      "wis": 15,
      "cha": 19
    },
    "saves": {
      "dex": 6,
      "con": 13,
      "wis": 8,
      "cha": 10
    },
    "skills": "History +9, Perception +14, Persuasion +10, Stealth +6",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 24",
    "languages": "Common, Draconic",
    "cr": "20",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Fire Breath.",
      "Sleep Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (17d20 + 119). "
  },
  {
    "id": 18,
    "name": "Ancient Bronze Dragon",
    "type": "Gargantuan dragon",
    "alignment": "lawful good",
    "ac": 22,
    "hp": 444,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 29,
      "dex": 10,
      "con": 27,
      "int": 18,
      "wis": 17,
      "cha": 21
    },
    "saves": {
      "dex": 7,
      "con": 15,
      "wis": 10,
      "cha": 12
    },
    "skills": "Insight +10, Perception +17, Stealth +7",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
    "languages": "Common, Draconic",
    "cr": "22",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Lightning Breath.",
      "Repulsion Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (24d20 + 192). "
  },
  {
    "id": 19,
    "name": "Ancient Copper Dragon",
    "type": "Gargantuan dragon",
    "alignment": "chaotic good",
    "ac": 21,
    "hp": 350,
    "speed": "40 ft., climb 40 ft., fly 80 ft.",
    "attributes": {
      "str": 27,
      "dex": 12,
      "con": 25,
      "int": 20,
      "wis": 17,
      "cha": 19
    },
    "saves": {
      "dex": 8,
      "con": 14,
      "wis": 10,
      "cha": 11
    },
    "skills": "Deception +11, Perception +17, Stealth +8",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
    "languages": "Common, Draconic",
    "cr": "21",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Acid Breath.",
      "Slowing Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (20d20 + 140). "
  },
  {
    "id": 20,
    "name": "Ancient Gold Dragon",
    "type": "Gargantuan dragon",
    "alignment": "lawful good",
    "ac": 22,
    "hp": 546,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 30,
      "dex": 14,
      "con": 29,
      "int": 18,
      "wis": 17,
      "cha": 28
    },
    "saves": {
      "dex": 9,
      "con": 16,
      "wis": 10,
      "cha": 16
    },
    "skills": "Insight +10, Perception +17, Persuasion +16, Stealth +9",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
    "languages": "Common, Draconic",
    "cr": "24",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Fire Breath.",
      "Weakening Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (28d20 + 252). "
  },
  {
    "id": 21,
    "name": "Ancient Green Dragon",
    "type": "Gargantuan dragon",
    "alignment": "lawful evil",
    "ac": 21,
    "hp": 385,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 27,
      "dex": 12,
      "con": 25,
      "int": 20,
      "wis": 17,
      "cha": 19
    },
    "saves": {
      "dex": 8,
      "con": 14,
      "wis": 10,
      "cha": 11
    },
    "skills": "Deception +11, Insight +10, Perception +17, Persuasion +11, Stealth +8",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
    "languages": "Common, Draconic",
    "cr": "22",
    "features": [
      "Amphibious.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Poison Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (22d20 + 154). "
  },
  {
    "id": 22,
    "name": "Ancient Red Dragon",
    "type": "Gargantuan dragon",
    "alignment": "chaotic evil",
    "ac": 22,
    "hp": 546,
    "speed": "40 ft., climb 40 ft., fly 80 ft.",
    "attributes": {
      "str": 30,
      "dex": 10,
      "con": 29,
      "int": 18,
      "wis": 15,
      "cha": 23
    },
    "saves": {
      "dex": 7,
      "con": 16,
      "wis": 9,
      "cha": 13
    },
    "skills": "Perception +16, Stealth +7",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 26",
    "languages": "Common, Draconic",
    "cr": "24",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Fire Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (28d20 + 252). "
  },
  {
    "id": 23,
    "name": "Ancient Silver Dragon",
    "type": "Gargantuan dragon",
    "alignment": "lawful good",
    "ac": 22,
    "hp": 487,
    "speed": "40 ft., fly 80 ft.",
    "attributes": {
      "str": 30,
      "dex": 10,
      "con": 29,
      "int": 18,
      "wis": 15,
      "cha": 23
    },
    "saves": {
      "dex": 7,
      "con": 16,
      "wis": 9,
      "cha": 13
    },
    "skills": "Arcana +11, History +11, Perception +16, Stealth +7",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 26",
    "languages": "Common, Draconic",
    "cr": "23",
    "features": [
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Breath Weapons (Recharge 5\u20136).",
      "Cold Breath.",
      "Paralyzing Breath.",
      "Change Shape.",
      "In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (25d20 + 225). "
  },
  {
    "id": 24,
    "name": "Ancient White Dragon",
    "type": "Gargantuan dragon",
    "alignment": "chaotic evil",
    "ac": 20,
    "hp": 333,
    "speed": "40 ft., burrow 40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 26,
      "dex": 10,
      "con": 26,
      "int": 10,
      "wis": 13,
      "cha": 14
    },
    "saves": {
      "dex": 6,
      "con": 14,
      "wis": 7,
      "cha": 8
    },
    "skills": "Perception +13, Stealth +6",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 23",
    "languages": "Common, Draconic",
    "cr": "20",
    "features": [
      "Ice Walk.",
      "Legendary Resistance (3/Day)."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Frightful Presence.",
      "Cold Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Detect.",
      "Tail Attack.",
      "Wing Attack (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (18d20 + 144). "
  },
  {
    "id": 25,
    "name": "Androsphinx",
    "type": "Large monstrosity",
    "alignment": "lawful neutral",
    "ac": 17,
    "hp": 199,
    "speed": "40 ft., fly 60 ft.",
    "attributes": {
      "str": 22,
      "dex": 10,
      "con": 20,
      "int": 16,
      "wis": 18,
      "cha": 23
    },
    "saves": {
      "dex": 6,
      "con": 11,
      "int": 9,
      "wis": 10
    },
    "skills": "Arcana +9, Perception +10, Religion +15",
    "damage_res": "",
    "damage_imm": "Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "condition_imm": "Charmed, Frightened",
    "senses": "Truesight 120 ft.,  Passive Perception 20",
    "languages": "Common, Sphinx",
    "cr": "17",
    "features": [
      "Inscrutable.",
      "Magic Weapons.",
      "Spellcasting.",
      "Cantrips (at will): sacred flame, spare the dying, thaumaturgy",
      "1st level (4 slots): command, detect evil and good, detect magic",
      "2nd level (3 slots): lesser restoration, zone of truth",
      "3rd level (3 slots): dispel magic, tongues",
      "4th level (3 slots): banishment, freedom of movement",
      "5th level (2 slots): flame strike, greater restoration",
      "6th level (1 slot): heroes' feast"
    ],
    "actions": [
      "Multiattack.",
      "Claw.",
      "Roar (3/Day).",
      "First Roar.",
      "Second Roar.",
      "Third Roar."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Claw Attack.",
      "Teleport (Costs 2 Actions).",
      "Cast a Spell (Costs 3 Actions)."
    ],
    "spellcasting": true,
    "details": "HP Dice: (19d10 + 95). "
  },
  {
    "id": 26,
    "name": "Animated Armor",
    "type": "Medium construct",
    "alignment": "unaligned",
    "ac": 18,
    "hp": 33,
    "speed": "25 ft.",
    "attributes": {
      "str": 14,
      "dex": 11,
      "con": 13,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison, Psychic",
    "condition_imm": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    "senses": "Blindsight 60 ft.,  Passive Perception 6",
    "languages": "--",
    "cr": "1",
    "features": [
      "Antimagic Susceptibility.",
      "False Appearance."
    ],
    "actions": [
      "Multiattack.",
      "Slam."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 6). "
  },
  {
    "id": 27,
    "name": "Ankheg",
    "type": "Large monstrosity",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 39,
    "speed": "30 ft., burrow 10 ft.",
    "attributes": {
      "str": 17,
      "dex": 11,
      "con": 13,
      "int": 1,
      "wis": 13,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "2",
    "features": [],
    "actions": [
      "Bite.",
      "Acid Spray (Recharge 6)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 6). "
  },
  {
    "id": 28,
    "name": "Ankylosaurus",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 15,
    "hp": 68,
    "speed": "30 ft.",
    "attributes": {
      "str": 19,
      "dex": 11,
      "con": 15,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "--",
    "cr": "3",
    "features": [],
    "actions": [
      "Tail."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d12 + 16). "
  },
  {
    "id": 29,
    "name": "Ape",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 19,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 16,
      "dex": 14,
      "con": 14,
      "int": 6,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Athletics +5, Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1/2",
    "features": [],
    "actions": [
      "Multiattack.",
      "Fist.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8 + 6). "
  },
  {
    "id": 30,
    "name": "Archmage",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 12,
    "hp": 99,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 14,
      "con": 12,
      "int": 20,
      "wis": 15,
      "cha": 16
    },
    "saves": {
      "int": 9,
      "wis": 6
    },
    "skills": "Arcana +13, History +13",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Any six languages",
    "cr": "12",
    "features": [
      "Magic Resistance.",
      "Spellcasting.",
      "Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp",
      "1st level (4 slots): detect magic, identify, mage armor, magic missile",
      "2nd level (3 slots): detect thoughts, mirror image, misty step",
      "3rd level (3 slots): counterspell, fly, lightning bolt",
      "4th level (3 slots): banishment, fire shield, stoneskin",
      "5th level (3 slots): cone of cold, scrying, wall of force",
      "6th level (1 slot): globe of invulnerability",
      "7th level (1 slot): teleport",
      "8th level (1 slot): mind blank",
      "9th level (1 slot): time stop",
      "*The archmage casts mind blank, stoneskin and mage armor spells on itself before combat."
    ],
    "actions": [
      "Dagger."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (18d8 + 18). "
  },
  {
    "id": 31,
    "name": "Assassin",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 15,
    "hp": 78,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 16,
      "con": 14,
      "int": 13,
      "wis": 11,
      "cha": 10
    },
    "saves": {
      "dex": 6,
      "int": 4
    },
    "skills": "Acrobatics +6, Deception +3, Perception +3, Stealth +9",
    "damage_res": "Poison",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Thieves' cant plus any two languages",
    "cr": "8",
    "features": [
      "Assassinate.",
      "Evasion.",
      "Sneak Attack."
    ],
    "actions": [
      "Multiattack.",
      "Shortsword.",
      "Light Crossbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d8 + 24). "
  },
  {
    "id": 32,
    "name": "Awakened Shrub",
    "type": "Small plant",
    "alignment": "unaligned",
    "ac": 9,
    "hp": 10,
    "speed": "20 ft.",
    "attributes": {
      "str": 3,
      "dex": 8,
      "con": 11,
      "int": 10,
      "wis": 10,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "Piercing",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "One language known by its creator",
    "cr": "0",
    "features": [
      "False Appearance."
    ],
    "actions": [
      "Rake."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d6). "
  },
  {
    "id": 33,
    "name": "Awakened Tree",
    "type": "Huge plant",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 59,
    "speed": "20 ft.",
    "attributes": {
      "str": 19,
      "dex": 6,
      "con": 15,
      "int": 10,
      "wis": 10,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "One language known by its creator",
    "cr": "2",
    "features": [
      "False Appearance."
    ],
    "actions": [
      "Slam."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d12 + 14). "
  },
  {
    "id": 34,
    "name": "Axe Beak",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "50 ft.",
    "attributes": {
      "str": 14,
      "dex": 12,
      "con": 12,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Beak."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 35,
    "name": "Azer",
    "type": "Medium elemental",
    "alignment": "lawful neutral",
    "ac": 17,
    "hp": 39,
    "speed": "30 ft.",
    "attributes": {
      "str": 17,
      "dex": 12,
      "con": 15,
      "int": 12,
      "wis": 13,
      "cha": 10
    },
    "saves": {
      "con": 4
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Passive Perception 11",
    "languages": "Ignan",
    "cr": "2",
    "features": [
      "Heated Body.",
      "Heated Weapons.",
      "Illumination."
    ],
    "actions": [
      "Warhammer."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 12). "
  },
  {
    "id": 36,
    "name": "Baboon",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 8,
      "dex": 14,
      "con": 11,
      "int": 4,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "--",
    "cr": "0",
    "features": [
      "Pack Tactics."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d6). "
  },
  {
    "id": 37,
    "name": "Badger",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 3,
    "speed": "20 ft., burrow 5 ft.",
    "attributes": {
      "str": 4,
      "dex": 11,
      "con": 12,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Smell."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 + 1). "
  },
  {
    "id": 38,
    "name": "Balor",
    "type": "Huge fiend",
    "alignment": "chaotic evil",
    "ac": 19,
    "hp": 262,
    "speed": "40 ft., fly 80 ft.",
    "attributes": {
      "str": 26,
      "dex": 15,
      "con": 22,
      "int": 20,
      "wis": 16,
      "cha": 22
    },
    "saves": {
      "str": 14,
      "con": 12,
      "wis": 9,
      "cha": 12
    },
    "skills": "",
    "damage_res": "Cold, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 13",
    "languages": "Abyssal, Telepathy 120 ft.",
    "cr": "19",
    "features": [
      "Death Throes.",
      "Fire Aura.",
      "Magic Resistance.",
      "Magic Weapons."
    ],
    "actions": [
      "Multiattack.",
      "Longsword.",
      "Whip.",
      "Teleport."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (21d12 + 126). "
  },
  {
    "id": 39,
    "name": "Bandit",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 12,
    "hp": 11,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 12,
      "con": 12,
      "int": 10,
      "wis": 10,
      "cha": 10
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any one language (usually Common)",
    "cr": "1/8",
    "features": [],
    "actions": [
      "Scimitar.",
      "Light Crossbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 40,
    "name": "Bandit Captain",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 15,
    "hp": 65,
    "speed": "30 ft.",
    "attributes": {
      "str": 15,
      "dex": 16,
      "con": 14,
      "int": 14,
      "wis": 11,
      "cha": 14
    },
    "saves": {
      "str": 4,
      "dex": 5,
      "wis": 2
    },
    "skills": "Athletics +4, Deception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any two languages",
    "cr": "2",
    "features": [],
    "actions": [
      "Multiattack.",
      "Scimitar.",
      "Dagger."
    ],
    "bonus_actions": [],
    "reactions": [
      "Parry."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d8 + 20). "
  },
  {
    "id": 41,
    "name": "Banshee",
    "type": "Medium undead",
    "alignment": "chaotic evil",
    "ac": 12,
    "hp": 58,
    "speed": "40 ft., (hover)\r\n                    , walking 0 ft.",
    "attributes": {
      "str": 1,
      "dex": 14,
      "con": 10,
      "int": 12,
      "wis": 11,
      "cha": 17
    },
    "saves": {
      "wis": 2,
      "cha": 5
    },
    "skills": "",
    "damage_res": "Acid, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Cold, Necrotic, Poison",
    "condition_imm": "Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Common, Elvish",
    "cr": "4",
    "features": [
      "Detect Life.",
      "Incorporeal Movement."
    ],
    "actions": [
      "Corrupting Touch.",
      "Horrifying Visage.",
      "Wail (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (13d8). "
  },
  {
    "id": 42,
    "name": "Barbed Devil",
    "type": "Medium fiend",
    "alignment": "lawful evil",
    "ac": 15,
    "hp": 110,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 17,
      "con": 18,
      "int": 12,
      "wis": 14,
      "cha": 14
    },
    "saves": {
      "str": 6,
      "con": 7,
      "wis": 5,
      "cha": 5
    },
    "skills": "Deception +5, Insight +5, Perception +8",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 18",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "5",
    "features": [
      "Barbed Hide.",
      "Devil's Sight.",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Claw.",
      "Tail.",
      "Hurl Flame."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (13d8 + 52). "
  },
  {
    "id": 43,
    "name": "Basilisk",
    "type": "Medium monstrosity",
    "alignment": "unaligned",
    "ac": 15,
    "hp": 52,
    "speed": "20 ft.",
    "attributes": {
      "str": 16,
      "dex": 8,
      "con": 15,
      "int": 2,
      "wis": 8,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "3",
    "features": [
      "Petrifying Gaze.",
      "A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again.",
      "If it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 + 16). "
  },
  {
    "id": 44,
    "name": "Bat",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 1,
    "speed": "5 ft., fly 30 ft.",
    "attributes": {
      "str": 2,
      "dex": 15,
      "con": 8,
      "int": 2,
      "wis": 12,
      "cha": 4
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 60 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "0",
    "features": [
      "Echolocation.",
      "Keen Hearing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 45,
    "name": "Bearded Devil",
    "type": "Medium fiend",
    "alignment": "lawful evil",
    "ac": 13,
    "hp": 52,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 15,
      "con": 15,
      "int": 9,
      "wis": 11,
      "cha": 11
    },
    "saves": {
      "str": 5,
      "con": 4,
      "wis": 2
    },
    "skills": "",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 10",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "3",
    "features": [
      "Devil's Sight.",
      "Magic Resistance.",
      "Steadfast."
    ],
    "actions": [
      "Multiattack.",
      "Beard.",
      "Glaive."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 + 16). "
  },
  {
    "id": 46,
    "name": "Behir",
    "type": "Huge monstrosity",
    "alignment": "neutral evil",
    "ac": 17,
    "hp": 168,
    "speed": "50 ft., climb 40 ft.",
    "attributes": {
      "str": 23,
      "dex": 16,
      "con": 18,
      "int": 7,
      "wis": 14,
      "cha": 12
    },
    "saves": {},
    "skills": "Perception +6, Stealth +7",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Darkvision 90 ft.,  Passive Perception 16",
    "languages": "Draconic",
    "cr": "11",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Constrict.",
      "Lightning Breath (Recharge 5\u20136).",
      "Swallow.",
      "If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d12 + 64). "
  },
  {
    "id": 47,
    "name": "Berserker",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 13,
    "hp": 67,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 12,
      "con": 17,
      "int": 9,
      "wis": 11,
      "cha": 9
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any one language (usually Common)",
    "cr": "2",
    "features": [
      "Reckless."
    ],
    "actions": [
      "Greataxe."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d8 + 27). "
  },
  {
    "id": 48,
    "name": "Black Bear",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "40 ft., climb 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 10,
      "con": 14,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Keen Smell."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8 + 6). "
  },
  {
    "id": 49,
    "name": "Black Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "chaotic evil",
    "ac": 17,
    "hp": 33,
    "speed": "30 ft., fly 60 ft., swim 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 14,
      "con": 13,
      "int": 10,
      "wis": 11,
      "cha": 13
    },
    "saves": {
      "dex": 4,
      "con": 3,
      "wis": 2,
      "cha": 3
    },
    "skills": "Perception +4, Stealth +4",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "2",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Bite.",
      "Acid Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 6). "
  },
  {
    "id": 50,
    "name": "Black Pudding",
    "type": "Large ooze",
    "alignment": "unaligned",
    "ac": 7,
    "hp": 85,
    "speed": "20 ft., climb 20 ft.",
    "attributes": {
      "str": 16,
      "dex": 5,
      "con": 16,
      "int": 1,
      "wis": 6,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Acid, Cold, Lightning, Slashing",
    "condition_imm": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
    "senses": "Blindsight 60 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "4",
    "features": [
      "Amorphous.",
      "Corrosive Form.",
      "Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage.",
      "The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
      "Spider Climb."
    ],
    "actions": [
      "Pseudopod."
    ],
    "bonus_actions": [],
    "reactions": [
      "Split."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d10 + 30). "
  },
  {
    "id": 51,
    "name": "Blink Dog",
    "type": "Medium fey",
    "alignment": "lawful good",
    "ac": 13,
    "hp": 22,
    "speed": "40 ft.",
    "attributes": {
      "str": 12,
      "dex": 17,
      "con": 12,
      "int": 10,
      "wis": 13,
      "cha": 11
    },
    "saves": {},
    "skills": "Perception +3, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Blink Dog  Understands Sylvan but can't speak it",
    "cr": "1/4",
    "features": [
      "Keen Hearing and Smell."
    ],
    "actions": [
      "Bite.",
      "Teleport (Recharge 4\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8 + 4). "
  },
  {
    "id": 52,
    "name": "Blood Hawk",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 7,
    "speed": "10 ft., fly 60 ft.",
    "attributes": {
      "str": 6,
      "dex": 14,
      "con": 10,
      "int": 3,
      "wis": 14,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "--",
    "cr": "1/8",
    "features": [
      "Keen Sight.",
      "Pack Tactics."
    ],
    "actions": [
      "Beak."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d6). "
  },
  {
    "id": 53,
    "name": "Blue Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "lawful evil",
    "ac": 17,
    "hp": 52,
    "speed": "30 ft., burrow 15 ft., fly 60 ft.",
    "attributes": {
      "str": 17,
      "dex": 10,
      "con": 15,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "saves": {
      "dex": 2,
      "con": 4,
      "wis": 2,
      "cha": 4
    },
    "skills": "Perception +4, Stealth +2",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "3",
    "features": [],
    "actions": [
      "Bite.",
      "Lightning Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 + 16). "
  },
  {
    "id": 54,
    "name": "Boar",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 11,
    "speed": "40 ft.",
    "attributes": {
      "str": 13,
      "dex": 11,
      "con": 12,
      "int": 2,
      "wis": 9,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 9",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Charge.",
      "Relentless (Recharges after a Short or Long Rest)."
    ],
    "actions": [
      "Tusk."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 55,
    "name": "Bone Devil",
    "type": "Large fiend",
    "alignment": "lawful evil",
    "ac": 19,
    "hp": 142,
    "speed": "40 ft., fly 40 ft.",
    "attributes": {
      "str": 18,
      "dex": 16,
      "con": 18,
      "int": 13,
      "wis": 14,
      "cha": 16
    },
    "saves": {
      "int": 5,
      "wis": 6,
      "cha": 7
    },
    "skills": "Deception +7, Insight +6",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 12",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "9",
    "features": [
      "Devil's Sight.",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Claw.",
      "Sting."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d10 + 60). "
  },
  {
    "id": 56,
    "name": "Brass Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "chaotic good",
    "ac": 16,
    "hp": 16,
    "speed": "30 ft., burrow 15 ft., fly 60 ft.",
    "attributes": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 10,
      "wis": 11,
      "cha": 13
    },
    "saves": {
      "dex": 2,
      "con": 3,
      "wis": 2,
      "cha": 3
    },
    "skills": "Perception +4, Stealth +2",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "1",
    "features": [],
    "actions": [
      "Bite.",
      "Breath Weapons (Recharge 5\u20136).",
      "Fire Breath.",
      "Sleep Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8 + 3). "
  },
  {
    "id": 57,
    "name": "Bronze Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "lawful good",
    "ac": 17,
    "hp": 32,
    "speed": "30 ft., fly 60 ft., swim 30 ft.",
    "attributes": {
      "str": 17,
      "dex": 10,
      "con": 15,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "saves": {
      "dex": 2,
      "con": 4,
      "wis": 2,
      "cha": 4
    },
    "skills": "Perception +4, Stealth +2",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "2",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Bite.",
      "Breath Weapons (Recharge 5\u20136).",
      "Lightning Breath.",
      "Repulsion Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8 + 10). "
  },
  {
    "id": 58,
    "name": "Brown Bear",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 34,
    "speed": "40 ft., climb 30 ft.",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 16,
      "int": 2,
      "wis": 13,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1",
    "features": [
      "Keen Smell."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d10 + 12). "
  },
  {
    "id": 59,
    "name": "Bugbear",
    "type": "Medium humanoid",
    "alignment": "chaotic evil",
    "ac": 16,
    "hp": 27,
    "speed": "30 ft.",
    "attributes": {
      "str": 15,
      "dex": 14,
      "con": 13,
      "int": 8,
      "wis": 11,
      "cha": 9
    },
    "saves": {},
    "skills": "Stealth +6, Survival +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Common, Goblin",
    "cr": "1",
    "features": [
      "Brute.",
      "Surprise Attack."
    ],
    "actions": [
      "Morningstar.",
      "Javelin."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8 + 5). "
  },
  {
    "id": 60,
    "name": "Bulette",
    "type": "Large monstrosity",
    "alignment": "unaligned",
    "ac": 17,
    "hp": 94,
    "speed": "40 ft., burrow 40 ft.",
    "attributes": {
      "str": 19,
      "dex": 11,
      "con": 21,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 16",
    "languages": "--",
    "cr": "5",
    "features": [
      "Standing Leap."
    ],
    "actions": [
      "Bite.",
      "Deadly Leap."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d10 + 45). "
  },
  {
    "id": 61,
    "name": "Camel",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 9,
    "hp": 15,
    "speed": "50 ft.",
    "attributes": {
      "str": 16,
      "dex": 8,
      "con": 14,
      "int": 2,
      "wis": 8,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 9",
    "languages": "--",
    "cr": "1/8",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d10 + 4). "
  },
  {
    "id": 62,
    "name": "Cat",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 2,
    "speed": "40 ft., climb 30 ft.",
    "attributes": {
      "str": 3,
      "dex": 15,
      "con": 10,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Smell."
    ],
    "actions": [
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4). "
  },
  {
    "id": 63,
    "name": "Centaur",
    "type": "Large monstrosity",
    "alignment": "neutral good",
    "ac": 12,
    "hp": 45,
    "speed": "50 ft.",
    "attributes": {
      "str": 18,
      "dex": 14,
      "con": 14,
      "int": 9,
      "wis": 13,
      "cha": 11
    },
    "saves": {},
    "skills": "Athletics +6, Perception +3, Survival +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Elvish, Sylvan",
    "cr": "2",
    "features": [
      "Charge."
    ],
    "actions": [
      "Multiattack.",
      "Pike.",
      "Hooves.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 12). "
  },
  {
    "id": 64,
    "name": "Chain Devil",
    "type": "Medium fiend",
    "alignment": "lawful evil",
    "ac": 16,
    "hp": 85,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 18,
      "int": 11,
      "wis": 12,
      "cha": 14
    },
    "saves": {
      "con": 7,
      "wis": 4,
      "cha": 5
    },
    "skills": "",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 11",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "8",
    "features": [
      "Devil's Sight.",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Chain.",
      "Animate Chains (Recharges after a Short or Long Rest).",
      "Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
    ],
    "bonus_actions": [],
    "reactions": [
      "Unnerving Mask."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d8 + 40). "
  },
  {
    "id": 65,
    "name": "Chimera",
    "type": "Large monstrosity",
    "alignment": "chaotic evil",
    "ac": 14,
    "hp": 114,
    "speed": "30 ft., fly 60 ft.",
    "attributes": {
      "str": 19,
      "dex": 11,
      "con": 19,
      "int": 3,
      "wis": 14,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +8",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 18",
    "languages": "Understands Draconic but can't speak  it",
    "cr": "6",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Horns.",
      "Claws.",
      "Fire Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 48). "
  },
  {
    "id": 66,
    "name": "Chuul",
    "type": "Large aberration",
    "alignment": "chaotic evil",
    "ac": 16,
    "hp": 93,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 16,
      "int": 5,
      "wis": 11,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Understands Deep Speech but can't speak",
    "cr": "4",
    "features": [
      "Amphibious.",
      "Sense Magic."
    ],
    "actions": [
      "Multiattack.",
      "Pincer.",
      "Tentacles."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d10 + 33). "
  },
  {
    "id": 67,
    "name": "Clay Golem",
    "type": "Large construct",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 133,
    "speed": "20 ft.",
    "attributes": {
      "str": 20,
      "dex": 9,
      "con": 18,
      "int": 3,
      "wis": 8,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Acid, Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "Understands the languages of its creator but can't speak",
    "cr": "9",
    "features": [
      "Acid Absorption.",
      "Berserk.",
      "Immutable Form.",
      "Magic Resistance.",
      "Magic Weapons."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Haste (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (14d10 + 56). "
  },
  {
    "id": 68,
    "name": "Cloaker",
    "type": "Large aberration",
    "alignment": "chaotic neutral",
    "ac": 14,
    "hp": 78,
    "speed": "10 ft., fly 40 ft.",
    "attributes": {
      "str": 17,
      "dex": 15,
      "con": 12,
      "int": 13,
      "wis": 12,
      "cha": 14
    },
    "saves": {},
    "skills": "Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "Deep Speech, Undercommon",
    "cr": "8",
    "features": [
      "Damage Transfer.",
      "False Appearance.",
      "Light Sensitivity."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Tail.",
      "Moan.",
      "Phantasms (Recharges after a Short or Long Rest).",
      "Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.",
      "A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 12). "
  },
  {
    "id": 69,
    "name": "Cloud Giant",
    "type": "Huge giant",
    "alignment": "neutral",
    "ac": 14,
    "hp": 200,
    "speed": "40 ft.",
    "attributes": {
      "str": 27,
      "dex": 10,
      "con": 22,
      "int": 12,
      "wis": 16,
      "cha": 16
    },
    "saves": {
      "con": 10,
      "wis": 7,
      "cha": 7
    },
    "skills": "Insight +7, Perception +7",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 17",
    "languages": "Common, Giant",
    "cr": "9",
    "features": [
      "Keen Smell.",
      "Innate Spellcasting.",
      "At will: detect magic, fog cloud, light",
      "3/day each: feather fall, fly, misty step, telekinesis",
      "1/day each: control weather, gaseous form"
    ],
    "actions": [
      "Multiattack.",
      "Morningstar.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (16d12 + 96). "
  },
  {
    "id": 70,
    "name": "Cockatrice",
    "type": "Small monstrosity",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 27,
    "speed": "20 ft., fly 40 ft.",
    "attributes": {
      "str": 6,
      "dex": 12,
      "con": 12,
      "int": 2,
      "wis": 13,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "1/2",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d6 + 6). "
  },
  {
    "id": 71,
    "name": "Commoner",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 10,
    "hp": 4,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 10,
      "con": 10,
      "int": 10,
      "wis": 10,
      "cha": 10
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any one language (usually Common)",
    "cr": "0",
    "features": [],
    "actions": [
      "Club."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d8). "
  },
  {
    "id": 72,
    "name": "Constrictor Snake",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 13,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 14,
      "con": 12,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Bite.",
      "Constrict."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d10 + 2). "
  },
  {
    "id": 73,
    "name": "Copper Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "chaotic good",
    "ac": 16,
    "hp": 22,
    "speed": "30 ft., climb 30 ft., fly 60 ft.",
    "attributes": {
      "str": 15,
      "dex": 12,
      "con": 13,
      "int": 14,
      "wis": 11,
      "cha": 13
    },
    "saves": {
      "dex": 3,
      "con": 3,
      "wis": 2,
      "cha": 3
    },
    "skills": "Perception +4, Stealth +3",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "1",
    "features": [],
    "actions": [
      "Bite.",
      "Breath Weapons (Recharge 5\u20136).",
      "Acid Breath.",
      "Slowing Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8 + 4). "
  },
  {
    "id": 74,
    "name": "Couatl",
    "type": "Medium celestial",
    "alignment": "lawful good",
    "ac": 19,
    "hp": 97,
    "speed": "30 ft., fly 90 ft.",
    "attributes": {
      "str": 16,
      "dex": 20,
      "con": 17,
      "int": 18,
      "wis": 20,
      "cha": 18
    },
    "saves": {
      "con": 5,
      "wis": 7,
      "cha": 6
    },
    "skills": "",
    "damage_res": "Radiant",
    "damage_imm": "Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "condition_imm": "",
    "senses": "Truesight 120 ft.,  Passive Perception 15",
    "languages": "All, Telepathy 120 ft.",
    "cr": "4",
    "features": [
      "Innate Spellcasting.",
      "At will: detect evil and good, detect magic, detect thoughts",
      "3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield",
      "1/day each: dream, greater restoration, scrying",
      "Magic Weapons.",
      "Shielded Mind."
    ],
    "actions": [
      "Bite.",
      "Constrict.",
      "Change Shape.",
      "In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (13d8 + 39). "
  },
  {
    "id": 75,
    "name": "Crab",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 2,
    "speed": "20 ft., swim 20 ft.",
    "attributes": {
      "str": 2,
      "dex": 11,
      "con": 10,
      "int": 1,
      "wis": 8,
      "cha": 2
    },
    "saves": {},
    "skills": "Stealth +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 30 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "0",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4). "
  },
  {
    "id": 76,
    "name": "Crocodile",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 19,
    "speed": "20 ft., swim 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "Stealth +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Hold Breath."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 77,
    "name": "Cult Fanatic",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 13,
    "hp": 33,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 14,
      "con": 12,
      "int": 10,
      "wis": 13,
      "cha": 14
    },
    "saves": {},
    "skills": "Deception +4, Persuasion +4, Religion +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "Any one language (usually Common)",
    "cr": "2",
    "features": [
      "Dark Devotion.",
      "Spellcasting.",
      "Cantrips (at will): light, sacred flame, thaumaturgy",
      "1st level (4 slots): command, inflict wounds, shield of faith",
      "2nd level (3 slots): hold person, spiritual weapon"
    ],
    "actions": [
      "Multiattack.",
      "Dagger."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (6d8 + 6). "
  },
  {
    "id": 78,
    "name": "Cultist",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 12,
    "hp": 9,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 12,
      "con": 10,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "Deception +2, Religion +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any one language (usually Common)",
    "cr": "1/8",
    "features": [
      "Dark Devotion."
    ],
    "actions": [
      "Scimitar."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8). "
  },
  {
    "id": 79,
    "name": "Cyclops",
    "type": "Huge giant",
    "alignment": "chaotic neutral",
    "ac": 14,
    "hp": 138,
    "speed": "30 ft.",
    "attributes": {
      "str": 22,
      "dex": 11,
      "con": 20,
      "int": 8,
      "wis": 6,
      "cha": 10
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 8",
    "languages": "Giant",
    "cr": "6",
    "features": [
      "Poor Depth Perception."
    ],
    "actions": [
      "Multiattack.",
      "Greatclub.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d12 + 60). "
  },
  {
    "id": 80,
    "name": "Darkmantle",
    "type": "Small monstrosity",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 22,
    "speed": "10 ft., fly 30 ft.",
    "attributes": {
      "str": 16,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Echolocation.",
      "False Appearance."
    ],
    "actions": [
      "Crush.",
      "While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.",
      "A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.",
      "Darkness Aura (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d6 + 5). "
  },
  {
    "id": 81,
    "name": "Death Dog",
    "type": "Medium monstrosity",
    "alignment": "neutral evil",
    "ac": 12,
    "hp": 39,
    "speed": "40 ft.",
    "attributes": {
      "str": 15,
      "dex": 14,
      "con": 14,
      "int": 3,
      "wis": 13,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +5, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 15",
    "languages": "--",
    "cr": "1",
    "features": [
      "Two-Headed."
    ],
    "actions": [
      "Multiattack.",
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 12). "
  },
  {
    "id": 82,
    "name": "Deep Gnome (Svirfneblin)",
    "type": "Small humanoid",
    "alignment": "neutral good",
    "ac": 15,
    "hp": 16,
    "speed": "20 ft.",
    "attributes": {
      "str": 15,
      "dex": 14,
      "con": 14,
      "int": 12,
      "wis": 10,
      "cha": 9
    },
    "saves": {},
    "skills": "Investigation +3, Perception +2, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 12",
    "languages": "Gnomish, Terran, Undercommon",
    "cr": "1/2",
    "features": [
      "Stone Camouflage.",
      "Gnome Cunning.",
      "Innate Spellcasting.",
      "At will: nondetection (self only)",
      "1/day each: blindness/deafness, blur, disguise self"
    ],
    "actions": [
      "War Pick.",
      "Poisoned Dart."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (3d6 + 6). "
  },
  {
    "id": 83,
    "name": "Deer",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 4,
    "speed": "50 ft.",
    "attributes": {
      "str": 11,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 14,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "--",
    "cr": "0",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d8). "
  },
  {
    "id": 84,
    "name": "Deva",
    "type": "Medium celestial",
    "alignment": "lawful good",
    "ac": 17,
    "hp": 136,
    "speed": "30 ft., fly 90 ft.",
    "attributes": {
      "str": 18,
      "dex": 18,
      "con": 18,
      "int": 17,
      "wis": 20,
      "cha": 20
    },
    "saves": {
      "wis": 9,
      "cha": 9
    },
    "skills": "Insight +9, Perception +9",
    "damage_res": "Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "",
    "condition_imm": "Charmed, Exhaustion, Frightened",
    "senses": "Darkvision 120 ft.,  Passive Perception 19",
    "languages": "All, Telepathy 120 ft.",
    "cr": "10",
    "features": [
      "Angelic Weapons.",
      "Innate Spellcasting.",
      "At will: detect evil and good",
      "1/day each: commune, raise dead",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Mace.",
      "Healing Touch (3/Day).",
      "Change Shape.",
      "In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (16d8 + 64). "
  },
  {
    "id": 85,
    "name": "Dire Wolf",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 37,
    "speed": "50 ft.",
    "attributes": {
      "str": 17,
      "dex": 15,
      "con": 15,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1",
    "features": [
      "Keen Hearing and Smell.",
      "Pack Tactics."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d10 + 10). "
  },
  {
    "id": 86,
    "name": "Djinni",
    "type": "Large elemental",
    "alignment": "chaotic good",
    "ac": 17,
    "hp": 161,
    "speed": "30 ft., fly 90 ft.",
    "attributes": {
      "str": 21,
      "dex": 15,
      "con": 22,
      "int": 15,
      "wis": 16,
      "cha": 20
    },
    "saves": {
      "dex": 6,
      "wis": 7,
      "cha": 9
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Lightning, Thunder",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 13",
    "languages": "Auran",
    "cr": "11",
    "features": [
      "Elemental Demise.",
      "Innate Spellcasting.",
      "At will: detect evil and good, detect magic, thunderwave",
      "3/day each: create food and water (can create wine instead of water) , tongues, wind walk",
      "1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift"
    ],
    "actions": [
      "Multiattack.",
      "Scimitar.",
      "Create Whirlwind.",
      "A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (14d10 + 84). "
  },
  {
    "id": 87,
    "name": "Doppelganger",
    "type": "Medium monstrosity",
    "alignment": "neutral",
    "ac": 14,
    "hp": 52,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 18,
      "con": 14,
      "int": 11,
      "wis": 12,
      "cha": 14
    },
    "saves": {},
    "skills": "Deception +6, Insight +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Charmed",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "Common",
    "cr": "3",
    "features": [
      "Shapechanger.",
      "Ambusher.",
      "Surprise Attack."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Read Thoughts."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 + 16). "
  },
  {
    "id": 88,
    "name": "Draft Horse",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 19,
    "speed": "40 ft.",
    "attributes": {
      "str": 18,
      "dex": 10,
      "con": 12,
      "int": 2,
      "wis": 11,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 89,
    "name": "Dragon Turtle",
    "type": "Gargantuan dragon",
    "alignment": "neutral",
    "ac": 20,
    "hp": 341,
    "speed": "20 ft., swim 40 ft.",
    "attributes": {
      "str": 25,
      "dex": 10,
      "con": 20,
      "int": 10,
      "wis": 12,
      "cha": 12
    },
    "saves": {
      "dex": 6,
      "con": 11,
      "wis": 7
    },
    "skills": "",
    "damage_res": "Fire",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 11",
    "languages": "Aquan, Draconic",
    "cr": "17",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail.",
      "Steam Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (22d20 + 110). "
  },
  {
    "id": 90,
    "name": "Dretch",
    "type": "Small fiend",
    "alignment": "chaotic evil",
    "ac": 11,
    "hp": 18,
    "speed": "20 ft.",
    "attributes": {
      "str": 11,
      "dex": 11,
      "con": 12,
      "int": 5,
      "wis": 8,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "Cold, Fire, Lightning",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "Abyssal, Telepathy 60 ft.",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws.",
      "Fetid Cloud (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d6 + 4). "
  },
  {
    "id": 91,
    "name": "Drider",
    "type": "Large monstrosity",
    "alignment": "chaotic evil",
    "ac": 19,
    "hp": 123,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 16,
      "dex": 16,
      "con": 18,
      "int": 13,
      "wis": 14,
      "cha": 12
    },
    "saves": {},
    "skills": "Perception +5, Stealth +9",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 15",
    "languages": "Elvish, Undercommon",
    "cr": "6",
    "features": [
      "Fey Ancestry.",
      "Innate Spellcasting.",
      "At will: dancing lights",
      "1/day each: darkness, faerie fire",
      "Spider Climb.",
      "Sunlight Sensitivity.",
      "Web Walker."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Longsword.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (13d10 + 52). "
  },
  {
    "id": 92,
    "name": "Drow",
    "type": "Medium humanoid",
    "alignment": "neutral evil",
    "ac": 15,
    "hp": 13,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 14,
      "con": 10,
      "int": 11,
      "wis": 11,
      "cha": 12
    },
    "saves": {},
    "skills": "Perception +2, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 12",
    "languages": "Elvish, Undercommon",
    "cr": "1/4",
    "features": [
      "Fey Ancestry.",
      "Innate Spellcasting.",
      "At will: dancing lights",
      "1/day each: darkness, faerie fire",
      "Sunlight Sensitivity."
    ],
    "actions": [
      "Shortsword.",
      "Hand Crossbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (3d8). "
  },
  {
    "id": 93,
    "name": "Druid",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 11,
    "hp": 27,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 12,
      "con": 13,
      "int": 12,
      "wis": 15,
      "cha": 11
    },
    "saves": {},
    "skills": "Medicine +4, Nature +3, Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "Druidic plus any two languages",
    "cr": "2",
    "features": [
      "Spellcasting.",
      "Cantrips (at will): druidcraft, produce flame, shillelagh",
      "1st level (4 slots): entangle, longstrider, speak with animals, thunderwave",
      "2nd level (3 slots): animal messenger, barkskin"
    ],
    "actions": [
      "Quarterstaff."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (5d8 + 5). "
  },
  {
    "id": 94,
    "name": "Dryad",
    "type": "Medium fey",
    "alignment": "neutral",
    "ac": 11,
    "hp": 22,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 12,
      "con": 11,
      "int": 14,
      "wis": 15,
      "cha": 18
    },
    "saves": {},
    "skills": "Perception +4, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Elvish, Sylvan",
    "cr": "1",
    "features": [
      "Innate Spellcasting.",
      "At will: druidcraft",
      "3/day each: entangle, goodberry",
      "1/day each: barkskin, pass without trace, shillelagh",
      "Magic Resistance.",
      "Speak with Beasts and Plants.",
      "Tree Stride."
    ],
    "actions": [
      "Club.",
      "Fey Charm.",
      "Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.",
      "The dryad can have no more than one humanoid and up to three beasts charmed at a time."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (5d8). "
  },
  {
    "id": 95,
    "name": "Duergar",
    "type": "Medium humanoid",
    "alignment": "lawful evil",
    "ac": 16,
    "hp": 26,
    "speed": "25 ft.",
    "attributes": {
      "str": 14,
      "dex": 11,
      "con": 14,
      "int": 11,
      "wis": 10,
      "cha": 9
    },
    "saves": {},
    "skills": "",
    "damage_res": "Poison",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 10",
    "languages": "Dwarvish, Undercommon",
    "cr": "1",
    "features": [
      "Duergar Resilience.",
      "Sunlight Sensitivity."
    ],
    "actions": [
      "Enlarge (Recharges after a Short or Long Rest).",
      "War Pick.",
      "Javelin.",
      "Invisibility (Recharges after a Short or Long Rest)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8 + 8). "
  },
  {
    "id": 96,
    "name": "Dust Mephit",
    "type": "Small elemental",
    "alignment": "neutral evil",
    "ac": 12,
    "hp": 17,
    "speed": "30 ft., fly 30 ft.",
    "attributes": {
      "str": 5,
      "dex": 14,
      "con": 10,
      "int": 9,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +2, Stealth +4",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Auran, Terran",
    "cr": "1/2",
    "features": [
      "Death Burst.",
      "Innate Spellcasting."
    ],
    "actions": [
      "Claws.",
      "Blinding Breath (Recharge 6)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (5d6). "
  },
  {
    "id": 97,
    "name": "Eagle",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "10 ft., fly 60 ft.",
    "attributes": {
      "str": 6,
      "dex": 15,
      "con": 10,
      "int": 2,
      "wis": 14,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Sight."
    ],
    "actions": [
      "Talons."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d6). "
  },
  {
    "id": 98,
    "name": "Earth Elemental",
    "type": "Large elemental",
    "alignment": "neutral",
    "ac": 17,
    "hp": 126,
    "speed": "30 ft., burrow 30 ft.",
    "attributes": {
      "str": 20,
      "dex": 8,
      "con": 20,
      "int": 5,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 10",
    "languages": "Terran",
    "cr": "5",
    "features": [
      "Earth Glide.",
      "Siege Monster."
    ],
    "actions": [
      "Multiattack.",
      "Slam."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 60). "
  },
  {
    "id": 99,
    "name": "Efreeti",
    "type": "Large elemental",
    "alignment": "lawful evil",
    "ac": 17,
    "hp": 200,
    "speed": "40 ft., fly 60 ft.",
    "attributes": {
      "str": 22,
      "dex": 12,
      "con": 24,
      "int": 16,
      "wis": 15,
      "cha": 16
    },
    "saves": {
      "int": 7,
      "wis": 6,
      "cha": 7
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 12",
    "languages": "Ignan",
    "cr": "11",
    "features": [
      "Elemental Demise.",
      "Innate Spellcasting.",
      "At will: detect magic",
      "3/day: enlarge/reduce, tongues",
      "1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire"
    ],
    "actions": [
      "Multiattack.",
      "Scimitar.",
      "Hurl Flame."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (16d10 + 112). "
  },
  {
    "id": 100,
    "name": "Elephant",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 76,
    "speed": "40 ft.",
    "attributes": {
      "str": 22,
      "dex": 9,
      "con": 17,
      "int": 3,
      "wis": 11,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "4",
    "features": [
      "Trampling Charge."
    ],
    "actions": [
      "Gore.",
      "Stomp."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d12 + 24). "
  },
  {
    "id": 101,
    "name": "Elk",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 13,
    "speed": "50 ft.",
    "attributes": {
      "str": 16,
      "dex": 10,
      "con": 12,
      "int": 2,
      "wis": 10,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Charge."
    ],
    "actions": [
      "Ram.",
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d10 + 2). "
  },
  {
    "id": 102,
    "name": "Erinyes",
    "type": "Medium fiend",
    "alignment": "lawful evil",
    "ac": 18,
    "hp": 153,
    "speed": "30 ft., fly 60 ft.",
    "attributes": {
      "str": 18,
      "dex": 16,
      "con": 18,
      "int": 14,
      "wis": 14,
      "cha": 18
    },
    "saves": {
      "dex": 7,
      "con": 8,
      "wis": 6,
      "cha": 8
    },
    "skills": "",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 12",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "12",
    "features": [
      "Hellish Weapons.",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Longsword.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [
      "Parry."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (18d8 + 72). "
  },
  {
    "id": 103,
    "name": "Ettercap",
    "type": "Medium monstrosity",
    "alignment": "neutral evil",
    "ac": 13,
    "hp": 44,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 14,
      "dex": 15,
      "con": 13,
      "int": 7,
      "wis": 12,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +3, Stealth +4, Survival +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "2",
    "features": [
      "Spider Climb.",
      "Web Sense.",
      "Web Walker."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws.",
      "Web (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 + 8). "
  },
  {
    "id": 104,
    "name": "Ettin",
    "type": "Large giant",
    "alignment": "chaotic evil",
    "ac": 12,
    "hp": 85,
    "speed": "40 ft.",
    "attributes": {
      "str": 21,
      "dex": 8,
      "con": 17,
      "int": 6,
      "wis": 10,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Giant, Orc",
    "cr": "4",
    "features": [
      "Two Heads.",
      "Wakeful."
    ],
    "actions": [
      "Multiattack.",
      "Battleaxe.",
      "Morningstar."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d10 + 30). "
  },
  {
    "id": 105,
    "name": "Fire Elemental",
    "type": "Large elemental",
    "alignment": "neutral",
    "ac": 13,
    "hp": 102,
    "speed": "50 ft.",
    "attributes": {
      "str": 10,
      "dex": 17,
      "con": 16,
      "int": 6,
      "wis": 10,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Ignan",
    "cr": "5",
    "features": [
      "Fire Form.",
      "Illumination.",
      "Water Susceptibility."
    ],
    "actions": [
      "Multiattack.",
      "Touch."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 36). "
  },
  {
    "id": 106,
    "name": "Fire Giant",
    "type": "Huge giant",
    "alignment": "lawful evil",
    "ac": 18,
    "hp": 162,
    "speed": "30 ft.",
    "attributes": {
      "str": 25,
      "dex": 9,
      "con": 23,
      "int": 10,
      "wis": 14,
      "cha": 13
    },
    "saves": {
      "dex": 3,
      "con": 10,
      "cha": 5
    },
    "skills": "Athletics +11, Perception +6",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Passive Perception 16",
    "languages": "Giant",
    "cr": "9",
    "features": [],
    "actions": [
      "Multiattack.",
      "Greatsword.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (13d12 + 78). "
  },
  {
    "id": 107,
    "name": "Flameskull",
    "type": "Tiny undead",
    "alignment": "neutral evil",
    "ac": 13,
    "hp": 40,
    "speed": "0 ft., fly 40 ft. (hover)",
    "attributes": {
      "str": 1,
      "dex": 17,
      "con": 14,
      "int": 16,
      "wis": 10,
      "cha": 11
    },
    "saves": {},
    "skills": "Arcana +5, Perception +2",
    "damage_res": "Lightning, Necrotic, Piercing",
    "damage_imm": "Cold, Fire, Poison",
    "condition_imm": "Charmed, Frightened, Paralyzed, Poisoned, Prone",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Common",
    "cr": "4",
    "features": [
      "Illumination.",
      "Magic Resistance.",
      "Rejuvenation.",
      "Spellcasting."
    ],
    "actions": [
      "Multiattack.",
      "Fire Ray."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (9d4 + 18). "
  },
  {
    "id": 108,
    "name": "Flesh Golem",
    "type": "Medium construct",
    "alignment": "neutral",
    "ac": 9,
    "hp": 93,
    "speed": "30 ft.",
    "attributes": {
      "str": 19,
      "dex": 9,
      "con": 18,
      "int": 6,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Lightning, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Understands the languages of its creator but can't speak",
    "cr": "5",
    "features": [
      "Berserk.",
      "The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again.",
      "Aversion of Fire.",
      "Immutable Form.",
      "Lightning Absorption.",
      "Magic Resistance.",
      "Magic Weapons."
    ],
    "actions": [
      "Multiattack.",
      "Slam."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d8 + 44). "
  },
  {
    "id": 109,
    "name": "Flying Snake",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 5,
    "speed": "30 ft., fly 60 ft., swim 30 ft.",
    "attributes": {
      "str": 4,
      "dex": 18,
      "con": 11,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "1/8",
    "features": [
      "Flyby."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d4). "
  },
  {
    "id": 110,
    "name": "Flying Sword",
    "type": "Small construct",
    "alignment": "unaligned",
    "ac": 17,
    "hp": 17,
    "speed": "0 ft., fly 50 ft. (hover)",
    "attributes": {
      "str": 12,
      "dex": 15,
      "con": 11,
      "int": 1,
      "wis": 5,
      "cha": 1
    },
    "saves": {
      "dex": 4
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison, Psychic",
    "condition_imm": "Blinded, Charmed, Deafened, Frightened, Paralyzed, Petrified, Poisoned",
    "senses": "Blindsight 60 ft.,  Passive Perception 7",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Antimagic Susceptibility.",
      "False Appearance."
    ],
    "actions": [
      "Longsword."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d6). "
  },
  {
    "id": 111,
    "name": "Frog",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 1,
    "speed": "20 ft., swim 20 ft.",
    "attributes": {
      "str": 1,
      "dex": 13,
      "con": 8,
      "int": 1,
      "wis": 8,
      "cha": 3
    },
    "saves": {},
    "skills": "Perception +1, Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "0",
    "features": [
      "Amphibious.",
      "Standing Leap."
    ],
    "actions": [],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 112,
    "name": "Frost Giant",
    "type": "Huge giant",
    "alignment": "neutral evil",
    "ac": 15,
    "hp": 138,
    "speed": "40 ft.",
    "attributes": {
      "str": 23,
      "dex": 9,
      "con": 21,
      "int": 9,
      "wis": 10,
      "cha": 12
    },
    "saves": {
      "con": 8,
      "wis": 3,
      "cha": 4
    },
    "skills": "Athletics +9, Perception +3",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Giant",
    "cr": "8",
    "features": [],
    "actions": [
      "Multiattack.",
      "Greataxe.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d12 + 60). "
  },
  {
    "id": 113,
    "name": "Gargoyle",
    "type": "Medium elemental",
    "alignment": "chaotic evil",
    "ac": 15,
    "hp": 52,
    "speed": "30 ft., fly 60 ft.",
    "attributes": {
      "str": 15,
      "dex": 11,
      "con": 16,
      "int": 6,
      "wis": 11,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Petrified, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Terran",
    "cr": "2",
    "features": [
      "False Appearance."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 + 21). "
  },
  {
    "id": 114,
    "name": "Gelatinous Cube",
    "type": "Large ooze",
    "alignment": "unaligned",
    "ac": 6,
    "hp": 84,
    "speed": "15 ft.",
    "attributes": {
      "str": 14,
      "dex": 3,
      "con": 20,
      "int": 1,
      "wis": 6,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
    "senses": "Blindsight 60 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "2",
    "features": [
      "Ooze Cube.",
      "Creatures inside the cube can be seen but have total cover.",
      "A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.",
      "The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.",
      "Transparent."
    ],
    "actions": [
      "Pseudopod.",
      "Engulf.",
      "On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.",
      "On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.",
      "An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d10 + 40). "
  },
  {
    "id": 115,
    "name": "Ghast",
    "type": "Medium undead",
    "alignment": "chaotic evil",
    "ac": 13,
    "hp": 36,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 17,
      "con": 10,
      "int": 11,
      "wis": 10,
      "cha": 8
    },
    "saves": {},
    "skills": "",
    "damage_res": "Necrotic",
    "damage_imm": "Poison",
    "condition_imm": "Charmed, Exhaustion, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Common",
    "cr": "2",
    "features": [
      "Stench.",
      "Turning Defiance."
    ],
    "actions": [
      "Bite.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8). "
  },
  {
    "id": 116,
    "name": "Ghost",
    "type": "Medium undead",
    "alignment": "any",
    "ac": 11,
    "hp": 45,
    "speed": "0 ft., fly 40 ft. (hover)",
    "attributes": {
      "str": 7,
      "dex": 13,
      "con": 10,
      "int": 10,
      "wis": 12,
      "cha": 17
    },
    "saves": {},
    "skills": "",
    "damage_res": "Acid, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Cold, Necrotic, Poison",
    "condition_imm": "Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "Any languages it knew in life",
    "cr": "4",
    "features": [
      "Ethereal Sight.",
      "Incorporeal Movement."
    ],
    "actions": [
      "Withering Touch.",
      "Etherealness.",
      "Horrifying Visage.",
      "Possession (Recharge 6).",
      "The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d8). "
  },
  {
    "id": 117,
    "name": "Ghoul",
    "type": "Medium undead",
    "alignment": "chaotic evil",
    "ac": 12,
    "hp": 22,
    "speed": "30 ft.",
    "attributes": {
      "str": 13,
      "dex": 15,
      "con": 10,
      "int": 7,
      "wis": 10,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Charmed, Exhaustion, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Common",
    "cr": "1",
    "features": [],
    "actions": [
      "Bite.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8). "
  },
  {
    "id": 118,
    "name": "Giant Ape",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 157,
    "speed": "40 ft., climb 40 ft.",
    "attributes": {
      "str": 23,
      "dex": 14,
      "con": 18,
      "int": 7,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Athletics +9, Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "--",
    "cr": "7",
    "features": [],
    "actions": [
      "Multiattack.",
      "Fist.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d12 + 60). "
  },
  {
    "id": 119,
    "name": "Giant Badger",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 13,
    "speed": "30 ft., burrow 10 ft.",
    "attributes": {
      "str": 13,
      "dex": 10,
      "con": 15,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Keen Smell."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 4). "
  },
  {
    "id": 120,
    "name": "Giant Bat",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 22,
    "speed": "10 ft., fly 60 ft.",
    "attributes": {
      "str": 15,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 60 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Echolocation.",
      "Keen Hearing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d10). "
  },
  {
    "id": 121,
    "name": "Giant Boar",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 42,
    "speed": "40 ft.",
    "attributes": {
      "str": 17,
      "dex": 10,
      "con": 16,
      "int": 2,
      "wis": 7,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 8",
    "languages": "--",
    "cr": "2",
    "features": [
      "Charge.",
      "Relentless (Recharges after a Short or Long Rest)."
    ],
    "actions": [
      "Tusk."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d10 + 15). "
  },
  {
    "id": 122,
    "name": "Giant Centipede",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 4,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 5,
      "dex": 14,
      "con": 12,
      "int": 1,
      "wis": 7,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 30 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d6 + 1). "
  },
  {
    "id": 123,
    "name": "Giant Constrictor Snake",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 60,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 19,
      "dex": 14,
      "con": 12,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft.,  Passive Perception 12",
    "languages": "--",
    "cr": "2",
    "features": [],
    "actions": [
      "Bite.",
      "Constrict."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d12 + 8). "
  },
  {
    "id": 124,
    "name": "Giant Crab",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 15,
    "hp": 13,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 13,
      "dex": 15,
      "con": 11,
      "int": 1,
      "wis": 9,
      "cha": 3
    },
    "saves": {},
    "skills": "Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 30 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "1/8",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8). "
  },
  {
    "id": 125,
    "name": "Giant Crocodile",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 85,
    "speed": "30 ft., swim 50 ft.",
    "attributes": {
      "str": 21,
      "dex": 9,
      "con": 17,
      "int": 2,
      "wis": 10,
      "cha": 7
    },
    "saves": {},
    "skills": "Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "5",
    "features": [
      "Hold Breath."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Tail."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d12 + 27). "
  },
  {
    "id": 126,
    "name": "Giant Eagle",
    "type": "Large beast",
    "alignment": "neutral good",
    "ac": 13,
    "hp": 26,
    "speed": "10 ft., fly 80 ft.",
    "attributes": {
      "str": 16,
      "dex": 17,
      "con": 13,
      "int": 8,
      "wis": 14,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "Giant Eagle  understands Common and Auran but can't speak them",
    "cr": "1",
    "features": [
      "Keen Sight."
    ],
    "actions": [
      "Multiattack.",
      "Beak.",
      "Talons."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d10 + 4). "
  },
  {
    "id": 127,
    "name": "Giant Elk",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 42,
    "speed": "60 ft.",
    "attributes": {
      "str": 19,
      "dex": 16,
      "con": 14,
      "int": 7,
      "wis": 14,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "Elvish, Giant Elk  and Sylvan but can't speak them",
    "cr": "2",
    "features": [
      "Charge."
    ],
    "actions": [
      "Ram.",
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d12 + 10). "
  },
  {
    "id": 128,
    "name": "Giant Fire Beetle",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 4,
    "speed": "30 ft.",
    "attributes": {
      "str": 8,
      "dex": 10,
      "con": 12,
      "int": 1,
      "wis": 7,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 30 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "0",
    "features": [
      "Illumination."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d6 + 1). "
  },
  {
    "id": 129,
    "name": "Giant Frog",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 18,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 12,
      "dex": 13,
      "con": 11,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "Perception +2, Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 12",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Amphibious.",
      "Standing Leap."
    ],
    "actions": [
      "Bite.",
      "Swallow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8). "
  },
  {
    "id": 130,
    "name": "Giant Goat",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "40 ft.",
    "attributes": {
      "str": 17,
      "dex": 11,
      "con": 12,
      "int": 3,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Charge.",
      "Sure-Footed."
    ],
    "actions": [
      "Ram."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 131,
    "name": "Giant Hyena",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 45,
    "speed": "50 ft.",
    "attributes": {
      "str": 16,
      "dex": 14,
      "con": 14,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1",
    "features": [
      "Rampage."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 12). "
  },
  {
    "id": 132,
    "name": "Giant Lizard",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 19,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 133,
    "name": "Giant Octopus",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 52,
    "speed": "10 ft., swim 60 ft.",
    "attributes": {
      "str": 17,
      "dex": 13,
      "con": 13,
      "int": 4,
      "wis": 10,
      "cha": 4
    },
    "saves": {},
    "skills": "Perception +4, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "--",
    "cr": "1",
    "features": [
      "Hold Breath.",
      "Underwater Camouflage.",
      "Water Breathing."
    ],
    "actions": [
      "Tentacles.",
      "Ink Cloud (Recharges after a Short or Long Rest)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d10 + 8). "
  },
  {
    "id": 134,
    "name": "Giant Owl",
    "type": "Large beast",
    "alignment": "neutral",
    "ac": 12,
    "hp": 19,
    "speed": "5 ft., fly 60 ft.",
    "attributes": {
      "str": 13,
      "dex": 15,
      "con": 12,
      "int": 8,
      "wis": 13,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +5, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 15",
    "languages": "Elvish, Giant Owl  and Sylvan but can't speak them",
    "cr": "1/4",
    "features": [
      "Flyby.",
      "Keen Hearing and Sight."
    ],
    "actions": [
      "Talons."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 135,
    "name": "Giant Poisonous Snake",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 11,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 10,
      "dex": 18,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft.,  Passive Perception 12",
    "languages": "--",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 136,
    "name": "Giant Rat",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 7,
    "speed": "30 ft.",
    "attributes": {
      "str": 7,
      "dex": 15,
      "con": 11,
      "int": 2,
      "wis": 10,
      "cha": 4
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1/8",
    "features": [
      "Keen Smell.",
      "Pack Tactics."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d6). "
  },
  {
    "id": 137,
    "name": "Giant Scorpion",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 15,
    "hp": 52,
    "speed": "40 ft.",
    "attributes": {
      "str": 15,
      "dex": 13,
      "con": 15,
      "int": 1,
      "wis": 9,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 60 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "3",
    "features": [],
    "actions": [
      "Multiattack.",
      "Claw.",
      "Sting."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d10 + 14). "
  },
  {
    "id": 138,
    "name": "Giant Sea Horse",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 16,
    "speed": "0 ft., swim 40 ft.",
    "attributes": {
      "str": 12,
      "dex": 15,
      "con": 11,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Charge.",
      "Water Breathing."
    ],
    "actions": [
      "Ram."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10). "
  },
  {
    "id": 139,
    "name": "Giant Shark",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 126,
    "speed": "0 ft., swim 50 ft.",
    "attributes": {
      "str": 23,
      "dex": 11,
      "con": 21,
      "int": 1,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 60 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "5",
    "features": [
      "Blood Frenzy.",
      "Water Breathing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d12 + 55). "
  },
  {
    "id": 140,
    "name": "Giant Spider",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 26,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 14,
      "dex": 16,
      "con": 12,
      "int": 2,
      "wis": 11,
      "cha": 4
    },
    "saves": {},
    "skills": "Stealth +7",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1",
    "features": [
      "Spider Climb.",
      "Web Sense.",
      "Web Walker."
    ],
    "actions": [
      "Bite.",
      "Web (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d10 + 4). "
  },
  {
    "id": 141,
    "name": "Giant Toad",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 39,
    "speed": "20 ft., swim 40 ft.",
    "attributes": {
      "str": 15,
      "dex": 13,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1",
    "features": [
      "Amphibious.",
      "Standing Leap."
    ],
    "actions": [
      "Bite.",
      "Swallow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 6). "
  },
  {
    "id": 142,
    "name": "Giant Vulture",
    "type": "Large beast",
    "alignment": "neutral",
    "ac": 10,
    "hp": 22,
    "speed": "10 ft., fly 60 ft.",
    "attributes": {
      "str": 15,
      "dex": 10,
      "con": 15,
      "int": 6,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Understands Common but can't speak  it",
    "cr": "1",
    "features": [
      "Keen Sight and Smell.",
      "Pack Tactics."
    ],
    "actions": [
      "Multiattack.",
      "Beak.",
      "Talons."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 6). "
  },
  {
    "id": 143,
    "name": "Giant Wasp",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 13,
    "speed": "10 ft., fly 50 ft.",
    "attributes": {
      "str": 10,
      "dex": 14,
      "con": 10,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/2",
    "features": [],
    "actions": [
      "Sting."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8). "
  },
  {
    "id": 144,
    "name": "Giant Weasel",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 9,
    "speed": "40 ft.",
    "attributes": {
      "str": 11,
      "dex": 16,
      "con": 10,
      "int": 4,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +3, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "1/8",
    "features": [
      "Keen Hearing and Smell."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8). "
  },
  {
    "id": 145,
    "name": "Giant Wolf Spider",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 11,
    "speed": "40 ft., climb 40 ft.",
    "attributes": {
      "str": 12,
      "dex": 16,
      "con": 13,
      "int": 3,
      "wis": 12,
      "cha": 4
    },
    "saves": {},
    "skills": "Perception +3, Stealth +7",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Spider Climb.",
      "Web Sense.",
      "Web Walker."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 146,
    "name": "Gibbering Mouther",
    "type": "Medium aberration",
    "alignment": "neutral",
    "ac": 9,
    "hp": 67,
    "speed": "10 ft., swim 10 ft.",
    "attributes": {
      "str": 10,
      "dex": 8,
      "con": 16,
      "int": 3,
      "wis": 10,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Prone",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "2",
    "features": [
      "Aberrant Ground.",
      "Gibbering."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Blinding Spittle (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d8 + 27). "
  },
  {
    "id": 147,
    "name": "Glabrezu",
    "type": "Large fiend",
    "alignment": "chaotic evil",
    "ac": 17,
    "hp": 157,
    "speed": "40 ft.",
    "attributes": {
      "str": 20,
      "dex": 15,
      "con": 21,
      "int": 19,
      "wis": 17,
      "cha": 16
    },
    "saves": {
      "str": 9,
      "con": 9,
      "wis": 7,
      "cha": 7
    },
    "skills": "",
    "damage_res": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 13",
    "languages": "Abyssal, Telepathy 120 ft.",
    "cr": "9",
    "features": [
      "Innate Spellcasting.",
      "At will: darkness, detect magic, dispel magic",
      "1/day each: confusion, fly, power word stun",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Pincer.",
      "Fist."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (15d10 + 75). "
  },
  {
    "id": 148,
    "name": "Gladiator",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 16,
    "hp": 112,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 12,
      "cha": 15
    },
    "saves": {
      "str": 7,
      "dex": 5,
      "con": 6
    },
    "skills": "Athletics +10, Intimidation +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "Any one language (usually Common)",
    "cr": "5",
    "features": [
      "Brave.",
      "Brute."
    ],
    "actions": [
      "Multiattack.",
      "Spear.",
      "Shield Bash."
    ],
    "bonus_actions": [],
    "reactions": [
      "Parry."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d8 + 45). "
  },
  {
    "id": 149,
    "name": "Gnoll",
    "type": "Medium humanoid",
    "alignment": "chaotic evil",
    "ac": 15,
    "hp": 22,
    "speed": "30 ft.",
    "attributes": {
      "str": 14,
      "dex": 12,
      "con": 11,
      "int": 6,
      "wis": 10,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Gnoll",
    "cr": "1/2",
    "features": [
      "Rampage."
    ],
    "actions": [
      "Bite.",
      "Spear.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8). "
  },
  {
    "id": 150,
    "name": "Goat",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 4,
    "speed": "40 ft.",
    "attributes": {
      "str": 12,
      "dex": 10,
      "con": 11,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "0",
    "features": [
      "Charge.",
      "Sure-Footed."
    ],
    "actions": [
      "Ram."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d8). "
  },
  {
    "id": 151,
    "name": "Goblin",
    "type": "Small humanoid",
    "alignment": "neutral evil",
    "ac": 15,
    "hp": 7,
    "speed": "30 ft.",
    "attributes": {
      "str": 8,
      "dex": 14,
      "con": 10,
      "int": 10,
      "wis": 8,
      "cha": 8
    },
    "saves": {},
    "skills": "Stealth +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "Common, Goblin",
    "cr": "1/4",
    "features": [
      "Nimble Escape."
    ],
    "actions": [
      "Scimitar.",
      "Shortbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d6). "
  },
  {
    "id": 152,
    "name": "Gold Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "lawful good",
    "ac": 17,
    "hp": 60,
    "speed": "30 ft., fly 60 ft., swim 30 ft.",
    "attributes": {
      "str": 19,
      "dex": 14,
      "con": 17,
      "int": 14,
      "wis": 11,
      "cha": 16
    },
    "saves": {
      "dex": 4,
      "con": 5,
      "wis": 2,
      "cha": 5
    },
    "skills": "Perception +4, Stealth +4",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "3",
    "features": [
      "Amphibious : The dragon can breathe air and water."
    ],
    "actions": [
      "Bite :Melee Weapon Attack: +6 to hit, reach 5 ft., one target.Hit: 9 (1d10 + 4) piercing damage.",
      "Breath Weapons (Recharge 5\u20136) : The dragon uses one of the following breath weapons.",
      "Fire Breath : The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.",
      "Weakening Breath : The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 + 24). "
  },
  {
    "id": 153,
    "name": "Gorgon",
    "type": "Large monstrosity",
    "alignment": "unaligned",
    "ac": 19,
    "hp": 114,
    "speed": "40 ft.",
    "attributes": {
      "str": 20,
      "dex": 11,
      "con": 18,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Petrified",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "--",
    "cr": "5",
    "features": [
      "Trampling Charge."
    ],
    "actions": [
      "Gore.",
      "Hooves.",
      "Petrifying Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 48). "
  },
  {
    "id": 154,
    "name": "Gray Ooze",
    "type": "Medium ooze",
    "alignment": "unaligned",
    "ac": 8,
    "hp": 22,
    "speed": "10 ft., climb 10 ft.",
    "attributes": {
      "str": 12,
      "dex": 6,
      "con": 16,
      "int": 1,
      "wis": 6,
      "cha": 2
    },
    "saves": {},
    "skills": "Stealth +2",
    "damage_res": "Acid, Cold, Fire",
    "damage_imm": "",
    "condition_imm": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
    "senses": "Blindsight 60 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Amorphous.",
      "Corrode Metal.",
      "The ooze can eat through 2-inch-thick, nonmagical metal in 1 round.",
      "False Appearance."
    ],
    "actions": [
      "Pseudopod."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8 + 9). "
  },
  {
    "id": 155,
    "name": "Green Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "lawful evil",
    "ac": 17,
    "hp": 38,
    "speed": "30 ft., fly 60 ft., swim 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 12,
      "con": 13,
      "int": 14,
      "wis": 11,
      "cha": 13
    },
    "saves": {
      "dex": 3,
      "con": 3,
      "wis": 2,
      "cha": 3
    },
    "skills": "Perception +4, Stealth +3",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "2",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Bite.",
      "Poison Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 + 7). "
  },
  {
    "id": 156,
    "name": "Green Hag",
    "type": "Medium fey",
    "alignment": "neutral evil",
    "ac": 17,
    "hp": 82,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 12,
      "con": 16,
      "int": 13,
      "wis": 14,
      "cha": 14
    },
    "saves": {},
    "skills": "Arcana +3, Deception +4, Perception +4, Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Common, Draconic, Sylvan",
    "cr": "3",
    "features": [
      "Amphibious.",
      "Innate Spellcasting.",
      "At will: dancing lights, minor illusion, vicious mockery",
      "Mimicry."
    ],
    "actions": [
      "Claws.",
      "Illusory Appearance.",
      "The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised.",
      "Invisible Passage."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (11d8 + 33). "
  },
  {
    "id": 157,
    "name": "Grick",
    "type": "Medium monstrosity",
    "alignment": "neutral",
    "ac": 14,
    "hp": 27,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 14,
      "dex": 14,
      "con": 11,
      "int": 3,
      "wis": 14,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "--",
    "cr": "2",
    "features": [
      "Stone Camouflage."
    ],
    "actions": [
      "Multiattack.",
      "Tentacles.",
      "Beak."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8). "
  },
  {
    "id": 158,
    "name": "Griffon",
    "type": "Large monstrosity",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 59,
    "speed": "30 ft., fly 80 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 2,
      "wis": 13,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 15",
    "languages": "--",
    "cr": "2",
    "features": [
      "Keen Sight."
    ],
    "actions": [
      "Multiattack.",
      "Beak.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d10 + 21). "
  },
  {
    "id": 159,
    "name": "Grimlock",
    "type": "Medium humanoid",
    "alignment": "neutral evil",
    "ac": 11,
    "hp": 11,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 12,
      "con": 12,
      "int": 9,
      "wis": 8,
      "cha": 6
    },
    "saves": {},
    "skills": "Athletics +5, Perception +3, Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Blinded",
    "senses": "Blindsight 30 ft.,  Passive Perception 13",
    "languages": "Undercommon",
    "cr": "1/4",
    "features": [
      "Blind Senses",
      "Keen Hearing and Smell.",
      "Stone Camouflage."
    ],
    "actions": [
      "Spiked Bone Club."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 160,
    "name": "Guard",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 16,
    "hp": 11,
    "speed": "30 ft.",
    "attributes": {
      "str": 13,
      "dex": 12,
      "con": 12,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Any one language (usually Common)",
    "cr": "1/8",
    "features": [],
    "actions": [
      "Spear."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 161,
    "name": "Guardian Naga",
    "type": "Large monstrosity",
    "alignment": "lawful good",
    "ac": 18,
    "hp": 127,
    "speed": "40 ft.",
    "attributes": {
      "str": 19,
      "dex": 18,
      "con": 16,
      "int": 16,
      "wis": 19,
      "cha": 18
    },
    "saves": {
      "dex": 8,
      "con": 7,
      "int": 7,
      "wis": 8,
      "cha": 8
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Charmed, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Celestial, Common",
    "cr": "10",
    "features": [
      "Rejuvenation.",
      "Spellcasting.",
      "Cantrips (at will): mending, sacred flame, thaumaturgy",
      "1st level (4 slots): command, cure wounds, shield of faith",
      "2nd level (3 slots): calm emotions, hold person",
      "3rd level (3 slots): bestow curse, clairvoyance",
      "4th level (3 slots): banishment, freedom of movement",
      "5th level (2 slots): flame strike, geas",
      "6th level (1 slot): true seeing"
    ],
    "actions": [
      "Bite.",
      "Spit Poison."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (15d10 + 45). "
  },
  {
    "id": 162,
    "name": "Gynosphinx",
    "type": "Large monstrosity",
    "alignment": "lawful neutral",
    "ac": 17,
    "hp": 136,
    "speed": "40 ft., fly 60 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 18,
      "wis": 18,
      "cha": 18
    },
    "saves": {},
    "skills": "Arcana +12, History +12, Perception +8, Religion +8",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Psychic",
    "condition_imm": "Charmed, Frightened",
    "senses": "Truesight 120 ft.,  Passive Perception 18",
    "languages": "Common, Sphinx",
    "cr": "11",
    "features": [
      "Inscrutable.",
      "Magic Weapons.",
      "Spellcasting.",
      "Cantrips (at will): mage hand, minor illusion, prestidigitation",
      "1st level (4 slots): detect magic, identify, shield",
      "2nd level (3 slots): darkness, locate object, suggestion",
      "3rd level (3 slots): dispel magic, remove curse, tongues",
      "4th level (3 slots): banishment, greater invisibility",
      "5th level (1 slot): legend lore"
    ],
    "actions": [
      "Multiattack.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Claw Attack.",
      "Teleport (Costs 2 Actions).",
      "Cast a Spell (Costs 3 Actions)."
    ],
    "spellcasting": true,
    "details": "HP Dice: (16d10 + 48). "
  },
  {
    "id": 163,
    "name": "Half-Red Dragon Veteran",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 18,
    "hp": 65,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 13,
      "con": 14,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "Athletics +5, Perception +2",
    "damage_res": "Fire",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Common, Draconic",
    "cr": "5",
    "features": [],
    "actions": [
      "Multiattack.",
      "Longsword.",
      "Shortsword.",
      "Heavy Crossbow.",
      "Fire Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d8 + 20). "
  },
  {
    "id": 164,
    "name": "Harpy",
    "type": "Medium monstrosity",
    "alignment": "chaotic evil",
    "ac": 11,
    "hp": 38,
    "speed": "20 ft., fly 40 ft.",
    "attributes": {
      "str": 12,
      "dex": 13,
      "con": 12,
      "int": 7,
      "wis": 10,
      "cha": 13
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Common",
    "cr": "1",
    "features": [],
    "actions": [
      "Multiattack.",
      "Claws.",
      "Club.",
      "Luring Song.",
      "While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 feet away from the harpy, the target must move on its turn toward the harpy by the most direct route, trying to get within 5 feet. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, the target can repeat the saving throw. A charmed target can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it.",
      "A target that successfully saves is immune to this harpy's song for the next 24 hours."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 + 7). "
  },
  {
    "id": 165,
    "name": "Hawk",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 1,
    "speed": "10 ft., fly 60 ft.",
    "attributes": {
      "str": 5,
      "dex": 16,
      "con": 8,
      "int": 2,
      "wis": 14,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Sight."
    ],
    "actions": [
      "Talons."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 166,
    "name": "Hell Hound",
    "type": "Medium fiend",
    "alignment": "lawful evil",
    "ac": 15,
    "hp": 45,
    "speed": "50 ft.",
    "attributes": {
      "str": 17,
      "dex": 12,
      "con": 14,
      "int": 6,
      "wis": 13,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +5",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 15",
    "languages": "Understands Infernal but can't speak it",
    "cr": "3",
    "features": [
      "Keen Hearing and Smell.",
      "Pack Tactics."
    ],
    "actions": [
      "Bite.",
      "Fire Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 + 14). "
  },
  {
    "id": 167,
    "name": "Hezrou",
    "type": "Large fiend",
    "alignment": "chaotic evil",
    "ac": 16,
    "hp": 136,
    "speed": "30 ft.",
    "attributes": {
      "str": 19,
      "dex": 17,
      "con": 20,
      "int": 5,
      "wis": 12,
      "cha": 13
    },
    "saves": {
      "str": 7,
      "con": 8,
      "wis": 4
    },
    "skills": "",
    "damage_res": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 11",
    "languages": "Abyssal, Telepathy 120 ft.",
    "cr": "8",
    "features": [
      "Magic Resistance.",
      "Stench."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (13d10 + 65). "
  },
  {
    "id": 168,
    "name": "Hill Giant",
    "type": "Huge giant",
    "alignment": "chaotic evil",
    "ac": 13,
    "hp": 105,
    "speed": "40 ft.",
    "attributes": {
      "str": 21,
      "dex": 8,
      "con": 19,
      "int": 5,
      "wis": 9,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Giant",
    "cr": "5",
    "features": [],
    "actions": [
      "Multiattack.",
      "Greatclub.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d12 + 40). "
  },
  {
    "id": 169,
    "name": "Hippogriff",
    "type": "Large monstrosity",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "40 ft., fly 60 ft.",
    "attributes": {
      "str": 17,
      "dex": 13,
      "con": 13,
      "int": 2,
      "wis": 12,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 15",
    "languages": "--",
    "cr": "1",
    "features": [
      "Keen Sight."
    ],
    "actions": [
      "Multiattack.",
      "Beak.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 170,
    "name": "Hobgoblin",
    "type": "Medium humanoid",
    "alignment": "lawful evil",
    "ac": 18,
    "hp": 11,
    "speed": "30 ft.",
    "attributes": {
      "str": 13,
      "dex": 12,
      "con": 12,
      "int": 10,
      "wis": 10,
      "cha": 9
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Common, Goblin",
    "cr": "1/2",
    "features": [
      "Martial Advantage."
    ],
    "actions": [
      "Longsword.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 171,
    "name": "Homunculus",
    "type": "Tiny construct",
    "alignment": "neutral",
    "ac": 13,
    "hp": 5,
    "speed": "20 ft., fly 40 ft.",
    "attributes": {
      "str": 4,
      "dex": 15,
      "con": 11,
      "int": 10,
      "wis": 10,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Charmed, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Understands the languages of its creator but can't speak",
    "cr": "0",
    "features": [
      "Telepathic Bond."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d4). "
  },
  {
    "id": 172,
    "name": "Horned Devil",
    "type": "Large fiend",
    "alignment": "lawful evil",
    "ac": 18,
    "hp": 148,
    "speed": "20 ft., fly 60 ft.",
    "attributes": {
      "str": 22,
      "dex": 17,
      "con": 21,
      "int": 12,
      "wis": 16,
      "cha": 17
    },
    "saves": {
      "str": 10,
      "dex": 7,
      "wis": 7,
      "cha": 7
    },
    "skills": "",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 13",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "11",
    "features": [
      "Devil's Sight.",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Fork.",
      "Tail.",
      "Hurl Flame."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (17d10 + 55). "
  },
  {
    "id": 173,
    "name": "Hunter Shark",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 45,
    "speed": "0 ft., swim 40 ft.",
    "attributes": {
      "str": 18,
      "dex": 13,
      "con": 15,
      "int": 1,
      "wis": 10,
      "cha": 4
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 30 ft.,  Passive Perception 12",
    "languages": "--",
    "cr": "2",
    "features": [
      "Blood Frenzy.",
      "Water Breathing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 12). "
  },
  {
    "id": 174,
    "name": "Hydra",
    "type": "Huge monstrosity",
    "alignment": "unaligned",
    "ac": 15,
    "hp": 172,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 20,
      "dex": 12,
      "con": 20,
      "int": 2,
      "wis": 10,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 16",
    "languages": "--",
    "cr": "8",
    "features": [
      "Hold Breath.",
      "Multiple Heads.",
      "Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.",
      "At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way.",
      "Reactive Heads.",
      "Wakeful."
    ],
    "actions": [
      "Multiattack.",
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d12 + 75). "
  },
  {
    "id": 175,
    "name": "Hyena",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 5,
    "speed": "50 ft.",
    "attributes": {
      "str": 11,
      "dex": 13,
      "con": 12,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "0",
    "features": [
      "Pack Tactics."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d8 + 1). "
  },
  {
    "id": 176,
    "name": "Ice Devil",
    "type": "Large fiend",
    "alignment": "lawful evil",
    "ac": 18,
    "hp": 180,
    "speed": "40 ft.",
    "attributes": {
      "str": 21,
      "dex": 14,
      "con": 18,
      "int": 18,
      "wis": 15,
      "cha": 18
    },
    "saves": {
      "dex": 7,
      "con": 9,
      "wis": 7,
      "cha": 9
    },
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Cold, Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 12",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "14",
    "features": [
      "Devil's Sight.",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws.",
      "Tail.",
      "Wall of Ice (Recharge 6).",
      "When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.",
      "The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-\u00adfoot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (19d10 + 76). "
  },
  {
    "id": 177,
    "name": "Ice Mephit",
    "type": "Small elemental",
    "alignment": "neutral evil",
    "ac": 11,
    "hp": 21,
    "speed": "30 ft., fly 30 ft.",
    "attributes": {
      "str": 7,
      "dex": 13,
      "con": 10,
      "int": 9,
      "wis": 11,
      "cha": 12
    },
    "saves": {},
    "skills": "Perception +2, Stealth +3",
    "damage_res": "",
    "damage_imm": "Cold, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Aquan, Auran",
    "cr": "1/2",
    "features": [
      "Death Burst.",
      "False Appearance.",
      "Innate Spellcasting."
    ],
    "actions": [
      "Claws.",
      "Frost Breath (Recharge 6)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (6d6). "
  },
  {
    "id": 178,
    "name": "Imp",
    "type": "Tiny fiend",
    "alignment": "lawful evil",
    "ac": 13,
    "hp": 10,
    "speed": "20 ft., fly 40 ft.",
    "attributes": {
      "str": 6,
      "dex": 17,
      "con": 13,
      "int": 11,
      "wis": 12,
      "cha": 14
    },
    "saves": {},
    "skills": "Deception +4, Insight +3, Persuasion +4, Stealth +5",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 11",
    "languages": "Common, Infernal",
    "cr": "1",
    "features": [
      "Shapechanger.",
      "Devil's Sight.",
      "Magic Resistance."
    ],
    "actions": [
      "Sting (Bite in Beast Form).",
      "Invisibility."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d4 + 3). "
  },
  {
    "id": 179,
    "name": "Invisible Stalker",
    "type": "Medium elemental",
    "alignment": "neutral",
    "ac": 14,
    "hp": 104,
    "speed": "50 ft., fly 50 ft. (hover)",
    "attributes": {
      "str": 16,
      "dex": 19,
      "con": 14,
      "int": 10,
      "wis": 15,
      "cha": 11
    },
    "saves": {},
    "skills": "Perception +8, Stealth +10",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60 ft.,  Passive Perception 18",
    "languages": "Auran  Understands Common but doesn't speak it",
    "cr": "6",
    "features": [
      "Invisibility.",
      "Faultless Tracker."
    ],
    "actions": [
      "Multiattack.",
      "Slam."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d8 + 32). "
  },
  {
    "id": 180,
    "name": "Iron Golem",
    "type": "Large construct",
    "alignment": "unaligned",
    "ac": 20,
    "hp": 210,
    "speed": "30 ft.",
    "attributes": {
      "str": 24,
      "dex": 9,
      "con": 20,
      "int": 3,
      "wis": 11,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Fire, Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 10",
    "languages": "Understands the languages of its creator but can't speak",
    "cr": "16",
    "features": [
      "Fire Absorption.",
      "Immutable Form.",
      "Magic Resistance.",
      "Magic Weapons."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Sword.",
      "Poison Breath (Recharge 6)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (20d10 + 100). "
  },
  {
    "id": 181,
    "name": "Jackal",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "40 ft.",
    "attributes": {
      "str": 8,
      "dex": 15,
      "con": 11,
      "int": 3,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Hearing and Smell.",
      "Pack Tactics."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d6). "
  },
  {
    "id": 182,
    "name": "Killer Whale",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 90,
    "speed": "0 ft., swim 60 ft.",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 13,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 120 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "3",
    "features": [
      "Echolocation.",
      "Hold Breath.",
      "Keen Hearing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d12 + 12). "
  },
  {
    "id": 183,
    "name": "Knight",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 18,
    "hp": 52,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 11,
      "con": 14,
      "int": 11,
      "wis": 11,
      "cha": 15
    },
    "saves": {
      "con": 4,
      "wis": 2
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any one language (usually Common)",
    "cr": "3",
    "features": [
      "Brave."
    ],
    "actions": [
      "Multiattack.",
      "Greatsword.",
      "Heavy Crossbow.",
      "Leadership (Recharges after a Short or Long Rest)."
    ],
    "bonus_actions": [],
    "reactions": [
      "Parry."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 + 16). "
  },
  {
    "id": 184,
    "name": "Kobold",
    "type": "Small humanoid",
    "alignment": "lawful evil",
    "ac": 12,
    "hp": 5,
    "speed": "30 ft.",
    "attributes": {
      "str": 7,
      "dex": 15,
      "con": 9,
      "int": 8,
      "wis": 7,
      "cha": 8
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 8",
    "languages": "Common, Draconic",
    "cr": "1/8",
    "features": [
      "Sunlight Sensitivity.",
      "Pack Tactics."
    ],
    "actions": [
      "Dagger.",
      "Sling."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d6 - 2). "
  },
  {
    "id": 185,
    "name": "Kraken",
    "type": "Gargantuan monstrosity",
    "alignment": "chaotic evil",
    "ac": 18,
    "hp": 472,
    "speed": "20 ft., swim 60 ft.",
    "attributes": {
      "str": 30,
      "dex": 11,
      "con": 25,
      "int": 22,
      "wis": 18,
      "cha": 20
    },
    "saves": {
      "str": 17,
      "dex": 7,
      "con": 14,
      "int": 13,
      "wis": 11
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "condition_imm": "Frightened, Paralyzed",
    "senses": "Truesight 120 ft.,  Passive Perception 14",
    "languages": "Abyssal, Celestial, Infernal, Primordial, Telepathy 120 ft. but can't speak",
    "cr": "23",
    "features": [
      "Amphibious.",
      "Freedom of Movement.",
      "Siege Monster."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.",
      "Tentacle.",
      "Fling.",
      "Lightning Storm."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Tentacle Attack or Fling.",
      "Lightning Storm (Costs 2 Actions).",
      "Ink Cloud (Costs 3 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (27d20 + 189). "
  },
  {
    "id": 186,
    "name": "Lamia",
    "type": "Large monstrosity",
    "alignment": "chaotic evil",
    "ac": 13,
    "hp": 97,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 13,
      "con": 15,
      "int": 14,
      "wis": 15,
      "cha": 16
    },
    "saves": {},
    "skills": "Deception +7, Insight +4, Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Abyssal, Common",
    "cr": "4",
    "features": [
      "Innate Spellcasting.",
      "At will: disguise self (any humanoid form), major image",
      "3/day each: charm person, mirror image, scrying, suggestion",
      "1/day: geas"
    ],
    "actions": [
      "Multiattack.",
      "Claws.",
      "Intoxicating Touch."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (13d10 + 26). "
  },
  {
    "id": 187,
    "name": "Lemure",
    "type": "Medium fiend",
    "alignment": "lawful evil",
    "ac": 7,
    "hp": 13,
    "speed": "15 ft.",
    "attributes": {
      "str": 10,
      "dex": 5,
      "con": 11,
      "int": 1,
      "wis": 11,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "Cold",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Charmed, Frightened, Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 10",
    "languages": "Understands Infernal but can't speak it",
    "cr": "0",
    "features": [
      "Devil's Sight.",
      "Hellish Rejuvenation."
    ],
    "actions": [
      "Fist."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8). "
  },
  {
    "id": 188,
    "name": "Lich",
    "type": "Medium undead",
    "alignment": "any evil alignment",
    "ac": 17,
    "hp": 135,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 16,
      "con": 16,
      "int": 20,
      "wis": 14,
      "cha": 16
    },
    "saves": {
      "con": 10,
      "int": 12,
      "wis": 9
    },
    "skills": "Arcana +18, History +12, Insight +9, Perception +9",
    "damage_res": "Cold, Lightning, Necrotic",
    "damage_imm": "Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 19",
    "languages": "Common plus up to five other languages",
    "cr": "21",
    "features": [
      "Legendary Resistance (3/Day).",
      "Rejuvenation.",
      "Spellcasting.",
      "Cantrips (at will): mage hand, prestidigitation, ray of frost",
      "1st level (4 slots): detect magic, magic missile, shield, thunderwave",
      "2nd level (3 slots): acid arrow, detect thoughts, invisibility, mirror image",
      "3rd level (3 slots): animate dead, counterspell, dispel magic, fireball",
      "4th level (3 slots): blight, dimension door",
      "5th level (3 slots): cloudkill, scrying",
      "6th level (1 slot): disintegrate, globe of invulnerability",
      "7th level (1 slot): finger of death, plane shift",
      "8th level (1 slot): dominate monster, power word stun",
      "9th level (1 slot): power word kill",
      "Turn Resistance."
    ],
    "actions": [
      "Paralyzing Touch."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Cantrip.",
      "Paralyzing Touch (Costs 2 Actions).",
      "Frightening Gaze (Costs 2 Actions).",
      "Disrupt Life (Costs 3 Actions)."
    ],
    "spellcasting": true,
    "details": "HP Dice: (18d8 + 54). "
  },
  {
    "id": 189,
    "name": "Lion",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 26,
    "speed": "50 ft.",
    "attributes": {
      "str": 17,
      "dex": 15,
      "con": 13,
      "int": 3,
      "wis": 12,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +3, Stealth +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1",
    "features": [
      "Keen Smell.",
      "Pack Tactics",
      "Pounce.",
      "Running Leap."
    ],
    "actions": [
      "Bite.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d10 + 4). "
  },
  {
    "id": 190,
    "name": "Lizard",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 2,
    "speed": "20 ft., climb 20 ft.",
    "attributes": {
      "str": 2,
      "dex": 11,
      "con": 10,
      "int": 1,
      "wis": 8,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "0",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4). "
  },
  {
    "id": 191,
    "name": "Lizardfolk",
    "type": "Medium humanoid",
    "alignment": "neutral",
    "ac": 15,
    "hp": 22,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 7,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3, Stealth +2, Survival +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Draconic",
    "cr": "1/2",
    "features": [
      "Hold Breath."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Heavy Club.",
      "Javelin.",
      "Spiked Shield."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8 + 4). "
  },
  {
    "id": 192,
    "name": "Mage",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 12,
    "hp": 40,
    "speed": "30 ft.",
    "attributes": {
      "str": 9,
      "dex": 14,
      "con": 11,
      "int": 17,
      "wis": 12,
      "cha": 11
    },
    "saves": {
      "int": 6,
      "wis": 4
    },
    "skills": "Arcana +6, History +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "Any four languages",
    "cr": "6",
    "features": [
      "Spellcasting.",
      "Cantrips (at will): fire bolt, light, mage hand, prestidigitation",
      "1st level (4 slots): detect magic, mage armor, magic missile, shield",
      "2nd level (3 slots): misty step, suggestion",
      "3rd level (3 slots): counterspell, fireball, fly",
      "4th level (3 slots): greater invisibility, ice storm",
      "5th level (1 slot): cone of cold"
    ],
    "actions": [
      "Dagger."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (9d8). "
  },
  {
    "id": 193,
    "name": "Magma Mephit",
    "type": "Small elemental",
    "alignment": "neutral evil",
    "ac": 11,
    "hp": 22,
    "speed": "30 ft., fly 30 ft.",
    "attributes": {
      "str": 8,
      "dex": 12,
      "con": 12,
      "int": 7,
      "wis": 10,
      "cha": 10
    },
    "saves": {},
    "skills": "Stealth +3",
    "damage_res": "",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Ignan, Terran",
    "cr": "1/2",
    "features": [
      "Death Burst.",
      "False Appearance.",
      "Innate Spellcasting."
    ],
    "actions": [
      "Claws.",
      "Fire Breath (Recharge 6)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (5d6 + 5). "
  },
  {
    "id": 194,
    "name": "Magmin",
    "type": "Small elemental",
    "alignment": "chaotic neutral",
    "ac": 14,
    "hp": 9,
    "speed": "30 ft.",
    "attributes": {
      "str": 7,
      "dex": 15,
      "con": 12,
      "int": 8,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Ignan",
    "cr": "1/2",
    "features": [
      "Death Burst.",
      "Ignited Illumination."
    ],
    "actions": [
      "Touch."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d6 + 2). "
  },
  {
    "id": 195,
    "name": "Mammoth",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 126,
    "speed": "40 ft.",
    "attributes": {
      "str": 24,
      "dex": 9,
      "con": 21,
      "int": 3,
      "wis": 11,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "6",
    "features": [
      "Trampling Charge."
    ],
    "actions": [
      "Gore.",
      "Stomp."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d12 + 55). "
  },
  {
    "id": 196,
    "name": "Manticore",
    "type": "Large monstrosity",
    "alignment": "lawful evil",
    "ac": 14,
    "hp": 68,
    "speed": "30 ft., fly 50 ft.",
    "attributes": {
      "str": 17,
      "dex": 16,
      "con": 17,
      "int": 7,
      "wis": 12,
      "cha": 8
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "Common",
    "cr": "3",
    "features": [
      "Tail Spike Regrowth."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Tail Spike."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d10 + 24). "
  },
  {
    "id": 197,
    "name": "Marilith",
    "type": "Large fiend",
    "alignment": "chaotic evil",
    "ac": 18,
    "hp": 189,
    "speed": "40 ft.",
    "attributes": {
      "str": 18,
      "dex": 20,
      "con": 20,
      "int": 18,
      "wis": 16,
      "cha": 20
    },
    "saves": {
      "str": 9,
      "con": 10,
      "wis": 8,
      "cha": 10
    },
    "skills": "",
    "damage_res": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 13",
    "languages": "Abyssal, Telepathy 120 ft.",
    "cr": "16",
    "features": [
      "Magic Resistance.",
      "Magic Weapons.",
      "Reactive."
    ],
    "actions": [
      "Multiattack.",
      "Longsword.",
      "Tail.",
      "Teleport."
    ],
    "bonus_actions": [],
    "reactions": [
      "Parry."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (18d10 + 90). "
  },
  {
    "id": 198,
    "name": "Mastiff",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 5,
    "speed": "40 ft.",
    "attributes": {
      "str": 13,
      "dex": 14,
      "con": 12,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1/8",
    "features": [
      "Keen Hearing and Smell."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d8 + 1). "
  },
  {
    "id": 199,
    "name": "Medusa",
    "type": "Medium monstrosity",
    "alignment": "lawful evil",
    "ac": 15,
    "hp": 127,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 15,
      "con": 16,
      "int": 12,
      "wis": 13,
      "cha": 15
    },
    "saves": {},
    "skills": "Deception +5, Insight +4, Perception +4, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Common",
    "cr": "6",
    "features": [
      "Petrifying Gaze.",
      "Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.",
      "If the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze."
    ],
    "actions": [
      "Multiattack.",
      "Snake Hair.",
      "Shortsword.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (17d8 + 51). "
  },
  {
    "id": 200,
    "name": "Merfolk",
    "type": "Medium humanoid",
    "alignment": "neutral",
    "ac": 11,
    "hp": 11,
    "speed": "10 ft., swim 40 ft.",
    "attributes": {
      "str": 10,
      "dex": 13,
      "con": 12,
      "int": 11,
      "wis": 11,
      "cha": 12
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Aquan, Common",
    "cr": "1/8",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Spear."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 201,
    "name": "Merrow",
    "type": "Large monstrosity",
    "alignment": "chaotic evil",
    "ac": 13,
    "hp": 45,
    "speed": "10 ft., swim 40 ft.",
    "attributes": {
      "str": 18,
      "dex": 10,
      "con": 15,
      "int": 8,
      "wis": 10,
      "cha": 9
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Abyssal, Aquan",
    "cr": "2",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws.",
      "Harpoon."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 12). "
  },
  {
    "id": 202,
    "name": "Mimic",
    "type": "Medium monstrosity",
    "alignment": "neutral",
    "ac": 12,
    "hp": 58,
    "speed": "15 ft.",
    "attributes": {
      "str": 17,
      "dex": 12,
      "con": 15,
      "int": 5,
      "wis": 13,
      "cha": 8
    },
    "saves": {},
    "skills": "Stealth +5",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "Prone",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "2",
    "features": [
      "Shapechanger.",
      "Adhesive (Object Form Only).",
      "False Appearance (Object Form Only).",
      "Grappler."
    ],
    "actions": [
      "Pseudopod.",
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d8 + 18). "
  },
  {
    "id": 203,
    "name": "Minotaur",
    "type": "Large monstrosity",
    "alignment": "chaotic evil",
    "ac": 14,
    "hp": 76,
    "speed": "40 ft.",
    "attributes": {
      "str": 18,
      "dex": 11,
      "con": 16,
      "int": 6,
      "wis": 16,
      "cha": 9
    },
    "saves": {},
    "skills": "Perception +7",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 17",
    "languages": "Abyssal",
    "cr": "3",
    "features": [
      "Charge.",
      "Labyrinthine Recall.",
      "Reckless."
    ],
    "actions": [
      "Greataxe.",
      "Gore."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d10 + 27). "
  },
  {
    "id": 204,
    "name": "Minotaur Skeleton",
    "type": "Large undead",
    "alignment": "lawful evil",
    "ac": 12,
    "hp": 67,
    "speed": "40 ft.",
    "attributes": {
      "str": 18,
      "dex": 11,
      "con": 15,
      "int": 6,
      "wis": 8,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "Understands Abyssal but can't speak  it",
    "cr": "2",
    "features": [
      "Charge."
    ],
    "actions": [
      "Greataxe.",
      "Gore."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d10 + 18). "
  },
  {
    "id": 205,
    "name": "Mule",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 11,
    "speed": "40 ft.",
    "attributes": {
      "str": 14,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/8",
    "features": [
      "Beast of Burden.",
      "Sure-Footed."
    ],
    "actions": [
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 206,
    "name": "Mummy",
    "type": "Medium undead",
    "alignment": "lawful evil",
    "ac": 11,
    "hp": 58,
    "speed": "20 ft.",
    "attributes": {
      "str": 16,
      "dex": 8,
      "con": 15,
      "int": 6,
      "wis": 10,
      "cha": 12
    },
    "saves": {
      "wis": 2
    },
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Necrotic, Poison",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "The languages it knew in life",
    "cr": "3",
    "features": [],
    "actions": [
      "Multiattack.",
      "Rotting Fist.",
      "Dreadful Glare."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d8 + 18). "
  },
  {
    "id": 207,
    "name": "Mummy Lord",
    "type": "Medium undead",
    "alignment": "lawful evil",
    "ac": 17,
    "hp": 97,
    "speed": "20 ft.",
    "attributes": {
      "str": 18,
      "dex": 10,
      "con": 17,
      "int": 11,
      "wis": 18,
      "cha": 16
    },
    "saves": {
      "con": 8,
      "int": 5,
      "wis": 9,
      "cha": 8
    },
    "skills": "History +5, Religion +5",
    "damage_res": "",
    "damage_imm": "Necrotic, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "The languages it knew in life",
    "cr": "15",
    "features": [
      "Magic Resistance.",
      "Rejuvenation.",
      "Spellcasting.",
      "Cantrips (at will): sacred flame, thaumaturgy",
      "1st level (4 slots): command, guiding bolt, shield of faith",
      "2nd level (3 slots): hold person, silence, spiritual weapon",
      "3rd level (3 slots): animate dead, dispel magic",
      "4th level (3 slots): divination, guardian of faith",
      "5th level (2 slots): contagion, insect plague",
      "6th level (1 slot): harm"
    ],
    "actions": [
      "Multiattack.",
      "Rotting Fist.",
      "Dreadful Glare."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Attack.",
      "Blinding Dust.",
      "Blasphemous Word (Costs 2 Actions).",
      "Channel Negative Energy (Costs 2 Actions).",
      "Whirlwind of Sand (Costs 2 Actions)."
    ],
    "spellcasting": true,
    "details": "HP Dice: (13d8 + 39). "
  },
  {
    "id": 208,
    "name": "Nalfeshnee",
    "type": "Large fiend",
    "alignment": "chaotic evil",
    "ac": 18,
    "hp": 184,
    "speed": "20 ft., fly 30 ft.",
    "attributes": {
      "str": 21,
      "dex": 10,
      "con": 22,
      "int": 19,
      "wis": 12,
      "cha": 15
    },
    "saves": {
      "con": 11,
      "int": 9,
      "wis": 6,
      "cha": 7
    },
    "skills": "",
    "damage_res": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 11",
    "languages": "Abyssal, Telepathy 120 ft.",
    "cr": "13",
    "features": [
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Horror Nimbus (Recharge 5\u20136).",
      "Teleport."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d10 + 96). "
  },
  {
    "id": 209,
    "name": "Night Hag",
    "type": "Medium fiend",
    "alignment": "neutral evil",
    "ac": 17,
    "hp": 112,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 16,
      "wis": 14,
      "cha": 16
    },
    "saves": {},
    "skills": "Deception +7, Insight +6, Perception +6, Stealth +6",
    "damage_res": "Cold, Fire; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "",
    "condition_imm": "Charmed",
    "senses": "Darkvision 120 ft.,  Passive Perception 16",
    "languages": "Abyssal, Common, Infernal, Primordial",
    "cr": "5",
    "features": [
      "Innate Spellcasting.",
      "At will: detect magic, magic missile",
      "2/day each: plane shift (self only), ray of enfeeblement, sleep",
      "Magic Resistance."
    ],
    "actions": [
      "Claws.",
      "Change Shape.",
      "Etherealness.",
      "Nightmare Haunting (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (15d8 + 45). "
  },
  {
    "id": 210,
    "name": "Nightmare",
    "type": "Large fiend",
    "alignment": "neutral evil",
    "ac": 13,
    "hp": 68,
    "speed": "60 ft., fly 90 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 13,
      "cha": 15
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "Common  and Infernal but can't speak",
    "cr": "3",
    "features": [
      "Confer Fire Resistance.",
      "Illumination."
    ],
    "actions": [
      "Hooves.",
      "Ethereal Stride."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d10 + 24). "
  },
  {
    "id": 211,
    "name": "Noble",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 15,
    "hp": 9,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 12,
      "con": 11,
      "int": 12,
      "wis": 14,
      "cha": 16
    },
    "saves": {},
    "skills": "Deception +5, Insight +4, Persuasion +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Any two languages",
    "cr": "1/8",
    "features": [],
    "actions": [
      "Rapier."
    ],
    "bonus_actions": [],
    "reactions": [
      "Parry."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8). "
  },
  {
    "id": 212,
    "name": "Nothic",
    "type": "Medium aberration",
    "alignment": "neutral evil",
    "ac": 15,
    "hp": 45,
    "speed": "30 ft.",
    "attributes": {
      "str": 14,
      "dex": 16,
      "con": 16,
      "int": 13,
      "wis": 10,
      "cha": 8
    },
    "saves": {},
    "skills": "Arcana +3, Insight +4, Perception +2, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Truesight 120 ft.,  Passive Perception 12",
    "languages": "Undercommon",
    "cr": "2",
    "features": [
      "Keen Sight."
    ],
    "actions": [
      "Multiattack.",
      "Claw.",
      "Rotting Gaze.",
      "Weird Insight."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 18). "
  },
  {
    "id": 213,
    "name": "Ochre Jelly",
    "type": "Large ooze",
    "alignment": "unaligned",
    "ac": 8,
    "hp": 45,
    "speed": "10 ft., climb 10 ft.",
    "attributes": {
      "str": 15,
      "dex": 6,
      "con": 14,
      "int": 2,
      "wis": 6,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "Acid",
    "damage_imm": "Lightning, Slashing",
    "condition_imm": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
    "senses": "Blindsight 60 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "2",
    "features": [
      "Amorphous.",
      "Spider Climb."
    ],
    "actions": [
      "Pseudopod."
    ],
    "bonus_actions": [],
    "reactions": [
      "Split."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 12). "
  },
  {
    "id": 214,
    "name": "Octopus",
    "type": "Small beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 3,
    "speed": "5 ft., swim 30 ft.",
    "attributes": {
      "str": 4,
      "dex": 15,
      "con": 11,
      "int": 3,
      "wis": 10,
      "cha": 4
    },
    "saves": {},
    "skills": "Perception +2, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 12",
    "languages": "--",
    "cr": "0",
    "features": [
      "Hold Breath.",
      "Underwater Camouflage.",
      "Water Breathing."
    ],
    "actions": [
      "Tentacles.",
      "Ink Cloud (Recharges after a Short or Long Rest)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d6). "
  },
  {
    "id": 215,
    "name": "Ogre",
    "type": "Large giant",
    "alignment": "chaotic evil",
    "ac": 11,
    "hp": 59,
    "speed": "40 ft.",
    "attributes": {
      "str": 19,
      "dex": 8,
      "con": 16,
      "int": 5,
      "wis": 7,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 8",
    "languages": "Common, Giant",
    "cr": "2",
    "features": [],
    "actions": [
      "Greatclub.",
      "Javelin."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d10 + 21). "
  },
  {
    "id": 216,
    "name": "Ogre Zombie",
    "type": "Large undead",
    "alignment": "neutral evil",
    "ac": 8,
    "hp": 85,
    "speed": "30 ft.",
    "attributes": {
      "str": 19,
      "dex": 6,
      "con": 18,
      "int": 3,
      "wis": 6,
      "cha": 5
    },
    "saves": {
      "wis": 0
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 8",
    "languages": "Understands Common and Giant but can't speak  them",
    "cr": "2",
    "features": [
      "Undead Fortitude."
    ],
    "actions": [
      "Morningstar."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d10 + 36). "
  },
  {
    "id": 217,
    "name": "Oni",
    "type": "Large giant",
    "alignment": "lawful evil",
    "ac": 16,
    "hp": 110,
    "speed": "30 ft., fly 30 ft.",
    "attributes": {
      "str": 19,
      "dex": 11,
      "con": 16,
      "int": 14,
      "wis": 12,
      "cha": 15
    },
    "saves": {
      "dex": 3,
      "con": 6,
      "wis": 4,
      "cha": 5
    },
    "skills": "Arcana +5, Deception +8, Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Common, Giant",
    "cr": "7",
    "features": [
      "Innate Spellcasting.",
      "At will: darkness, invisibility",
      "1/day each: charm person, cone of cold, gaseous form, sleep",
      "Magic Weapons.",
      "Regeneration."
    ],
    "actions": [
      "Multiattack.",
      "Claw (Oni Form Only).",
      "Glaive.",
      "Change Shape."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (13d10 + 39). "
  },
  {
    "id": 218,
    "name": "Orc",
    "type": "Medium humanoid",
    "alignment": "chaotic evil",
    "ac": 13,
    "hp": 15,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 12,
      "con": 16,
      "int": 7,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "Intimidation +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Common, Orc",
    "cr": "1/2",
    "features": [
      "Aggressive"
    ],
    "actions": [
      "Greataxe.",
      "Javelin."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 6). "
  },
  {
    "id": 219,
    "name": "Otyugh",
    "type": "Large aberration",
    "alignment": "neutral",
    "ac": 14,
    "hp": 114,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 11,
      "con": 19,
      "int": 6,
      "wis": 13,
      "cha": 6
    },
    "saves": {
      "con": 7
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 11",
    "languages": "Otyugh",
    "cr": "5",
    "features": [
      "Limited Telepathy."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Tentacle.",
      "Tentacle Slam."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 48). "
  },
  {
    "id": 220,
    "name": "Owl",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 1,
    "speed": "5 ft., fly 60 ft.",
    "attributes": {
      "str": 3,
      "dex": 13,
      "con": 8,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3, Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "0",
    "features": [
      "Flyby.",
      "Keen Hearing and Sight."
    ],
    "actions": [
      "Talons."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 221,
    "name": "Owlbear",
    "type": "Large monstrosity",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 59,
    "speed": "40 ft.",
    "attributes": {
      "str": 20,
      "dex": 12,
      "con": 17,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "3",
    "features": [
      "Keen Sight and Smell."
    ],
    "actions": [
      "Multiattack.",
      "Beak.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d10 + 21). "
  },
  {
    "id": 222,
    "name": "Panther",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 13,
    "speed": "50 ft., climb 40 ft.",
    "attributes": {
      "str": 14,
      "dex": 15,
      "con": 10,
      "int": 3,
      "wis": 14,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +4, Stealth +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Keen Smell.",
      "Pounce."
    ],
    "actions": [
      "Bite.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8). "
  },
  {
    "id": 223,
    "name": "Pegasus",
    "type": "Large celestial",
    "alignment": "chaotic good",
    "ac": 12,
    "hp": 59,
    "speed": "60 ft., fly 90 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 15,
      "cha": 13
    },
    "saves": {
      "dex": 4,
      "wis": 4,
      "cha": 3
    },
    "skills": "Perception +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 16",
    "languages": "Celestial, Common, Elvish  and Sylvan but can't speak",
    "cr": "2",
    "features": [],
    "actions": [
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d10 + 21). "
  },
  {
    "id": 224,
    "name": "Phase Spider",
    "type": "Large monstrosity",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 32,
    "speed": "30 ft., climb 30 ft.",
    "attributes": {
      "str": 15,
      "dex": 15,
      "con": 12,
      "int": 6,
      "wis": 10,
      "cha": 6
    },
    "saves": {},
    "skills": "Stealth +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "3",
    "features": [
      "Ethereal Jaunt.",
      "Spider Climb.",
      "Web Walker."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d10 + 5). "
  },
  {
    "id": 225,
    "name": "Pit Fiend",
    "type": "Large fiend",
    "alignment": "lawful evil",
    "ac": 19,
    "hp": 300,
    "speed": "30 ft., fly 60 ft.",
    "attributes": {
      "str": 26,
      "dex": 14,
      "con": 24,
      "int": 22,
      "wis": 18,
      "cha": 24
    },
    "saves": {
      "dex": 8,
      "con": 13,
      "wis": 10
    },
    "skills": "",
    "damage_res": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 14",
    "languages": "Infernal, Telepathy 120 ft.",
    "cr": "20",
    "features": [
      "Fear Aura.incapacitatedfrightenedMagic Resistance.Magic Weapons.Innate Spellcasting.detect magicfireballhold monsterwall of fire"
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Mace.",
      "Tail."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (24d10 + 168). "
  },
  {
    "id": 226,
    "name": "Planetar",
    "type": "Large celestial",
    "alignment": "lawful good",
    "ac": 19,
    "hp": 200,
    "speed": "40 ft., fly 120 ft.",
    "attributes": {
      "str": 24,
      "dex": 20,
      "con": 24,
      "int": 19,
      "wis": 22,
      "cha": 25
    },
    "saves": {
      "con": 12,
      "wis": 11,
      "cha": 12
    },
    "skills": "Perception +11",
    "damage_res": "Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "",
    "condition_imm": "Charmed, Exhaustion, Frightened",
    "senses": "Truesight 120 ft.,  Passive Perception 21",
    "languages": "All, Telepathy 120 ft.",
    "cr": "16",
    "features": [
      "Angelic Weapons.",
      "Divine Awareness.",
      "Innate Spellcasting.",
      "At will: detect evil and good, invisibility (self only)",
      "3/day each: blade barrier, dispel evil and good, flame strike, raise dead",
      "1/day each: commune, control weather, insect plague",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Greatsword.",
      "Healing Touch"
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (16d10 + 112). "
  },
  {
    "id": 227,
    "name": "Plesiosaurus",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 68,
    "speed": "20 ft., swim 40 ft.",
    "attributes": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "saves": {},
    "skills": "Perception +3, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "2",
    "features": [
      "Hold Breath."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d10 + 24). "
  },
  {
    "id": 228,
    "name": "Poisonous Snake",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 2,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 2,
      "dex": 16,
      "con": 11,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1/8",
    "features": [],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4). "
  },
  {
    "id": 229,
    "name": "Polar Bear",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 42,
    "speed": "40 ft., swim 30 ft.",
    "attributes": {
      "str": 20,
      "dex": 10,
      "con": 16,
      "int": 2,
      "wis": 13,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "2",
    "features": [
      "Keen Smell."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d10 + 15). "
  },
  {
    "id": 230,
    "name": "Pony",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 11,
    "speed": "40 ft.",
    "attributes": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 11,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/8",
    "features": [],
    "actions": [
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 231,
    "name": "Priest",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 13,
    "hp": 27,
    "speed": "25 ft.",
    "attributes": {
      "str": 10,
      "dex": 10,
      "con": 12,
      "int": 13,
      "wis": 16,
      "cha": 13
    },
    "saves": {},
    "skills": "Medicine +7, Persuasion +3, Religion +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Any two languages",
    "cr": "2",
    "features": [
      "Divine Eminence.",
      "Spellcasting.",
      "Cantrips (at will): light, sacred flame, thaumaturgy",
      "1st level (4 slots): cure wounds, guiding bolt, sanctuary",
      "2nd level (3 slots): lesser restoration, spiritual weapon",
      "3rd level (2 slots): dispel magic,spirit guardians"
    ],
    "actions": [
      "Mace."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (5d8 + 5). "
  },
  {
    "id": 232,
    "name": "Pseudodragon",
    "type": "Tiny dragon",
    "alignment": "neutral good",
    "ac": 13,
    "hp": 7,
    "speed": "15 ft., fly 60 ft.",
    "attributes": {
      "str": 6,
      "dex": 15,
      "con": 13,
      "int": 10,
      "wis": 12,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +3, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 13",
    "languages": "Understands Common and Draconic but can't speak them",
    "cr": "1/4",
    "features": [
      "Magic Resistance.",
      "Limited Telepathy."
    ],
    "actions": [
      "Bite.",
      "Sting."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d4 + 2). "
  },
  {
    "id": 233,
    "name": "Pteranodon",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 13,
    "speed": "10 ft., fly 60 ft.",
    "attributes": {
      "str": 12,
      "dex": 15,
      "con": 10,
      "int": 2,
      "wis": 9,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Flyby."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8). "
  },
  {
    "id": 234,
    "name": "Purple Worm",
    "type": "Gargantuan monstrosity",
    "alignment": "unaligned",
    "ac": 18,
    "hp": 247,
    "speed": "50 ft., burrow 30 ft.",
    "attributes": {
      "str": 28,
      "dex": 7,
      "con": 22,
      "int": 1,
      "wis": 8,
      "cha": 4
    },
    "saves": {
      "con": 11,
      "wis": 4
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Tremorsense 60 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "15",
    "features": [
      "Tunneler."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.",
      "Tail Stinger."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d20 + 90). "
  },
  {
    "id": 235,
    "name": "Quasit",
    "type": "Tiny fiend",
    "alignment": "chaotic evil",
    "ac": 13,
    "hp": 7,
    "speed": "40 ft.",
    "attributes": {
      "str": 5,
      "dex": 17,
      "con": 10,
      "int": 7,
      "wis": 10,
      "cha": 10
    },
    "saves": {},
    "skills": "Stealth +5",
    "damage_res": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 10",
    "languages": "Abyssal, Common",
    "cr": "1",
    "features": [
      "Shapechanger.",
      "Magic Resistance."
    ],
    "actions": [
      "Claws (Bite in Beast Form).",
      "Scare (1/Day).",
      "Invisibility."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d4). "
  },
  {
    "id": 236,
    "name": "Quipper",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 1,
    "speed": "0 ft., swim 40 ft.",
    "attributes": {
      "str": 2,
      "dex": 16,
      "con": 9,
      "int": 1,
      "wis": 7,
      "cha": 2
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "0",
    "features": [
      "Blood Frenzy.",
      "Water Breathing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 237,
    "name": "Rakshasa",
    "type": "Medium fiend",
    "alignment": "lawful evil",
    "ac": 16,
    "hp": 110,
    "speed": "40 ft.",
    "attributes": {
      "str": 14,
      "dex": 17,
      "con": 18,
      "int": 13,
      "wis": 16,
      "cha": 20
    },
    "saves": {},
    "skills": "Deception +10, Insight +8",
    "damage_res": "",
    "damage_imm": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "Common, Infernal",
    "cr": "13",
    "features": [
      "Limited Magic Immunity.",
      "Innate Spellcasting.",
      "At will: detect thoughts, disguise self, mage hand, minor illusion",
      "3/day each: charm person, detect magic, invisibility, major image, suggestion",
      "1/day each: dominate person, fly, plane shift, true seeing"
    ],
    "actions": [
      "Multiattack.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (13d8 + 52). "
  },
  {
    "id": 238,
    "name": "Rat",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 1,
    "speed": "20 ft.",
    "attributes": {
      "str": 2,
      "dex": 11,
      "con": 9,
      "int": 2,
      "wis": 10,
      "cha": 4
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Smell."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 239,
    "name": "Raven",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 1,
    "speed": "10 ft., fly 50 ft.",
    "attributes": {
      "str": 2,
      "dex": 14,
      "con": 8,
      "int": 2,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "0",
    "features": [
      "Mimicry."
    ],
    "actions": [
      "Beak."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 240,
    "name": "Red Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "chaotic evil",
    "ac": 17,
    "hp": 75,
    "speed": "30 ft., climb 30 ft., fly 60 ft.",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "saves": {
      "dex": 2,
      "con": 5,
      "wis": 2,
      "cha": 4
    },
    "skills": "Perception +4, Stealth +2",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "4",
    "features": [],
    "actions": [
      "Bite.",
      "Fire Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d8 + 30). "
  },
  {
    "id": 241,
    "name": "Reef Shark",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 22,
    "speed": "0 ft., swim 40 ft.",
    "attributes": {
      "str": 14,
      "dex": 13,
      "con": 13,
      "int": 1,
      "wis": 10,
      "cha": 4
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 30 ft.,  Passive Perception 12",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Pack Tactics.",
      "Water Breathing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8 + 4). "
  },
  {
    "id": 242,
    "name": "Remorhaz",
    "type": "Huge monstrosity",
    "alignment": "unaligned",
    "ac": 17,
    "hp": 195,
    "speed": "30 ft., burrow 20 ft.",
    "attributes": {
      "str": 24,
      "dex": 13,
      "con": 21,
      "int": 4,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Cold, Fire",
    "condition_imm": "",
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "11",
    "features": [
      "Heated Body."
    ],
    "actions": [
      "Bite.",
      "Swallow.",
      "If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (17d12 + 85). "
  },
  {
    "id": 243,
    "name": "Rhinoceros",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 45,
    "speed": "40 ft.",
    "attributes": {
      "str": 21,
      "dex": 8,
      "con": 15,
      "int": 2,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "--",
    "cr": "2",
    "features": [
      "Charge."
    ],
    "actions": [
      "Gore."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 12). "
  },
  {
    "id": 244,
    "name": "Riding Horse",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 13,
    "speed": "60 ft.",
    "attributes": {
      "str": 16,
      "dex": 10,
      "con": 12,
      "int": 2,
      "wis": 11,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d10 + 2). "
  },
  {
    "id": 245,
    "name": "Roc",
    "type": "Gargantuan monstrosity",
    "alignment": "unaligned",
    "ac": 15,
    "hp": 248,
    "speed": "20 ft., fly 120 ft.",
    "attributes": {
      "str": 28,
      "dex": 10,
      "con": 20,
      "int": 3,
      "wis": 10,
      "cha": 9
    },
    "saves": {
      "dex": 4,
      "con": 9,
      "wis": 4,
      "cha": 3
    },
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "--",
    "cr": "11",
    "features": [
      "Keen Sight."
    ],
    "actions": [
      "Multiattack.",
      "Beak.",
      "Talons."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d20 + 80). "
  },
  {
    "id": 246,
    "name": "Roper",
    "type": "Large monstrosity",
    "alignment": "neutral evil",
    "ac": 20,
    "hp": 93,
    "speed": "10 ft., climb 10 ft.",
    "attributes": {
      "str": 18,
      "dex": 8,
      "con": 17,
      "int": 7,
      "wis": 16,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +6, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 16",
    "languages": "--",
    "cr": "5",
    "features": [
      "False Appearance.",
      "Grasping Tendrils.",
      "Spider Climb."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Tendril.",
      "Reel."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d10 + 33). "
  },
  {
    "id": 247,
    "name": "Rug of Smothering",
    "type": "Large construct",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 33,
    "speed": "10 ft.",
    "attributes": {
      "str": 17,
      "dex": 14,
      "con": 10,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison, Psychic",
    "condition_imm": "Blinded, Charmed, Deafened, Frightened, Paralyzed, Petrified, Poisoned",
    "senses": "Blindsight 60 ft.,  Passive Perception 6",
    "languages": "--",
    "cr": "2",
    "features": [
      "Antimagic Susceptibility.",
      "Damage Transfer.",
      "False Appearance."
    ],
    "actions": [
      "Smother."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10). "
  },
  {
    "id": 248,
    "name": "Rust Monster",
    "type": "Medium monstrosity",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 27,
    "speed": "40 ft.",
    "attributes": {
      "str": 13,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 13,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Iron Scent.",
      "Rust Metal."
    ],
    "actions": [
      "Bite.",
      "Antennae.",
      "If the object touched is either metal armor or a metal shield being worn or carried, it takes a permanent and cumulative \u22121 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8 + 5). "
  },
  {
    "id": 249,
    "name": "Saber-Toothed Tiger",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 52,
    "speed": "40 ft.",
    "attributes": {
      "str": 18,
      "dex": 14,
      "con": 15,
      "int": 3,
      "wis": 12,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +3, Stealth +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "2",
    "features": [
      "Keen Smell.",
      "Pounce."
    ],
    "actions": [
      "Bite.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d10 + 14). "
  },
  {
    "id": 250,
    "name": "Sahuagin",
    "type": "Medium humanoid",
    "alignment": "lawful evil",
    "ac": 12,
    "hp": 22,
    "speed": "30 ft., swim 40 ft.",
    "attributes": {
      "str": 13,
      "dex": 11,
      "con": 12,
      "int": 12,
      "wis": 13,
      "cha": 9
    },
    "saves": {},
    "skills": "Perception +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 15",
    "languages": "Sahuagin",
    "cr": "1/2",
    "features": [
      "Blood Frenzy.",
      "Limited Amphibiousness.",
      "Shark Telepathy."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws.",
      "Spear."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8 + 4). "
  },
  {
    "id": 251,
    "name": "Salamander",
    "type": "Large elemental",
    "alignment": "neutral evil",
    "ac": 15,
    "hp": 90,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 14,
      "con": 15,
      "int": 11,
      "wis": 10,
      "cha": 12
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Ignan",
    "cr": "5",
    "features": [
      "Heated Body.",
      "Heated Weapons."
    ],
    "actions": [
      "Multiattack.",
      "Spear.",
      "Tail."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 24). "
  },
  {
    "id": 252,
    "name": "Satyr",
    "type": "Medium fey",
    "alignment": "chaotic neutral",
    "ac": 14,
    "hp": 31,
    "speed": "40 ft.",
    "attributes": {
      "str": 12,
      "dex": 16,
      "con": 11,
      "int": 12,
      "wis": 10,
      "cha": 14
    },
    "saves": {},
    "skills": "Perception +2, Performance +6, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Common, Elvish, Sylvan",
    "cr": "1/2",
    "features": [
      "Magic Resistance."
    ],
    "actions": [
      "Ram.",
      "Shortsword.",
      "Shortbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8). "
  },
  {
    "id": 253,
    "name": "Scorpion",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 1,
    "speed": "10 ft.",
    "attributes": {
      "str": 2,
      "dex": 11,
      "con": 8,
      "int": 1,
      "wis": 8,
      "cha": 2
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Blindsight 10 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "0",
    "features": [],
    "actions": [
      "Sting."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 254,
    "name": "Scout",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 13,
    "hp": 16,
    "speed": "30 ft.",
    "attributes": {
      "str": 11,
      "dex": 14,
      "con": 12,
      "int": 11,
      "wis": 13,
      "cha": 11
    },
    "saves": {},
    "skills": "Nature +4, Perception +5, Stealth +6, Survival +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 15",
    "languages": "Any one language (usually Common)",
    "cr": "1/2",
    "features": [
      "Keen Hearing and Sight."
    ],
    "actions": [
      "Multiattack.",
      "Shortsword.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8 + 3). "
  },
  {
    "id": 255,
    "name": "Sea Hag",
    "type": "Medium fey",
    "alignment": "chaotic evil",
    "ac": 14,
    "hp": 52,
    "speed": "30 ft., swim 40 ft.",
    "attributes": {
      "str": 16,
      "dex": 13,
      "con": 16,
      "int": 12,
      "wis": 12,
      "cha": 13
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 11",
    "languages": "Aquan, Common, Giant",
    "cr": "2",
    "features": [
      "Amphibious.",
      "Horrific Appearance.",
      "Unless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag."
    ],
    "actions": [
      "Claws.",
      "Death Glare.",
      "Illusory Appearance.",
      "The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 + 21). "
  },
  {
    "id": 256,
    "name": "Sea Horse",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 1,
    "speed": "0 ft., swim 20 ft.",
    "attributes": {
      "str": 1,
      "dex": 12,
      "con": 8,
      "int": 1,
      "wis": 10,
      "cha": 2
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "0",
    "features": [
      "Water Breathing."
    ],
    "actions": [],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 257,
    "name": "Shadow",
    "type": "Medium undead",
    "alignment": "chaotic evil",
    "ac": 12,
    "hp": 16,
    "speed": "40 ft.",
    "attributes": {
      "str": 6,
      "dex": 14,
      "con": 13,
      "int": 6,
      "wis": 10,
      "cha": 8
    },
    "saves": {},
    "skills": "Stealth +4",
    "damage_res": "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Necrotic, Poison",
    "condition_imm": "Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Amorphous.",
      "Shadow Stealth.",
      "Sunlight Weakness."
    ],
    "actions": [
      "Strength Drain.",
      "If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8 + 3). "
  },
  {
    "id": 258,
    "name": "Shambling Mound",
    "type": "Large plant",
    "alignment": "unaligned",
    "ac": 15,
    "hp": 136,
    "speed": "20 ft., swim 20 ft.",
    "attributes": {
      "str": 18,
      "dex": 8,
      "con": 16,
      "int": 5,
      "wis": 10,
      "cha": 5
    },
    "saves": {},
    "skills": "Stealth +2",
    "damage_res": "Cold, Fire",
    "damage_imm": "Lightning",
    "condition_imm": "Blinded, Deafened, Exhaustion",
    "senses": "Blindsight 60 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "5",
    "features": [
      "Lightning Absorption."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Engulf."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d10 + 48). "
  },
  {
    "id": 259,
    "name": "Shield Guardian",
    "type": "Large construct",
    "alignment": "unaligned",
    "ac": 17,
    "hp": 142,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 8,
      "con": 18,
      "int": 7,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Understands commands given in any language but can't speak",
    "cr": "7",
    "features": [
      "Bound.",
      "Regeneration.",
      "Spell Storing."
    ],
    "actions": [
      "Multiattack.",
      "Fist."
    ],
    "bonus_actions": [],
    "reactions": [
      "Shield."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d10 + 60). "
  },
  {
    "id": 260,
    "name": "Shrieker",
    "type": "Medium plant",
    "alignment": "unaligned",
    "ac": 5,
    "hp": 13,
    "speed": "0 ft.",
    "attributes": {
      "str": 1,
      "dex": 1,
      "con": 10,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Blinded, Deafened, Frightened",
    "senses": "Blindsight 30 ft.,  Passive Perception 6",
    "languages": "--",
    "cr": "0",
    "features": [
      "False Appearance."
    ],
    "actions": [],
    "bonus_actions": [],
    "reactions": [
      "Shriek."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8). "
  },
  {
    "id": 261,
    "name": "Silver Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "lawful good",
    "ac": 17,
    "hp": 45,
    "speed": "30 ft., fly 60 ft.",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "saves": {
      "dex": 2,
      "con": 5,
      "wis": 2,
      "cha": 4
    },
    "skills": "Perception +4, Stealth +2",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "2",
    "features": [],
    "actions": [
      "Bite.",
      "Breath Weapons (Recharge 5\u20136).",
      "Cold Breath.",
      "Paralyzing Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 18). "
  },
  {
    "id": 262,
    "name": "Skeleton",
    "type": "Medium undead",
    "alignment": "lawful evil",
    "ac": 13,
    "hp": 13,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 14,
      "con": 15,
      "int": 6,
      "wis": 8,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "Understands all languages it knew in life but can't speak",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Shortsword.",
      "Shortbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 4). "
  },
  {
    "id": 263,
    "name": "Solar",
    "type": "Large celestial",
    "alignment": "lawful good",
    "ac": 21,
    "hp": 243,
    "speed": "50 ft., fly 150 ft.",
    "attributes": {
      "str": 26,
      "dex": 22,
      "con": 26,
      "int": 25,
      "wis": 25,
      "cha": 30
    },
    "saves": {
      "int": 14,
      "wis": 14,
      "cha": 17
    },
    "skills": "Perception +14",
    "damage_res": "Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Necrotic, Poison",
    "condition_imm": "Charmed, Exhaustion, Frightened, Poisoned",
    "senses": "Truesight 120 ft.,  Passive Perception 24",
    "languages": "All, Telepathy 120 ft.",
    "cr": "21",
    "features": [
      "Angelic Weapons.",
      "Divine Awareness.",
      "Innate Spellcasting.",
      "At will: detect evil and good, invisibility (self only)",
      "3/day each: blade barrier, dispel evil and good, resurrection",
      "1/day each: commune, control weather",
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Greatsword.",
      "Slaying Longbow.",
      "Flying Sword.",
      "Healing Touch (4/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Teleport.",
      "Searing Burst (Costs 2 Actions).",
      "Blinding Gaze (Costs 3 Actions)."
    ],
    "spellcasting": true,
    "details": "HP Dice: (18d10 + 144). "
  },
  {
    "id": 264,
    "name": "Spectator",
    "type": "Medium aberration",
    "alignment": "lawful neutral",
    "ac": 14,
    "hp": 39,
    "speed": "0 ft., fly 30 ft. (hover)",
    "attributes": {
      "str": 8,
      "dex": 14,
      "con": 14,
      "int": 13,
      "wis": 14,
      "cha": 11
    },
    "saves": {},
    "skills": "Perception +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Prone",
    "senses": "Darkvision 120 ft.,  Passive Perception 16",
    "languages": "Deep Speech, Telepathy 120 ft., Undercommon",
    "cr": "3",
    "features": [],
    "actions": [
      "Bite.",
      "Eye Rays.",
      "Create Food and Water."
    ],
    "bonus_actions": [],
    "reactions": [
      "Spell Reflection."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 12). "
  },
  {
    "id": 265,
    "name": "Specter",
    "type": "Medium undead",
    "alignment": "chaotic evil",
    "ac": 12,
    "hp": 22,
    "speed": "0 ft., fly 50 ft. (hover)",
    "attributes": {
      "str": 1,
      "dex": 14,
      "con": 11,
      "int": 10,
      "wis": 10,
      "cha": 11
    },
    "saves": {},
    "skills": "",
    "damage_res": "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Necrotic, Poison",
    "condition_imm": "Charmed, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Understands all languages it knew in life but can't speak",
    "cr": "1",
    "features": [
      "Incorporeal Movement.",
      "Sunlight Sensitivity."
    ],
    "actions": [
      "Life Drain."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8). "
  },
  {
    "id": 266,
    "name": "Spider",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 1,
    "speed": "20 ft., climb 20 ft.",
    "attributes": {
      "str": 2,
      "dex": 14,
      "con": 8,
      "int": 1,
      "wis": 10,
      "cha": 2
    },
    "saves": {},
    "skills": "Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 30 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "0",
    "features": [
      "Spider Climb.",
      "Web Sense.",
      "Web Walker."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 267,
    "name": "Spirit Naga",
    "type": "Large monstrosity",
    "alignment": "chaotic evil",
    "ac": 15,
    "hp": 75,
    "speed": "40 ft.",
    "attributes": {
      "str": 18,
      "dex": 17,
      "con": 14,
      "int": 16,
      "wis": 15,
      "cha": 16
    },
    "saves": {
      "dex": 6,
      "con": 5,
      "wis": 5,
      "cha": 6
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Charmed, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Abyssal, Common",
    "cr": "8",
    "features": [
      "Rejuvenation.",
      "Spellcasting.",
      "Cantrips (at will): mage hand, minor illusion, ray of frost",
      "1st level (4 slots): charm person, detect magic, sleep",
      "2nd level (3 slots): detect thoughts, hold person",
      "3rd level (3 slots): lightning bolt, water breathing",
      "4th level (3 slots): blight, dimension door",
      "5th level (2 slots): dominate person"
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (10d10 + 20). "
  },
  {
    "id": 268,
    "name": "Sprite",
    "type": "Tiny fey",
    "alignment": "neutral good",
    "ac": 15,
    "hp": 2,
    "speed": "10 ft., fly 40 ft.",
    "attributes": {
      "str": 3,
      "dex": 18,
      "con": 10,
      "int": 14,
      "wis": 13,
      "cha": 11
    },
    "saves": {},
    "skills": "Perception +3, Stealth +8",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Common, Elvish, Sylvan",
    "cr": "1/4",
    "features": [],
    "actions": [
      "Longsword.",
      "Shortbow.",
      "Heart Sight.",
      "Invisibility."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4). "
  },
  {
    "id": 269,
    "name": "Spy",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 12,
    "hp": 27,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 15,
      "con": 10,
      "int": 12,
      "wis": 14,
      "cha": 16
    },
    "saves": {},
    "skills": "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of Hand +4, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 16",
    "languages": "Any two languages",
    "cr": "1",
    "features": [
      "Cunning Action.",
      "Sneak Attack (1/Turn)."
    ],
    "actions": [
      "Multiattack.",
      "Shortsword.",
      "Hand Crossbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8). "
  },
  {
    "id": 270,
    "name": "Steam Mephit",
    "type": "Small elemental",
    "alignment": "neutral evil",
    "ac": 10,
    "hp": 21,
    "speed": "30 ft., fly 30 ft.",
    "attributes": {
      "str": 5,
      "dex": 11,
      "con": 10,
      "int": 11,
      "wis": 10,
      "cha": 12
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Fire, Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Aquan, Ignan",
    "cr": "1/4",
    "features": [
      "Death Burst.",
      "Innate Spellcasting."
    ],
    "actions": [
      "Claws.",
      "Steam Breath (Recharge 6)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (6d6). "
  },
  {
    "id": 271,
    "name": "Stirge",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 2,
    "speed": "10 ft., fly 40 ft.",
    "attributes": {
      "str": 4,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 8,
      "cha": 6
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "1/8",
    "features": [],
    "actions": [
      "Blood Drain.",
      "The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4). "
  },
  {
    "id": 272,
    "name": "Stone Giant",
    "type": "Huge giant",
    "alignment": "neutral",
    "ac": 17,
    "hp": 126,
    "speed": "40 ft.",
    "attributes": {
      "str": 23,
      "dex": 15,
      "con": 20,
      "int": 10,
      "wis": 12,
      "cha": 9
    },
    "saves": {
      "dex": 5,
      "con": 8,
      "wis": 4
    },
    "skills": "Athletics +12, Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Giant",
    "cr": "7",
    "features": [
      "Stone Camouflage."
    ],
    "actions": [
      "Multiattack.",
      "Rock."
    ],
    "bonus_actions": [],
    "reactions": [
      "Rock Catching."
    ],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d12 + 55). "
  },
  {
    "id": 273,
    "name": "Stone Golem",
    "type": "Large construct",
    "alignment": "unaligned",
    "ac": 17,
    "hp": 178,
    "speed": "30 ft.",
    "attributes": {
      "str": 22,
      "dex": 9,
      "con": 20,
      "int": 3,
      "wis": 11,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
    "condition_imm": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 10",
    "languages": "Understands the languages of its creator but can't speak",
    "cr": "10",
    "features": [
      "Immutable Form.",
      "Magic Resistance.",
      "Magic Weapons."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Slow (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (17d10 + 85). "
  },
  {
    "id": 274,
    "name": "Storm Giant",
    "type": "Huge giant",
    "alignment": "chaotic good",
    "ac": 16,
    "hp": 230,
    "speed": "50 ft., swim 50 ft.",
    "attributes": {
      "str": 29,
      "dex": 14,
      "con": 20,
      "int": 16,
      "wis": 18,
      "cha": 18
    },
    "saves": {
      "str": 14,
      "con": 10,
      "wis": 9,
      "cha": 9
    },
    "skills": "Arcana +8, Athletics +14, History +8, Perception +9",
    "damage_res": "Cold",
    "damage_imm": "Lightning, Thunder",
    "condition_imm": "",
    "senses": "Passive Perception 19",
    "languages": "Common, Giant",
    "cr": "13",
    "features": [
      "Amphibious.",
      "Innate Spellcasting.",
      "At will: detect magic, feather fall, levitate, light",
      "3/day each: control weather, water breathing"
    ],
    "actions": [
      "Multiattack.",
      "Greatsword.",
      "Rock.",
      "Lightning Strike (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": true,
    "details": "HP Dice: (20d12 + 100). "
  },
  {
    "id": 275,
    "name": "Succubus/Incubus",
    "type": "Medium fiend",
    "alignment": "neutral evil",
    "ac": 15,
    "hp": 66,
    "speed": "30 ft., fly 60 ft.",
    "attributes": {
      "str": 8,
      "dex": 17,
      "con": 13,
      "int": 15,
      "wis": 12,
      "cha": 20
    },
    "saves": {},
    "skills": "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
    "damage_res": "Cold, Fire, Lightning, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 15",
    "languages": "Abyssal, Common, Infernal, Telepathy 60 ft.",
    "cr": "4",
    "features": [
      "Telepathic Bond.",
      "Shapechanger."
    ],
    "actions": [
      "Claw (Fiend Form Only).",
      "Charm.",
      "The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.",
      "Draining Kiss.",
      "Etherealness."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d8 + 12). "
  },
  {
    "id": 276,
    "name": "Swarm of Bats",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 22,
    "speed": "0 ft., fly 30 ft.",
    "attributes": {
      "str": 5,
      "dex": 15,
      "con": 10,
      "int": 2,
      "wis": 12,
      "cha": 4
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, Slashing",
    "damage_imm": "",
    "condition_imm": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
    "senses": "Blindsight 60 ft.,  Passive Perception 11",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Echolocation.",
      "Keen Hearing.",
      "Swarm."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8). "
  },
  {
    "id": 277,
    "name": "Swarm of Insects",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 22,
    "speed": "20 ft., climb 20 ft.",
    "attributes": {
      "str": 3,
      "dex": 13,
      "con": 10,
      "int": 1,
      "wis": 7,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, Slashing",
    "damage_imm": "",
    "condition_imm": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
    "senses": "Blindsight 10 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Swarm."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8). "
  },
  {
    "id": 278,
    "name": "Swarm of Poisonous Snakes",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 14,
    "hp": 36,
    "speed": "30 ft., swim 30 ft.",
    "attributes": {
      "str": 8,
      "dex": 18,
      "con": 11,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, Slashing",
    "damage_imm": "",
    "condition_imm": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
    "senses": "Blindsight 10 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "2",
    "features": [
      "Swarm."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8). "
  },
  {
    "id": 279,
    "name": "Swarm of Quippers",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 28,
    "speed": "0 ft., swim 40 ft.",
    "attributes": {
      "str": 13,
      "dex": 16,
      "con": 9,
      "int": 1,
      "wis": 7,
      "cha": 2
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, Slashing",
    "damage_imm": "",
    "condition_imm": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
    "senses": "Darkvision 60 ft.,  Passive Perception 8",
    "languages": "--",
    "cr": "1",
    "features": [
      "Blood Frenzy.",
      "Swarm.",
      "Water Breathing."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d8 - 8). "
  },
  {
    "id": 280,
    "name": "Swarm of Rats",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 24,
    "speed": "30 ft.",
    "attributes": {
      "str": 9,
      "dex": 11,
      "con": 9,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing, Slashing",
    "damage_imm": "",
    "condition_imm": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
    "senses": "Darkvision 30 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Keen Smell.",
      "Swarm."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 - 7). "
  },
  {
    "id": 281,
    "name": "Swarm of Ravens",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 24,
    "speed": "10 ft., fly 50 ft.",
    "attributes": {
      "str": 6,
      "dex": 14,
      "con": 8,
      "int": 3,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +5",
    "damage_res": "Bludgeoning, Piercing, Slashing",
    "damage_imm": "",
    "condition_imm": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
    "senses": "Passive Perception 15",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Swarm."
    ],
    "actions": [
      "Beaks."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 - 7). "
  },
  {
    "id": 282,
    "name": "Tarrasque",
    "type": "Gargantuan monstrosity",
    "alignment": "unaligned",
    "ac": 25,
    "hp": 676,
    "speed": "40 ft.",
    "attributes": {
      "str": 30,
      "dex": 11,
      "con": 30,
      "int": 3,
      "wis": 11,
      "cha": 11
    },
    "saves": {
      "int": 5,
      "wis": 9,
      "cha": 9
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Fire, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "condition_imm": "Charmed, Frightened, Paralyzed, Poisoned",
    "senses": "Blindsight 120 ft.,  Passive Perception 10",
    "languages": "--",
    "cr": "30",
    "features": [
      "Legendary Resistance (3/Day).",
      "Magic Resistance.",
      "Reflective Carapace.",
      "Siege Monster."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Horns.",
      "Tail.",
      "Frightful Presence.",
      "Swallow.",
      "If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Attack.",
      "Move.",
      "Chomp (Costs 2 Actions)."
    ],
    "spellcasting": false,
    "details": "HP Dice: (33d20 + 330). "
  },
  {
    "id": 283,
    "name": "Thug",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 11,
    "hp": 32,
    "speed": "30 ft.",
    "attributes": {
      "str": 15,
      "dex": 11,
      "con": 14,
      "int": 10,
      "wis": 10,
      "cha": 11
    },
    "saves": {},
    "skills": "Intimidation +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any one language (usually Common)",
    "cr": "1/2",
    "features": [
      "Pack Tactics."
    ],
    "actions": [
      "Multiattack.",
      "Mace.",
      "Heavy Crossbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8 + 10). "
  },
  {
    "id": 284,
    "name": "Tiger",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 12,
    "hp": 37,
    "speed": "40 ft.",
    "attributes": {
      "str": 17,
      "dex": 15,
      "con": 14,
      "int": 3,
      "wis": 12,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +3, Stealth +6",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "--",
    "cr": "1",
    "features": [
      "Keen Smell.",
      "Pounce."
    ],
    "actions": [
      "Bite.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d10 + 10). "
  },
  {
    "id": 285,
    "name": "Treant",
    "type": "Huge plant",
    "alignment": "chaotic good",
    "ac": 16,
    "hp": 138,
    "speed": "30 ft.",
    "attributes": {
      "str": 23,
      "dex": 8,
      "con": 21,
      "int": 12,
      "wis": 16,
      "cha": 12
    },
    "saves": {},
    "skills": "",
    "damage_res": "Bludgeoning, Piercing",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "Common, Druidic, Elvish, Sylvan",
    "cr": "9",
    "features": [
      "False Appearance.",
      "Siege Monster."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Rock.",
      "Animate Trees (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d12 + 60). "
  },
  {
    "id": 286,
    "name": "Tribal Warrior",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 12,
    "hp": 11,
    "speed": "30 ft.",
    "attributes": {
      "str": 13,
      "dex": 11,
      "con": 12,
      "int": 8,
      "wis": 11,
      "cha": 8
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "Any one language",
    "cr": "1/8",
    "features": [
      "Pack Tactics."
    ],
    "actions": [
      "Spear."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 287,
    "name": "Triceratops",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 95,
    "speed": "50 ft.",
    "attributes": {
      "str": 22,
      "dex": 9,
      "con": 17,
      "int": 2,
      "wis": 11,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 10",
    "languages": "--",
    "cr": "5",
    "features": [
      "Trampling Charge."
    ],
    "actions": [
      "Gore.",
      "Stomp."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d12 + 30). "
  },
  {
    "id": 288,
    "name": "Troll",
    "type": "Large giant",
    "alignment": "chaotic evil",
    "ac": 15,
    "hp": 84,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 13,
      "con": 20,
      "int": 7,
      "wis": 9,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Giant",
    "cr": "5",
    "features": [
      "Keen Smell.",
      "Regeneration."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (8d10 + 40). "
  },
  {
    "id": 289,
    "name": "Twig Blight",
    "type": "Small plant",
    "alignment": "neutral evil",
    "ac": 13,
    "hp": 4,
    "speed": "20 ft.",
    "attributes": {
      "str": 6,
      "dex": 13,
      "con": 12,
      "int": 4,
      "wis": 8,
      "cha": 3
    },
    "saves": {},
    "skills": "Stealth +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Blinded, Deafened",
    "senses": "Blindsight 60 ft. (blind beyond this radius),  Passive Perception 9",
    "languages": "Common understands but can\u00e2\u0080\u0099t speak",
    "cr": "1/8",
    "features": [
      "False Appearance."
    ],
    "actions": [
      "Claws."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d6 + 1). "
  },
  {
    "id": 290,
    "name": "Tyrannosaurus Rex",
    "type": "Huge beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 136,
    "speed": "50 ft.",
    "attributes": {
      "str": 25,
      "dex": 10,
      "con": 19,
      "int": 2,
      "wis": 12,
      "cha": 9
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "--",
    "cr": "8",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Tail."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (13d12 + 52). "
  },
  {
    "id": 291,
    "name": "Unicorn",
    "type": "Large celestial",
    "alignment": "lawful good",
    "ac": 12,
    "hp": 67,
    "speed": "50 ft.",
    "attributes": {
      "str": 18,
      "dex": 14,
      "con": 15,
      "int": 11,
      "wis": 17,
      "cha": 16
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Charmed, Paralyzed, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "Celestial, Elvish, Sylvan, Telepathy 60 ft.",
    "cr": "5",
    "features": [
      "Charge.",
      "Innate Spellcasting.",
      "At will: detect evil and good, druidcraft, pass without trace",
      "1/day each: calm emotions, dispel evil and good, entangle",
      "Magic Resistance.",
      "Magic Weapons."
    ],
    "actions": [
      "Multiattack.",
      "Hooves.",
      "Horn.",
      "Healing Touch (3/Day).",
      "Teleport (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Hooves.",
      "Shimmering Shield (Costs 2 Actions).",
      "Heal Self (Costs 3 Actions)."
    ],
    "spellcasting": true,
    "details": "HP Dice: (9d10 + 18). "
  },
  {
    "id": 292,
    "name": "Vampire",
    "type": "Medium undead",
    "alignment": "lawful evil",
    "ac": 16,
    "hp": 144,
    "speed": "30 ft.",
    "attributes": {
      "str": 18,
      "dex": 18,
      "con": 18,
      "int": 17,
      "wis": 15,
      "cha": 18
    },
    "saves": {
      "dex": 9,
      "wis": 7,
      "cha": 9
    },
    "skills": "Perception +7, Stealth +9",
    "damage_res": "Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 120 ft.,  Passive Perception 17",
    "languages": "the languages it knew in life",
    "cr": "13",
    "features": [
      "Shapechanger.",
      "While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.",
      "While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can\u2019t pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.",
      "Legendary Resistance (3/Day).",
      "Misty Escape.",
      "While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.",
      "Regeneration.",
      "Spider Climb.",
      "Vampire Weaknesses.",
      "Forbiddance.The vampire can't enter a residence without an invitation from one of the occupants.",
      "Harmed by Running Water.The vampire takes 20 acid damage if it ends its turn in running water.",
      "Stake to the Heart.If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.",
      "Sunlight Hypersensitivity.The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
    ],
    "actions": [
      "Multiattack. (Vampire Form Only).",
      "Unarmed Strike (Vampire Form Only).",
      "Bite. (Bat or Vampire Form Only).",
      "Charm.",
      "Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.",
      "Children of the Night (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [
      "Move.",
      "Unarmed Strike.",
      "Bite."
    ],
    "spellcasting": false,
    "details": "HP Dice: (17d8 + 68). "
  },
  {
    "id": 293,
    "name": "Vampire Spawn",
    "type": "Medium undead",
    "alignment": "neutral evil",
    "ac": 15,
    "hp": 82,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 16,
      "con": 16,
      "int": 11,
      "wis": 10,
      "cha": 12
    },
    "saves": {
      "dex": 6,
      "wis": 3
    },
    "skills": "Perception +3, Stealth +6",
    "damage_res": "Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "the languages it knew in life",
    "cr": "5",
    "features": [
      "Regeneration.",
      "Spider Climb.",
      "Vampire Weaknesses.",
      "Forbiddance.The vampire can't enter a residence without an invitation from one of the occupants.",
      "Harmed by Running Water.The vampire takes 20 acid damage when it ends its turn in running water.",
      "Stake to the Heart.The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.",
      "Sunlight Hypersensitivity.The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
    ],
    "actions": [
      "Multiattack.",
      "Claws.",
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d8 + 33). "
  },
  {
    "id": 294,
    "name": "Veteran",
    "type": "Medium humanoid",
    "alignment": "any",
    "ac": 17,
    "hp": 58,
    "speed": "30 ft.",
    "attributes": {
      "str": 16,
      "dex": 13,
      "con": 14,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "Athletics +5, Perception +2",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Any one language (usually Common)",
    "cr": "3",
    "features": [],
    "actions": [
      "Multiattack.",
      "Longsword.",
      "Shortsword.",
      "Heavy Crossbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d8 + 18). "
  },
  {
    "id": 295,
    "name": "Violet Fungus",
    "type": "Medium plant",
    "alignment": "unaligned",
    "ac": 5,
    "hp": 18,
    "speed": "5 ft.",
    "attributes": {
      "str": 3,
      "dex": 1,
      "con": 10,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "Blinded, Deafened, Frightened",
    "senses": "Blindsight 30 ft.,  Passive Perception 6",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "False Appearance."
    ],
    "actions": [
      "Multiattack.",
      "Rotting Touch."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d8). "
  },
  {
    "id": 296,
    "name": "Vrock",
    "type": "Large fiend",
    "alignment": "chaotic evil",
    "ac": 15,
    "hp": 104,
    "speed": "40 ft., fly 60 ft.",
    "attributes": {
      "str": 17,
      "dex": 15,
      "con": 18,
      "int": 8,
      "wis": 13,
      "cha": 8
    },
    "saves": {
      "dex": 5,
      "wis": 4,
      "cha": 2
    },
    "skills": "",
    "damage_res": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 120 ft.,  Passive Perception 11",
    "languages": "Abyssal, Telepathy 120 ft.",
    "cr": "6",
    "features": [
      "Magic Resistance."
    ],
    "actions": [
      "Multiattack.",
      "Beak.",
      "Talons.",
      "Spores (Recharge 6).",
      "Stunning Screech (1/Day)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (11d10 + 44). "
  },
  {
    "id": 297,
    "name": "Vulture",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 10,
    "hp": 5,
    "speed": "10 ft., fly 50 ft.",
    "attributes": {
      "str": 7,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 12,
      "cha": 4
    },
    "saves": {},
    "skills": "Perception +3",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Sight and Smell.",
      "Pack Tactics."
    ],
    "actions": [
      "Beak."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d8 + 1). "
  },
  {
    "id": 298,
    "name": "Warhorse",
    "type": "Large beast",
    "alignment": "unaligned",
    "ac": 11,
    "hp": 19,
    "speed": "60 ft.",
    "attributes": {
      "str": 18,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 11",
    "languages": "--",
    "cr": "1/2",
    "features": [
      "Trampling Charge."
    ],
    "actions": [
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 3). "
  },
  {
    "id": 299,
    "name": "Warhorse Skeleton",
    "type": "Large undead",
    "alignment": "lawful evil",
    "ac": 13,
    "hp": 22,
    "speed": "60 ft.",
    "attributes": {
      "str": 18,
      "dex": 12,
      "con": 15,
      "int": 2,
      "wis": 8,
      "cha": 5
    },
    "saves": {},
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 9",
    "languages": "--",
    "cr": "1/2",
    "features": [],
    "actions": [
      "Hooves."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d10 + 6). "
  },
  {
    "id": 300,
    "name": "Water Elemental",
    "type": "Large elemental",
    "alignment": "neutral",
    "ac": 14,
    "hp": 114,
    "speed": "30 ft., swim 90 ft.",
    "attributes": {
      "str": 18,
      "dex": 14,
      "con": 18,
      "int": 5,
      "wis": 10,
      "cha": 8
    },
    "saves": {},
    "skills": "",
    "damage_res": "Acid; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60 ft.,  Passive Perception 10",
    "languages": "Aquan",
    "cr": "5",
    "features": [
      "Water Form.",
      "Freeze."
    ],
    "actions": [
      "Multiattack.",
      "Slam.",
      "Whelm (Recharge 4\u20136).",
      "The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d10 + 48). "
  },
  {
    "id": 301,
    "name": "Weasel",
    "type": "Tiny beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 1,
    "speed": "30 ft.",
    "attributes": {
      "str": 3,
      "dex": 16,
      "con": 8,
      "int": 2,
      "wis": 12,
      "cha": 3
    },
    "saves": {},
    "skills": "Perception +3, Stealth +5",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "0",
    "features": [
      "Keen Hearing and Smell."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (1d4 - 1). "
  },
  {
    "id": 302,
    "name": "Werebear",
    "type": "Medium humanoid",
    "alignment": "neutral good",
    "ac": 10,
    "hp": 135,
    "speed": "30 ft., 40 ft., climb 30 ft. in bear or hybrid form",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 11,
      "wis": 12,
      "cha": 12
    },
    "saves": {},
    "skills": "Perception +7",
    "damage_res": "",
    "damage_imm": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "condition_imm": "",
    "senses": "Passive Perception 17",
    "languages": "Common (can't speak in bear form)",
    "cr": "5",
    "features": [
      "Shapechanger.",
      "Keen Smell."
    ],
    "actions": [
      "Multiattack.",
      "Bite (Bear or Hybrid Form Only).",
      "Claw (Bear or Hybrid Form Only).",
      "Greataxe (Humanoid or Hybrid Form Only)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (18d8 + 54). "
  },
  {
    "id": 303,
    "name": "Wereboar",
    "type": "Medium humanoid",
    "alignment": "neutral evil",
    "ac": 10,
    "hp": 78,
    "speed": "30 ft., 40 ft. in boar form",
    "attributes": {
      "str": 17,
      "dex": 10,
      "con": 15,
      "int": 10,
      "wis": 11,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +2",
    "damage_res": "",
    "damage_imm": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "condition_imm": "",
    "senses": "Passive Perception 12",
    "languages": "Common (can't speak in boar form)",
    "cr": "4",
    "features": [
      "Shapechanger.",
      "Charge (Boar or Hybrid Form Only).",
      "Relentless (Recharges after a Short or Long Rest)."
    ],
    "actions": [
      "Multiattack (Humanoid or Hybrid Form Only).",
      "Maul (Humanoid or Hybrid Form Only).",
      "Tusks (Boar or Hybrid Form Only)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (12d8 + 24). "
  },
  {
    "id": 304,
    "name": "Wererat",
    "type": "Medium humanoid",
    "alignment": "lawful evil",
    "ac": 12,
    "hp": 33,
    "speed": "30 ft.",
    "attributes": {
      "str": 10,
      "dex": 15,
      "con": 12,
      "int": 11,
      "wis": 10,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +2, Stealth +4",
    "damage_res": "",
    "damage_imm": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "Common (can't speak in rat form)",
    "cr": "2",
    "features": [
      "Shapechanger.",
      "Keen Smell."
    ],
    "actions": [
      "Multiattack (Humanoid or Hybrid Form Only).",
      "Bite (Rat or Hybrid Form Only).",
      "Shortsword (Humanoid or Hybrid Form Only).",
      "Hand Crossbow (Humanoid or Hybrid Form Only)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 6). "
  },
  {
    "id": 305,
    "name": "Weretiger",
    "type": "Medium humanoid",
    "alignment": "neutral",
    "ac": 12,
    "hp": 120,
    "speed": "30 ft., 40 ft. in tiger form",
    "attributes": {
      "str": 17,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 13,
      "cha": 11
    },
    "saves": {},
    "skills": "Perception +5, Stealth +4",
    "damage_res": "",
    "damage_imm": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 15",
    "languages": "Common (can't speak in tiger form)",
    "cr": "4",
    "features": [
      "Shapechanger.",
      "Keen Hearing and Smell.",
      "Pounce (Tiger or Hybrid Form Only)."
    ],
    "actions": [
      "Multiattack (Humanoid or Hybrid Form Only).",
      "Bite (Tiger or Hybrid Form Only).",
      "Claw (Tiger or Hybrid Form Only).",
      "Scimitar (Humanoid or Hybrid Form Only).",
      "Longbow (Humanoid or Hybrid Form Only)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d8 + 48). "
  },
  {
    "id": 306,
    "name": "Werewolf",
    "type": "Medium humanoid",
    "alignment": "chaotic evil",
    "ac": 11,
    "hp": 58,
    "speed": "30 ft., 40 ft. in wolf form",
    "attributes": {
      "str": 15,
      "dex": 13,
      "con": 14,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "saves": {},
    "skills": "Perception +4, Stealth +3",
    "damage_res": "",
    "damage_imm": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "condition_imm": "",
    "senses": "Passive Perception 14",
    "languages": "Common (can't speak in wolf form)",
    "cr": "3",
    "features": [
      "Shapechanger.",
      "Keen Hearing and Smell."
    ],
    "actions": [
      "Multiattack. (Humanoid or Hybrid Form Only).",
      "Bite (Wolf or Hybrid Form Only).",
      "Claws. (Hybrid Form Only).",
      "Spear (Humanoid Form Only)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d8 + 18). "
  },
  {
    "id": 307,
    "name": "White Dragon Wyrmling",
    "type": "Medium dragon",
    "alignment": "chaotic evil",
    "ac": 16,
    "hp": 32,
    "speed": "30 ft., burrow 15 ft., fly 60 ft., swim 30 ft.",
    "attributes": {
      "str": 14,
      "dex": 10,
      "con": 14,
      "int": 5,
      "wis": 10,
      "cha": 11
    },
    "saves": {
      "dex": 2,
      "con": 4,
      "wis": 2,
      "cha": 2
    },
    "skills": "Perception +4, Stealth +2",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Draconic",
    "cr": "2",
    "features": [],
    "actions": [
      "Bite.",
      "Cold Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (5d8 + 10). "
  },
  {
    "id": 308,
    "name": "Wight",
    "type": "Medium undead",
    "alignment": "neutral evil",
    "ac": 14,
    "hp": 45,
    "speed": "30 ft.",
    "attributes": {
      "str": 15,
      "dex": 14,
      "con": 16,
      "int": 10,
      "wis": 13,
      "cha": 15
    },
    "saves": {},
    "skills": "Perception +3, Stealth +4",
    "damage_res": "Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Poison",
    "condition_imm": "Exhaustion, Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "The languages it knew in life",
    "cr": "3",
    "features": [
      "Sunlight Sensitivity."
    ],
    "actions": [
      "Multiattack.",
      "Life Drain.",
      "A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
      "Longsword.",
      "Longbow."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d8 + 18). "
  },
  {
    "id": 309,
    "name": "Will-o'-Wisp",
    "type": "Tiny undead",
    "alignment": "chaotic evil",
    "ac": 19,
    "hp": 22,
    "speed": "0 ft., fly 50 ft. (hover)",
    "attributes": {
      "str": 1,
      "dex": 28,
      "con": 10,
      "int": 13,
      "wis": 14,
      "cha": 11
    },
    "saves": {},
    "skills": "",
    "damage_res": "Acid, Cold, Fire, Necrotic, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "damage_imm": "Lightning, Poison",
    "condition_imm": "Exhaustion, Grappled, Paralyzed, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 120 ft.,  Passive Perception 12",
    "languages": "The languages it knew in life",
    "cr": "2",
    "features": [
      "Consume Life.",
      "Ephemeral.",
      "Incorporeal Movement.",
      "Variable Illumination."
    ],
    "actions": [
      "Shock.",
      "Invisibility."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d4). "
  },
  {
    "id": 310,
    "name": "Winter Wolf",
    "type": "Large monstrosity",
    "alignment": "neutral evil",
    "ac": 13,
    "hp": 75,
    "speed": "50 ft.",
    "attributes": {
      "str": 18,
      "dex": 13,
      "con": 14,
      "int": 7,
      "wis": 12,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +5, Stealth +3",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Passive Perception 15",
    "languages": "Common, Giant, Winter Wolf",
    "cr": "3",
    "features": [
      "Keen Hearing and Smell.",
      "Pack Tactics.",
      "Snow Camouflage."
    ],
    "actions": [
      "Bite.",
      "Cold Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (10d10 + 20). "
  },
  {
    "id": 311,
    "name": "Wolf",
    "type": "Medium beast",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 11,
    "speed": "40 ft.",
    "attributes": {
      "str": 12,
      "dex": 15,
      "con": 12,
      "int": 3,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +3, Stealth +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Passive Perception 13",
    "languages": "--",
    "cr": "1/4",
    "features": [
      "Keen Hearing and Smell.",
      "Pack Tactics."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (2d8 + 2). "
  },
  {
    "id": 312,
    "name": "Worg",
    "type": "Large monstrosity",
    "alignment": "neutral evil",
    "ac": 13,
    "hp": 26,
    "speed": "50 ft.",
    "attributes": {
      "str": 16,
      "dex": 13,
      "con": 13,
      "int": 7,
      "wis": 11,
      "cha": 8
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "Goblin, Worg",
    "cr": "1/2",
    "features": [
      "Keen Hearing and Smell."
    ],
    "actions": [
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (4d10 + 4). "
  },
  {
    "id": 313,
    "name": "Wraith",
    "type": "Medium undead",
    "alignment": "neutral evil",
    "ac": 13,
    "hp": 67,
    "speed": "0 ft., fly 60 ft. (hover)",
    "attributes": {
      "str": 6,
      "dex": 16,
      "con": 16,
      "int": 12,
      "wis": 14,
      "cha": 15
    },
    "saves": {},
    "skills": "",
    "damage_res": "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
    "damage_imm": "Necrotic, Poison",
    "condition_imm": "Charmed, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
    "senses": "Darkvision 60 ft.,  Passive Perception 12",
    "languages": "The languages it knew in life",
    "cr": "5",
    "features": [
      "Incorporeal Movement.",
      "Sunlight Sensitivity."
    ],
    "actions": [
      "Life Drain.",
      "Create Specter."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (9d8 + 27). "
  },
  {
    "id": 314,
    "name": "Wyvern",
    "type": "Large dragon",
    "alignment": "unaligned",
    "ac": 13,
    "hp": 110,
    "speed": "20 ft., fly 80 ft.",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 16,
      "int": 5,
      "wis": 12,
      "cha": 6
    },
    "saves": {},
    "skills": "Perception +4",
    "damage_res": "",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 14",
    "languages": "--",
    "cr": "6",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claws.",
      "Stinger."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (13d10 + 39). "
  },
  {
    "id": 315,
    "name": "Xorn",
    "type": "Medium elemental",
    "alignment": "neutral",
    "ac": 19,
    "hp": 73,
    "speed": "20 ft., burrow 20 ft.",
    "attributes": {
      "str": 17,
      "dex": 10,
      "con": 22,
      "int": 11,
      "wis": 10,
      "cha": 11
    },
    "saves": {},
    "skills": "Perception +6, Stealth +3",
    "damage_res": "Piercing and Slashing from Nonmagical Attacks that aren't Adamantine",
    "damage_imm": "",
    "condition_imm": "",
    "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 16",
    "languages": "Terran",
    "cr": "5",
    "features": [
      "Earth Glide.",
      "Stone Camouflage.",
      "Treasure Sense."
    ],
    "actions": [
      "Multiattack.",
      "Claw.",
      "Bite."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (7d8 + 42). "
  },
  {
    "id": 316,
    "name": "Yeti",
    "type": "Large monstrosity",
    "alignment": "chaotic evil",
    "ac": 12,
    "hp": 51,
    "speed": "40 ft., climb 40 ft.",
    "attributes": {
      "str": 18,
      "dex": 13,
      "con": 16,
      "int": 8,
      "wis": 12,
      "cha": 7
    },
    "saves": {},
    "skills": "Perception +3, Stealth +3",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Darkvision 60 ft.,  Passive Perception 13",
    "languages": "Yeti",
    "cr": "3",
    "features": [
      "Fear of Fire.",
      "Keen Smell.",
      "Snow Camouflage."
    ],
    "actions": [
      "Multiattack.",
      "Claw.",
      "Chilling Gaze."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (6d10 + 18). "
  },
  {
    "id": 317,
    "name": "Young Black Dragon",
    "type": "Large dragon",
    "alignment": "chaotic evil",
    "ac": 18,
    "hp": 127,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 19,
      "dex": 14,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "saves": {
      "dex": 5,
      "con": 6,
      "wis": 3,
      "cha": 5
    },
    "skills": "Perception +6, Stealth +5",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 16",
    "languages": "Common, Draconic",
    "cr": "7",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Acid Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d10 + 45). "
  },
  {
    "id": 318,
    "name": "Young Blue Dragon",
    "type": "Large dragon",
    "alignment": "lawful evil",
    "ac": 18,
    "hp": 152,
    "speed": "40 ft., burrow 20 ft., fly 80 ft.",
    "attributes": {
      "str": 21,
      "dex": 10,
      "con": 19,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "saves": {
      "dex": 4,
      "con": 8,
      "wis": 5,
      "cha": 7
    },
    "skills": "Perception +9, Stealth +4",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 19",
    "languages": "Common, Draconic",
    "cr": "9",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Lightning Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d10 + 64). "
  },
  {
    "id": 319,
    "name": "Young Brass Dragon",
    "type": "Large dragon",
    "alignment": "chaotic good",
    "ac": 17,
    "hp": 110,
    "speed": "40 ft., burrow 20 ft., fly 80 ft.",
    "attributes": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "saves": {
      "dex": 3,
      "con": 6,
      "wis": 3,
      "cha": 5
    },
    "skills": "Perception +6, Persuasion +5, Stealth +3",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 16",
    "languages": "Common, Draconic",
    "cr": "6",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Breath Weapons (Recharge 5\u20136).",
      "Fire Breath.",
      "Sleep Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (13d10 + 39). "
  },
  {
    "id": 320,
    "name": "Young Bronze Dragon",
    "type": "Large dragon",
    "alignment": "lawful good",
    "ac": 18,
    "hp": 142,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 21,
      "dex": 10,
      "con": 19,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "saves": {
      "dex": 3,
      "con": 7,
      "wis": 4,
      "cha": 6
    },
    "skills": "Insight +4, Perception +7, Stealth +3",
    "damage_res": "",
    "damage_imm": "Lightning",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 17",
    "languages": "Common, Draconic",
    "cr": "8",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Breath Weapons (Recharge 5\u20136).",
      "Lightning Breath.",
      "Repulsion Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (15d10 + 60). "
  },
  {
    "id": 321,
    "name": "Young Copper Dragon",
    "type": "Large dragon",
    "alignment": "chaotic good",
    "ac": 17,
    "hp": 119,
    "speed": "40 ft., climb 40 ft., fly 80 ft.",
    "attributes": {
      "str": 19,
      "dex": 12,
      "con": 17,
      "int": 16,
      "wis": 13,
      "cha": 15
    },
    "saves": {
      "dex": 4,
      "con": 6,
      "wis": 4,
      "cha": 5
    },
    "skills": "Deception +5, Perception +7, Stealth +4",
    "damage_res": "",
    "damage_imm": "Acid",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 17",
    "languages": "Common, Draconic",
    "cr": "7",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Breath Weapons (Recharge 5\u20136).",
      "Acid Breath.",
      "Slowing Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (14d10 + 42). "
  },
  {
    "id": 322,
    "name": "Young Gold Dragon",
    "type": "Large dragon",
    "alignment": "lawful good",
    "ac": 18,
    "hp": 178,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 23,
      "dex": 14,
      "con": 21,
      "int": 16,
      "wis": 13,
      "cha": 20
    },
    "saves": {
      "dex": 6,
      "con": 9,
      "wis": 5,
      "cha": 9
    },
    "skills": "Insight +5, Perception +9, Persuasion +9, Stealth +6",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 19",
    "languages": "Common, Draconic",
    "cr": "10",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Breath Weapons (Recharge 5\u20136).",
      "Fire Breath.",
      "Weakening Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (17d10 + 85). "
  },
  {
    "id": 323,
    "name": "Young Green Dragon",
    "type": "Large dragon",
    "alignment": "lawful evil",
    "ac": 18,
    "hp": 136,
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 19,
      "dex": 12,
      "con": 17,
      "int": 16,
      "wis": 13,
      "cha": 15
    },
    "saves": {
      "dex": 4,
      "con": 6,
      "wis": 4,
      "cha": 5
    },
    "skills": "Deception +5, Perception +7, Stealth +4",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 17",
    "languages": "Common, Draconic",
    "cr": "8",
    "features": [
      "Amphibious."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Poison Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d10 + 48). "
  },
  {
    "id": 324,
    "name": "Young Red Dragon",
    "type": "Large dragon",
    "alignment": "chaotic evil",
    "ac": 18,
    "hp": 178,
    "speed": "40 ft., climb 40 ft., fly 80 ft.",
    "attributes": {
      "str": 23,
      "dex": 10,
      "con": 21,
      "int": 14,
      "wis": 11,
      "cha": 19
    },
    "saves": {
      "dex": 4,
      "con": 9,
      "wis": 4,
      "cha": 8
    },
    "skills": "Perception +8, Stealth +4",
    "damage_res": "",
    "damage_imm": "Fire",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 18",
    "languages": "Common, Draconic",
    "cr": "10",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Fire Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (17d10 + 85). "
  },
  {
    "id": 325,
    "name": "Young Silver Dragon",
    "type": "Large dragon",
    "alignment": "lawful good",
    "ac": 18,
    "hp": 168,
    "speed": "40 ft., fly 80 ft.",
    "attributes": {
      "str": 23,
      "dex": 10,
      "con": 21,
      "int": 14,
      "wis": 11,
      "cha": 19
    },
    "saves": {
      "dex": 4,
      "con": 9,
      "wis": 4,
      "cha": 8
    },
    "skills": "Arcana +6, History +6, Perception +8, Stealth +4",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 18",
    "languages": "Common, Draconic",
    "cr": "9",
    "features": [],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Breath Weapons (Recharge 5\u20136).",
      "Cold Breath.",
      "Paralyzing Breath."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (16d10 + 80). "
  },
  {
    "id": 326,
    "name": "Young White Dragon",
    "type": "Large dragon",
    "alignment": "chaotic evil",
    "ac": 17,
    "hp": 133,
    "speed": "40 ft., burrow 20 ft., fly 80 ft., swim 40 ft.",
    "attributes": {
      "str": 18,
      "dex": 10,
      "con": 18,
      "int": 6,
      "wis": 11,
      "cha": 12
    },
    "saves": {
      "dex": 3,
      "con": 7,
      "wis": 3,
      "cha": 4
    },
    "skills": "Perception +6, Stealth +3",
    "damage_res": "",
    "damage_imm": "Cold",
    "condition_imm": "",
    "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 16",
    "languages": "Common, Draconic",
    "cr": "6",
    "features": [
      "Ice Walk."
    ],
    "actions": [
      "Multiattack.",
      "Bite.",
      "Claw.",
      "Cold Breath (Recharge 5\u20136)."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (14d10 + 56). "
  },
  {
    "id": 327,
    "name": "Zombie",
    "type": "Medium undead",
    "alignment": "neutral evil",
    "ac": 8,
    "hp": 22,
    "speed": "20 ft.",
    "attributes": {
      "str": 13,
      "dex": 6,
      "con": 16,
      "int": 3,
      "wis": 6,
      "cha": 5
    },
    "saves": {
      "wis": 0
    },
    "skills": "",
    "damage_res": "",
    "damage_imm": "Poison",
    "condition_imm": "Poisoned",
    "senses": "Darkvision 60 ft.,  Passive Perception 8",
    "languages": "Understands the languages of its creator but can't speak",
    "cr": "1/4",
    "features": [
      "Undead Fortitude."
    ],
    "actions": [
      "Slam."
    ],
    "bonus_actions": [],
    "reactions": [],
    "legendary_actions": [],
    "spellcasting": false,
    "details": "HP Dice: (3d8 + 9). "
  }
];
