package games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity

import org.bukkit.ChatColor

enum class Rarity() {
    COMMON,
    UNCOMMON,
    RARE,
    EPIC,
    LEGENDARY,
    MYTHICAL,
    DIVINE;

    fun getDisplay(): String{
        return when (this) {
            COMMON -> "${ChatColor.GRAY}COMMON"
            UNCOMMON -> "${ChatColor.GREEN}UNCOMMON"
            RARE -> "${ChatColor.BLUE}RARE"
            EPIC -> "${ChatColor.LIGHT_PURPLE}EPIC"
            LEGENDARY -> "${ChatColor.GOLD}LEGENDARY"
            MYTHICAL -> "${ChatColor.DARK_PURPLE}MYTHICAL"
            DIVINE -> "${ChatColor.WHITE}D${ChatColor.GREEN}I${ChatColor.LIGHT_PURPLE}V${ChatColor.YELLOW}I${ChatColor.BLUE}N${ChatColor.RED}E"
        }
    }
}