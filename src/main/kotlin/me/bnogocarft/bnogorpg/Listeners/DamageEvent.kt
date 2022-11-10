package me.bnogocarft.bnogorpg.Listeners

import me.bnogocarft.bnogorpg.Player.PlayerBar.CombatLogBar
import me.bnogocarft.bnogorpg.utils.BPlayer.bPlayer
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent

class DamageEvent : Listener {
    @EventHandler(priority = EventPriority.LOW)
    fun onPlayerDamage(e: EntityDamageByEntityEvent) {
        if (e.entity is LivingEntity && e.damager is LivingEntity) {
            val damager = e.damager
            val victim = e.entity
            // If the damager is a player
            if (damager is Player) {
                val bDamager = damager.bPlayer()
                bDamager.bars
                // If the player is in PVP
                if (victim is Player) {
                    val bVictim = victim.bPlayer()
                    bDamager.bars.add(CombatLogBar(bDamager))
                    bVictim.bars.add(CombatLogBar(bVictim))
                }
            }
        }
    }
}


