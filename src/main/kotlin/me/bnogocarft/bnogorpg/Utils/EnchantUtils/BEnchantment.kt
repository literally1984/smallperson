package me.bnogocarft.bnogorpg.Utils.EnchantUtils

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
    FIRE_PROTECTION,

    EFFICIENCY,
    SMELTING,
    SILK_TOUCH;

    fun getMaxLevel(): Int {
        return when (this) {
            SHARPNESS, SMITE, BANE_OF_ARTHROPODS, LOOTING, UNBREAKING, EFFICIENCY, PROTECTION, BLAST_PROTECTION,
            PROJECTILE_PROTECTION, MAGIC_PROTECTION, POTION_PROTECTION, FALL_PROTECTION, FIRE_PROTECTION-> 5

            FORTUNE, KNOCKBACK, -> 3
            FIRE_ASPECT, LIGHTNING_ASPECT, LAVA_ASPECT, POISON_ASPECT,-> 2
            SMELTING, SILK_TOUCH -> 1
        }
    }
}

data class BEnchantment(val enchant: BEnchant, val level: Int) {
    init {
        if (level > enchant.getMaxLevel()) {
            throw IllegalArgumentException("Level cannot be higher than the max level of the enchantment")
        }
    }
}