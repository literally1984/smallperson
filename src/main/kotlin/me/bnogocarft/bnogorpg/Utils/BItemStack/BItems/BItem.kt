package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.EnchantUtils.BEnchantment
import me.bnogocarft.bnogorpg.Utils.Exceptions.IllegalParameterException
import me.bnogocarft.bnogorpg.Utils.encode
import me.bnogocarft.bnogorpg.Utils.glow
import me.bnogocarft.bnogorpg.Utils.others.Rarity.RarityUtils
import org.bukkit.ChatColor
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.ItemStack
import java.util.*
import kotlin.collections.ArrayList

open class BItem(item: ItemStack) {
    val item = item

    var material: BMaterial

    /*var lastUpdate: Update =
        when (decode(item.itemMeta.lore[item.itemMeta.lore.size - 1].split(" ")[1])) {
            "002" -> Update.zerozerotwo
            else -> Update.zerozerotwo
        }*/
    private val enchantments = ArrayList<BEnchantment>()
    var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size - 1])
    var type: BItemType =
        try {
            when (item.itemMeta.lore[item.itemMeta.lore.size - 2]) {
                "${ChatColor.GOLD}${ChatColor.ITALIC}Talisman" -> BItemType.TALISMAN
                "${ChatColor.GOLD}${ChatColor.ITALIC}Ability Scroll" -> BItemType.SCROLL
                "${ChatColor.GOLD}${ChatColor.ITALIC}Weapon" -> BItemType.WEAPON
                "${ChatColor.GOLD}${ChatColor.ITALIC}Armor Item" -> BItemType.ARMOR
                else -> {
                    BItemType.MISC
                }
            }
        } catch (e: NullPointerException) {
            throw IllegalParameterException("No type identifier found in item lore")
        }
    private var enchantLine: Int = 0

    init {
        if (!(item.hasItemMeta()) ||
            !item.itemMeta.lore[
                    item.itemMeta.lore.size - 1
            ].contains(encode("bitem"))
        ) {
            throw IllegalParameterException("ItemStack does not have BItem marker!")
        }
        val lore = item.itemMeta.lore
        for (clore in lore) {
            if (clore.contains("${ChatColor.BLUE}Enchantments:")) { // Gets the line that marks the start of enchantments
                enchantLine = lore.indexOf(clore) + 1
                var index = item.itemMeta.lore.indexOf(clore) + 1 // Gets the index of the line after the marker above
                while (!(lore[index].equals(""))) { // Loops through the enchants until it finds "" which is the seperator
                    index++
                    val enchantsInLine = clore.split(", ")
                    for (enchant in enchantsInLine) {
                        //Enchants.add(EnchantUtils.parseEnchant(enchant))
                        TODO("Add enchant parsing")
                    }
                }
                continue
            }
        }

        // If this is combat gear
        material = if (this !is BGear) {
            try {
                BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
            } catch (e: IllegalArgumentException) {
                throw IllegalParameterException("ItemStack does not have a valid BMaterial")
            }
        } else {
            val name = item.itemMeta.displayName
            try {
                BMaterial.valueOf(name.replace(" ", "_").uppercase())
            } catch (e: IllegalArgumentException) { // If there is no material with a name from replacing space with _, it is a reforge
                // Remove the reforge text
                val newName = name.split(" ").toMutableList()
                newName.removeAt(0)

                BMaterial.valueOf(newName.joinToString("_").uppercase())
            }
        }
    }

    fun addEnchant(enchant: BEnchantment) {
        enchantments.add(enchant)
        // checks if the item has no enchantments
        if (item.itemMeta.lore[enchantLine] != "") {
            item.itemMeta.lore.add(
                enchantLine,
                "${ChatColor.BLUE}${
                    enchant.enchant.toString()
                                        .replace("_", " ").lowercase()
                        .replaceFirstChar { if (it.isLowerCase()) it.titlecase(Locale.getDefault()) else it.toString() }
                }"
            )


        }
        if (item.containsEnchantment(Enchantment.ARROW_DAMAGE) ||
            item.containsEnchantment(Enchantment.WATER_WORKER)
        ) {
            return
        }
        item.glow()
    }
}