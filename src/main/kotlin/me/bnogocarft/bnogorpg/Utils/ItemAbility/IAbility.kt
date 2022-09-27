package me.bnogocarft.bnogorpg.Utils.ItemAbility

import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import org.bukkit.entity.Player

interface IAbility {
    val description: ArrayList<String>
    val name: String
    val type: AbilityTrigger
    fun cast(caster: Player)
}