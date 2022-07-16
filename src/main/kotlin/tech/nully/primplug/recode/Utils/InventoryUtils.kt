package tech.nully.primplug.recode.Utils

import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.DyeColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import tech.nully.primplug.baseMethods

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
            inv.setItem(40, baseMethods.reforgeAnvil)
            return inv
        }

        fun isInDoubleChest(slot: Int): Boolean {
            if (slot in 0..53) {
                return true
            }
            return false
        }
    }
}