package me.bnogocarft.bnogorpg.items.updater.Updates

import me.bnogocarft.bnogorpg.items.updater.Change.Change

enum class Update {
    zerozerotwo;

    fun getPatch(): String {
        return when (this) {
            zerozerotwo -> "0.0.2"
        }
    }

    fun getChanges(): List<Change> {
        when (this) {
            zerozerotwo -> {
                return ArrayList()
            }
        }
    }
}