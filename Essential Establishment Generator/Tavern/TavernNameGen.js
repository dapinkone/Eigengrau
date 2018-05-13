setup.createTavernNameGen = function() {

var nounA     = ["Warhorse", "Horseman", "Maiden", "Mage", "Bachelor", "King", "Magistrate", "Warchief", "Warrior", "Mare", "Wolf", "Fox", "Lion", "Lamb", "Warden", "Mule", "Assassin", "Swordsman", "Lady", "Knight", "Soldier", "Wizard", "Warlock", "Ranger", "Bard", "Druid", "Monk", "Paladin", "Sorcerer", "Rogue", "Cleric", "Bear", "Goblin", "Kobold", "Gnome", "Halfling", "Dwarf", "Fool", "Virgin", "Horde", "Squire", "Eagle", "Rooster", "Piglet", "Thief", "Priest", "Friar", "Blacksmith", "Guard", "Stag", "Hag", "Devil", "Angel", "Serpent", "Snake", "Rat", "Mouse", "Bandit", "Chieftain", "Griffon", "Dragon", "Lizard", "Pony", "Baron", "Heifer", "Bull", "Hound", "Goat", "Toad", "Stallion", "Monster", "Vermin", "Beholder", "Monkey", "Elephant", "Boar", "Beagle", "Bat", "Demon", "Imp", "Sprite", "Fey", "Spirit", "Bitch", "Starling", "Minotaur", "Barbarian", "Prophet", "Merchant", "Cobbler", "Unicorn", "Ogre", "Nymph", "Butcher", "Captain", "Angler", "Lover", "Mason", "Tinker", "Whale"].random();
var nounB;
var nounC;
var adjective;
var verb;
var name;
var tavernnameroll = Math.floor(Math.random() * 5) + 1;


	switch (tavernnameroll) {
		case 1:
      adjective = ["Wayward", "Quiet", "Jolly", "Good", "Crooked", "White", "Gray", "Blackened", "Harried", "Crimson", "Silver", "Golden", "Disturbed", "Filthy", "Ugly", "Bastard", "Faltering", "Glorious", "Beautiful", "Handsome", "Wrinkled", "Unhappy", "Intelligent", "Lovely", "Ignorant", "Senile", "Sour", "Sweet", "Lonely", "Green", "Blind", "Hungry", "Worried", "Educated", "Stupid", "Emboldened", "Honorary", "Stinky", "Bottomless", "Greasy", "Sloppy", "Stylish", "Distressed", "Harrowed", "Tormented", "Mortified", "Lopsided", "Broken", "Moldy", "Gooey", "Fermented", "Blighted", "Ornate", "Drowned", "Murdered", "Widowed", "Hanged", "Angry", "Lusty", "Haunted", "Strong", "Withered", "Comely", "Pious", "Penitent", "Patient", "Drunk", "Worthy", "Wealthy", "Loathsome", "Weak", "Miniscule", "Miniature", "Enormous", "Enlarged", "Engorged", "Lecherous", "Despicable", "Lewd", "Portly", "Violent", "Bumbling", "Faulty", "Pristine", "Cleanly", "Cracked", "Splintered", "Jeweled", "Superior", "Flawless", "Common", "Exquisite", "Elegant", "Fine", "Dull", "Brittle", "Fragile", "Effeminate", "Masculine", "Supine"].random();
      break;
    case 2:
      nounB = ["Mount", "Saddle", "Guild", "Fangs", "Man", "Pardon", "Pleasure", "Belt", "Staff", "Shield", "Prince", "Master", "Servant", "Meal", "Prince", "Favor", "Love", "Word", "Scribe", "Apprentice", "Acolyte", "Dress", "Goddess", "God", "Gold", "Purse", "Trap", "King", "Son", "Sister", "Mother", "Daughter", "Cry", "Shout", "Cupboard", "Pantry", "Queen", "Wealth", "Star", "Void", "Woman", "Man", "Whore", "Butcher", "Anvil", "Tome", "Sacrifice","Armor", "Cup", "Pot", "Stove", "Stool", "Princess", "Chain", "Sword", "Pork", "Grain", "Tooth", "Lance", "Axe", "Scabbard", "Knife", "Dagger", "Spear", "Bow", "Crossbow", "Quarterstaff", "Staff", "Fire", "Ice", "Wind", "Earth", "Water", "Stone", "Ladle", "Monastery", "Chalice", "Goblet", "Dungeon", "Lust", "Lantern", "Bone", "Life", "Stone", "Mistress", "Mind", "Treasure", "Barter", "Armorer", "Butler", "Page", "Tome", "Feather", "Shadow", "Friend", "Labyrinth", "Mountain", "Hope", "Boot", "Gauntlet"].random();
      break;
    case 3:
      nounB = ["Mount", "Saddle", "Guild", "Fangs", "Man", "Pardon", "Pleasure", "Belt", "Staff", "Shield", "Prince", "Master", "Servant", "Meal", "Prince", "Favor", "Love", "Word", "Scribe", "Apprentice", "Acolyte", "Dress", "Goddess", "God", "Gold", "Purse", "Trap", "King", "Son", "Sister", "Mother", "Daughter", "Cry", "Shout", "Cupboard", "Pantry", "Queen", "Wealth", "Star", "Void", "Woman", "Man", "Whore", "Butcher", "Anvil", "Tome", "Sacrifice","Armor", "Cup", "Pot", "Stove", "Stool", "Princess", "Chain", "Sword", "Pork", "Grain", "Tooth", "Lance", "Axe", "Scabbard", "Knife", "Dagger", "Spear", "Bow", "Crossbow", "Quarterstaff", "Staff", "Fire", "Ice", "Wind", "Earth", "Water", "Stone", "Ladle", "Monastery", "Chalice", "Goblet", "Dungeon", "Lust", "Lantern", "Bone", "Life", "Stone", "Mistress", "Mind", "Treasure", "Barter", "Armorer", "Butler", "Page", "Tome", "Feather", "Shadow", "Friend", "Labyrinth", "Mountain", "Hope", "Boot", "Gauntlet"].random();
      break;
    case 4:
      verb = ["Moping", "Drowning", "Hanging", "Belching", "Running", "Walking", "Hunting", "Fighting", "Swinging", "Breaking", "Working", "Fermenting", "Flowering", "Worrying", "Following", "Flowing", "Complaining", "Standing", "Joking", "Laughing", "Panting", "Boarding", "Lounging", "Cutting", "Singing", "Staring", "Goading", "Disappointing", "Faltering", "Binding", "Winding", "Sundering", "Longing", "Fumbling", "Bumbling", "Stumbling", "Pining", "Whining", "Flying", "Hoarding", "Whoring", "Warring", "Winking", "Skittering", "Slithering", "Snoring", "Snorting", "Playing", "Practicing", "Grappling", "Burning", "Flaming", "Freezing", "Poisoning", "Burying", "Throwing", "Sparking", "Steaming", "Smiting", "Chittering", "Chattering", "Mumbling", "Grating", "Plowing", "Biting", "Howling", "Roaring", "Shouting", "Pouring", "Squeaking", "Stinging", "Charging", "Bleating", "Stabbing", "Goring", "Poking", "Swallowing", "Sucking", "Drinking", "Sneaking", "Hiding", "Slashing", "Limping", "Tripping", "Shifting", "Sliding", "Blinding", "Piercing", "Bludgeoning", "Crushing", "Hopping", "Thundering", "Hushing", "Crying", "Wailing", "Mourning", "Darkening", "Piling", "Digging", "Flinging"].random();
      break;
    case 5:
      nounC = ["Mount", "Saddle", "Guild", "Fangs", "Man", "Pardon", "Pleasure", "Belt", "Staff", "Shield", "Prince", "Master", "Servant", "Meal", "Prince", "Favor", "Love", "Word", "Scribe", "Apprentice", "Acolyte", "Dress", "Goddess", "God", "Gold", "Purse", "Trap", "King", "Son", "Sister", "Mother", "Daughter", "Cry", "Shout", "Cupboard", "Pantry", "Queen", "Wealth", "Star", "Void", "Woman", "Man", "Whore", "Butcher", "Anvil", "Tome", "Sacrifice","Armor", "Cup", "Pot", "Stove", "Stool", "Princess", "Chain", "Sword", "Pork", "Grain", "Tooth", "Lance", "Axe", "Scabbard", "Knife", "Dagger", "Spear", "Bow", "Crossbow", "Quarterstaff", "Staff", "Fire", "Ice", "Wind", "Earth", "Water", "Stone", "Ladle", "Monastery", "Chalice", "Goblet", "Dungeon", "Lust", "Lantern", "Bone", "Life", "Stone", "Mistress", "Mind", "Treasure", "Barter", "Armorer", "Butler", "Page", "Tome", "Feather", "Shadow", "Friend", "Labyrinth", "Mountain", "Hope", "Boot", "Gauntlet"].random();
      verb = ["Moping", "Drowning", "Hanging", "Belching", "Running", "Walking", "Hunting", "Fighting", "Swinging", "Breaking", "Working", "Fermenting", "Flowering", "Worrying", "Following", "Flowing", "Complaining", "Standing", "Joking", "Laughing", "Panting", "Boarding", "Lounging", "Cutting", "Singing", "Staring", "Goading", "Disappointing", "Faltering", "Binding", "Winding", "Sundering", "Longing", "Fumbling", "Bumbling", "Stumbling", "Pining", "Whining", "Flying", "Hoarding", "Whoring", "Warring", "Winking", "Skittering", "Slithering", "Snoring", "Snorting", "Playing", "Practicing", "Grappling", "Burning", "Flaming", "Freezing", "Poisoning", "Burying", "Throwing", "Sparking", "Steaming", "Smiting", "Chittering", "Chattering", "Mumbling", "Grating", "Plowing", "Biting", "Howling", "Roaring", "Shouting", "Pouring", "Squeaking", "Stinging", "Charging", "Bleating", "Stabbing", "Goring", "Poking", "Swallowing", "Sucking", "Drinking", "Sneaking", "Hiding", "Slashing", "Limping", "Tripping", "Shifting", "Sliding", "Blinding", "Piercing", "Bludgeoning", "Crushing", "Hopping", "Thundering", "Hushing", "Crying", "Wailing", "Mourning", "Darkening", "Piling", "Digging", "Flinging"].random();
      break;

		}


switch (tavernnameroll) {
	case 1:
		  name = "The " + adjective + " " + nounA;
      break;
	case 2:
    	name = "The " + nounA + " and " + nounB;
      break;
	case 3:
		  name = "The " + nounA + " and the " + nounB;
      break;
	case 4:
    	name = "The " + verb + " " + nounA;
      break;
	case 5:
    	name = "The " + verb + " " + nounA + " and the " + nounC;
      break;

}

return {
  name           : name,
  tavernnameroll : tavernnameroll,
  nounA          : nounA,
  nounB          : nounB,
  nounC          : nounC,
  adjective      : adjective,
  verb           : verb
  };

};
