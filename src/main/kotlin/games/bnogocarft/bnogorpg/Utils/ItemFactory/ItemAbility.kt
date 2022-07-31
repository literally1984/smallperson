package games.bnogocarft.bnogorpg.Utils.ItemFactory

import games.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger

enum class ItemAbility {
    CactusSet,
    LapisSet,
    NONE;

    val CactusDesc = arrayListOf(
        "Upon being hit by an enemy, 30%",
        "of the incoming damage will be",
        "reflected back to the attacker"
    )
    val LapisDesc = arrayListOf(
        "Upon obtaining this setbonus,",
        "the user gains +30% of their",
        "current max mana"
    )


    fun getDescription(): List<String> {
        return when (this) {
            CactusSet -> CactusDesc
            LapisSet -> LapisDesc
            else -> {
                arrayListOf("")
            }
        }
    }

    fun getDisplayName(): String {
        return when (this) {
            CactusSet -> "Spiky Spikes"
            LapisSet -> "Enhanced Magic"
            else -> {
                "None"
            }
        }
    }

    fun getType(): AbilityTrigger {
        return when (this) {
            CactusSet -> AbilityTrigger.SET_BONUS
            LapisSet -> AbilityTrigger.SET_BONUS
            else -> {
                AbilityTrigger.NONE
            }
        }
    }
}