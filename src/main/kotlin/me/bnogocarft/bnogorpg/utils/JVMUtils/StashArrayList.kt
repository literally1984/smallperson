package me.bnogocarft.bnogorpg.utils.JVMUtils

import org.bukkit.inventory.ItemStack

class StashArrayList : ArrayList<ItemStack?>(54) {
    fun adde(element: ItemStack?): Boolean {
        for (i in 0..53) {
            if (super.get(i) == null) {
                super.set(i, element)
                return true
            }
        }
        return false
    }

    init {
        for (i in 0..53) {
            super.add(null)
        }
    }
}