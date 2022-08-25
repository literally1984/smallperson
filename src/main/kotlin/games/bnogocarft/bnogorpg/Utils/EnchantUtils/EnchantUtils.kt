package games.bnogocarft.bnogorpg.Utils.EnchantUtils

import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BGear
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

val enchants = arrayListOf(BEnchant.BANE_OF_ARTHROPODS, BEnchant.DURABILITY)

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
            }
            return returnList
        }

        fun generateBaseEnchantGUI() {
            val fInv = GUIFactory.createInventory("Enchantment Table", 54)
            val backgroundz = ArrayList<BackgroundItem>()
            for (i in 0..53) {
                backgroundz.add(BackgroundItem(StandardBackground, i))
            }

            val bottomRow = ItemStack(Material.ENCHANTED_BOOK)
            val meta = Bukkit.getItemFactory().getItemMeta(Material.ENCHANTED_BOOK)
            meta.displayName = ""
            bottomRow.itemMeta = meta
            for (i in 45..53) {
                backgroundz.add(BackgroundItem(bottomRow, i))
            }

            val buttons = ArrayList<GUIButton>()
            buttons.add(GUIButton(ItemStack(Material.BOOK), 29, ::Enchant))
            buttons.add(GUIButton(ItemStack(Material.BOOK), 31, ::Enchant))
            buttons.add(GUIButton(ItemStack(Material.BOOK), 33, ::Enchant))
        }

        private fun Enchant(gui: OpenGUI) {
            val clickedItem = gui.inv.getItem(gui.slot)
            when (clickedItem.itemMeta.displayName) {
                "Enchant" -> {
                    val enchant = generateEnchantsFor(BGear(clickedItem))
                }
            }
        }
    }
}

data class Enchants(val enchants: List<BEnchantment>)