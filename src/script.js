/*

  Example input:

  state of Weapons subcategory: show

  Example output:

  # Weapons
  
  show "^xy$" 1 2 3
  hide "^xy$" 4 sacred 


*/

/*

  Visibility:

  3 state
  Show
  Notify
  Hide

  Rarities:

  Inferior
  Normal
  Superior
  Magic
  Rare
  Unique
  sEt

*/
/*
Short Sword
Scimitar
Saber
Falchion
Broad Sword
Long Sword
War Sword
Two-Handed Sword
Claymore
Giant Sword
Bastard Sword
Flamberge
Great Sword
Crystal Sword
Hand Axe
Axe
Double Axe
Military Pick
War Axe
Large Axe
Broad Axe
Battle Axe
Great Axe
Giant Axe
Club
Spiked Club
Mace
Morning Star
Flail
War Hammer
Maul
Great Maul
Scepter
Grand Scepter
War Scepter
Javelin
Pilum
Short Spear
Glaive
Throwing Spear
Spear
Trident
Brandistock
Spetum
Pike
Scythe
Dagger
Dirk
Kriss
Blade
Throwing Knife
Flying Knife
Balanced Knife
Throwing Axe
Balanced Axe
Short Staff
Long Staff
Gnarled Staff
Battle Staff
War Staff
Short Bow
Hunter's Bow
Long Bow
Composite Bow
Short Battle Bow
Long Battle Bow
Short War Bow
Long War Bow
Light Crossbow
Crossbow
Heavy Crossbow
Repeating Crossbow
Stag Bow
Reflex Bow
Maiden Spear
Maiden Pike
Maiden Javelin
Katar
Wrist Blade
Hatchet Hands
Cestus
Claws
Blade Talons
Scissors Katar
Halberd
Naginata
Spatha
Backsword
Ida
Bronze Sword
Kriegsmesser
Mammen Axe
Hammerhead Axe
Ono
Valaska
Labrys
Compound Bow
Serpent Bow
Maple Bow
Viper Bow
Recurve Bow
Flamen Staff
Raptor Scythe
Bonesplitter
Marrow Staff
Hexblade
Spirit Edge
Needle Crossbow
Dart Thrower
Stinger Crossbow
Trebuchet
Wand
Yew Wand
Bone Wand
Grim Wand
Bonebreaker
Goedendag
Angel Star
Hand of God
Holy Lance
Tepoztopilli
Eagle Orb
Sacred Globe
Smoked Sphere
Clasped Orb
Jared's Stone
Warp Blade
Quilted Armor
Leather Armor
Hard Leather Armor
Studded Leather
Ring Mail
Scale Mail
Chain Mail
Breast Plate
Splint Mail
Plate Mail
Field Plate
Light Plate
Gothic Plate
Full Plate Mail
Ancient Armor
Cap
Skull Cap
Helm
Full Helm
Great Helm
Crown
Circlet
Coronet
Tiara
Diadem
Mask
Bone Helm
Buckler
Small Shield
Large Shield
Kite Shield
Tower Shield
Gothic Shield
Bone Shield
Spiked Shield
Sash
Light Belt
Belt
Heavy Belt
Plated Belt
Leather Gloves
Heavy Gloves
Chain Gloves
Light Gauntlets
Gauntlets
Boots
Heavy Boots
Chain Boots
Light Plated Boots
Greaves
Morion
Cervelliere
Einherjar Helm
Spangenhelm
Athulua's Hand
Phoenix Shield
Setzschild
Parma
Aspis
Totem Shield
Bladed Shield
Jawbone Cap
Fanged Helm
Horned Helm
Assault Helmet
Avenger Guard
Bull Shield
Bronze Shield
Gilded Shield
Wolf Head
Hawk Helm
Antlers
Falcon Mask
Spirit Mask
Preserved Head
Zombie Head
Unraveller Head
Gargoyle Head
Demon Head
Hundsgugel
Blackguard Helm
Targe
Rondache
Heraldic Shield
Aerin Shield
Crown Shield
Gambeson
Kazarghand
Lamellar Armor
Banded Plate
Ceremonial Armor

*/


