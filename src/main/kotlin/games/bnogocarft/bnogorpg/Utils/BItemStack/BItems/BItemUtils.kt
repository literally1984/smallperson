package games.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import org.bukkit.inventory.ItemStack


class BItemUtils {

    companion object {
        private var BWeapons: HashMap<ItemStack, BWeapon> = HashMap()
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
            }
            return null
        }

        fun getBWeapon(item: ItemStack): BWeapon {
            if (BWeapons.containsKey(item)) return BWeapons[item]!!
            val bweapon = BWeapon(item)
            BWeapons[item] = bweapon
            return bweapon
        }

        fun addBWeapon(item: ItemStack, bWeapon: BWeapon) {
            BWeapons[item] = bWeapon
        }

        fun addBWeapon(item: ItemStack, stats: List<Int>) {
            BWeapons[item] = BWeapon(stats, item)
        }

        fun getBArmor(item: ItemStack): BArmor {
            if (BArmor.containsKey(item)) return BArmor[item]!!
            val barmor = BArmor(item)
            BArmor[item] = barmor
            return barmor
        }


        fun addBArmor(item: ItemStack, bArmor: BArmor) {
            BArmor[item] = bArmor
        }

        fun addBArmor(item: ItemStack, stats: List<Int>) {
            BArmor[item] = BArmor(stats, item)
        }
    }
}