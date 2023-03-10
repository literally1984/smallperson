package me.bnogocarft.bnogorpg.utils.bitem.factory

import me.bnogocarft.bnogorpg.commands.customItemMap
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.ability.ManaAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItem
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftItem
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.ItemVariable
import me.bnogocarft.bnogorpg.utils.encode
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.LeatherArmorMeta
import kotlin.math.roundToInt

val scrollIdentifier = "Ability Scroll"
val armorIdentifier = "Armor"
val weaponIdentifier = "Weapon"
val miscIdentifier = "Misc Item"
val talismanIdentifier = "Talisman"

val symbols = hashMapOf(
    "def" to '❈',
    "atk" to '❁',
    "crit" to '✦',
    "mana" to '☯',
    "stam" to 'Ω',
    "bar" to '■'
)

val b = "■"

val BMaterial = HashMap<String, CraftItem>()

interface Enhancement {
    val stats: ArrayList<Int>
}

abstract class FactoryItem(
    open val name: String,
    open val rarity: Rarity,
    open val mat: Material
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
    override val mat: Material,
    override val stats: ArrayList<Int>
) : FactoryItem(name, rarity, mat), Enhancement {

    override fun produce(): ItemStack {
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.DARK_GRAY}ID: ")
        lore.add("${ChatColor.GOLD}Reforge: ${ChatColor.GRAY}None")
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("${ChatColor.GRAY}When held in hand:")

        // Damage: +1 +(0.2 Max from Quality)
        lore.add(
            "${ChatColor.RED}${
                symbols["atk"]}Damage: ${ChatColor.DARK_GRAY}+${stats[0]} " +
                    "${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.GREEN}${
                symbols["def"]}Defense: ${ChatColor.DARK_GRAY}+${stats[1]} " +
                    "${ChatColor.GRAY}+(${(stats[1] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.LIGHT_PURPLE}${
                symbols["mdmg"]}Magic Damage: ${ChatColor.DARK_GRAY}+${stats[2]} " +
                    "${ChatColor.GRAY}+(${(stats[2] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.DARK_PURPLE}${
                symbols["mdef"]}Magic Defense: ${ChatColor.DARK_GRAY}+${stats[3]} " +
                    "${ChatColor.GRAY}+(${(stats[3] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.AQUA}${
                symbols["mana"]}Mana: ${ChatColor.DARK_GRAY}+${stats[4]} " +
                    "${ChatColor.GRAY}+(${(stats[4] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.GOLD}${
                symbols["stam"]}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]} " +
                    "${ChatColor.GRAY}+(${(stats[5] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add("")

        // abilities lore
        for (ability in abilities) {
            lore.add(
                encode("ability") +
                    "${ChatColor.GOLD}${ability.type.getString()} Ability: " +
                    "${rarity.getColor()}${ability.name}")
            for (s in ability.description) {
                lore.add("${ChatColor.GRAY}$s")
            }
            if (ability is ManaAbility) {
                lore.add("${ChatColor.DARK_GRAY}Mana Cost: ${ChatColor.AQUA}${ability.manaCost}")
            }
            lore.add("")
        }
        lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
        lore.add("${ChatColor.GREEN}EXP: 0/10${rarity.getColor()}[" +
                "${ChatColor.GREEN}$b$b$b$b$b$b$b$b$b$b" +
                "${rarity.getColor()}]"
        )
        lore.add("${ChatColor.GRAY}Durability: ${ChatColor.GREEN}${mat.maxDurability}/${mat.maxDurability}" +
                "${rarity.getColor()}[${ChatColor.GREEN}$b$b$b$b$b$b$b$b$b$b${rarity.getColor()}]")
        lore.add("")

        lore.add(rarity.getText() + weaponIdentifier)

        var longestString = 0

        for (cLore in lore) {
            if (cLore.length > longestString) {
                longestString = cLore.length
            }
        }

        var line = ""

        for (i in 1..longestString) {
            line += "⎯"
        }

        lore.add(3, line)

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactoryArmor(
    override val name: String,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    override val mat: Material,
    override val stats: ArrayList<Int>,
    val color: Color?
) : FactoryItem(name, rarity, mat), Enhancement {


    override fun produce(): ItemStack {
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.DARK_GRAY}ID: ")
        lore.add("${ChatColor.GOLD}Reforge: ${ChatColor.DARK_GRAY}?")
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("${ChatColor.GRAY}When equiped in armor slot:")

        lore.add(
            "${ChatColor.RED}${
                symbols["atk"]}Damage: ${ChatColor.DARK_GRAY}+${stats[0]} " +
                    "${ChatColor.GRAY}+(${(stats[0] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.GREEN}${
                symbols["def"]}Defense: ${ChatColor.DARK_GRAY}+${stats[1]} " +
                    "${ChatColor.GRAY}+(${(stats[1] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.LIGHT_PURPLE}${
                symbols["mdmg"]}Magic Damage: ${ChatColor.DARK_GRAY}+${stats[2]} " +
                    "${ChatColor.GRAY}+(${(stats[2] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.DARK_PURPLE}${
                symbols["mdef"]}Magic Defense: ${ChatColor.DARK_GRAY}+${stats[3]} " +
                    "${ChatColor.GRAY}+(${(stats[3] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.AQUA}${
                symbols["mana"]}Mana: ${ChatColor.DARK_GRAY}+${stats[4]} " +
                    "${ChatColor.GRAY}+(${(stats[4] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add(
            "${ChatColor.GOLD}${
                symbols["stam"]}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]} " +
                    "${ChatColor.GRAY}+(${(stats[5] * rarity.getQualityCap()).roundToInt()} from max Quality)"
        )
        lore.add("")

        // abilities lore
        for (bonus in abilities) {
            lore.add("${encode("ability")}${ChatColor.YELLOW}Set Bonus: ${rarity.getColor()}${bonus.name}")
            for (s in bonus.description) lore.add("${ChatColor.GRAY}$s")
            if (bonus is ManaAbility) {
                lore.add("${ChatColor.DARK_GRAY}Mana Cost: ${ChatColor.AQUA}${bonus.manaCost}")
            }
            lore.add("")
        }
        lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
        lore.add("${ChatColor.GREEN}EXP: 0/10${rarity.getColor()}[" +
                "${ChatColor.GREEN}$b$b$b$b$b$b$b$b$b$b" +
                "${rarity.getColor()}]"
        )
        lore.add("${ChatColor.GRAY}Durability: ${ChatColor.GREEN}${mat.maxDurability}/${mat.maxDurability}" +
                "${rarity.getColor()}[${ChatColor.GREEN}$b$b$b$b$b$b$b$b$b$b${rarity.getColor()}]")

        if (mat.toString().contains("leather", true)) {
            val colorMeta = meta as LeatherArmorMeta
            colorMeta.color = color
        }

        lore.add(rarity.getText() + armorIdentifier)

        var longestString = 0

        for (cLore in lore) {
            if (cLore.length > longestString) {
                longestString = cLore.length
            }
        }

        var line = ""

        for (i in 1..longestString) {
            line += "⎯"
        }

        lore.add(3, line)

        meta.lore = lore
        item.itemMeta = meta

        return item
    }
}

