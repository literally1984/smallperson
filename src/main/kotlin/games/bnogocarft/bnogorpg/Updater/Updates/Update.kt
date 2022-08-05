package games.bnogocarft.bnogorpg.Updater.Updates

import games.bnogocarft.bnogorpg.Updater.Change
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial

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
                val changes = ArrayList<Change>()
                changes.add(Change(BMaterial.CACTUS_HELMET, "dmg +2||def -1", this))
                return changes
            }
        }
    }
}