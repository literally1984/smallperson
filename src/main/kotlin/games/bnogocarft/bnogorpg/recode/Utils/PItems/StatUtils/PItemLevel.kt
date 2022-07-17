package games.bnogocarft.bnogorpg.recode.Utils.PItems.StatUtils

import org.bukkit.inventory.ItemStack

data class PItemLevel(val item: ItemStack) {
    init {
        for (i in 0..item.itemMeta.lore.size) {

        }
    }
}