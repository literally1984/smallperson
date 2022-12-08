package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.player.PlayerBar.CombatLogBar
import me.bnogocarft.bnogorpg.player.utils.bPlayer
import me.bnogocarft.bnogorpg.utils.times
import me.filoghost.holographicdisplays.api.HolographicDisplaysAPI
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.util.Vector
import kotlin.math.cos
import kotlin.math.sin

class DamageEvent : Listener {
    @EventHandler(priority = EventPriority.LOWEST)
    fun onPlayerDamage(e: EntityDamageEvent) {
        if (e.cause == EntityDamageEvent.DamageCause.ENTITY_ATTACK) {
            e as EntityDamageByEntityEvent
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

        val hologramAPI = HolographicDisplaysAPI.get(Main.instance)
        val dir = e.entity.location.direction
        val planeDir = Vector(dir.x, 0.0, dir.y)
        val hologram1 = hologramAPI.createHologram(e.entity.location.add(planeDir.add(Vector(cos(135.0), 0.5, sin(135.0)))*1.5))
        hologram1.lines.appendText("${e.damage} damage")

        val hologram2 = hologramAPI.createHologram(e.entity.location.add(planeDir.add(Vector(cos(0.0), -0.5, sin(0.0)))))
        hologram2.lines.appendText("${e.damage} damage")
    }
}


