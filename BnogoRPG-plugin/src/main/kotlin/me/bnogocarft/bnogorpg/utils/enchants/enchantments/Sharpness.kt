package me.bnogocarft.bnogorpg.utils.enchants.enchantments

import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment
import me.bnogocarft.bnogorpg.utils.enchants.DamageBoostEnchant
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntityEvent

data class Sharpness(override val level: Int) : BEnchantment, DamageBoostEnchant {
    override val name = "SHARPNESS"
    override val maxLevel = 10
    override val extraDamage = when (level) {
        1 -> 3
        2 -> 4
        3 -> 5
        4 -> 6
        5 -> 7
        6 -> 8
        7 -> 9
        8 -> 10
        9 -> 11
        10 -> 12
        else -> throw (IllegalArgumentException("Provided level is higher than the max level or lower than 1!"))
    }

    init {
        if (level > maxLevel || level < 1) {
            throw (IllegalArgumentException("Provided level is higher than the max level or lower than 1!"))
        }
    }

    override fun apply(event: EntityEvent) {
        if (event is EntityDamageByEntityEvent) {
            event.damage += extraDamage
        }
    }
}