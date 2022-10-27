package me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems

import kotlin.random.Random

data class ItemVariable(private val possibleValues: Pair<Int, Int>) {
    val value = Random.nextInt(possibleValues.first, possibleValues.second + 1)
}