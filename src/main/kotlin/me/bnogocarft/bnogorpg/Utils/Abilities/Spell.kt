package me.bnogocarft.bnogorpg.Utils.Abilities

import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

interface Spell {
    var displayItem: ItemStack
    var name: String
    fun cast(caster: Player)
}