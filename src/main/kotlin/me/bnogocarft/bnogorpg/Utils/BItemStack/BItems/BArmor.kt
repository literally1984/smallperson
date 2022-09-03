package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.Abilities.SetBonus
import me.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import org.bukkit.inventory.ItemStack

data class BArmor(override val Item: ItemStack) : BGear(Item) {

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

    Enchant, Enchant, Enchant,
    Enchant, Enchant, Enchant,
    Enchant, Enchant, Enchant,

    Rarity
     */
    var setBonuses = ArrayList<SetBonus>()
}