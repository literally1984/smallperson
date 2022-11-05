package me.bnogocarft.bnogorpg.Utils.EnchantUtils

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.Enchantable

val enchants = arrayListOf(BEnchant.BANE_OF_ARTHROPODS, BEnchant.UNBREAKING)

class EnchantUtils {
    companion object {
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