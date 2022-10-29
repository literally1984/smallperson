package me.bnogocarft.bnogorpg.Utils

fun String.insert(index: Int, string: String): String {
    return this.substring(0, index) + string + this.substring(index)
}

fun String.selectWord(index: Int): String {
    return this.split(" ")[index]
}