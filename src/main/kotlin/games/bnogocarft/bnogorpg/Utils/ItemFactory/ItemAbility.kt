package games.bnogocarft.bnogorpg.Utils.ItemFactory

import games.bnogocarft.bnogorpg.Utils.PPlayer.Abilities.ItemAbility.AbilityTrigger

enum class ItemAbility {
    CactusSet,
    LapisSet;

    val CactusDesc = arrayListOf<String>(
        "Upon being hit by an enemy, 30% of the incoming",
        "damage will be reflected back to the",
        "attacker"
    )

    fun getDescription(): List<String> {
        return when (this) {
            CactusSet -> CactusDesc
            LapisSet -> listOf(
                "Upon being hit by an enemy, 30% of the incoming",
                "damage will be reflected back to the",
                "attacker"
            ) //TODO
        }
    }

    fun getTrigger(): AbilityTrigger {
        return when (this) {
            CactusSet -> AbilityTrigger.SET_BONUS
            LapisSet -> AbilityTrigger.SET_BONUS
        }
    }

    fun getDisplayName(): String {
        return when (this) {
            CactusSet -> "Spiky Spikes"
            LapisSet -> "Enhanced Magic"
        }
    }

    fun getType(): AbilityTrigger {
        return when (this) {
            CactusSet -> AbilityTrigger.SET_BONUS
            LapisSet -> AbilityTrigger.SET_BONUS
        }
    }
}