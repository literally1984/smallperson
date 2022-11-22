package me.bnogocarft.bnogorpg.utils.bitem.CraftItems

import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.inventory.ItemStack

interface CraftItem {
    var item: ItemStack
    var type: BMaterial
    var amount: Int
    fun craft(): ItemStack
}