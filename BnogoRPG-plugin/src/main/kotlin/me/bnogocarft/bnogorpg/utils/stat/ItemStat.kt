package me.bnogocarft.bnogorpg.utils.stat

import me.bnogocarft.bnogorpg.utils.Exceptions.IllegalParameterException
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack

data class ItemStat(val item: ItemStack) {
    constructor(stats: List<Int>, item: ItemStack) : this(item) {
        damage = stats[0]
        defense = stats[1]
        magicDmg = stats[2]
        magicDef = stats[3]
        mana = stats[4]
        stamina = stats[5]
    }

    var damage: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+")) {
                    val index = item.itemMeta.lore.indexOf(s)
                    val copy = item.itemMeta.clone()
                    val copyLore = copy.lore
                    copyLore[index] = "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+$field"
                    copy.lore = copyLore
                    item.itemMeta = copy
                }
            }
        }
    var defense: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+")) {
                    val index = item.itemMeta.lore.indexOf(s)
                    val copy = item.itemMeta.clone()
                    val copyLore = copy.lore
                    copyLore[index] = "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+$field"
                    copy.lore = copyLore
                    item.itemMeta = copy
                }
            }
        }
    var magicDmg: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.LIGHT_PURPLE}Magic DMG: ${ChatColor.DARK_GRAY}+")) {
                    val index = item.itemMeta.lore.indexOf(s)
                    val copy = item.itemMeta.clone()
                    val copyLore = copy.lore
                    copyLore[index] = "${ChatColor.LIGHT_PURPLE}Magic DMG: ${ChatColor.DARK_GRAY}+$field"
                    copy.lore = copyLore
                    item.itemMeta = copy
                }
            }
        }
    var magicDef: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.DARK_PURPLE}Magic DEF: ${ChatColor.DARK_GRAY}+")) {
                    val index = item.itemMeta.lore.indexOf(s)
                    val copy = item.itemMeta.clone()
                    val copyLore = copy.lore
                    copyLore[index] = "${ChatColor.DARK_PURPLE}Magic DEF: ${ChatColor.DARK_GRAY}+$field"
                    copy.lore = copyLore
                    item.itemMeta = copy
                }
            }
        }
    var mana: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+")) {
                    val index = item.itemMeta.lore.indexOf(s)
                    val copy = item.itemMeta.clone()
                    val copyLore = copy.lore
                    copyLore[index] = "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+$field"
                    copy.lore = copyLore
                    item.itemMeta = copy
                }
            }
        }
    var stamina: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+")) {
                    val index = item.itemMeta.lore.indexOf(s)
                    val copy = item.itemMeta.clone()
                    val copyLore = copy.lore
                    copyLore[index] = "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+$field"
                    copy.lore = copyLore
                    item.itemMeta = copy
                }
            }
        }

    init {
        var constructed = false
        for (s: String in item.itemMeta.lore) {
            if (s.contains("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+")) {
                constructed = true
                val lore = item.itemMeta.lore
                val indexOfS = lore.indexOf(s)

                damage = s.split(": ${ChatColor.DARK_GRAY}+")[1].toInt()// Damage
                defense = lore[indexOfS + 1].split(": ${ChatColor.DARK_GRAY}+")[1].toInt()// defense
                magicDmg = lore[indexOfS + 2].split(": ${ChatColor.DARK_GRAY}+")[1].toInt()// magic damage
                magicDef = lore[indexOfS + 3].split(": ${ChatColor.DARK_GRAY}+")[1].toInt()// magic defense
                mana = lore[indexOfS + 4].split(": ${ChatColor.DARK_GRAY}+")[1].toInt()// mana
                stamina = lore[indexOfS + 5].split(": ${ChatColor.DARK_GRAY}+")[1].toInt()// stamina
            }
        }

        if (!constructed) {
            throw IllegalParameterException("Lore for item stats not found!")
        }
    }

    fun getDamageMultiplier(): Float {
        return defense/(defense + 100f)
    }
}