package games.bnogocarft.bnogorpg.Utils.PPlayer

import kotlin.math.roundToLong

fun getNeededEXP(level: Long): Long {
    var neededEXP = 50L
    for (i in 1..level) {
        var doubleExp = neededEXP.toDouble()
        doubleExp *= 1.75
        neededEXP = doubleExp.roundToLong()
    }
    return neededEXP
}
