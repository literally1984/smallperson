package games.bnogocarft.bnogorpg.recode.Listeners

import games.bnogocarft.bnogorpg.recode.Utils.PItems.PPlayer.BPlayer
import games.bnogocarft.bnogorpg.recode.Utils.PItems.PPlayer.BPlayers
import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent

class PlayerJoinEvent : Listener {

    @EventHandler
    fun playerJoinEvent(e: PlayerJoinEvent) {
        val bPlayer = BPlayer(e.player)
        BPlayers.BPlayerMap?.set(e.player, bPlayer)
        Bukkit.getServer().consoleSender.sendMessage("${e.player.displayName}'s data files have been instanced and mapped at")
        Bukkit.getServer().consoleSender.sendMessage(bPlayer.playerFile.path)
        for (item in e.player.inventory) {
            TODO()
        }
    }
}