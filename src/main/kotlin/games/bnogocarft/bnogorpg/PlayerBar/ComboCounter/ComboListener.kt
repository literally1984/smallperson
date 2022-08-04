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
        if (e.damager is Player && e.entity is Player) { // Checks both parties are players
            val damager = BPlayers[e.damager]!!

            if (damager.combo == null) { // If the player is not currently comboing
                damager.bar.text = "Combo Damage: ${e.damage}"
                val task = Bukkit.getScheduler().runTaskTimer(Main.instance, ComboTimer(damager), 20, 20)
                damager.combo = Combo(task,5, e.damage)
            } else { // If the player is comboing
                damager.bar.text = "Combo Damage: ${e.damage + damager.combo!!.damage}"
                damager.bar.health = 100
                damager.combo!!.damage += damager.combo!!.damage
            }
        }
    }
}