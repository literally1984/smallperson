package games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity

import org.bukkit.ChatColor

enum class Rarity {
    COMMON,
    UNCOMMON,
    RARE,
    EPIC,
    LEGENDARY,
    MYTHICAL,
    DIVINE;

    fun getDisplay(): String {
        return when (this) {
            COMMON -> "${ChatColor.BOLD}${ChatColor.GRAY}COMMON"
            UNCOMMON -> "${ChatColor.BOLD}${ChatColor.GREEN}UNCOMMON"
            RARE -> "${ChatColor.BOLD}${ChatColor.BLUE}RARE"
            EPIC -> "${ChatColor.BOLD}${ChatColor.LIGHT_PURPLE}EPIC"
            LEGENDARY -> "${ChatColor.BOLD}${ChatColor.GOLD}LEGENDARY"
            MYTHICAL -> "${ChatColor.BOLD}${ChatColor.DARK_PURPLE}MYTHICAL"
            DIVINE -> "${ChatColor.BOLD}${ChatColor.WHITE}D${ChatColor.GREEN}I${ChatColor.LIGHT_PURPLE}V${ChatColor.YELLOW}I${ChatColor.BLUE}N${ChatColor.RED}E"
        }
    }
}