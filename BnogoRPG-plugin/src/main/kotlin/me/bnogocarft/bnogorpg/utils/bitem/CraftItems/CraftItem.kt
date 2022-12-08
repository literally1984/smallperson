package me.bnogocarft.bnogorpg.utils.bitem.CraftItems

import me.bnogocarft.bnogorpg.utils.bitem.factory.armorIdentifier
import me.bnogocarft.bnogorpg.utils.bitem.factory.talismanIdentifier
import org.bukkit.inventory.ItemStack

abstract class CraftItem(open var item: ItemStack) {
    open var type = item.itemMeta.displayName.replace(" ", "_").uppercase()

    companion object {
        fun new(item: ItemStack): CraftItem {
            val type = when (item.itemMeta.lore.last().split(" ")[1]) {
                armorIdentifier -> CraftGear(item)
                talismanIdentifier -> CraftTalisman(item)

                else -> CraftItem(item)
            }
        }
    }

    init {

    }
    open fun craft(): ItemStack {
        throw NotImplementedError("You must override this method in order to craft!")
    }
}