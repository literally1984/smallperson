package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import games.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.GameMode
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerFishEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.player.PlayerToggleFlightEvent
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector


class AbilityListeners : Listener {

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onDoubleJumpAttempt(event: PlayerMoveEvent) {
        if (event.from.y < event.to.y) {
            if (event.player.inventory.armorContents[3].hasItemMeta() &&
                    event.player.inventory.armorContents[3].itemMeta.displayName == "Double Jump Boots") {
                event.player.allowFlight = true
                lateinit var task: BukkitTask
                task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                    if (event.player.isOnGround) {
                        event.player.allowFlight = false
                        task.cancel()
                        return@runTaskTimer
                    }
                }, 0, 7)
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onFlightAttempt(event: PlayerToggleFlightEvent) {
        if (!event.isFlying && event.player.gameMode != GameMode.CREATIVE) {
            event.player.velocity = event.player.velocity.add(Vector(0.0, 0.25, 0.0))
            event.isCancelled = true
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onRightClick(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null) {
            val itemInHand = e.player.itemInHand
            if (BItemUtils.getBType(itemInHand) == "weapon") { // up to this point, everything is a checker

                val bItem = BItemUtils.getBWeapon(itemInHand)
                val p = e.player
                when (bItem.material) {
                    BMaterial.BLADE_OF_HERMES -> {
                        if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
                            val dir = p.location.direction.normalize()
                            val teleportdir = dir.multiply(6)
                            p.teleport(p.location.add(teleportdir))
                        }
                    }

                    else -> {
                        return
                    }
                }
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onGrapple(event: PlayerFishEvent) {
        val player = OnlineBPlayers[event.player]!!
        val item = event.player.itemInHand
        if (item.itemMeta == null) return

        if (BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase()) == BMaterial.GRAPPLING_HOOK) {
            if (player.metadata.containsKey("grappleCd")) {
                event.player.sendMessage("${ChatColor.YELLOW}Your grapple hook is on cooldown! Wait ${ChatColor.RED}${ChatColor.BOLD}${player.metadata["grappleCd"]}")
                event.player.sendMessage("${ChatColor.YELLOW}seconds before using it again!")
                return
            }
            if (event.state == PlayerFishEvent.State.FAILED_ATTEMPT) {
                val hookLoc = event.hook.location
                val velo = hookLoc.toVector().subtract(event.player.location.toVector())
                event.player.velocity = velo.multiply(0.5)

                player.metadata["grappleCd"] = 3.0
                lateinit var task: BukkitTask
                task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                    if (player.metadata["grappleCd"] == null) {
                        task.cancel()
                        return@runTaskTimer
                    }

                    if (player.metadata["grappleCd"] == 0.0) {
                        task.cancel()
                        player.metadata.remove("grappleCd")
                        return@runTaskTimer
                    }
                    player.metadata["grappleCd"] = player.metadata["grappleCd"] as Double - 1.0
                }, 0, 20)
            }
        }
    }
}