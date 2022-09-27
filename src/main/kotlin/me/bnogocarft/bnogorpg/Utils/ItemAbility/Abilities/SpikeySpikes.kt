package me.bnogocarft.bnogorpg.Utils.ItemAbility.Abilities

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.Utils.BPlayer.bPlayer
import me.bnogocarft.bnogorpg.Utils.ItemAbility.IAbility
import org.bukkit.entity.Player

class SpikeySpikes : IAbility {
    override val description: ArrayList<String> = arrayListOf(
        "When an opponent damages you,",
        "30% of the damage will be",
        "reflected back to them."
    )
    override val name: String = "Spiky Spikes"
    override val type: AbilityTrigger = AbilityTrigger.HIT

    override fun cast(caster: Player) {
        caster.bPlayer().onDamage.add {
            val e = it
            if (e.damager is Player) {
                val p = e.damager as Player
                val damage = e.damage/3
                p.damage(damage)
            }
        }
    }

    init {
        Main.registeredAbilities.add(this)
    }
}