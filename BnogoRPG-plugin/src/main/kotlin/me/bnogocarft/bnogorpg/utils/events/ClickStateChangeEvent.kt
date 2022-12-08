package me.bnogocarft.bnogorpg.utils.events

import org.bukkit.entity.Player
import org.bukkit.event.Cancellable
import org.bukkit.event.Event
import org.bukkit.event.HandlerList

data class ClickStateChangeEvent(val player: Player, val button: Button, val state: ClickState) : Event(),
    Cancellable {
    private var isCancelled = false
    override fun isCancelled(): Boolean {
        return isCancelled
    }

    override fun setCancelled(b: Boolean) {
        isCancelled = b
    }

    override fun getHandlers(): HandlerList {
        return handlerList
    }

    companion object {
        val handlerList = HandlerList()
    }
}

enum class ClickState {
    HOLD, RELEASE
}

enum class Button {
    LEFT, RIGHT
}