package me.bnogocarft.bnogorpg.utils.Armorset

import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility

interface SetBonus : IAbility {
    override val type: AbilityTrigger
        get() = AbilityTrigger.SET_BONUS
}