package me.bnogocarft.bnogorpg.utils.bitem.BItems

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.utils.put
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack
import kotlin.math.roundToInt
import kotlin.random.Random

fun getRandomStat(quality: Float, original: Int, rarity: Rarity): Int {
    val perQuality = rarity.getQualityCap() / 100.0
    return original + (quality * perQuality).roundToInt()
}

fun getStats(item: ItemStack): HashMap<String, Int> {
    if (!item.hasItemMeta() || !item.itemMeta.hasLore()) {
        throw IllegalArgumentException("Item does not have lore or Meta")
    }
    val stats = HashMap<String, Int>()

    for (lore in item.itemMeta.lore) {
        if (lore.contains("${ChatColor.RED}Damage: ")) {
            val atk = lore.split(" ")[1].drop(1).toInt()
            stats.put("atk" to atk)
            continue
        }
        if (lore.contains("${ChatColor.RED}Defense: ")) {
            val def = lore.split(" ")[1].drop(1).toInt()
            stats.put("def" to def)
            continue
        }
        if (lore.contains("${ChatColor.LIGHT_PURPLE}Magic Dmg: ")) {
            val mDmg = lore.split(" ")[1].drop(1).toInt()
            stats.put("mDmg" to mDmg)
            continue
        }
        if (lore.contains("${ChatColor.DARK_PURPLE}Magic Def: ")) {
            val mDef = lore.split(" ")[1].drop(1).toInt()
            stats.put("mDef" to mDef)
            continue
        }
        if (lore.contains("${ChatColor.AQUA}Mana: ")) {
            val mana = lore.split(" ")[1].drop(1).toInt()
            stats.put("mana" to mana)
            continue
        }
        if (lore.contains("${ChatColor.GOLD}Stamina: ")) {
            val stam = lore.split(" ")[1].drop(1).toInt()
            stats.put("stam" to stam)
            continue
        }
    }

    if (stats.size != 6) {
        throw IllegalArgumentException("Item does not have all stats or is lacking some stats")
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