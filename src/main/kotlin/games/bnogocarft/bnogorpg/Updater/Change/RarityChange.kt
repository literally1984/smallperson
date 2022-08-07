package games.bnogocarft.bnogorpg.Updater.Change

import games.bnogocarft.bnogorpg.Updater.Updates.Update
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity

data class RarityChange(override val mat: BMaterial, override val update: Update, val rarity: Rarity) :
    Change(mat, update)