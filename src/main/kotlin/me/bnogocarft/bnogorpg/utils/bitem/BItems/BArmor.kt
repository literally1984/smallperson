package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.Armorset.ArmorSet
import me.bnogocarft.bnogorpg.utils.Armorset.Sets.LapisSet
import me.bnogocarft.bnogorpg.utils.B
import me.bnogocarft.bnogorpg.utils.Exceptions.IllegalParameterException
import me.bnogocarft.bnogorpg.utils.StatUtils.ItemStat
import me.bnogocarft.bnogorpg.utils.canBe
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
        if (!(item canBe B.ARMOR)) {
            throw IllegalArgumentException("provided item is does not have a armor tag")
        }
        set = when (material.toString().split("_")[1].lowercase()) {
            "lapis" -> LapisSet()

            else -> throw IllegalParameterException(
                "Unable to identify \"${material}\" (identifier: \"${material.toString().split("_")[1]}\""
            )
        }

    }
}