package me.bnogocarft.bnogorpg.Utils.BPlayer

import me.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat

data class PlayerStat(val stats: List<Int>) {

    var defense: Int = stats[0]
    var mDefense: Int = stats[1]
    var currentMana: Int = stats[2]
    var maxMana: Int = stats[2]
    var currentStamina: Int = stats[3]
    var maxStamina: Int = stats[3]
    var baseDamage = stats[4]

    /**
    Adds the current PlayerStat with the given PlayerStat.
     *@param[stat] The PlayerStat to add to the current one
     */
    fun add(stat: PlayerStat) {
        defense += stat.defense
        mDefense += stat.mDefense
        currentMana += stat.currentMana
        maxMana += stat.maxMana
        currentStamina += stat.currentStamina
        maxStamina += stat.maxStamina
        baseDamage += stat.baseDamage
    }

    /**
    Adds the current PlayerStat with the given List.
     *@param[stat] The List of [Int]s to add to the current [PlayerStat]
     */
    fun add(stat: List<Int>) {
        defense += stat[0]
        mDefense += stat[1]
        currentMana += stat[2]
        maxMana += stat[3]
        currentStamina += stat[4]
        maxStamina += stat[5]
        baseDamage += stat[6]
    }

    /**
    Adds the current PlayerStat with the given [ItemStat].
     *@param[stat] The [ItemStat] to add to the current [PlayerStat]
     */
    fun add(stat: ItemStat) {
        defense += stat.defense
        mDefense += stat.magicDef
        currentMana += stat.mana
        maxMana += stat.mana
        currentStamina += stat.stamina
        maxStamina += stat.stamina
        baseDamage += stat.damage
    }

    /**
    Subtracts the current PlayerStat with the given [PlayerStat].
     *@param[stat] The [PlayerStat] to subtract from the current [PlayerStat]
     */
    fun subtract(stat: PlayerStat) {
        defense -= stat.defense
        mDefense -= stat.mDefense
        currentMana -= stat.currentMana
        maxMana -= stat.maxMana
        currentStamina -= stat.currentStamina
        maxStamina -= stat.maxStamina
        baseDamage -= stat.baseDamage
        if (currentMana < 0) currentMana = 0
        if (currentStamina < 0) currentStamina = 0
    }

    /**
    Subtracts the current PlayerStat with the given [List].
     *@param[stat] The [List] to subtract from the current [PlayerStat]
     */
    fun subtract(stat: List<Int>) {
        defense -= stat[0]
        mDefense -= stat[1]
        currentMana -= stat[2]
        maxMana -= stat[3]
        currentStamina -= stat[4]
        maxStamina -= stat[5]
        baseDamage -= stat[6]
        if (currentMana < 0) currentMana = 0
        if (currentStamina < 0) currentStamina = 0
    }

    /**
     * Subtracts the current PlayerStat with the given [ItemStat].
     * @param[stat] The [ItemStat] to subtract from the current [PlayerStat]
     */
    fun subtract(stat: ItemStat) {
        defense -= stat.defense
        mDefense -= stat.magicDef
        currentMana -= stat.mana
        maxMana -= stat.mana
        currentStamina -= stat.stamina
        maxStamina -= stat.stamina
        baseDamage -= stat.damage
        if (currentMana < 0) currentMana = 0
        if (currentStamina < 0) currentStamina = 0
    }
}