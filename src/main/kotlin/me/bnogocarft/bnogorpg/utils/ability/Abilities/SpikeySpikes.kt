package me.bnogocarft.bnogorpg.utils.ability.Abilities

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.player.bPlayer
import org.bukkit.entity.Player
import org.bukkit.event.Event

class SpikeySpikes : SetBonus {
    override val description: ArrayList<String> = arrayListOf(
        "When an opponent damages you,",
        "30% of the damage will be",
        "reflected back to them."
    )
    override val name: String = "Spiky Spikes"

    override val type: AbilityTrigger = AbilityTrigger.HIT

    override fun cast(caster: Player, abilityEvent: Event) {
        caster.bPlayer().onDamage.add {
            val e = it
            if (e.damager is Player) {
                val p = e.damager as Player
                val damage = e.damage / 3
                p.damage(damage)
            }
        }
    }

    init {
        Main.registeredAbilities.add(this)
    }
}