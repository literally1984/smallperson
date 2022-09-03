package me.bnogocarft.bnogorpg.Utils.StatUtils

import org.bukkit.inventory.ItemStack

data class PItemLevel(val item: ItemStack) {
    init {
        for (i in 0..item.itemMeta.lore.size) {

        }
    }
}