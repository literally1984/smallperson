package me.bnogocarft.bnogorpg.Updater.Change

import me.bnogocarft.bnogorpg.Updater.Updates.Update
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity

data class RarityChange(override val mat: BMaterial, override val update: Update, val rarity: Rarity) :
    Change(mat, update)