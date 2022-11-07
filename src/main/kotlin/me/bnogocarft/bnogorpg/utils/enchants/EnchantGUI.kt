package me.bnogocarft.bnogorpg.utils.enchants

import me.bnogocarft.bnogorpg.utils.*
import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItem
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import java.util.*
import kotlin.collections.ArrayList

class EnchantGUI {
    companion object {
        val noItem = ItemStack(Material.BOOK)
    }

    init {
        createNoItemsBook()
    }

    private fun createNoItemsBook() {
        val meta = Bukkit.getItemFactory().getItemMeta(Material.BOOK)
        meta.displayName = "${ChatColor.RED}No item selected to Enchant!"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.GRAY}You must add an item to the enchantment")
        lore.add("${ChatColor.GRAY}slot in order to enchant it!")

        meta.lore = lore
        noItem.itemMeta = meta
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

        layer1.backgrounds.add(GUIButton(noItem, 29, ::enchantHandler))
        layer1.backgrounds.add(GUIButton(noItem, 31, ::enchantHandler))
        layer1.backgrounds.add(GUIButton(noItem, 33, ::enchantHandler))

        layer1.slotFuncs.add(SlotFunction(
            13
        ) {
            if (it.currentItem != null && it.inv.getItem(13) == null) {
                // Checks if the Item is a BItem
                if (it.currentItem!!.hasItemMeta()) {
                    TODO("Check if item is a BItem")
                }

                // Changes the enchant buttons
                val newEnchant1 = ItemStack(Material.ENCHANTED_BOOK)
                val newEnchant2 = ItemStack(Material.ENCHANTED_BOOK)
                val newEnchant3 = ItemStack(Material.ENCHANTED_BOOK)
                it.inv.setItem(29, newEnchant1)
                it.inv.setItem(31, newEnchant2)
                it.inv.setItem(33, newEnchant3)

                val itemList = arrayListOf(newEnchant1, newEnchant2, newEnchant3)

                val enchants = EnchantUtils.generateEnchantsFor(BItem(it.currentItem!!))

                for ((index, item) in itemList.withIndex()) {
                    item.itemMeta.displayName = "${ChatColor.GREEN}${
                        enchants[index].enchant.toString().replace(
                                                "_", " "
                                            ).lowercase()
                            .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                    } ${makeRoman(enchants[index].level)}"
                }
            }
        })



        fInv.layers.add(layer1)
    }

    private fun enchantHandler(gui: OpenGUI) {
        if (gui.currentItem == noItem) {
            gui.player.sendMessage(
                "${ChatColor.RED}You must add an item to the enchantment slot in order to enchant it!"
            )
            return
        } else {

        }
    }
}