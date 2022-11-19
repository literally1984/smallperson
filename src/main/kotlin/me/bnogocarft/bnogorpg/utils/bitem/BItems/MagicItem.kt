package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.ItemVariable
import org.bukkit.inventory.ItemStack

open class MagicItem(item: ItemStack) : BItem(item) {
    override val item = item
    val variables = ArrayList<ItemVariable>()

    init {

    }
}