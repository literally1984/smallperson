package me.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.ItemAbility.IAbility
import org.bukkit.inventory.ItemStack


class BItemUtils {

    companion object {
        private val BWeapons: HashMap<ItemStack, BWeapon> = HashMap()
        private val BArmor: HashMap<ItemStack, BArmor> = HashMap()
        val BGears: HashMap<ItemStack, BGear> = HashMap()
        val BItems = HashMap<ItemStack, BItem>()

        @Deprecated("Switch to getting BItem and then getting type")
        fun getBType(item: ItemStack): String? {
            if (item.itemMeta != null && item.itemMeta.displayName != null) {
                if (item.itemMeta.displayName.lowercase().contains("sword") ||
                    item.itemMeta.displayName.lowercase().contains("blade") ||
                    item.itemMeta.displayName.lowercase().contains("waraxe") ||
                    item.itemMeta.displayName.lowercase().contains("warhammer") ||
                    item.itemMeta.displayName.lowercase().contains("thunderbolt") ||
                    item.itemMeta.displayName.lowercase().contains("scythe")
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
            val BGear = bweapon as BGear
            BGears[item] = BGear
            BItems[item] = BGear
            BWeapons[item] = bweapon
            return bweapon
        }

        fun addBWeapon(item: ItemStack, bWeapon: BWeapon) {
            BWeapons[item] = bWeapon
            val BGear = bWeapon as BGear
            BGears[item] = BGear
            BItems[item] = BGear
        }

        fun addBWeapon(item: ItemStack, stats: List<Int>) {
            BWeapons[item] = BWeapon(stats, item)
            val BGear = BWeapons[item] as BGear
            BGears[item] = BGear
            BItems[item] = BGear
        }

        fun getBArmor(item: ItemStack): BArmor {
            if (BArmor.containsKey(item)) return BArmor[item]!!
            val barmor = BArmor(item)
            BArmor[item] = barmor
            val BGear = barmor as BGear
            BGears[item] = BGear
            BItems[item] = BGear
            return barmor
        }


        fun addBArmor(item: ItemStack, bArmor: BArmor) {
            BArmor[item] = bArmor
            val BGear = bArmor as BGear
            BGears[item] = BGear
            BItems[item] = BGear
        }

        fun addBArmor(item: ItemStack, stats: List<Int>) {
            BArmor[item] = BArmor(stats, item)
            val BGear = BArmor[item] as BGear
            BGears[item] = BGear
            BItems[item] = BGear
        }

        fun getBGear(item: ItemStack): BGear {
            if (BGears.containsKey(item)) return BGears[item]!!
            val bItem = BItem(item)
            BItems[item] = bItem

            return when (bItem.type) {
                BItemType.WEAPON -> {
                    addBWeapon(item, BWeapon(item))
                    BGears[item]!!
                }

                BItemType.ARMOR -> {
                    addBArmor(item, BArmor(item))
                    BGears[item]!!
                }

                else -> BGears[item]!!
            }
        }

        fun getBMaterial(item: ItemStack): BMaterial {
            return BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
        }

        fun getAbilityByName(name: String): IAbility {
            for (ability in Main.registeredAbilities) {
                if (ability.name == name) {
                    return ability
                }
            }
            throw IllegalArgumentException("No such Ability with name \"${name}\"")
        }
    }
}