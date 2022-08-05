package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerInteractEvent

class AbilityListeners : Listener {

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onRightClick(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null) {
            val itemInHand = e.player.itemInHand
            if (BItemUtils.getBType(itemInHand) == "weapon") { // up to this point, everything is a checker

                val bItem = BItemUtils.getBWeapon(itemInHand)
                val p = e.player
                when (bItem.bMaterial) {
                    BMaterial.BLADE_OF_HERMES -> {
                        val dir = p.location.direction.normalize()
                        val teleportdir = dir.multiply(4)
                        p.teleport(p.location.add(teleportdir))
                    }

                    else -> {
                        return
                    }
                }
            }
        }
    }
}