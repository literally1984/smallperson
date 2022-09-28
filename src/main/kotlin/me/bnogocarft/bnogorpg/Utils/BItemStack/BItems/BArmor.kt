package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.Armorset.ArmorSet
import me.bnogocarft.bnogorpg.Utils.Armorset.Sets.LapisSet
import me.bnogocarft.bnogorpg.Utils.Exceptions.IllegalConstructorArgumentException
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
    val set: ArmorSet

    init {
        set = when (material.toString().split("_")[1]) {
            "Lapis" -> LapisSet()
            else -> throw IllegalConstructorArgumentException(
                "Unable to identify \"${material}\" (identifier: \"${material.toString().split("_")[1]}\""
            )
        }
    }
}