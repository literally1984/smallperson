package games.bnogocarft.bnogorpg.Updater.Change

import games.bnogocarft.bnogorpg.Updater.Updates.Update
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial

data class AbilityChange(
    override val mat: BMaterial,
    override val update: Update,
    val name: String,
    val desc: List<String>
) : Change(mat, update)