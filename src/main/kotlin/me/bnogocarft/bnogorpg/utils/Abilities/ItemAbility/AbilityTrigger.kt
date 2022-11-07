package me.bnogocarft.bnogorpg.utils.Abilities.ItemAbility

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
            RIGHT_AIR -> "Right Click Air"
            RIGHT_BLOCK -> "Right Click Block"
            SHIFT_RIGHT_AIR -> "Shift Right Click"
            LEFT_AIR -> "Left Click Air"
            LEFT_BLOCK -> "Left Click Block"
            SHIFT_LEFT_AIR -> "Shift Left Click Air"
            SHIFT -> "Shift"
            ATTACK -> "On Attack"
            JUMP -> "Jump"
            SET_BONUS -> "Set Bonus"
            NONE -> "None"
            HIT -> "On Damaged"
        }
    }
}
