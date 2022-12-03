package me.bnogocarft.bnogorpg.utils

import me.bnogocarft.bnogorpg.utils.bitem.factory.symbols
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack
import kotlin.math.roundToInt
import kotlin.random.Random
import kotlin.reflect.KClass
import kotlin.reflect.cast

fun <K, V> HashMap<K, V>.put(pair: Pair<K, V>) {
    this[pair.first] = pair.second
}

fun rand(min: Float, max: Float): Float {
    return min + Random.nextFloat() * (max - min)
}

operator fun String.set(index: Int, value: Char): String {
    val e = this.toCharArray()
    e[index] = value
    return String(e)
}

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

fun makeRoman(Int: Int): String? {
    var Int = Int
    val roman_numerals = LinkedHashMap<String, Int>()
    roman_numerals["M"] = 1000
    roman_numerals["CM"] = 900
    roman_numerals["D"] = 500
    roman_numerals["CD"] = 400
    roman_numerals["C"] = 100
    roman_numerals["XC"] = 90
    roman_numerals["L"] = 50
    roman_numerals["XL"] = 40
    roman_numerals["X"] = 10
    roman_numerals["IX"] = 9
    roman_numerals["V"] = 5
    roman_numerals["IV"] = 4
    roman_numerals["I"] = 1
    var res: String? = ""
    for (entry in roman_numerals.entries) {
        val matches = Int / entry.value
        res += repeat(entry.key, matches)
        Int %= entry.value
    }
    return res
}

private fun repeat(s: String?, n: Int): String? {
    if (s == null) {
        return null
    }
    val sb = StringBuilder()
    for (i in 0 until n) {
        sb.append(s)
    }
    return sb.toString()
}

fun Pair<Float, Float>.getBar(sidebars: String, filled: String): String {
    val b = "■"
    var bar = "$sidebars[$filled$b$b$b$b$b$b$b$b$b$b$sidebars]"
    val bars = ((first/second)*10).roundToInt()

    val barAsArray = bar.toCharArray().toMutableList()

    if (bars >= 1) {
        println(bars)
        barAsArray.add(bars + 5, '§')
        barAsArray.add(bars + 6, '8')
        bar = barAsArray.joinToString("")
    } else {
        barAsArray[4] = '8'
    }

    return bar
}

class BMaterialMap() : HashMap<String, ItemStack>() {
    fun
}

infix fun <T: Any> Any.cast(clazz: KClass<out T>): T = clazz.cast(this)