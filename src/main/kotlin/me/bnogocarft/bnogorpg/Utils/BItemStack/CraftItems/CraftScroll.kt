package me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.inventory.ItemStack

class CraftScroll(override var item: ItemStack) : CraftItem {
    override var type: BMaterial = BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
    override var amount: Int = 1
    override var rarityVary: Pair<Rarity, Rarity> = Pair(Rarity.COMMON, Rarity.COMMON)
    override fun craft(): ItemStack {
        TODO("Not yet implemented")
    }

    init {
        for (lore in item.itemMeta.lore) {
            if (lore.contains(" ✪Star✪")) {
                val onlyStarLore = lore.drop(2).dropLast(7).split("-")
                rarityVary = Pair(Rarity.getRarity(onlyStarLore[0].toInt()), Rarity.getRarity(onlyStarLore[1].toInt()))
            }
        }
    }
}