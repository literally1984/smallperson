package me.bnogocarft.bnogorpg.utils.others.Rarity

import org.bukkit.ChatColor

enum class Rarity {
    COMMON,
    UNCOMMON,
    RARE,
    EPIC,
    LEGENDARY,
    MYTHIC,
    DIVINE;

    companion object {
        fun getRarity(rarity: String): Rarity {
            return when (rarity) {
                "${ChatColor.GRAY}${ChatColor.BOLD}COMMON" -> COMMON
                "${ChatColor.GREEN}${ChatColor.BOLD}UNCOMMON" -> UNCOMMON
                "${ChatColor.BLUE}${ChatColor.BOLD}RARE" -> RARE
                "${ChatColor.DARK_PURPLE}${ChatColor.BOLD}EPIC" -> EPIC
                "${ChatColor.GOLD}${ChatColor.BOLD}LEGENDARY" -> LEGENDARY
                "${ChatColor.LIGHT_PURPLE}${ChatColor.BOLD}MYTHIC" -> MYTHIC
                "${ChatColor.DARK_RED}${ChatColor.BOLD}DIVINE" -> DIVINE
                else -> {
                    throw IllegalArgumentException("Rarity \"$rarity\" not found")
                }
            }
        }
    }

    fun getText(): String {
        return when (this) {
            COMMON -> "${ChatColor.GRAY}${ChatColor.BOLD}COMMON"
            UNCOMMON -> "${ChatColor.GREEN}${ChatColor.BOLD}UNCOMMON"
            RARE -> "${ChatColor.BLUE}${ChatColor.BOLD}RARE"
            EPIC -> "${ChatColor.DARK_PURPLE}${ChatColor.BOLD}EPIC"
            LEGENDARY -> "${ChatColor.GOLD}${ChatColor.BOLD}LEGENDARY"
            MYTHIC -> "${ChatColor.LIGHT_PURPLE}${ChatColor.BOLD}MYTHIC"
            DIVINE -> "${ChatColor.DARK_RED}${ChatColor.BOLD}DIVINE"
        }
    }

    fun getColor(): String {
        return when (this) {
            COMMON -> "${ChatColor.GRAY}"
            UNCOMMON -> "${ChatColor.GREEN}"
            RARE -> "${ChatColor.BLUE}"
            EPIC -> "${ChatColor.DARK_PURPLE}"
            LEGENDARY -> "${ChatColor.GOLD}"
            MYTHIC -> "${ChatColor.LIGHT_PURPLE}"
            DIVINE -> "${ChatColor.DARK_RED}"
        }
    }

    fun getLevelCap(): Int {
        return when (this) {
            COMMON -> 30
            UNCOMMON -> 40
            RARE -> 50
            EPIC -> 60
            LEGENDARY -> 70
            MYTHIC -> 90
            DIVINE -> 100
        }
    }
    fun getQualityCap(): Double {
        return when (this) {
            COMMON -> .15
            UNCOMMON -> .25
            RARE -> .40
            EPIC -> .60
            LEGENDARY -> .70
            MYTHIC -> .80
            DIVINE -> 1.0
        }
    }
}