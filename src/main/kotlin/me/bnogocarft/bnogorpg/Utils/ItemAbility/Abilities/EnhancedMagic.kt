package me.bnogocarft.bnogorpg.Utils.ItemAbility.Abilities

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.Utils.BPlayer.bPlayer
import me.bnogocarft.bnogorpg.Utils.ItemAbility.IAbility
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerEvent

class EnhancedMagic : IAbility {
    override val description: ArrayList<String> = arrayListOf(
        "While wearing this armor in",
        "full set, the user gains +30%",
        "mana"
    )
    override val name: String = "Enhanced Magic"
    override val type: AbilityTrigger = AbilityTrigger.SET_BONUS

    override fun cast(caster: Player, abilityEvent: PlayerEvent) {
        val player = caster.bPlayer()
        player.stats.maxMana += player.stats.maxMana / 3
    }

    init {
        Main.registeredAbilities.add(this)
    }
}