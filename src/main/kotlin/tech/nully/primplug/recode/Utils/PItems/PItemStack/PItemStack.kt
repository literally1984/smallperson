package tech.nully.primplug.recode.Utils.PItems.PItemStack

import org.bukkit.inventory.ItemStack
import tech.nully.primplug.recode.Utils.PItems.Rarity.RarityUtils
import tech.nully.primplug.recode.Utils.PItems.StatUtils.ItemStat

data class PItemStack(val item: ItemStack) {

    init {
        var stats = ItemStat(item)
        var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size-1])
    }
}