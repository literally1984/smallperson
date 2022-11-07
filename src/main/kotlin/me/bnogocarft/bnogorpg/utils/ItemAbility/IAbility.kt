package me.bnogocarft.bnogorpg.utils.ItemAbility

import me.bnogocarft.bnogorpg.utils.Abilities.ItemAbility.AbilityTrigger
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerEvent

interface IAbility {
    val description: ArrayList<String>
    val name: String
    val type: AbilityTrigger
    fun cast(caster: Player, abilityEvent: PlayerEvent)
}