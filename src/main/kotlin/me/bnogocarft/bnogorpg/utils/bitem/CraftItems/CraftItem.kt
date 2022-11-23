package me.bnogocarft.bnogorpg.utils.bitem.CraftItems

import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.inventory.ItemStack

abstract class CraftItem(open var item: ItemStack) {
    open var type: BMaterial = BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())

    init {

    }
    open fun craft(): ItemStack {
        throw NotImplementedError("You must override this method in order to craft!")
    }
}