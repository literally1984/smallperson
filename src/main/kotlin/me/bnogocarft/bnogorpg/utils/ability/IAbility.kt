package me.bnogocarft.bnogorpg.utils.ability

import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import org.bukkit.entity.Player
import org.bukkit.event.Event

interface IAbility {
    val description: ArrayList<String>
    val name: String
    val type: AbilityTrigger
    fun cast(caster: Player, abilityEvent: Event)
}