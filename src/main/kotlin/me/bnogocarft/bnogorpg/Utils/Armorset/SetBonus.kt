package me.bnogocarft.bnogorpg.Utils.Armorset

import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.Utils.ItemAbility.IAbility

interface SetBonus : IAbility {
    override val type: AbilityTrigger
        get() = AbilityTrigger.SET_BONUS
}