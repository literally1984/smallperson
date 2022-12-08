package me.bnogocarft.bnogorpg.utils.stat

data class PlayerStat(override val stats: HashMap<String, Int>) : EntityStat(stats){

    var currentMana: Int = stats["mana"]!!
    var maxMana: Int = stats["mana"]!!
    var currentStamina: Int = stats["stam"]!!
    var maxStamina: Int = stats["stam"]!!

    override operator fun <T : EntityStat> plus(stat: T) {
        if (stat !is PlayerStat) {
            throw IllegalArgumentException("A PlayerStat must be provided to operate on a PlayerStat!")
        }

        defense += stat.defense
        mDefense += stat.mDefense
        currentMana += stat.currentMana
        maxMana += stat.maxMana
        currentStamina += stat.currentStamina
        maxStamina += stat.maxStamina
        damage += stat.damage
    }

    override operator fun plus(stat: ItemStat) {
        defense += stat.defense
        mDefense += stat.magicDef
        currentMana += stat.mana
        maxMana += stat.mana
        currentStamina += stat.stamina
        maxStamina += stat.stamina
        damage += stat.damage
    }

    override operator fun <T : EntityStat> minus(stat: T) {
        if (stat !is PlayerStat) {
            throw IllegalArgumentException("A PlayerStat must be provided to operate on a PlayerStat!")
        }

        defense -= stat.defense
        mDefense -= stat.mDefense
        currentMana -= stat.currentMana
        maxMana -= stat.maxMana
        currentStamina -= stat.currentStamina
        maxStamina -= stat.maxStamina
        damage -= stat.damage
    }

    override operator fun minus(stat: ItemStat) {
        defense -= stat.defense
        mDefense -= stat.magicDef
        currentMana -= stat.mana
        maxMana -= stat.mana
        currentStamina -= stat.stamina
        maxStamina -= stat.stamina
        damage -= stat.damage
    }
}