sideBarElements = [
	{
		"name" : "Weapons",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
	},
	{
		"name" : "Armors",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
	},
	{
		"name" : "Jewelry",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Uniques",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
	},
	{
		"name" : "Shrines",
		"visibility" : "show",
	},
	{
		"name" : "Sets",
		"visibility" : "show",
	},
	{
		"name" : "Misc",
		"visibility" : "show",
	}
];
weaponCategories = [
	{
		"name" : "One-Handed Swords",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Two-Handed Swords",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Crystal Swords",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "One-Handed Axes",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Two-Handed Axes",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Maces",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Hammers",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Scepters",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Javelins",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Spears",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Scythes",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Daggers",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Throwing Knives",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Throwing Axes",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Staves",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Bows",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Crossbows",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Amazon Bows",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Amazon Spears",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Amazon Javelins",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Assassin Naginatas",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Assassin Claws",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Barbarian Sword",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Barbarian One-Handed Axes",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Barbarian Two-Handed Axes",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Druid Bows",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Druid Staves",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Necromancer Scythe",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Necromancer Staves",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Necromancer Daggers",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Necromancer Crossbows",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Necromancer Wands",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Paladin Clubs",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Paladin Maces",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Paladin Hammers",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Paladin Spears",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Sorceress Orbs",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Sorceress Crystal Swords",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	}
];
ItemList = [
	{
		"name" : "Short Sword",
		"image" : "Short_Sword.jpg",
		"category" : "One-Handed Swords",
		"t1visibility" : "ssssssxx",
		"t2visibility" : "ssssssxx",
		"t3visibility" : "ssssssxx",
		"t4visibility" : "ssssssxx",
		"sacredvisibility" : "ssssssss",
	},
	{
		"name" : "Long Sword",
		"image" : "Long_Sword.jpg",
		"category" : "One-Handed Swords",
		"t1visibility" : "ssssssxx",
		"t2visibility" : "ssssssxx",
		"t3visibility" : "ssssssxx",
		"t4visibility" : "ssssssxx",
		"sacredvisibility" : "ssssssss",
	},
	{
		"name" : "Claymore",
		"image" : "Long_Sword.jpg",
		"category" : "Two-Handed Swords",
		"t1visibility" : "ssssssxx",
		"t2visibility" : "ssssssxx",
		"t3visibility" : "ssssssxx",
		"t4visibility" : "ssssssxx",
		"sacredvisibility" : "ssssssss",
	}
];
armorCategories = [
	{
		"name" : "Body Armors",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Helms",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Circlets",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Special Helms",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Belts",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Gloves",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Boots",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Amazon Helms",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Amazon Shields",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Assassin Shields",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Barbarian Helms",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Druid Helms",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Necromancer Shields",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Paladin Helms",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Paladin Sheilds",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	},
	{
		"name" : "Sorceress Body Armors",
		"groupvisibility": "show",
		"t1visibility" : "show",
		"t2visibility" : "show",
		"t3visibility" : "show",
		"t4visibility" : "show",
		"sacredvisibility" : "show",
		"rarityvisiblity" : "insmrue",
		"ethereal" : "show"
		
	}
];
shrineList = [
	{
		"name" : "Tainted",
		"visibility" : "show"
	},
	{
		"name" : "Intimidating",
		"visibility" : "show"
	},
	{
		"name" : "Weird",
		"visibility" : "show"
	},
	{
		"name" : "Abandoned",
		"visibility" : "show"
	},
	{
		"name" : "Creepy",
		"visibility" : "show"
	},
	{
		"name" : "Eerie",
		"visibility" : "show"
	},
	{
		"name" : "Quiet",
		"visibility" : "show"
	},
	{
		"name" : "Trinity",
		"visibility" : "show"
	},
	{
		"name" : "Hidden",
		"visibility" : "show"
	},
	{
		"name" : "Spiritual",
		"visibility" : "show"
	},
	{
		"name" : "Magical",
		"visibility" : "show"
	},
	{
		"name" : "Sacred",
		"visibility" : "show"
	},
	{
		"name" : "Fascinating",
		"visibility" : "show"
	},
	{
		"name" : "Ornate",
		"visibility" : "show"
	},
	{
		"name" : "Enchanted",
		"visibility" : "show"
	},
	{
		"name" : "Shimmering",
		"visibility" : "show"
	}
];
miscList = [
	{
		"name" : "Quest items",
		"visibility" : "show"
	},
	{
		"name" : "Mystic Orbs",
		"visibility" : "show"
	},
	{
		"name" : "Gold",
		"visibility" : "show"
	},
	{
		"name" : "Oils",
		"visibility" : "show"
	}
];
jewelryList = [
	{
		"name" : "Rings",
		"visibility" : "show"
	},
	{
		"name" : "Amulets",
		"visibility" : "show"
	},
	{
		"name" : "Jewels",
		"visibility" : "show"
	}
];
uniqueCategories = [
	{
		"name" : "Tiered",
		"visibility" : "show"
	},
	{
		"name" : "Sacred",
		"visibility" : "show"
	}
];
setList = [
	{
		"name" : "Amazon",
		"visibility" : "show"
	},
	{
		"name" : "Assassin",
		"visibility" : "show"
	},
	{
		"name" : "Barbarian",
		"visibility" : "show"
	},
	{
		"name" : "Druid",
		"visibility" : "show"
	},
	{
		"name" : "Necromancer",
		"visibility" : "show"
	},
	{
		"name" : "Paladin",
		"visibility" : "show"
	},
	{
		"name" : "Sorceress",
		"visibility" : "show"
	},
	{
		"name" : "Other",
		"visibility" : "show"
	}
];


