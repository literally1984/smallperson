package me.bnogocarft.bnogorpg.Listeners

import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import me.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

class PlayerLeaveEvent : Listener {

    @EventHandler
    fun onPlayerLeave(e: PlayerQuitEvent) {
        val player = OnlineBPlayers[e.player]
        player.isInCastMode = false
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