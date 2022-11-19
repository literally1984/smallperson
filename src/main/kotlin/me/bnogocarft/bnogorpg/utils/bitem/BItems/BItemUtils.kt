package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.inventory.ItemStack
import kotlin.random.Random

fun getRandomStat(rarityVary: Pair<Rarity, Rarity>, statVary: ArrayList<Int>, starIndex: Int): ArrayList<Int> {
    val stats = ArrayList<Int>()

    //Gets the range of the amnt of stars the weapon has
    val starsDiff = rarityVary.second.getStars() - rarityVary.first.getStars()
    val loopList = arrayListOf(
        Pair(0, 1),
        Pair(2, 3),
        Pair(4, 5),
        Pair(6, 7),
        Pair(8, 9),
        Pair(10, 11)
    )

    for ((indexOfStat, indexOfRange) in loopList.withIndex()) {
        //Gets the Range that the stat can be in
        val vary = arrayListOf(statVary[indexOfRange.first], statVary[indexOfRange.second])
        //Gets the increments evenly divided with the last increment taking the remainder
        val atkIncs = ArrayList<Int>()
        for (i in 1..starsDiff) {
            atkIncs.add((vary[1] - vary[0]) / starsDiff)
        }
        atkIncs[atkIncs.size - 1] = atkIncs[atkIncs.size - 1] + (vary[1] - vary[0]) % starsDiff

        //Sets the first element of the stats array to the lowest possible value from the stats range
        stats.add(vary[0])
        //Adds increments based on star vary
        for (index in 0 until starIndex) {
            try {
                stats[indexOfStat] += Random.nextInt(1, atkIncs[index] + 1)
            } catch (e: IllegalArgumentException) {
                stats[indexOfStat] += 1
            }
        }
    }

    return stats
}

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