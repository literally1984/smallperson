package me.bnogocarft.bnogorpg.items.single

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryWeapon
import me.bnogocarft.bnogorpg.utils.bitem.factory.WeaponMaker
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack

class Thunderbolt : WeaponMaker{
    companion object {
        lateinit var blade: ItemStack
    }

    init {
        createWeapon()
    }

    override fun createWeapon() {
        val ability = LightningChain()
        val stats = arrayListOf(16, 4, 14, 2, 30, 25)
        val rarity = Rarity.DIVINE

        val fItem = FactoryWeapon("${ChatColor.GOLD}Thunderbolt", rarity, arrayListOf(ability), BMaterial.DIAMOND_SWORD, stats)

        blade = fItem.register("thunderbolt")
    }

    class LightningChain : IAbility {
        override val description: ArrayList<String> = ArrayList()
        override val name: String = "Lightning Chain"
        override val type: AbilityTrigger = AbilityTrigger.NONE

        override fun cast(caster: Player, abilityEvent: Event) {
            if (abilityEvent !is PlayerInteractEvent) {
                return
            }

            val bItem = BItemUtils.getBWeapon(caster.itemInHand)
            if (bItem.material == BMaterial.THUNDERBOLT) {
                if (abilityEvent.action == Action.RIGHT_CLICK_AIR || abilityEvent.action == Action.RIGHT_CLICK_BLOCK) {
                    val dir = caster.location.direction.normalize()
                    val world = caster.location.world
                    val strike1 = caster.location.add(dir.multiply(2))
                    val strike2 = caster.location.add(caster.location.direction.normalize().multiply(3))
                    val strike3 = caster.location.add(caster.location.direction.normalize().multiply(4))
                    world.strikeLightning(strike1)
                    world.strikeLightningEffect(strike1)
                    world.strikeLightning(strike1)
                    world.strikeLightningEffect(strike1)
                    world.strikeLightning(strike1)
                    world.strikeLightningEffect(strike1)
                    world.createExplosion(strike1, 1f)

                    Bukkit.getScheduler().scheduleSyncDelayedTask(
                        Main.instance,
                        {
                            world.strikeLightning(strike2)
                            world.strikeLightningEffect(strike2)
                            world.strikeLightning(strike2)
                            world.strikeLightningEffect(strike2)
                            world.strikeLightning(strike2)
                            world.strikeLightningEffect(strike2)
                            world.createExplosion(strike2, 1f)

                            Bukkit.getScheduler().scheduleSyncDelayedTask(
                                Main.instance,
                                {
                                    world.strikeLightning(strike3)
                                    world.strikeLightningEffect(strike3)
                                    world.strikeLightning(strike3)
                                    world.strikeLightningEffect(strike3)
                                    world.strikeLightning(strike3)
                                    world.strikeLightningEffect(strike3)
                                    world.createExplosion(strike3, 1f)
                                }, 10
                            )

                        }, 10
                    )
                }
            }
        }

        init {
            Main.registeredAbilities.add(this)
        }
    }

    class ThunderTravel : IAbility {
        override val description: ArrayList<String> = ArrayList()
        override val name: String = "Lightning Chain"
        override val type: AbilityTrigger = AbilityTrigger.NONE

        override fun cast(caster: Player, abilityEvent: Event) {
            if (abilityEvent !is PlayerInteractEvent) {
                return
            }

            val bItem = BItemUtils.getBWeapon(caster.itemInHand)
            if (bItem.material == BMaterial.THUNDERBOLT) {
                if (abilityEvent.action == Action.RIGHT_CLICK_AIR || abilityEvent.action == Action.RIGHT_CLICK_BLOCK) {
                    val dir = caster.location.direction.normalize()
                    val world = caster.location.world
                    val strike1 = caster.location.add(dir.multiply(2))
                    val strike2 = caster.location.add(caster.location.direction.normalize().multiply(3))
                    val strike3 = caster.location.add(caster.location.direction.normalize().multiply(4))
                    world.strikeLightning(strike1)
                    world.strikeLightningEffect(strike1)
                    world.strikeLightning(strike1)
                    world.strikeLightningEffect(strike1)
                    world.strikeLightning(strike1)
                    world.strikeLightningEffect(strike1)
                    world.createExplosion(strike1, 1f)

                    Bukkit.getScheduler().scheduleSyncDelayedTask(
                        Main.instance,
                        {
                            world.strikeLightning(strike2)
                            world.strikeLightningEffect(strike2)
                            world.strikeLightning(strike2)
                            world.strikeLightningEffect(strike2)
                            world.strikeLightning(strike2)
                            world.strikeLightningEffect(strike2)
                            world.createExplosion(strike2, 1f)

                            Bukkit.getScheduler().scheduleSyncDelayedTask(
                                Main.instance,
                                {
                                    world.strikeLightning(strike3)
                                    world.strikeLightningEffect(strike3)
                                    world.strikeLightning(strike3)
                                    world.strikeLightningEffect(strike3)
                                    world.strikeLightning(strike3)
                                    world.strikeLightningEffect(strike3)
                                    world.createExplosion(strike3, 1f)
                                }, 10
                            )

                        }, 10
                    )
                }
            }
        }

        init {
            Main.registeredAbilities.add(this)
        }
    }
}