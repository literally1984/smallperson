package me.bnogocarft.bnogorpg.Utils.ItemAbility.Abilities

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.Utils.ItemAbility.IAbility
import org.bukkit.entity.Player

class LightningChain : IAbility {
    override val description: ArrayList<String>
        get() = TODO("Not yet implemented")
    override val name: String
        get() = TODO("Not yet implemented")
    override val type: AbilityTrigger
        get() = TODO("Not yet implemented")

    override fun cast(caster: Player) {
        TODO("Not yet implemented")
    }

    init {
        Main.registeredAbilities.add(this)
    }
}