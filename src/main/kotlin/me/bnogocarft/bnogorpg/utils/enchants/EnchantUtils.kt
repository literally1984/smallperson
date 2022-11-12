package me.bnogocarft.bnogorpg.utils.enchants

import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.Enchantable

class EnchantUtils {
    companion object {
        val helmetEnchants = arrayListOf(BEnchant.PROTECTION)
        val chestplateEnchants = arrayListOf(BEnchant.PROTECTION)
        val leggingsEnchants = arrayListOf(BEnchant.PROTECTION)
        val bootsEnchants = arrayListOf(BEnchant.PROTECTION)
        val swordEnchants = arrayListOf(
            BEnchant.SHARPNESS, BEnchant.SMITE, BEnchant.BANE_OF_ARTHROPODS, BEnchant.LOOTING, BEnchant.FIRE_ASPECT,
            BEnchant.LIGHTNING_ASPECT, BEnchant.POISON_ASPECT, BEnchant.LAVA_ASPECT,
        )

        fun parseEnchant(stringEnchs: String): BEnchantment {
            TODO()
        }

        fun generateEnchantsFor(enchantable: Enchantable): List<BEnchantment> {
            val returnList = ArrayList<BEnchantment>()

            return returnList
        }
    }
}

data class Enchants(val enchants: List<BEnchantment>)