class FactoryTalisman(
    override val name: String,
    override val rarity: Rarity,
    override val mat: Material,
    val variables: ArrayList<ItemVariable>,
) : FactoryItem(name, rarity, mat) {

    override fun produce(): ItemStack {
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("")
        for (ability in abilities) {
            lore.add("${encode("ability")}${ChatColor.GOLD}${ability.type.getString()} Ability: ${rarity.getColor()}${ability.name}")
            for (s in ability.description) {
                lore.add("${ChatColor.GRAY}$s")
            }
            if (ability is ManaAbility) {
                lore.add("${ChatColor.DARK_GRAY}Mana Cost: ${ChatColor.AQUA}${ability.manaCost}")
            }
            lore.add("")
        }
        lore.add("")
        lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
        lore.add("${ChatColor.GREEN}EXP: 0/10${rarity.getColor()}[${ChatColor.GREEN}$b$b$b$b$b$b$b$b$b$b${rarity.getColor()}]")
        lore.add("")

        lore.add(rarity.getText() + talismanIdentifier)

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactoryAScroll(
    override val name: String,
    override val rarity: Rarity,
    override val mat: Material
) : FactoryItem(name, rarity, mat) {
    override fun produce(): ItemStack {
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

        lore.add(rarity.getText() + scrollIdentifier)

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactorySScroll(
    override val name: String,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>, override val mat: Material
) : FactoryItem(name, rarity, mat) {
    override fun produce(): ItemStack {
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
    override val mat: Material
) : FactoryItem(name, rarity, mat) {
    override fun produce(): ItemStack {
        TODO("Not yet implemented")
    }
}

class FactoryPotion (
    override val name: String,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    override val mat: Material
) : FactoryItem(name, rarity, mat) {
    override fun produce(): ItemStack {
        TODO("Not yet implemented")
    }
}