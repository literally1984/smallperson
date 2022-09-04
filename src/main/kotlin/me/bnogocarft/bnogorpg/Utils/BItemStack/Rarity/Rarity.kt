package me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity

import org.bukkit.ChatColor

enum class Rarity {
    COMMON,
    UNCOMMON,
    RARE,
    EPIC,
    LEGENDARY,
    MYTHICAL,
    DIVINE;

    fun getStarsString(): String {
        return when (this) {
            COMMON -> "${ChatColor.GOLD}✪"
            UNCOMMON -> "${ChatColor.GOLD}✪✪"
            RARE -> "${ChatColor.GOLD}✪✪✪"
            EPIC -> "${ChatColor.GOLD}✪✪✪✪"
            LEGENDARY -> "${ChatColor.GOLD}✪✪✪✪✪"
            MYTHICAL -> "${ChatColor.GOLD}✪✪✪✪✪✪"
            DIVINE -> "${ChatColor.GOLD}✪✪✪✪✪✪✪"
        }
    }

    fun getStars(): Int {
        return when (this) {
            COMMON -> 1
            UNCOMMON -> 2
            RARE -> 3
            EPIC -> 4
            LEGENDARY -> 5
            MYTHICAL -> 6
            DIVINE -> 7
        }
    }
}