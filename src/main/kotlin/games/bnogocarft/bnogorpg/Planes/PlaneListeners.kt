package games.bnogocarft.bnogorpg.Planes

import org.bukkit.Material
import org.bukkit.entity.Minecart
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack

class PlaneListeners : Listener {

    // Handler for when a plane gets damaged with the EntityDamageEvent
    @EventHandler (priority = EventPriority.HIGHEST)
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

    @EventHandler (priority = EventPriority.HIGHEST)
    fun onPlaneInteract(e: PlayerInteractEntityEvent) {
        if (e.rightClicked is Minecart) {
            if (e.player.isSneaking) {
                if (planes.containsKey(e.rightClicked)) {
                    val planeKey = planes[e.rightClicked]
                    val plane = PlaneKey(planeKey!!).plane
                    val coal = ItemStack(Material.COAL)

                    when (e.player.itemInHand) {
                        planeKey -> plane.collect()
                        coal -> plane.fuel += 10
                    }
                }
            }
        }
    }

    @EventHandler (priority = EventPriority.HIGHEST)
    // Hanndlers for plane spawning and starting
    fun onPlaneSpawn(e: PlayerInteractEvent) {

    }
}