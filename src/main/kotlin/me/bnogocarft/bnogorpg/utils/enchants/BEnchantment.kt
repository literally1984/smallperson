package me.bnogocarft.bnogorpg.utils.enchants

import org.bukkit.event.entity.EntityEvent

enum class BEnchant {
    SHARPNESS,
    SMITE,
    FIRE_ASPECT,
    BANE_OF_ARTHROPODS,
    KNOCKBACK,
    LOOTING,

    UNBREAKING,
    FORTUNE,
    LIGHTNING_ASPECT,
    LAVA_ASPECT,
    POISON_ASPECT,
    EXPLOSION_ASPECT,
    BLOODTHIRST,
    LIFESTEAL,
    STUN,

    PROTECTION,
    BLAST_PROTECTION,
    PROJECTILE_PROTECTION,
    MAGIC_PROTECTION,
    POTION_PROTECTION,
    FALL_PROTECTION,
    FIRE_PROTECTION,


    EFFICIENCY,
    SMELTING,
    SILK_TOUCH;

    fun getMaxLevel(): Int {
        return when (this) {
            SHARPNESS, SMITE, BANE_OF_ARTHROPODS, LOOTING, UNBREAKING, EFFICIENCY, PROTECTION, BLAST_PROTECTION,
            PROJECTILE_PROTECTION, MAGIC_PROTECTION, POTION_PROTECTION, FALL_PROTECTION, FIRE_PROTECTION -> 5

            FORTUNE, KNOCKBACK -> 3
            FIRE_ASPECT, LIGHTNING_ASPECT, LAVA_ASPECT, POISON_ASPECT -> 2
            SMELTING, SILK_TOUCH -> 1
            EXPLOSION_ASPECT -> TODO()
            BLOODTHIRST -> TODO()
            LIFESTEAL -> TODO()
            STUN -> TODO()
        }
    }
}

interface BEnchantment {
    val name: String
    val maxLevel: Int
    val level: Int
    fun apply(event: EntityEvent)
}

interface DamageBoostEnchant {
    val extraDamage: Int
}