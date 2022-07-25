package games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity

import org.bukkit.ChatColor

enum class Rarity(s: String) {
    COMMON("${ChatColor.GRAY}Common"),
    UNCOMMON("${ChatColor.GREEN}Uncommon"),
    RARE("${ChatColor.BLUE}Rare"),
    EPIC("${ChatColor.LIGHT_PURPLE}Epic"),
    LEGENDARY("${ChatColor.GOLD}Legendary"),
    MYTHICAL("${ChatColor.DARK_PURPLE}Mythical"),
    DIVINE("${ChatColor.WHITE}D${ChatColor.GREEN}i${ChatColor.LIGHT_PURPLE}v${ChatColor.YELLOW}i${ChatColor.BLUE}n${ChatColor.RED}e")
}