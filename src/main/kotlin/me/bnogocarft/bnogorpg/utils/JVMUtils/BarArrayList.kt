package me.bnogocarft.bnogorpg.utils.JVMUtils

import me.bnogocarft.bnogorpg.Player.PlayerBar.Bar

class BarArrayList : ArrayList<Bar>() {
    override fun add(element: Bar): Boolean {
        super.add(element)
        this.sortBy { it.priority }
        return true
    }
}