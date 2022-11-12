package me.bnogocarft.bnogorpg.utils.ItemAbility.Abilities

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.utils.ItemAbility.IAbility
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerEvent
import org.bukkit.event.player.PlayerInteractEvent

class QuickDash : IAbility {
    override val description: ArrayList<String> = arrayListOf(

    )
    override val name: String = "Quick Dash"
    override val type: AbilityTrigger = AbilityTrigger.RIGHT_AIR

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
