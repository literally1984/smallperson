package me.bnogocarft.bnogorpg.items.updater.Change

import me.bnogocarft.bnogorpg.items.updater.Updates.Update

data class AbilityChange(
    override val mat: BMaterial,
    override val update: Update,
    val name: String,
    val desc: List<String>
) : Change(mat, update)