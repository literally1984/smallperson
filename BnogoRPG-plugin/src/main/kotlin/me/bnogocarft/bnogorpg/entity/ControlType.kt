package me.bnogocarft.bnogorpg.entity

enum class ControlType {
    /**
     * Allows the player to change the direction of the entity but the target entity will never stop moving.
     */
    WASD_CONTINUOUS,
    /**
     * The entity will continuously move towards the player's eye direction.
     */
    EYE,
    /**
     *  The entity will constantly face the player's eye direction and moves accordingly with WASD.
     */
    WASD;
}