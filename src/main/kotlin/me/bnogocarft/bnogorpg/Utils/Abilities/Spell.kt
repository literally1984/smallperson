package me.bnogocarft.bnogorpg.Utils.Abilities

import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

interface Spell {
    val displayItem: ItemStack

    val name: String
    val codeName: String
    var rank: Int
    fun cast(caster: Player)
}