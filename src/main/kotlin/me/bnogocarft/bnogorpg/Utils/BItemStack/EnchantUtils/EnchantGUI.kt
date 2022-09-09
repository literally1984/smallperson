package me.bnogocarft.bnogorpg.Utils.BItemStack.EnchantUtils

import me.bnogocarft.bnogorpg.Utils.*
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BGear
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class EnchantGUI {
    companion object {

    }

    init {

    }

    private fun generateBaseEnchantGUI() {
        val fInv = GUIFactory.createInventory("Enchantment Table", 54)
        val layer1 = GUILayer()
        for (i in 0..53) {
            layer1.backgrounds.add(GUIBackground(sBK, i))
        }

        val bottomRow = ItemStack(Material.ENCHANTED_BOOK)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.ENCHANTED_BOOK)
        meta.displayName = ""
        bottomRow.itemMeta = meta
        for (i in 45..53) {
            layer1.backgrounds.add(GUIBackground(bottomRow, i))
        }


        layer1.buttons.add(GUIButton(ItemStack(Material.BOOK), 29, ::enchantHandler))
        layer1.buttons.add(GUIButton(ItemStack(Material.BOOK), 31, ::enchantHandler))
        layer1.buttons.add(GUIButton(ItemStack(Material.BOOK), 33, ::enchantHandler))
    }

    private fun enchantHandler(gui: OpenGUI) {
    }
}