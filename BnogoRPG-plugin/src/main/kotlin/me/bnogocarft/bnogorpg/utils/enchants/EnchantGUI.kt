package me.bnogocarft.bnogorpg.utils.enchants

import me.bnogocarft.bnogorpg.utils.*
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BGear
import me.bnogocarft.bnogorpg.utils.bitem.BItems.Enchantable
import me.bnogocarft.bnogorpg.utils.bitem.BItems.Talisman
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import java.util.*

class EnchantGUI {
    companion object {
        val noItem = ItemStack(Material.BOOK)
        lateinit var gui: Inventory
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
        val layer1 = GUILayer(fInv)
        layer1.fill(sBK)
        val bottomRow = ItemStack(Material.ENCHANTED_BOOK)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.ENCHANTED_BOOK)
        meta.displayName = ""
        bottomRow.itemMeta = meta
        for (i in 45..53) {
            layer1.backgrounds.add(GUIBackground(i, bottomRow))
        }

        layer1.backgrounds.add(GUIButton(29, noItem, ::enchantHandler))
        layer1.backgrounds.add(GUIButton(31, noItem, ::enchantHandler))
        layer1.backgrounds.add(GUIButton(33, noItem, ::enchantHandler))

        layer1.slotFuncs.add(SlotFunction(
            13
        ) {
            if (it.currentItem != null && it.inv.getItem(13) == null) {
                val item = it.currentItem!!
                // Checks if the Item is a BItem
                if (!(it.currentItem!! canBe B.ENCHANTABLE)) {
                    return@SlotFunction
                }
                val bItem: Enchantable = try {
                    item.getTopBItem().getConstructors(0)!!.call(item) as Enchantable
                } catch (e: TypeCastException) {
                    return@SlotFunction
                }

                // Changes the enchant buttons
                val newEnchant1 = ItemStack(Material.ENCHANTED_BOOK)
                val newEnchant2 = ItemStack(Material.ENCHANTED_BOOK)
                val newEnchant3 = ItemStack(Material.ENCHANTED_BOOK)
                it.inv.setItem(29, newEnchant1)
                it.inv.setItem(31, newEnchant2)
                it.inv.setItem(33, newEnchant3)

                val itemList = arrayListOf(newEnchant1, newEnchant2, newEnchant3)

                val enchants = EnchantUtils.generateEnchantsFor(bItem)

                for ((index, stack) in itemList.withIndex()) {
                    stack.itemMeta.displayName = "${ChatColor.GREEN}${
                        enchants[index].name.replace(
                            "_", " "
                        ).lowercase()
                            .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                    } ${makeRoman(enchants[index].level)}"
                }
            }
        })
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