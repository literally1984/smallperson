package me.bnogocarft.bnogorpg.Utils.BItemStack.EnchantUtils

import me.bnogocarft.bnogorpg.Utils.*
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BGear
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial

val enchants = arrayListOf(BEnchant.BANE_OF_ARTHROPODS, BEnchant.UNBREAKING)

class EnchantUtils {
    companion object {
        fun parseEnchant(stringEnchs: String): BEnchantment {
            TODO()
        }

        fun generateEnchantsFor(item: BGear): List<BEnchant> {
            val returnList = ArrayList<BEnchant>()
            when (item.material) {
                BMaterial.CACTUS_HELMET -> {

                }

                BMaterial.CACTUS_CHESTPLATE -> TODO()
                BMaterial.CACTUS_LEGGINGS -> TODO()
                BMaterial.CACTUS_BOOTS -> TODO()
                BMaterial.LAPIS_HELMET -> TODO()
                BMaterial.LAPIS_CHESTPLATE -> TODO()
                BMaterial.LAPIS_LEGGINGS -> TODO()
                BMaterial.LAPIS_BOOTS -> TODO()
                BMaterial.IRON_HELMET -> TODO()
                BMaterial.IRON_CHESTPLATE -> TODO()
                BMaterial.IRON_LEGGINGS -> TODO()
                BMaterial.IRON_BOOTS -> TODO()
                BMaterial.IRON_SWORD -> TODO()
                BMaterial.IRON_AXE -> TODO()
                BMaterial.IRON_HOE -> TODO()
                BMaterial.IRON_PICKAXE -> TODO()
                BMaterial.IRON_SHOVEL -> TODO()
                BMaterial.GOLD_HELMET -> TODO()
                BMaterial.GOLD_CHESTPLATE -> TODO()
                BMaterial.GOLD_LEGGINGS -> TODO()
                BMaterial.GOLD_BOOTS -> TODO()
                BMaterial.GOLD_SWORD -> TODO()
                BMaterial.GOLD_AXE -> TODO()
                BMaterial.GOLD_HOE -> TODO()
                BMaterial.GOLD_PICKAXE -> TODO()
                BMaterial.GOLD_SHOVEL -> TODO()
                BMaterial.DIAMOND_HELMET -> TODO()
                BMaterial.DIAMOND_CHESTPLATE -> TODO()
                BMaterial.DIAMOND_LEGGINGS -> TODO()
                BMaterial.DIAMOND_BOOTS -> TODO()
                BMaterial.DIAMOND_SWORD -> TODO()
                BMaterial.DIAMOND_AXE -> TODO()
                BMaterial.DIAMOND_HOE -> TODO()
                BMaterial.DIAMOND_PICKAXE -> TODO()
                BMaterial.DIAMOND_SHOVEL -> TODO()
                BMaterial.STONE_SWORD -> TODO()
                BMaterial.STONE_AXE -> TODO()
                BMaterial.STONE_HOE -> TODO()
                BMaterial.STONE_PICKAXE -> TODO()
                BMaterial.STONE_SHOVEL -> TODO()
                BMaterial.LEATHER_HELMET -> TODO()
                BMaterial.LEATHER_CHESTPLATE -> TODO()
                BMaterial.LEATHER_LEGGINGS -> TODO()
                BMaterial.LEATHER_BOOTS -> TODO()
                BMaterial.WOOD_SWORD -> TODO()
                BMaterial.WOOD_AXE -> TODO()
                BMaterial.WOOD_HOE -> TODO()
                BMaterial.WOOD_PICKAXE -> TODO()
                BMaterial.WOOD_SHOVEL -> TODO()
                BMaterial.BLADE_OF_HERMES -> TODO()
                BMaterial.GRAPPLING_HOOK -> TODO()
                BMaterial.DOUBLE_JUMP_BOOTS -> TODO()
                BMaterial.THUNDERBOLT -> TODO()
            }
            return returnList
        }
    }
}

data class Enchants(val enchants: List<BEnchantment>)