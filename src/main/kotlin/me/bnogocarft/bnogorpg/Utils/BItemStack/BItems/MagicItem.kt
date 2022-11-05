package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems.ItemVariable
import org.bukkit.inventory.ItemStack

open class MagicItem(item: ItemStack) : BItem(item) {
    override val item = item
    val variables = ArrayList<ItemVariable>()

    init {
        
    }
}