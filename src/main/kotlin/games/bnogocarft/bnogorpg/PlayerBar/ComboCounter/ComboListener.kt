package games.bnogocarft.bnogorpg.PlayerBar.ComboCounter

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent

class ComboListener : Listener {
    @EventHandler (priority = EventPriority.HIGHEST)
    fun onCombo(e: EntityDamageByEntityEvent) {
        if (e.damager is Player && e.entity is Player) {
            val damager = BPlayers[e.damager]!!
            val task = Bukkit.getScheduler().runTaskTimer(Main.instance, ComboTimer(damager), 0, 20)
            damager.combo = Combo(task,4, e.damage)
        }
    }
}