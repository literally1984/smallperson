package games.bnogocarft.bnogorpg.recode.Utils.PItems.BItemStack

import org.bukkit.inventory.ItemStack


class BItemUtils {

    companion object {
        var PItem: HashMap<ItemStack, BWeapon> = HashMap()

        fun isBItem(item: ItemStack): Boolean {
            if (item.itemMeta.displayName.lowercase().contains("sword") ||
                item.itemMeta.displayName.lowercase().contains("blade") ||
                item.itemMeta.displayName.lowercase().contains("waraxe") ||
                item.itemMeta.displayName.lowercase().contains("warhammer")) {
                return true
            }
            return false
        }
    }
}