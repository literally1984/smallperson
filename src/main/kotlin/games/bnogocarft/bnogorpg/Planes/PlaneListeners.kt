package games.bnogocarft.bnogorpg.Planes

import org.bukkit.Material
import org.bukkit.entity.Minecart
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
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
                val planeEntity = planes[event.entity]!!
                planeEntity.stats.currentHealth = planeEntity.stats.currentHealth - event.damage
                if (planeEntity.stats.currentHealth <= 0) {
                    planeEntity.isDestroyed = true
                }
            }
        }
    }

    @EventHandler (priority = EventPriority.HIGHEST)
    fun onPlaneInteract(e: PlayerInteractEntityEvent) {
        if (e.rightClicked is Minecart) {
            if (e.player.isSneaking) {
                if (planes.containsKey(e.rightClicked)) {
                    val plane = planes[e.rightClicked]!!
                    val coal = ItemStack(Material.COAL)

                    when (e.player.itemInHand) {
                        PlaneKeyItem.key -> plane.collect()
                        coal -> plane.stats.currentFuel += 10
                    }
                }
            }
        }
    }

    @EventHandler (priority = EventPriority.HIGHEST)
    // Hanndlers for plane spawning and starting
    fun onPlaneRightClick(e: PlayerInteractEvent) {
        if (e.player.isInsideVehicle) {
            if (planes.containsKey(e.player.vehicle)) {
                print("passed containsKey check")
                if (e.action == Action.RIGHT_CLICK_BLOCK || e.action == Action.RIGHT_CLICK_AIR) {
                    println("passed checks")
                    val plane = planes[e.player.vehicle]!!
                    print("passed spawn check")
                    if (!plane.isRunning) plane.start(e.player)
                }
            }
        }

        // For testing purposes
        if (e.action.equals(Action.RIGHT_CLICK_BLOCK)) {
            if (e.player.itemInHand == PlaneKeyItem.key) {
                val spawnedPlane = PlaneEntity(e.player.itemInHand)
                spawnedPlane.spawn(e.player.location)
                planes[spawnedPlane.plane] = spawnedPlane
            }
        }
    }
}