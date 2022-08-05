package games.bnogocarft.bnogorpg.Utils

import org.bukkit.ChatColor

val logo = "[BnogoRPG]"

class StringUtils {
    companion object {
        val Common = "${ChatColor.BOLD}${ChatColor.GRAY}"
        val Uncommon = "${ChatColor.BOLD}${ChatColor.GREEN}"
        val Rare = "${ChatColor.BOLD}${ChatColor.BLUE}"
        val Epic = "${ChatColor.BOLD}${ChatColor.LIGHT_PURPLE}"
        val Legendary = "${ChatColor.BOLD}${ChatColor.GOLD}"
        val Mythical = "${ChatColor.BOLD}${ChatColor.RED}"
        val Divine = "${ChatColor.BOLD}${ChatColor.AQUA}"
    }
}

fun encode(s: String): String {
    return s.replace("", "§")
}

fun decode(s: String): String {
    return s.replace("§", "")
}