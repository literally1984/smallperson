package me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility

enum class AbilityTrigger {
    RIGHT_AIR,
    RIGHT_BLOCK,
    SHIFT_RIGHT_AIR,
    LEFT_AIR,
    LEFT_BLOCK,
    SHIFT_LEFT_AIR,
    SHIFT,
    ATTACK,
    JUMP,
    SET_BONUS,
    NONE,
    HIT;

    fun getString(): String {
        return when (this) {
            RIGHT_AIR -> "Right Air"
            RIGHT_BLOCK -> "Right Block"
            SHIFT_RIGHT_AIR -> "Shift Right Air"
            LEFT_AIR -> "Left Air"
            LEFT_BLOCK -> "Left Block"
            SHIFT_LEFT_AIR -> "Shift Left Air"
            SHIFT -> "Shift"
            ATTACK -> "Damage"
            JUMP -> "Jump"
            SET_BONUS -> "Set Bonus"
            NONE -> "None"
            HIT -> "On-Hit"
        }
    }
}
