package games.bnogocarft.bnogorpg.Utils.BItemStack

import games.bnogocarft.bnogorpg.Utils.Abilities.PlayerAbility.Ability
import games.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import org.bukkit.inventory.ItemStack

data class BWeapon(var item: ItemStack) : BGear(item) {

    constructor(stats: List<Int>, item: ItemStack) : this(item) {
        this.stats = ItemStat(stats, item)
    }

    /*
    DISPLAY NAME
    Damage: x
    Defense: x
    Magic Damage: x
    Magic Defense: x
    Mana: X
    Stamina: X

    Right Click Ability:
    blah
    blah

    Passive ability:
    blah
    blah

    Enchantments:
    Enchant, Enchant, Enchant,
    Enchant, Enchant, Enchant,
    Enchant, Enchant, Enchant,

    Level: x
    Exp: x/x

    Rarity
     */
    var abilities = ArrayList<Ability>()
}