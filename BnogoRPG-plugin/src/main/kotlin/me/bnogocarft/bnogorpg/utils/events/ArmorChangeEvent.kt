package me.bnogocarft.bnogorpg.utils.events

import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.inventory.ItemStack


class ArmorChangeEvent(val player: Player, val slot: Int, val oldSet: Array<ItemStack?>) : Event(),
    Cancellable {
    private var isCancelled = false
    override fun isCancelled(): Boolean {
        return isCancelled
    }

    override fun setCancelled(b: Boolean) {
        isCancelled = b
    }

    override fun getHandlers(): HandlerList {
        return handlerList
    }

    companion object {
        val handlerList = HandlerList()
    }
}