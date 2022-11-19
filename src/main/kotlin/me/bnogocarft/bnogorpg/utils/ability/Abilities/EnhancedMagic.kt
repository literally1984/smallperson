package me.bnogocarft.bnogorpg.utils.ability.Abilities

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.player.bPlayer
import org.bukkit.entity.Player
import org.bukkit.event.Event

class EnhancedMagic : IAbility {
    override val description: ArrayList<String> = arrayListOf(
        "While wearing this armor in",
        "full set, the user gains +30%",
        "mana"
    )
    override val name: String = "Enhanced Magic"
    override val type: AbilityTrigger = AbilityTrigger.SET_BONUS

    override fun cast(caster: Player, abilityEvent: Event) {
        val player = caster.bPlayer()
        player.stats.maxMana += player.stats.maxMana / 3
    }

    init {
        Main.registeredAbilities.add(this)
    }
}