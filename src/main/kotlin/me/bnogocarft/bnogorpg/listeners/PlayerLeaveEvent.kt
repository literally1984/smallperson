package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.utils.others.PlaytimeUtils
import me.bnogocarft.bnogorpg.utils.player.OnlineBPlayers
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