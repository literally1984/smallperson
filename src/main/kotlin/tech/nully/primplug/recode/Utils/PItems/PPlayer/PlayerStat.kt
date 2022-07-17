package tech.nully.primplug.recode.Utils.PItems.PPlayer

import tech.nully.primplug.recode.Utils.PItems.StatUtils.ItemStat

data class PlayerStat(val stats: List<Int>) {

    var defense: Int = stats[0]
    var mDefense: Int = stats[1]
    var currentMana: Int = stats[2]
    var maxMana: Int = stats[3]
    var currentStamina: Int = stats[4]
    var maxStamina: Int = stats[5]

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
    }


    fun subtract(stat: PlayerStat) {
        defense -= stat.defense
        mDefense -= stat.mDefense
        currentMana -= stat.currentMana
        maxMana -= stat.maxMana
        currentStamina -= stat.currentStamina
        maxStamina -= stat.maxStamina
    }

    fun subtract(stat: List<Int>) {
        defense -= stat[0]
        mDefense -= stat[1]
        currentMana -= stat[2]
        maxMana -= stat[3]
        currentStamina -= stat[4]
        maxStamina -= stat[5]
    }
}