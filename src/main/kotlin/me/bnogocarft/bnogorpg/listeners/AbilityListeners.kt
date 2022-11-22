package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.player.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.GameMode
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerFishEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.player.PlayerToggleFlightEvent
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector


class AbilityListeners : Listener {

    @EventHandler(priority = EventPriority.HIGH)
    fun onDoubleJumpAttempt(event: PlayerMoveEvent) {
        if (event.from.y < event.to.y) {
            for (armor in event.player.inventory.armorContents) {
                if (armor.hasItemMeta()) {
                    if (armor.itemMeta.displayName == "Double Jump Boots") {
                        event.player.allowFlight = true
                        event.player.isFlying = false
                    }
                }
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGH)
    fun onFlightAttempt(event: PlayerToggleFlightEvent) {
        val boots = event.player.inventory.boots
        if (!event.isFlying && event.player.gameMode != GameMode.CREATIVE) {
            if (boots != null && boots.hasItemMeta()) {
                if (boots.itemMeta.displayName == "Double Jump Boots") {
                    event.isCancelled = true
                    event.player.allowFlight = false
                    event.player.isFlying = false
                    event.player.velocity = event.player.velocity.add(Vector(0.0, 3.0, 0.0))
                    print("Flight attempt cancelled")
                }
            }
        }

        if (boots != null && boots.hasItemMeta()) {
            if (boots.itemMeta.displayName != "Double Jump Boots") {
                event.player.allowFlight = false
                event.player.isFlying = false
                event.isCancelled = true
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onRightClick(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null) {
            val itemInHand = e.player.itemInHand
            if (BItemUtils.getBType(itemInHand) == "weapon") { // up to this point, everything is a checker

                val bItem = BItemUtils.getBWeapon(itemInHand)
                val p = e.player

                for (ability in bItem.abilities) {
                    ability.cast(p, e)
                }

                e.isCancelled = true
            }
        }
    }

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onGrapple(event: PlayerFishEvent) {
        val player = OnlineBPlayers[event.player]
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