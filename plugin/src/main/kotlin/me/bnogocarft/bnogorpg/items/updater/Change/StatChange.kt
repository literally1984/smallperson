package me.bnogocarft.bnogorpg.items.updater.Change

import me.bnogocarft.bnogorpg.items.updater.Updates.Update

data class StatChange(override val mat: BMaterial, val adjustments: String, override val update: Update) :
    Change(mat, update)