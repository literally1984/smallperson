package me.bnogocarft.bnogorpg.utils.JVMUtils

import me.bnogocarft.bnogorpg.Player.PlayerBar.Bar
import me.bnogocarft.bnogorpg.utils.BPlayer.OnlineBPlayer

data class BarArrayList(val player: OnlineBPlayer) : ArrayList<Bar>() {
    override fun add(element: Bar): Boolean {
        super.add(element)
        this.sortBy { it.priority }
        player.bar.health = this[this.lastIndex].health
        player.bar.text = this[this.lastIndex].name
        return true
    }

    override fun remove(element: Bar): Boolean {
        super.remove(element)
        this.sortBy { it.priority }
        player.bar.health = this[this.lastIndex].health
        player.bar.text = this[this.lastIndex].name
        return true
    }

    fun current(): Bar {
        return this[this.lastIndex]
    }
}