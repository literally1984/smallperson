package games.bnogocarft.bnogorpg.Utils.EnchantUtils

enum class BEnchant {
    SHARPNESS,
    SMITE,
    FIRE_ASPECT,
    BANE_OF_ARTHROPODS,
    KNOCKBACK,
    LOOTING,

    DURABILITY,

}

data class BEnchantment(val enchant: BEnchant, val level: Int)