package games.bnogocarft.bnogorpg.Utils.EnchantUtils

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BGear
import games.bnogocarft.bnogorpg.Utils.BackgroundItem
import games.bnogocarft.bnogorpg.Utils.GUIButton
import games.bnogocarft.bnogorpg.Utils.GUIFactory
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class EnchantUtils {
    companion object {
        fun parseEnchant(stringEnchs: String): BEnchantment {
            TODO()
        }
        fun generateEnchantsFor(item: BGear): List<Enchants> {
            val returnList = ArrayList<Enchants>()
            TODO("Generate enchants for the item")
            return returnList
        }

        fun generateBaseEnchantGUI() {
            val fInv = GUIFactory.createInventory("Enchantment Table", 54)
            val backgroundz = ArrayList<BackgroundItem>()
            for (i in 0..53) {
                backgroundz.add(BackgroundItem(ItemStack(Material.THIN_GLASS), i))
            }

            for (i in 45..53) {
                backgroundz.add(BackgroundItem(ItemStack(Material.ENCHANTED_BOOK), i))
            }
        }
    }
}
data class Enchants(val enchants: List<BEnchantment>) {}