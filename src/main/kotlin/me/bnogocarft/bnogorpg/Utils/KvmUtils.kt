package me.bnogocarft.bnogorpg.Utils

operator fun Any?.minusAssign(i: Int) {
    (this as Int) -= i
}