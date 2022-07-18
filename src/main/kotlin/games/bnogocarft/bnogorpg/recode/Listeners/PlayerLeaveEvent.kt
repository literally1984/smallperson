package games.bnogocarft.bnogorpg.recode.Listeners

import games.bnogocarft.bnogorpg.recode.Utils.PItems.PPlayer.BPlayers
import games.bnogocarft.bnogorpg.recode.Utils.others.PlaytimeUtils
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