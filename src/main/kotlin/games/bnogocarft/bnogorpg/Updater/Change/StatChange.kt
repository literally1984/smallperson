package games.bnogocarft.bnogorpg.Updater.Change

import games.bnogocarft.bnogorpg.Updater.Updates.Update
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial

data class StatChange(override val mat: BMaterial, val adjustments: String, override val update: Update) :
    Change(mat, update)