package me.bnogocarft.bnogorpg.Utils

import org.bukkit.ChatColor

fun String.insert(index: Int, string: String): String {
    return this.substring(0, index) + string + this.substring(index)
}

fun String.selectWord(index: Int): String {
    return this.split(" ")[index]
}

/**
 * Gets the value of a string from removing ": " and stripping the color char
 * @return the value of the string eg. "String: &aHello" -> "Hello"
 */
fun String.getValue(): String? {
    if (this.contains(": ")) {
        val split = this.split(": ")[1]
        if (split.contains("${ChatColor.COLOR_CHAR}")) {
            return split.drop(2)
        }
    }
    return null
}