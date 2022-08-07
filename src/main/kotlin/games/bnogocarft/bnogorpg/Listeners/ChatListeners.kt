package games.bnogocarft.bnogorpg.Listeners

import com.massivecraft.factions.entity.UPlayer
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.AsyncPlayerChatEvent

class ChatListeners : Listener {

    @EventHandler
    fun onChat(event: AsyncPlayerChatEvent) {
        val player = event.player
        if (player.hasPermission("bnogorpg.chat.admin")) {
            event.format =
                "${ChatColor.DARK_GRAY}[${ChatColor.DARK_RED}Admin${ChatColor.DARK_GRAY}] ${ChatColor.WHITE}${player.name}► ${event.message}"
            return
        }
        if (player.hasPermission("bnogorpg.chat.mod")) {
            event.format =
                "${ChatColor.DARK_GRAY}[${ChatColor.GOLD}Mod${ChatColor.DARK_GRAY}] ${ChatColor.WHITE}${player.name}► ${event.message}"
        }
        if (player.hasPermission("bnogorpg.chat.helper")) {
            event.format =
                "${ChatColor.GRAY}[${ChatColor.BLUE}Helper${ChatColor.GRAY}] ${ChatColor.WHITE}${UPlayer.get(player).faction.name} ${ChatColor.GRAY}${player.name}► ${event.message}"
        } else {
            event.format =
                "${ChatColor.WHITE}${UPlayer.get(player).faction.name} ${ChatColor.GRAY}${player.name}► ${event.message}"
        }

    }
}