package me.bnogocarft.bnogorpg.items.single

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.bitem.factory.FactoryWeapon
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack

class EnderwarriorBlade {
    companion object {
        lateinit var blade: ItemStack
    }

    init {
        createBlade()
    }

    private fun createBlade() {

        val ability = QuickDash()
        val stats = arrayListOf(9, 2, 5, 1, 30, 25)
        val rarity = Rarity.EPIC

        val fItem = FactoryWeapon(
            "${ChatColor.LIGHT_PURPLE}Enderwarrior Blade",
            rarity,
            arrayListOf(ability),
            BMaterial.DIAMOND_SWORD,
            stats
        )

        blade = fItem.register("enderwarrior_blade")
    }

    class QuickDash : IAbility {
        override val description: ArrayList<String> = arrayListOf(

        )
        override val name: String = "No Escape"
        override val type: AbilityTrigger = AbilityTrigger.RIGHT

        override fun cast(caster: Player, abilityEvent: Event) {
            if (abilityEvent !is PlayerInteractEvent) {
                return
            }

            val bItem = BItemUtils.getBWeapon(caster.itemInHand)
            if (bItem.material == BMaterial.BLADE_OF_HERMES) {
                if (abilityEvent.action == Action.RIGHT_CLICK_AIR || abilityEvent.action == Action.RIGHT_CLICK_BLOCK) {
                    val dir = caster.location.direction.normalize()
                    val teleportdir = dir.multiply(6)
                    caster.teleport(caster.location.add(teleportdir))
                }
            }
        }

        init {
            Main.registeredAbilities.add(this)
        }
    }
}