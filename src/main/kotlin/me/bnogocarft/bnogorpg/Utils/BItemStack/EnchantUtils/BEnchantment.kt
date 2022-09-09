package me.bnogocarft.bnogorpg.Utils.BItemStack.EnchantUtils

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
    PROTECTION,
    BLAST_PROTECTION,
    PROJECTILE_PROTECTION,
    MAGIC_PROTECTION,
    POTION_PROTECTION,
    FALL_PROTECTION,

    SUFFOCATE_PROTECTION,
    FIRE_PROTECTION
}

data class BEnchantment(val enchant: BEnchant, val level: Int)