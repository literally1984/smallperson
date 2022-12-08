package me.bnogocarft.bnogorpg.items.single

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryMisc
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.player.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.player.PlayerFishEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask

class GrapplerItem {
    companion object {
        lateinit var grapple: ItemStack
    }

    init {
        createGrapple()
    }

    fun createGrapple() {
        val fItem = FactoryMisc("Grappling Hook", Rarity.RARE, arrayListOf(Grapple()), BMaterial.GRAPPLING_HOOK,)
        grapple = fItem.register("grapple")
    }

    class Grapple : IAbility {
        override val description = arrayListOf(
            "${ChatColor.YELLOW}Right clicking with this item will",
            "${ChatColor.YELLOW}launch a grapple to your eye direction.",
            "${ChatColor.YELLOW}Right clicking again will pull you",
            "${ChatColor.YELLOW}towards the grapple"
        )
        override val name = "Grapple"
        override val type = AbilityTrigger.RIGHT

        override fun cast(caster: Player, abilityEvent: Event) {
            if (abilityEvent is PlayerFishEvent) {
                val player = OnlineBPlayers[abilityEvent.player]
                val item = abilityEvent.player.itemInHand
                if (item.itemMeta == null) return

                if (BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase()) == BMaterial.GRAPPLING_HOOK) {
                    if (player.metadata.containsKey("grappleCd")) {
                        abilityEvent.player.sendMessage("${ChatColor.YELLOW}Your grapple hook is on cooldown! Wait ${ChatColor.RED}${ChatColor.BOLD}${player.metadata["grappleCd"]}")
                        abilityEvent.player.sendMessage("${ChatColor.YELLOW}seconds before using it again!")
                        return
                    }
                    if (abilityEvent.state == PlayerFishEvent.State.FAILED_ATTEMPT) {
                        val hookLoc = abilityEvent.hook.location
                        val velo = hookLoc.toVector().subtract(abilityEvent.player.location.toVector())
                        abilityEvent.player.velocity = velo.multiply(0.5)

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
    }
}