/**
 * 
 * Global variables, dom elements
 * 
 * 
**/

hideByDefault = false; // Global var to handle default behavior for any item : equals to 'hide ".*" as last line'
let subCategoryMap = new Map() // Contains subcategory list, with the main category name as the key 

subcategoryMenu = document.getElementById("subcategorylist") // subcategory menu bar div element
sidebar = document.getElementById("sidebar") // sidebar menu element
mainMenu = document.getElementById("mainmenu") // mainmenu element
subcategoryArea =  document.getElementById("itemrulesarea") // subcategory main area

let currentCategory; // Holds currenty selected main category
let categoryVisibilityCheckBox = document.getElementById("categoryVisibility"); // hold state of subcategoryMenu's checkbox state


/**
 *
 * Startup functions to create elements, and initilize stuff
 *  
**/

// Add all subcategories to subCategoryMap
subCategoryMap.set("Weapons", weaponCategories)
subCategoryMap.set("Armors", armorCategories)
subCategoryMap.set("Shrines", shrineList)
subCategoryMap.set("Jewelry", jewelryList)
subCategoryMap.set("Uniques", uniqueCategories)
subCategoryMap.set("Misc", miscList)
subCategoryMap.set("Sets", setList)

// Add all main categories to sidebar
sideBarElements.forEach(element => {
	addCategory(element.name)
});

// Add event listener to subcategory
subcategoryMenu.addEventListener("change", () => fillItemArea())

// Select default category as Weapons
CategorySelection("Weapons")

/*
	Main category sidebar related function
*/

//Add new category to sidebar
function addCategory(categoryName){
	categoryDiv = document.createElement("div")
	categoryDiv.id="categoryname"

	// Add category button
	tempButton = document.createElement("button")
	tempButton.textContent = categoryName
	tempButton.id="categorybutton"
	tempButton.addEventListener("click", () => CategorySelection(categoryName))
	categoryDiv.appendChild(tempButton)

	// Add default action radio buttons
	createRadioButtons(categoryName, categoryDiv)

	sidebar.appendChild(categoryDiv)


};

// Sets current state of subcategoryMenu's checkbox state
function setCheckBoxState(){
	currentSubcategory = subcategoryMenu.value
	categoryVisibilityCheckBox.checked = categoryVisibilities.get(currentCategory)
	recreateNode(categoryVisibilityCheckBox)
	labelText = document.getElementById("categoryVisibilityLabel")

	if(categoryVisibilities.get(currentCategory) == true){
		labelText = "Show Category"
	}
	else{
		labelText = "Hide Category"
	}
	categoryVisibilityCheckBox.addEventListener("change", () => {
		currentState = categoryVisibilities.get(currentCategory)
		categoryVisibilities.set(currentCategory, !currentState)
	})
}

function getSubcategoryVisibility(subcategoryName){
	
}

// Add radio buttons to category div
function createRadioButtons(categoryName, categoryDiv){
	categoryButtonsDiv = document.createElement("div")
	categoryButtonsDiv.id = "categoryradiobuttondiv"

	categoryRadioButtonsDiv = document.createElement("div")
	categoryRadioButtonsDiv.id = "categoryradiobuttondiv2"

	categoryText = document.createElement("div")
	categoryText.textContent = "Default action:"
	categoryText.id = "categorytextbox"
	categoryButtonsDiv.appendChild(categoryRadioButtonsDiv)
	categoryButtonsDiv.appendChild(categoryText)



	createRadioButton(categoryName, categoryRadioButtonsDiv, "Hide")
	createRadioButton(categoryName, categoryRadioButtonsDiv, "Show")
	createRadioButton(categoryName, categoryRadioButtonsDiv, "Notify")
	categoryDiv.appendChild(categoryButtonsDiv)
}

function createRadioButton(categoryName, div, state){
	tempLabel = document.createElement("label")
	tempLabel.for = categoryName + "_DefaultAction"
	tempLabel.textContent = " " + state + ":"
	tempLabel.id = "categoryradiobutton"

	tempButton = document.createElement("input")
	tempButton.id = categoryName + "_" + state 
	tempButton.name = categoryName + "_DefaultAction"
	tempButton.type = "radio"
	if(state == "Show"){
		tempButton.checked = true
	}

	div.appendChild(tempLabel)
	div.appendChild(tempButton)
}

/*
	Subcategory top bar related functions
*/

// TODO: Hide selection menu if not needed, like rings/ammies
// Callback function for when a main category is selected

