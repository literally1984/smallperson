package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.enchants.BEnchant
import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment
import me.bnogocarft.bnogorpg.utils.makeRoman
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack
import kotlin.collections.ArrayList

abstract class Enchantable(override val item: ItemStack) : BItem(item){
    var enchantments = ArrayList<BEnchantment>()

    var enchantLine = 0

    init {
        for (cLore in item.itemMeta.lore) {
            if (cLore.contains("${ChatColor.BLUE}Enchantments:")) { // Gets the line that marks the start of enchantments
                enchantLine = cLore.indexOf(cLore) + 1
                var index =
                    item.itemMeta.lore.indexOf(cLore) + 1 // Gets the index of the line after the marker above
                while (item.itemMeta.lore[index] != "") { // Loops through the enchants until it finds "" which is the seperator
                    index++
                    val enchantsInLine = cLore.split(", ")
                    for (enchant in enchantsInLine) {
                        //Enchants.add(EnchantUtils.parseEnchant(enchant))
                        TODO("Add enchant parsing")
                    }
                }
            }
        }
    }

    fun addEnchant(enchant: BEnchantment) {
        var contains = false
        for (containedEnchantment in enchantments) {
            if (enchant.name == containedEnchantment.name) {
                contains = true
            }
        }

        if (!contains) {
            throw IllegalArgumentException("Item already contains enchantment ${enchant.name}")
        }
        // Aqua Affinity V

        enchantments.add(enchant)
        val enchantmentText = "${ChatColor.BLUE}${enchant.name} ${makeRoman(enchant.level)}"

        item.itemMeta.lore.add(enchantLine, enchantmentText)
        enchantLine++
    }

    fun removeEnchant(enchant: BEnchantment) {
        var contains = false
        for (enchantment in enchantments) {
            if (enchantment.name == enchant.name) {
                contains = true
            }
        }
    }
}