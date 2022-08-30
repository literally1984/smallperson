package games.bnogocarft.bnogorpg.Utils

import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.AsyncPlayerChatEvent

class ChatInput {
    companion object {
        val waiting = HashMap<String, InputListener>()
    }
    fun promptInput(p: Player, message: List<String>, listener: InputListener) {
        waiting[p.name] = listener
        for (msg in message) {
            p.sendMessage(msg)
        }
    }
    interface InputListener {
        fun onDone(msg: String)
    }

    internal class ChatListener : Listener {
        @EventHandler(priority = EventPriority.HIGHEST)
        fun onPlayerChat(e: AsyncPlayerChatEvent) {
            if (waiting.contains(e.player.name)) {
                waiting[e.player.name]!!.onDone(e.message)
                waiting.remove(e.player.name)
                e.isCancelled = true
            }
        }
    }
}