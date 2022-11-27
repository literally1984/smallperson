package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.B
import me.bnogocarft.bnogorpg.utils.stat.ItemStat
import me.bnogocarft.bnogorpg.utils.canBe
import org.bukkit.inventory.ItemStack

data class BWeapon(override var item: ItemStack) : BGear(item) {

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
    init {
        if (!(item canBe B.WEAPON)) {
            throw IllegalArgumentException("provided item is does not have a weapon tag")
        }
    }
}