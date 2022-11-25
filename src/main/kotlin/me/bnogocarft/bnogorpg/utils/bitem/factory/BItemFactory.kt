package me.bnogocarft.bnogorpg.utils.bitem.factory

import me.bnogocarft.bnogorpg.commands.customItemMap
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftItemType
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import net.citizensnpcs.nms.v1_8_R3.entity.HorseController.EntityHorseNPC
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.LeatherArmorMeta
import kotlin.math.roundToInt

val scrollIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Ability Scroll"
val armorIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Armor"
val weaponIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Weapon"
val miscIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Misc"
val talismanIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Talisman"

interface Enhancement {
    val stats: ArrayList<Int>
}

abstract class FactoryItem(
    open val name: String,
    open val rarity: Rarity,
    open val bMat: BMaterial
) {
    open val abilities = ArrayList<IAbility>()
    open fun produce(): ItemStack {
        throw IllegalCallerException("You must override this method in order to use it!")
    }

    fun register(s: String): ItemStack {
        val item = produce()
        customItemMap[s] = item
        return item
    }
}

class FactoryWeapon(
    override val name: String,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    override val bMat: BMaterial,
    override val stats: ArrayList<Int>
) : FactoryItem(name, rarity, bMat), Enhancement {

    override fun produce(): ItemStack {
        val mat = bMat.getBukkitMaterial()
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.GOLD}Reforge: ${ChatColor.GRAY}None")
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("${ChatColor.GRAY}When held in hand:")
        lore.add("")

        lore.add(
            "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${stats[0]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${stats[1]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${stats[2]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${stats[3]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${stats[4]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add("")

        // abilities lore
        for (ability in abilities) {
            lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}${ability.type.getString()} ${ChatColor.RESET}${ChatColor.RED}Ability:")
            for (s in ability.description) lore.add("${ChatColor.GRAY}$s")
            lore.add("")
        }
        lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
        lore.add("${ChatColor.GREEN}EXP: 0/10[          ]")
        lore.add("${ChatColor.RED}Durability: ${ChatColor.GREEN}${mat.maxDurability}/${mat.maxDurability}")
        lore.add("")
        lore.add(weaponIdentifier)

        lore.add(rarity.getText())

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactoryArmor(
    override val name: String,
    override val rarity: Rarity,
    override val bMat: BMaterial,
    override val stats: ArrayList<Int>,
    val color: Color
) : FactoryItem(name, rarity, bMat), Enhancement {
    val setBonuses: ArrayList<SetBonus> = ArrayList()

    override fun produce(): ItemStack {
        val mat = bMat.getBukkitMaterial()
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("${ChatColor.GRAY}When equiped in armor slot:")
        lore.add("")

        lore.add(
            "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${stats[0]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${stats[1]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${stats[2]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${stats[3]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${stats[4]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]} ${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} Max from Quality)"
        )
        lore.add("")

        // abilities lore
        for (bonus in setBonuses) {
            lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}Set Bonus: ${ChatColor.RESET}${rarity.getColor()}${bonus.name}")
            for (s in bonus.description) lore.add("${ChatColor.GRAY}$s")
            lore.add("")
        }
        lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
        lore.add("${ChatColor.GREEN}EXP: 0/10[          ]")
        lore.add("")
        lore.add(armorIdentifier)

        if (mat.toString().contains("leather", true)) {
            val colorMeta = meta as LeatherArmorMeta
            colorMeta.color = color
        }

        lore.add(rarity.getText())

        meta.lore = lore
        item.itemMeta = meta

        return item
    }
}

class FactoryTalisman(
    override val name: String,
    override val rarity: Rarity,
    override val bMat: BMaterial
) : FactoryItem(name, rarity, bMat) {

    override fun produce(): ItemStack {
        val mat = bMat.getBukkitMaterial()
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("")
        for (ability in abilities) {
            for (s in ability.description) {
                lore.add(s)
            }
        }
        lore.add("")
        lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
        lore.add("${ChatColor.GREEN}EXP: 0/10[          ]")
        lore.add("")
        lore.add(talismanIdentifier)

        lore.add(rarity.getText())

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactoryAScroll(
    override val name: String,
    override val rarity: Rarity,
    override val bMat: BMaterial
) : FactoryItem(name, rarity, bMat) {
    override fun produce(): ItemStack {
        val mat = bMat.getBukkitMaterial()
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("")
        for (ability in abilities) {
            for (s in ability.description) {
                lore.add(s)
            }
        }
        lore.add("")
        lore.add(talismanIdentifier)

        lore.add(rarity.getText())

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactorySScroll(
    override val name: String,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>, override val bMat: BMaterial
) : FactoryItem(name, rarity, bMat) {
    override fun produce(): ItemStack {
        val mat = bMat.getBukkitMaterial()
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("")
        for (ability in abilities) {
            for (s in ability.description) {
                lore.add(s)
            }
        }
        lore.add("")
        lore.add(talismanIdentifier)

        lore.add(rarity.getText())

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactoryMisc(
    override val name: String,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    override val bMat: BMaterial
) : FactoryItem(name, rarity, bMat) {
    override fun produce(): ItemStack {
        TODO("Not yet implemented")
    }
}

class FactoryPotion (
    override val name: String,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    override val bMat: BMaterial
) : FactoryItem(name, rarity, bMat) {
    override fun produce(): ItemStack {
        TODO("Not yet implemented")
    }
}