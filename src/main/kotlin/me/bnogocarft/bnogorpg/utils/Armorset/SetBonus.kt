package me.bnogocarft.bnogorpg.utils.Armorset

import me.bnogocarft.bnogorpg.utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ItemAbility.IAbility

interface SetBonus : IAbility {
    override val type: AbilityTrigger
        get() = AbilityTrigger.SET_BONUS
}