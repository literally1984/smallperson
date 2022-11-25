package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.items.single.Thunderbolt
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryWeapon
import me.bnogocarft.bnogorpg.utils.bitem.factory.WeaponMaker
import me.bnogocarft.bnogorpg.utils.events.Button
import me.bnogocarft.bnogorpg.utils.events.ClickState
import me.bnogocarft.bnogorpg.utils.events.ClickStateChangeEvent
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.utils.player.bPlayer
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitTask

class Mjolnir : WeaponMaker {
    companion object {
        lateinit var hammer: ItemStack
    }

    init {
        createWeapon()
    }

    override fun createWeapon() {
        val ability = HammerFly()
        val stats = arrayListOf(16, 4, 14, 2, 30, 25)
        val rarity = Rarity.DIVINE

        val fItem = FactoryWeapon(
            "${ChatColor.GOLD}Mjolnir",
            rarity, arrayListOf(ability),
            BMaterial.DIAMOND_HOE,
            stats
        )
    }

    class HammerFly : IAbility {
        override val description = arrayListOf(
            "${ChatColor.YELLOW}Holding right click will charge",
            "${ChatColor.YELLOW}your hammer, releasing it will",
            "${ChatColor.YELLOW}cause you to fly based on how",
            "${ChatColor.YELLOW}long you charge (Max 5 seconds).",
            "${ChatColor.YELLOW}Consumes ${ChatColor.AQUA}60 Mana ${ChatColor.YELLOW}(max)"
        )
        override val name = "Hammer Flight"
        override val type = AbilityTrigger.RIGHT
        var task: BukkitTask? = null

        override fun cast(caster: Player, event: Event) {
            if (event is ClickStateChangeEvent) {
                print(event.state)
                if (caster.itemInHand.itemMeta.displayName == "Mjolnir") {

                    if (event.button == Button.RIGHT) {
                        //If the player just started pressing the right click button
                        if (event.state == ClickState.HOLD) {
                            val gp = caster.bPlayer()
                            gp.chargeBar.enabled = true

                            gp.metadata["hammerfly"] = 0.1
                            gp.chargeBar.percentage = gp.metadata["hammerfly"] as Int
                            task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                                gp.metadata["hammerfly"] = (gp.metadata["hammerfly"] as Int) + 0.1
                                gp.chargeBar.percentage = gp.metadata["hammerfly"] as Int
                            }, 2, 2)
                            gp.p.walkSpeed -= 0.1f
                        } else { // If the Player releases right click
                            val gp = caster.bPlayer()
                            gp.p.walkSpeed += 0.1f
                            var charge = (gp.metadata["hammerfly"] as Int).toFloat()
                            gp.chargeBar.enabled = false

                            // Scheduler to set the Player's velocity to their direction for the amount of time they charged
                            var task: BukkitTask? = null
                            task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                                caster.velocity = caster.location.direction.multiply(0.5)
                                charge -= 0.1f
                                if (charge < 0) {
                                    task?.cancel()
                                }
                            }, 2, 2)
                            task!!.cancel()
                        }
                    }
                }
            }
        }
    }

    class ThunderEntrance : IAbility {
        override val description = arrayListOf(
            "${ChatColor.YELLOW}When the player takes more than 11",
            "${ChatColor.YELLOW}points of fall damage, they will",
            "${ChatColor.YELLOW}summon an explosion and continuous",
            "${ChatColor.YELLOW}lightning for 5 seconds",
            "${ChatColor.YELLOW}Consumes ${ChatColor.AQUA}40 Mana"
        )
        override val name = "Arrival of the Thunder God"
        override val type = AbilityTrigger.RIGHT
        var task: BukkitTask? = null

        override fun cast(caster: Player, event: Event) {
            if (event is ClickStateChangeEvent) {
                if (caster.itemInHand.itemMeta.displayName == "Mjolnir") {

                    if (event.button == Button.RIGHT) {
                        //If the player just started pressing the right click button
                        if (event.state == ClickState.HOLD) {
                            val gp = caster.bPlayer()
                            gp.chargeBar.enabled = true

                            gp.metadata["hammerfly"] = 0.1
                            gp.chargeBar.percentage = gp.metadata["hammerfly"] as Int
                            task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                                gp.metadata["hammerfly"] = (gp.metadata["hammerfly"] as Int) + 0.1
                                gp.chargeBar.percentage = gp.metadata["hammerfly"] as Int
                            }, 2, 2)
                            gp.p.walkSpeed -= 0.1f
                        } else { // If the Player releases right click
                            val gp = caster.bPlayer()
                            gp.p.walkSpeed += 0.1f
                            var charge = (gp.metadata["hammerfly"] as Int).toFloat()
                            gp.chargeBar.enabled = false

                            // Scheduler to set the Player's velocity to their direction for the amount of time they charged
                            var task: BukkitTask? = null
                            task = Bukkit.getScheduler().runTaskTimer(Main.instance, {
                                caster.velocity = caster.location.direction.multiply(0.5)
                                charge -= 0.1f
                                if (charge < 0) {
                                    task?.cancel()
                                }
                            }, 2, 2)
                            task!!.cancel()
                        }
                    }
                }
            }
        }
    }
}










