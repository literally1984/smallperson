package games.bnogocarft.bnogorpg.Planes

import org.bukkit.entity.Entity
import org.bukkit.entity.Minecart
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent

class PlaneListeners : Listener {

    // Handler for when a plane gets damaged with the EntityDamageEvent
    @EventHandler
    fun onPlaneDamage(event: EntityDamageEvent) {
        if (event.entity is Minecart) {
            if (planes.containsKey(event.entity)) {
                event.isCancelled = true
                val keyItem = planes[event.entity]!!
                val key = PlaneKey(keyItem)
                val planeEntity = key.plane
                planeEntity.health = planeEntity.health - event.damage
                if (planeEntity.health <= 0) {
                    planeEntity.destroyed = true
                }

                // Update the key item's health
                key.stats.currentHealth = planeEntity.health
            }
        }
    }
}