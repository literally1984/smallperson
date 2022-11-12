package me.bnogocarft.bnogorpg.utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.utils.BItemStack.CraftItems.ItemVariable
import org.bukkit.inventory.ItemStack

open class MagicItem(item: ItemStack) : BItem(item) {
    override val item = item
    val variables = ArrayList<ItemVariable>()

    init {

    }
}