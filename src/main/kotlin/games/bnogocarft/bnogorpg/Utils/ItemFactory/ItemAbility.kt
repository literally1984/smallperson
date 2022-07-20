package games.bnogocarft.bnogorpg.Utils.ItemFactory

import games.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger

data class ItemAbility(val type: AbilityTrigger, val name: String, val description: List<String>) {
}