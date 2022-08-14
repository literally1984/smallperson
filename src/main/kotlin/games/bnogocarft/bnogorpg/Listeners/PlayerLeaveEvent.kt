package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayers
import games.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

class PlayerLeaveEvent : Listener {

    @EventHandler
    fun onPlayerLeave(e: PlayerQuitEvent) {
        val player = BPlayers[e.player]!!
        if (player.metadata["combat"] != null) {
            player.metadata["combatLogged"] = true
            for (item in e.player.inventory) {
                e.player.world.dropItemNaturally(e.player.location, item)
            }
        }
        PlaytimeUtils.addPlaytime(player)
        player.saveStats()
    }
}