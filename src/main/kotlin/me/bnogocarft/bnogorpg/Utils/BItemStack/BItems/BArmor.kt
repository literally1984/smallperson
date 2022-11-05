package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.Armorset.ArmorSet
import me.bnogocarft.bnogorpg.Utils.Armorset.Sets.LapisSet
import me.bnogocarft.bnogorpg.Utils.Exceptions.IllegalParameterException
import me.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import org.bukkit.inventory.ItemStack

data class BArmor(override val item: ItemStack) : BGear(item) {

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
        set = when (material.toString().split("_")[1].lowercase()) {
            "lapis" -> LapisSet()

            else -> throw IllegalParameterException(
                "Unable to identify \"${material}\" (identifier: \"${material.toString().split("_")[1]}\""
            )
        }

    }
}