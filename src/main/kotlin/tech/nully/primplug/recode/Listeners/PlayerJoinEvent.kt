package tech.nully.primplug.recode.Listeners

import org.bukkit.event.EventHandler
import org.bukkit.event.player.PlayerJoinEvent
import tech.nully.primplug.recode.Utils.PItems.PPlayer.PPlayer
import tech.nully.primplug.recode.Utils.PItems.PPlayer.PPlayerMap

class PlayerJoinEvent {

    @EventHandler
    fun playerJoinEvent(e: PlayerJoinEvent) {
        val joiner = e.player
        PPlayerMap.PPlayerMap[joiner] = PPlayer(joiner)
    }
}