package me.bnogocarft.bnogorpg.utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.utils.Exceptions.IllegalParameterException
import me.bnogocarft.bnogorpg.utils.encode
import me.bnogocarft.bnogorpg.utils.others.Rarity.RarityUtils
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack

open class BItem(item: ItemStack) {
    open val item = item

    var material: BMaterial

    /*var lastUpdate: Update =
        when (decode(item.itemMeta.lore[item.itemMeta.lore.size - 1].split(" ")[1])) {
            "002" -> Update.zerozerotwo
            else -> Update.zerozerotwo
        }*/
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
}