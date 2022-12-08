package me.bnogocarft.bnogorpg.utils.stat

open class EntityStat(open val stats: HashMap<String, Int>) {
    var defense: Int = stats["def"]!!
    var mDefense: Int = stats["mdef"]!!
    var damage = stats["atk"]!!

    /**
    Adds the current EntityStat with the given EntityStat.
     *@param[stat] The EntityStat to add to the current one
     */
    open operator fun <T : EntityStat> plus(stat: T) {
        defense += stat.defense
        mDefense += stat.mDefense
    }

    /**
    Adds the current EntityStat with the given [ItemStat].
     *@param[stat] The [ItemStat] to add to the current [EntityStat]
     */
    open operator fun plus(stat: ItemStat) {
        defense += stat.defense
        mDefense += stat.magicDef
    }

    open operator fun <T : EntityStat> minus(stat: T) {
        defense -= stat.defense
        mDefense -= stat.mDefense
    }

    open operator fun minus(stat: ItemStat) {
        defense -= stat.defense
        mDefense -= stat.magicDef
    }
}