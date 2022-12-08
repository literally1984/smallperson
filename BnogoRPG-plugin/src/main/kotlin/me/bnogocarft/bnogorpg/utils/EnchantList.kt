package me.bnogocarft.bnogorpg.utils

import me.bnogocarft.bnogorpg.utils.bitem.BItems.Enchantable
import me.bnogocarft.bnogorpg.utils.enchants.BEnchantment
import org.bukkit.ChatColor
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack
import java.util.*
import kotlin.collections.ArrayList

class EnchantList(val enchantable: Enchantable) : ArrayList<BEnchantment>() {
    val item = enchantable.item
    override fun add(enchant: BEnchantment): Boolean {
        if (item.itemMeta.lore[enchantable.enchantLine] == "") {
            item.itemMeta.lore.add(
                enchantable.enchantLine,
                "${ChatColor.BLUE}${
                    enchant.name
                        .replace("_", " ").lowercase()
                        .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                }"
            )
        } else {
            while ("${item.itemMeta.lore[enchantable.enchantLine].length}, ${ChatColor.BLUE}${
                    enchant.name
                        .replace("_", " ").lowercase()
                        .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                }".length >= 32
            ) { // If the old enchantments and the new enchantments in one string is longer than 32 chars
                enchantable.enchantLine++
            }
            item.itemMeta.lore[enchantable.enchantLine] += ", ${org.bukkit.ChatColor.BLUE}${
                enchant.name
                    .replace("_", " ").lowercase()
                    .replaceFirstChar { if (it.isLowerCase()) it.titlecase(java.util.Locale.getDefault()) else it.toString() }
            }"
        }


        if (item.containsEnchantment(Enchantment.ARROW_DAMAGE) ||
            item.containsEnchantment(Enchantment.WATER_WORKER)
        ) {
            return true
        }
        item.glow()
        return true
    }
}