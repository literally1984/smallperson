package games.bnogocarft.bnogorpg.Utils

import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.DyeColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

class InventoryUtils {
    companion object {
        val base = ItemStack(Material.getMaterial(34))
        fun generateReforgeGUI(): Inventory {
            val inv = Bukkit.createInventory(null, 54, "${ChatColor.BLACK}Reforge")
            for (i in 0..53) {
                inv.setItem(i, base)
            }
            for (i in 0..8) {
                inv.setItem(i, ItemStack(Material.WOOL, 1, DyeColor.GREEN.dyeData.toShort()))
            }
            for (i in 45..53) {
                inv.setItem(i, ItemStack(Material.WOOL, 1, DyeColor.GREEN.dyeData.toShort()))
            }
            inv.setItem(13, ItemStack(Material.getMaterial(0)))
            inv.setItem(40, TODO("Make dis"))
            return inv
        }

        fun isInDoubleChest(slot: Int): Boolean {
            if (slot in 0..53) {
                return true
            }
            return false
        }

        fun isInRecipeSlot(slot: Int): Boolean {
            if (slot in 10..12 || slot in 19..21 || slot in 28..30) {
                return true
            }
            return false
        }
    }
}