package games.bnogocarft.bnogorpg.Updater.Updates

import games.bnogocarft.bnogorpg.Updater.Change.Change

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