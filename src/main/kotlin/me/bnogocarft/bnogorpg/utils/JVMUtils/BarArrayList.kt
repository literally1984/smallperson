package me.bnogocarft.bnogorpg.utils.JVMUtils

import me.bnogocarft.bnogorpg.player.PlayerBar.Bar
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayer

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

    val current: Bar? = try {
        this[this.lastIndex]
    } catch (e: ArrayIndexOutOfBoundsException) {
        null
    }
}