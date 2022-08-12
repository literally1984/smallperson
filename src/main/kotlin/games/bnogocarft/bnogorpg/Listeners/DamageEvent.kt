package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.PlayerBar.ComboCounter.Combo
import games.bnogocarft.bnogorpg.PlayerBar.ComboCounter.ComboTimer
import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayers
import org.bukkit.Bukkit
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent

class DamageEvent : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onPlayerDamage(e: EntityDamageByEntityEvent) {
        if (e.entity is LivingEntity) {
             if ((e.entity as LivingEntity).noDamageTicks <= 1) {

                // handlers for if the damager is player and recipient is a mob
                if (e.damager is Player) {
                    val bDamager = BPlayers[e.damager]!!
                    if (bDamager.combo == null) { // If the player is not currently comboing
                        bDamager.bar.text = "Combo Damage: ${e.damage}"
                        val task = Bukkit.getScheduler().runTaskTimer(Main.instance, ComboTimer(bDamager), 0, 1)
                        bDamager.combo = Combo(task, 5, e.damage)
                    } else { // If the player is comboing
                        bDamager.bar.text = "Combo Damage: ${e.damage + bDamager.combo!!.damage}"
                        bDamager.bar.health = 200
                        bDamager.combo!!.damage += e.damage
                        bDamager.combo!!.timeLeft = 5
                    }
                }

                if (e.entity is Player) {
                    val player = BPlayers[e.entity]!!
                }
            }
        }
    }
}


