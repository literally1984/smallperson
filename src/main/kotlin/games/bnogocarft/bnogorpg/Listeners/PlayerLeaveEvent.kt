package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.PItems.PPlayer.BPlayers
import games.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

class PlayerLeaveEvent : Listener {

    @EventHandler
    fun onPlayerLeave(e: PlayerQuitEvent) {
        val player = BPlayers.BPlayerMap[e.player]
        if (player != null) {
            PlaytimeUtils.addPlaytime(player)
        }
    }
}