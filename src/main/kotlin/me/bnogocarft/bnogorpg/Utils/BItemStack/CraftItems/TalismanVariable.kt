package me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems

import kotlin.random.Random

data class TalismanVariable(val key: String, private val possibleValues: Pair<Int, Int>, val loreLine: Int) {
    val value = Random.nextInt(possibleValues.first, possibleValues.second+1)
}