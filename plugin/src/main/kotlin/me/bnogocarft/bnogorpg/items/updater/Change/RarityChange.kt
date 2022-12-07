package me.bnogocarft.bnogorpg.items.updater.Change

import me.bnogocarft.bnogorpg.items.updater.Updates.Update
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity

data class RarityChange(override val mat: BMaterial, override val update: Update, val rarity: Rarity) :
    Change(mat, update)