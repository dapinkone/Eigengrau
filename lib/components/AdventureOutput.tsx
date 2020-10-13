import React, { useState } from 'react'
import { articles } from '../src/articles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AdventureOutput ({ merchant, madame, murderer, alchemist, profile }: any) {
  return (
    <>
      <h3>Place #1 - The Murder Site</h3>You come across the body of a woman lying in one of the back alleys near $tavern.name. She's well dressed, very pale, and roughly 45 years of age. It is not exactly clear how she died, but her eyes are bulging.
      <LinkReplace label="<h4>Inspect the body (Medicine (Wis) DC 10 Check)</h4>"><h4>Clue #1 - The Woman's Body</h4>It looks as though she was gagging before dying.</LinkReplace>

      <h4>Clue #2 - The Bloody Vomit</h4>There are two puddles of vomit and blood, each one next to a body. It is as if theirs innards were all they could retch.

      <h4>Clue #3 - The Man's Body</h4>A few feet away from the woman's body you notice an unidentified dead man who looks to have been homeless. His clothes are ratty and reek of alcohol. The body itself clearly hasn't been dead long enough to smell so putrid. No clear signs of how he died though his eyes are bulging wide.
      <LinkReplace label="If the players ask anyone about the man"><blockquote>The man is a homeless drunkard, who drank the potion thinking it to be alcohol. Purely a red herring, if players get too distracted by him, you can have any NPC recognise poor old Frogtoe Bill, and suggest that he met his end by drinking something stronger than what he could handle.</blockquote></LinkReplace>

      <h4>Clue #4 - The Empty Coin Purse</h4>Badly hidden on a bush nearby you find an empty woman's purse. Looks fairly expensive with a gold-leaf embroidery. There is a ledger crumpled up inside with an address to a merchant: 39 Mayfern Street.

      <LinkReplace label="Look near the bodies (Perception (Wis) DC 10)"><h4>Clue #5 - The Glass Vial</h4>Sitting between the two bodies you see a glass bottle with traces of a red liquid. It has no label.</LinkReplace>

      <LinkReplace label="Look near the bodies (Perception (Wis) DC 14)"><h4>Clue #6 - Drops of Red Liquid</h4>A few feet away from the woman's body you see droplets of a strange red liquid.
        <LinkReplace label="Inspect the liquid (Medicine (Wis) DC 10)">The liquid smells like a harsh medicinal tonic of some sort.</LinkReplace>
        <LinkReplace label="Compare it to the glass vial (Investigation (Int) DC 10)">The red liquid is the same in both cases.</LinkReplace></LinkReplace>
      <LinkReplace label="If your players get lost">On your way to the crime scene, you remember that you passed through a merchant stall that had really cheap healing potions for sale and it was located on a street with the same name as the one found in the ledger.</LinkReplace>

      <h3>Place #2 - Merchant Stall</h3>This merchant stall is located a few blocks away from the crime scene. Even though it's a small stand, it sells a wide variety of items. There's {articles.output(merchant.descriptor)} manning the stall that matches the address you found. He introduces himself as {profile(merchant)}, and asks what he can do for you.

      <h4>Clue #1 - Purses</h4> There are numerous purses for sale, though some are rather expensive. Looks like they use the same gold-leaf embroidery technique as the dead woman's purse.

      <h4>Clue #2 - Tonics and medicine</h4>There is a variety of tonics for sale, including healing potions for just 25gp!
      <blockquote>The healing potions here have a base price of 25 gp and heals 1d8-1. Each time the characters drinks this potion the modifier decreases by 1. If the modifier is greater than the number rolled on the dice, the character loses health proportional to the result.
    Example: If a character drinks this potion 4 times, he's gonna "heal" 1d8-4 if he rolls 2 on the dice, he's gonna lose 2 HP instead of healing.</blockquote>

      <h4>Clue #3 - Tonic bottle</h4>An exact match to the bottle that you've found at the crime scene except it's sealed. You can't tell the color of the contents inside.

      <h4>Clue #4 - Merchant's statement*</h4>
      <LinkReplace label="About the purse:">Inspecting the purse, {merchant.name} says "This purse belonged to my boss, {profile(madame)}."</LinkReplace>
      <LinkReplace label="About his boss:">"She hasn't come into work yet."</LinkReplace>
      <LinkReplace label="About a possible enemy of Madame Beaudry:">"Her and {profile(murderer)}, the apothecarist had a bitter rivalry... I'd say hateful would be a mild way to sum up their relationship."</LinkReplace>
      <LinkReplace label="About the bottle:">"We sell plenty of potions, but without the label I can't tell you if this one is ours."</LinkReplace>
      <LinkReplace label="About someone who could know more about the bottle:">Our alchemist {profile(alchemist)} would know if it's ours- he's at the workshop preparing this week's potions. Or you could talk to {profile(murderer)}, the apothecarist. He sells the same potion.</LinkReplace>
      <blockquote>After the merchant's statement (Clue #4) the characters have two possible locations to visit. The Apothecary (Place #3) and Madame Beaudry's Workshop (Place #4).
    The critical clue that the characters need to solve the whole mystery is at the Workshop.</blockquote>

      <h3>Place #3 - {murderer.firstName}'s Apothecary Stand</h3>This stand is relatively bigger than the first one but the items on display here are more focused on potions and concoctions.

      <h4>Clue #1 - Pestle and mortar</h4>A pestle and mortar set to pulverize ingredients.
      <LinkReplace label="On a Medicine (Wis) DC 10 check: (advantage if the player passed on the same test on Clue #6 at the Alley)">It's giving off a strong smell of a harsh medicinal tonic.</LinkReplace>
      <LinkReplace label="On an Investigation (Int) DC 10 check:">It seems like they were freshly used.</LinkReplace>

      <h4>Clue #2 - Medicinal tonics</h4>All of the bottle look like they were carefully crafted by hand.
      <LinkReplace label="On a Medicine (Wis) DC 10 check: (advantage if the player passed on the same test on Clue #6 at the Alley or Clue #1 from here)">They give off a strong smell of medicinal herbs and potions.</LinkReplace>

      <h4>Clue #3 - Supplies</h4>Empty bottle, pots, and pans. Essentially anything an alchemist would need to make potions.
      <LinkReplace label="On an Investigation (Int) DC 10 check:">It seems like they were recently used.</LinkReplace>

      <h4>Clue #4 - Alchemist books and journals</h4>A variety of alchemist and medical journals. Provides for extensive reading.

      <h4>Clue #5 - {murderer.name}'s statement</h4>
      <LinkReplace label="About the bottle:">"That's not my tonic. You see the cork there? I always mark mine when counting stock. No mark means it's Madame Beaudry's."</LinkReplace>
      <LinkReplace label="If the players don't give a hint that they know that Mme. Beaudry is dead and if {murderer.firstName} thinks that the players are trustworthy, or if they convince him that they are only asking this because they had a problem with one of the Mme. Beaudry's products. {murderer.firstName} confesses this to them:">"That wretched merchant dilutes her potions with all sorts of ingredients to keep her prices down. It's putting me out of business! You take too much of that poison and you'll be a dead man."</LinkReplace>

      <h3>Place #4 - Madame Beaudry's Workshop</h3>This workshop is only a block away from the crime scene. {profile(alchemist)} is stacking some boxes when you arrive, and welcomes you.

      <h4>Clue #1 - Pestle and mortar</h4>A pestle and mortar set to pulverize ingredients.
      <LinkReplace label="On an Investigation (Int) DC 10 check:">It seems like they were freshly used.</LinkReplace>

      <h4>Clue #2 - Medicine bottles</h4>More medicinal tonic bottles that match the bottle that you've found at the crime scene.

      <h4>Clue #3 - Notebook</h4>A notebook filled with ingredient compositions and potions recipes. A few of them look to be mixtures that can easily be cut with sugar.
      <LinkReplace label="<h4>Clue #4 - Letter from {murderer.name}*</h4>">
    Mme. Beaudry,

    I realize our last few conversations have been quite unpleasant for the both of us. But as good faith gesture, here is a fresh new potion for you to try. It is included in the package. I am certain you will enjoy it even more than the usual mixture.

    Best, {murderer.name}
      </LinkReplace>

      <h4>Clue #5 - {alchemist.firstName}'s statement</h4>
      <LinkReplace label="About the bottle:">"Yeah that bottle is from Madame Beaudry's shop, I'd recognize it anywhere."</LinkReplace>
      <LinkReplace label="If the players don't tell him that Mme. Beaudry is dead, he confesses to them this:">"Thank the gods that awful wretch isn't here today. She pays me nothing and I've had enough!"</LinkReplace>
      <LinkReplace label="If the players ask where he is going after quitting the job at Beaudry's shop, he says this:">"{murderer.firstName}'s given me a better offer. I just need to procure myself a little potion first."</LinkReplace>
    </>
  )
}

interface LinkReplaceProps {
  label: React.ReactNode
  children: React.ReactNode
}

function LinkReplace ({ label, children }: LinkReplaceProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(state => !state)

  return (
    <>
      <button onClick={toggle}>{label}</button>
      {isOpen && <div>{children}</div>}
    </>
  )
}
