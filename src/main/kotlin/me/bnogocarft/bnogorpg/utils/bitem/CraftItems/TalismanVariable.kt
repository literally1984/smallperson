package me.bnogocarft.bnogorpg.utils.bitem.CraftItems

import kotlin.random.Random

data class ItemVariable(private val possibleValues: Pair<Int, Int>) {
    val value = Random.nextInt(possibleValues.first, possibleValues.second + 1)
}