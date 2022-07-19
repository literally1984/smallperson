package games.bnogocarft.bnogorpg.recode.Utils.PItems.BItemStack

import org.bukkit.inventory.ItemStack


class BItemUtils {
    private var BWeapons: HashMap<ItemStack, BWeapon> = HashMap<ItemStack, BWeapon>()
    private var BPickaxes: HashMap<ItemStack, BPickaxe> = HashMap<ItemStack, BPickaxe>()
    private var BAxes: HashMap<ItemStack, BAxe> = HashMap<ItemStack, BAxe>()

    fun getBWeapon(item: ItemStack): BWeapon {
        if (BWeapons.containsKey(item)) return BWeapons[item]!!
        return BWeapon(item)
    }

    fun getBPickaxe(item: ItemStack): BPickaxe {
        if (BPickaxes.containsKey(item)) return BPickaxes[item]!!
        return BPickaxe(item)
    }

    fun getBAxe(item: ItemStack): BAxe {
        if (BAxes.containsKey(item)) return BAxes[item]!!
        return BAxe(item)
    }
    companion object {
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