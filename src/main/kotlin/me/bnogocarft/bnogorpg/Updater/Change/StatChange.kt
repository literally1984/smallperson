package me.bnogocarft.bnogorpg.Updater.Change

import me.bnogocarft.bnogorpg.Updater.Updates.Update
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial

data class StatChange(override val mat: BMaterial, val adjustments: String, override val update: Update) :
    Change(mat, update)