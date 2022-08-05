package games.bnogocarft.bnogorpg.Updater

import games.bnogocarft.bnogorpg.Updater.Updates.Update
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial

data class Change(val item: BMaterial, val diff: String, val update: Update)