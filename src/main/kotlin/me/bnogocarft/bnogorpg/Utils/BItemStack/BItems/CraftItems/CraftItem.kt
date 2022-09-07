package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.CraftItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import org.bukkit.inventory.ItemStack

interface CraftItem {
    var item: ItemStack
    var type: BMaterial
    var amount: Int
    var rarityVary: Pair<Rarity, Rarity>
}