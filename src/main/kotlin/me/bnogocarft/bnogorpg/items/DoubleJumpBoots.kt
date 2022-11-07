package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.items.DefaultItems.Diamond
import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.utils.ItemAbility.IAbility
import me.bnogocarft.bnogorpg.utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class DoubleJumpBoots {
    companion object {
        lateinit var boots: ItemStack
    }

    init {
        createBoots()
    }

    fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Double Jump Boots", Material.LEATHER_BOOTS, BItemType.ARMOR)

        val ability = DoubleJump()
        factoryItem.abilities.add(ability)
        factoryItem.armorColor = Color.BLUE
        factoryItem.stats = arrayListOf(0, 11, 0, 9, 8, 16)
        factoryItem.rarity = Rarity.EPIC

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("dj_boots", boots)

        val recipe = ShapedRecipe(Diamond.boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.SLIME_BALL)
        Bukkit.addRecipe(recipe)
    }
}

class DoubleJump : IAbility {
    override val description: ArrayList<String> = ArrayList()
    override val name: String = "placeholder"
    override val type: AbilityTrigger = AbilityTrigger.NONE

    override fun cast(caster: Player, abilityEvent: PlayerEvent) {
        if (abilityEvent !is PlayerInteractEvent) {
            return
        }

        val bItem = BItemUtils.getBWeapon(caster.itemInHand)
        if (bItem.material == BMaterial.DOUBLE_JUMP_BOOTS) {
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