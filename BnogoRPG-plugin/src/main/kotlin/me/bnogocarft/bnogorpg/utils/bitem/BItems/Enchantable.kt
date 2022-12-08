package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment
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
                while (!(item.itemMeta.lore[index] == "")) { // Loops through the enchants until it finds "" which is the seperator
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
}