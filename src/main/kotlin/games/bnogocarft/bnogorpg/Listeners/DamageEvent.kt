package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.Abilities.SetBonus
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import kotlin.math.roundToInt

class DamageEvent : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onPlayerDamage(e: EntityDamageByEntityEvent) {
        if (e.entity is Player) {
            val player = BPlayers[e.entity]!!
            val damager = e.damager

            var damage = e.damage.toDouble()

            // Set bonuses
            if (player.currentSetBonus != SetBonus.NONE) {
                // When statement for set bonuses
                when (player.currentSetBonus) {

                    SetBonus.Cactus -> { // Handler for cactus set bonus
                        val reflected = damage * 0.3 // Gets the reflected damage
                        damage -= reflected

                        if (damager is Player) {
                            // Deals the reflected damage to the damager
                            val bDamager = BPlayers[damager]!!
                            player.dealDamage(bDamager, reflected.roundToInt())
                        }
                    }

                    else -> {}
                }
            }

            if (damager is Player) {
                val bDamager = BPlayers[damager]!!
                bDamager.dealDamage(player, damage.roundToInt())
            } else {
                val finalDamge = damage * (player.stats.defense / player.stats.defense + 10)
                player.player.health -= finalDamge.roundToInt()
            }
        }
    }
}


