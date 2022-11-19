package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment
import me.bnogocarft.bnogorpg.utils.glow
import org.bukkit.ChatColor
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack
import java.util.*

class EnchantImpl(private val instance: Enchantable, val item: ItemStack) {
    fun enchant(enchant: BEnchantment) {
        instance.enchantments.add(enchant)
        // checks if the item has no enchantments
        if (item.itemMeta.lore[instance.enchantLine] == "") {
            item.itemMeta.lore.add(
                instance.enchantLine,
                "${ChatColor.BLUE}${
                    enchant.name
                        .replace("_", " ").lowercase()
                        .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                }"
            )
        } else {
            while ("${item.itemMeta.lore[instance.enchantLine].length}, ${ChatColor.BLUE}${
                    enchant.name
                        .replace("_", " ").lowercase()
                        .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                }".length >= 32
            ) { // If the old enchantments and the new enchantments in one string is longer than 32 chars
                instance.enchantLine++
            }
            item.itemMeta.lore[instance.enchantLine] += ", ${ChatColor.BLUE}${
                enchant.name
                    .replace("_", " ").lowercase()
                    .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
            }"
        }


        if (item.containsEnchantment(Enchantment.ARROW_DAMAGE) ||
            item.containsEnchantment(Enchantment.WATER_WORKER)
        ) {
            return
        }
        item.glow()
    }

    fun init(cLore: String): Int {
        var enchantLine = 0
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
        return enchantLine
    }
}