package games.bnogocarft.bnogorpg.Utils.BItemStack

import games.bnogocarft.bnogorpg.Reforge.reforge
import org.bukkit.inventory.ItemStack


class BItemUtils {

    companion object {
        private var BWeapons: HashMap<ItemStack, BWeapon> = HashMap<ItemStack, BWeapon>()
        private var BPickaxes: HashMap<ItemStack, BPickaxe> = HashMap<ItemStack, BPickaxe>()
        private var BAxes: HashMap<ItemStack, BAxe> = HashMap<ItemStack, BAxe>()
        // TODO Make a BAxe class

        fun getBType(item: ItemStack): String? {
            if (item.itemMeta.displayName.lowercase().contains("sword") ||
                item.itemMeta.displayName.lowercase().contains("blade") ||
                item.itemMeta.displayName.lowercase().contains("waraxe") ||
                item.itemMeta.displayName.lowercase().contains("warhammer")) {
                return "weapon"
            }
            if (item.itemMeta.displayName.lowercase().contains("pickaxe")) {
                return "pickaxe"
            }
            if (item.itemMeta.displayName.lowercase().contains("axe")) {
                return "axe"
            }
            return null
        }
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
    }
}