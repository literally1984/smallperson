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
            val bweapon = BWeapon(item)
            BWeapons[item] = bweapon
            return bweapon
        }
        fun addBWeapon(item: ItemStack) {
            BWeapons[item] = BWeapon(item)
        }

        fun getBPickaxe(item: ItemStack): BPickaxe {
            if (BPickaxes.containsKey(item)) return BPickaxes[item]!!
            val bpickaxe = BPickaxe(item)
            BPickaxes[item] = bpickaxe
            return bpickaxe
        }

        fun addBPickaxe(item: ItemStack) {
            BPickaxes[item] = BPickaxe(item)
        }

        fun getBAxe(item: ItemStack): BAxe {
            if (BAxes.containsKey(item)) return BAxes[item]!!
            val baxe = BAxe(item)
            BAxes[item] = baxe
            return baxe
        }

        fun addBAxe(item: ItemStack) {
            BAxes[item] = BAxe(item)
        }
    }
}