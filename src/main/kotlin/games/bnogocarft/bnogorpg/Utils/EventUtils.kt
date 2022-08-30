package games.bnogocarft.bnogorpg.Utils

import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.*

class EventUtils : Listener {
    val waiting = HashMap<String, Pair<Player, (PlayerEvent) -> Unit>>()

    companion object {
        private val waiting = HashMap<String, Pair<Player, (PlayerEvent) -> Unit>>()
        fun listenForNextEvent(e: String, player: Player, handle: (PlayerEvent) -> Unit) {
            waiting[e] = Pair(player, handle)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: AsyncPlayerChatEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerMoveEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerAnimationEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerBucketEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerChannelEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerFishEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerInteractEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerJoinEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerKickEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerLoginEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerPortalEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerQuitEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerRespawnEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerTeleportEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerVelocityEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerDropItemEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerToggleFlightEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerShearEntityEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerEditBookEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerPickupItemEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerLevelChangeEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onChat(e: PlayerGameModeChangeEvent) {
        if (waiting.contains(e.eventName) && e.player == waiting[e.eventName]!!.first) {
            waiting[e.eventName]!!.second(e)
            waiting.remove(e.eventName)
        }
    }
}