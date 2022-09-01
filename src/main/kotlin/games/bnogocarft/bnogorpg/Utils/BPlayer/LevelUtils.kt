package games.bnogocarft.bnogorpg.Utils.BPlayer

import kotlin.math.roundToLong

fun getNeededEXP(level: Int): Float {
    var neededEXP = 50L
    for (i in 1..level) {
        var doubleExp = neededEXP.toDouble()
        doubleExp *= 1.75
        neededEXP = doubleExp.roundToLong()
    }
    return neededEXP.toFloat()
}
