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
}