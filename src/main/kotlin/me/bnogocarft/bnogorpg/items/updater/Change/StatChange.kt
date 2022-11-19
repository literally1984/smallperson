package me.bnogocarft.bnogorpg.items.updater.Change

import me.bnogocarft.bnogorpg.items.updater.Updates.Update
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial

data class StatChange(override val mat: BMaterial, val adjustments: String, override val update: Update) :
    Change(mat, update)