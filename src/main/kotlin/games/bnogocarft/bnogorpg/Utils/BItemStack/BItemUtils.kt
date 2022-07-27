package games.bnogocarft.bnogorpg.Utils.BItemStack

import org.bukkit.inventory.ItemStack


class BItemUtils {

    companion object {
        private var BWeapons: HashMap<ItemStack, BWeapon> = HashMap()
        private var BPickaxes: HashMap<ItemStack, BPickaxe> = HashMap()
        private var BAxes: HashMap<ItemStack, BAxe> = HashMap()
        private var BArmor: HashMap<ItemStack, BArmor> = HashMap()
        // TODO Make a BAxe class

        fun getBType(item: ItemStack): String? {
            if (item.itemMeta != null && item.itemMeta.displayName != null) {
                if (item.itemMeta.displayName.lowercase().contains("sword") ||
                    item.itemMeta.displayName.lowercase().contains("blade") ||
                    item.itemMeta.displayName.lowercase().contains("waraxe") ||
                    item.itemMeta.displayName.lowercase().contains("warhammer")
                ) {
                    return "weapon"
                }
                if (item.itemMeta.displayName.lowercase().contains("helmet") ||
                    item.itemMeta.displayName.lowercase().contains("chestplate") ||
                    item.itemMeta.displayName.lowercase().contains("leggings") ||
                    item.itemMeta.displayName.lowercase().contains("boots")
                ) {
                    return "armor"
                }
                if (item.itemMeta.displayName.lowercase().contains("pickaxe")) {
                    return "pickaxe"
                }
                if (item.itemMeta.displayName.lowercase().contains("axe")) {
                    return "axe"
                }
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

        fun addBWeapon(item: ItemStack, stats: List<Int>) {
            BWeapons[item] = BWeapon(stats, item)
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

        fun getBArmor(item: ItemStack): BArmor {
            if (BArmor.containsKey(item)) return BArmor[item]!!
            val barmor = BArmor(item)
            BArmor[item] = barmor
            return barmor
        }

        fun addBArmor(item: ItemStack) {
            BArmor[item] = BArmor(item)
        }
    }
}