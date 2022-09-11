package me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.inventory.ItemStack

interface CraftItem {
    var item: ItemStack
    var type: BMaterial
    var amount: Int
    var rarityVary: Pair<Rarity, Rarity>
    fun craft(): ItemStack
}