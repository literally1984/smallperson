package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import org.bukkit.inventory.ItemStack

data class BWeapon(override var Item: ItemStack) : BGear(Item) {

    constructor(stats: List<Int>, item: ItemStack) : this(item) {
        this.stats = ItemStat(stats, item)
    }

    /*
    DISPLAY NAME
    ID:
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
}