package me.bnogocarft.bnogorpg.Utils.ItemAbility

import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerEvent

interface IAbility {
    val description: ArrayList<String>
    val name: String
    val type: AbilityTrigger
    fun cast(caster: Player, abilityEvent: PlayerEvent)
}