function CategorySelection(categoryName){
	category = subCategoryMap.get(categoryName);

	if(category){
		ClearSelectMenu(subcategoryMenu)
	  	currentCategory = categoryName
	  	//setCheckBoxState()
  
		  category.forEach(element => {
			tempSelection = document.createElement("option")
		  	tempSelection.textContent = element.name
			subcategoryMenu.appendChild(tempSelection)
	  	});
	}
	fillItemArea()
};

function ClearSelectMenu(menu){
	var i, L = menu.options.length - 1;
	for(i = L; i >= 0; i--) {
		menu.remove(i);
	}
}


/*
	Subcategory main area functions
*/

function fillItemArea(){
	console.log("dfs")
	let categoryName = subcategoryMenu.value
	RemoveIDs("subcategorymainarea")
	ItemList.forEach(element => {
		if(element.category == categoryName){
			addItem(element)
		}
	});
}

function addItem(itemData){
	let imageName = itemData.image
	let itemName = itemData.name

	mainItemDiv = document.createElement("div")
	mainItemDiv.id = "subcategorymainarea"

	mainImageDiv = document.createElement("div")
	mainImageDiv.id = "subcategoryimagearea"
	itemImage = document.createElement("img")
	itemImage.src = "../images/Base_Items/" + imageName
	mainImageDiv.appendChild(itemImage)

	mainSelectionDiv = document.createElement("div")
	mainSelectionDiv.id = "subcategorysettingsarea"

	selectionTopBarDiv = document.createElement("div")
	selectionTopBarDiv.id = "subcategorysettingstitle"
	selectionTopBarDiv.textContent = itemName
	
	let raritiesDiv = document.createElement("div")
	raritiesDiv.id = "rarites"

	addRarityColumn("Inferior", raritiesDiv)
	addRarityColumn("Normal", raritiesDiv)
	addRarityColumn("Superior", raritiesDiv)
	addRarityColumn("Magic", raritiesDiv)
	addRarityColumn("Rare", raritiesDiv)
	addRarityColumn("Unique", raritiesDiv)
	addRarityColumn("Set", raritiesDiv)
	addRarityColumn("Ethereal", raritiesDiv)

	tier1div = document.createElement("div")
	tier1div.id = "tier1"
	addOptions("t1visibility", tier1div, itemData)

	tier2div = document.createElement("div")
	tier2div.id = "tier2"
	addOptions("t2visibility", tier2div, itemData)
	
	tier3div= document.createElement("div")
	tier3div.id = "tier3"
	addOptions("t3visibility", tier3div, itemData)
	
	tier4div = document.createElement("div")
	tier4div.id = "tier4"
	addOptions("t4visibility", tier4div, itemData)
	
	sacreddiv = document.createElement("div")
	sacreddiv.id = "sacred"
	addOptions("sacredvisibility", sacreddiv, itemData)

	mainSelectionDiv.appendChild(selectionTopBarDiv)
	mainSelectionDiv.appendChild(raritiesDiv)
	mainSelectionDiv.appendChild(tier1div)
	mainSelectionDiv.appendChild(tier2div)
	mainSelectionDiv.appendChild(tier3div)
	mainSelectionDiv.appendChild(tier4div)
	mainSelectionDiv.appendChild(sacreddiv)

	mainItemDiv.appendChild(mainSelectionDiv)
	mainItemDiv.appendChild(mainImageDiv)

	subcategoryArea.appendChild(mainItemDiv)
}

function addRarityColumn(columnName, parentDiv){
	let rarityCol = document.createElement("div")
	rarityCol.id = "rarityColumn"
	rarityCol.textContent = columnName

	parentDiv.appendChild(rarityCol)	
}

function addOptions(visibility, div, itemData){
	let count = eval("itemData." + visibility).replace(/x*/g,"").length
	let tierName = document.createElement("div")
	tierName.id = "tiernamebox";
	let tier = ""
	switch(visibility[1]){
		case "1":
			tier = "Tier 1: "
			break;
		case "2":
			tier = "Tier 2: "
			break;
		case "3":
			tier = "Tier 3: "
			break;
		case "4":
			tier = "Tier 4: "
			break;
		case "a":
			tier = "Sacred: "
			break;
	}
	tierName.textContent = tier
	div.appendChild(tierName)

	for(i = 0; i < count; i++){
		tempButton = document.createElement("button")
		tempButton.id = "filteractionbutton"
		tempButton.name = itemData.name
		tempButton.textContent = "Show"
		div.appendChild(tempButton)
	}
}

/*
	Helper functions
*/

// Clears event listeners
function recreateNode(old_element) {
	var new_element = old_element.cloneNode(true);
	old_element.parentNode.replaceChild(new_element, old_element);
categoryVisibilityCheckBox = new_element
}

// Remove all elements with a given ID
function RemoveIDs(elementID){
	let element;
	while(element = document.getElementById(elementID)){
		element.parentNode.removeChild(element);
	}
}