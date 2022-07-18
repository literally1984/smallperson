package games.bnogocarft.bnogorpg.recode.Utils.PItems.BItemStack

import org.bukkit.inventory.ItemStack


class BItemUtils {

    companion object {
        var BWeapons: HashMap<ItemStack, BWeapon> = HashMap<ItemStack, BWeapon>()
        var BPickaxes: HashMap<ItemStack, BPickaxe> = HashMap<ItemStack, BPickaxe>()
        var BAxes: HashMap<ItemStack, BWeapon> = HashMap<ItemStack, BWeapon>()
        // TODO Make a BAxe class

        fun getBType(item: ItemStack): String? {
            if (item.itemMeta.displayName.lowercase().contains("sword") ||
                item.itemMeta.displayName.lowercase().contains("blade") ||
                item.itemMeta.displayName.lowercase().contains("waraxe") ||
                item.itemMeta.displayName.lowercase().contains("warhammer")) {
                return "weapon"
            }
            return null
        }
    }
}