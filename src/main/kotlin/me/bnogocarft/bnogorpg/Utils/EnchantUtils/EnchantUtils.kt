package me.bnogocarft.bnogorpg.Utils.EnchantUtils

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BGear
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial

val enchants = arrayListOf(BEnchant.BANE_OF_ARTHROPODS, BEnchant.UNBREAKING)

class EnchantUtils {
    companion object {
        fun parseEnchant(stringEnchs: String): BEnchantment {
            TODO()
        }

        fun generateEnchantsFor(item: BItem): List<BEnchant> {
            val returnList = ArrayList<BEnchant>()

            return returnList
        }
    }
}

data class Enchants(val enchants: List<BEnchantment>)