package me.bnogocarft.bnogorpg.utils.BItemStack.CraftItems

import me.bnogocarft.bnogorpg.utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.inventory.ItemStack

interface CraftItem {
    var item: ItemStack
    var type: BMaterial
    var amount: Int
    var rarityVary: Pair<Rarity, Rarity>
    fun craft(): ItemStack
}