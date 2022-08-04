package games.bnogocarft.bnogorpg.PlayerBar

import games.bnogocarft.bnogorpg.Main
import org.bukkit.ChatColor

enum class MainBar {
    MODE_COUNTER,
    SERVER_IP,
    FUEL_COUNTER;

    fun getText(): String {
        return when (this) {
            SERVER_IP -> Main.serverIp
            MODE_COUNTER -> "${ChatColor.DARK_PURPLE}MODE:"
            FUEL_COUNTER -> "${ChatColor.GREEN}PLANE FUEL:"
        }
    }
    fun getHealth(): Int {
        return when (this) {
            SERVER_IP -> 100
            MODE_COUNTER -> TODO()
            FUEL_COUNTER -> TODO()
        }
    }
}