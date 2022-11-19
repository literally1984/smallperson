package me.bnogocarft.bnogorpg.utils.bitem.CraftItems

import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack

data class CraftScroll(override var item: ItemStack, val variables: ArrayList<ItemVariable>) : CraftItem {
    override var type: BMaterial = BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
    override var amount: Int = 1
    override var rarityVary: Pair<Rarity, Rarity> = Pair(Rarity.COMMON, Rarity.COMMON)

    init {
        val itemLore = item.itemMeta.lore
        for (lore in itemLore) {
            if (lore.contains(" ✪Star✪")) {
                // original is "$ChatColor.GOLDlow-high ✪Star✪"
                val onlyStarLore = lore.drop(2).dropLast(7).split("-")
                rarityVary = Pair(Rarity.getRarity(onlyStarLore[0].toInt()), Rarity.getRarity(onlyStarLore[1].toInt()))
            }
            if (lore.contains("${ChatColor.LIGHT_PURPLE}${ChatColor.GREEN}")) {
                val splitLore = lore.split("${ChatColor.LIGHT_PURPLE}${ChatColor.GREEN}")
            }
        }
    }

    override fun craft(): ItemStack {
        var indexOfVar = 0
        val newMeta = item.itemMeta.clone()
        val newLore = item.itemMeta.lore
        // Checks if the lore line has a variable indicator
        for (lore in newLore) {
            // instantiates the variables
            if (lore.contains("${ChatColor.LIGHT_PURPLE}${ChatColor.GREEN}")) {
                val loreIteration = newLore.indexOf(lore)
                // Isolates the value of the variable
                val variable = lore.split("${ChatColor.LIGHT_PURPLE}${ChatColor.GREEN}")[1].split(" ")[0]
                // Gets the replacement value
                val newVarValue = variables[indexOfVar].value
                // Replaces the variable with the new value
                newLore[loreIteration] = lore.replace(variable, newVarValue.toString())
                indexOfVar++
            }
        }

        newMeta.lore = newLore
        item.itemMeta = newMeta
        return item
    }
}