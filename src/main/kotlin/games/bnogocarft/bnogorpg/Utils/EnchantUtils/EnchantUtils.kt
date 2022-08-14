package games.bnogocarft.bnogorpg.Utils.EnchantUtils

import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BGear
import org.bukkit.Bukkit
import org.bukkit.ChatColor
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
            buttons.add(GUIButton(ItemStack(Material.BOOK), 29, ::noEnchant))
            buttons.add(GUIButton(ItemStack(Material.BOOK), 31, ::noEnchant))
            buttons.add(GUIButton(ItemStack(Material.BOOK), 33, ::noEnchant))
        }

        fun noEnchant(gui: OpenGUI) {
            gui.player.sendMessage("${ChatColor.YELLOW}You cannot enchant this item!")
        }
    }
}

data class Enchants(val enchants: List<BEnchantment>)