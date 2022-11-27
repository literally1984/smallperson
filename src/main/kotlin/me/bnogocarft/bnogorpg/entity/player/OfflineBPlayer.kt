package me.bnogocarft.bnogorpg.entity.player

import me.bnogocarft.bnogorpg.utils.Exceptions.PlayerDoesNotExistException
import org.bukkit.Bukkit

data class OfflineBPlayer(override val player: String) : BPlayer(player) {
    val bukkitPlayer = Bukkit.getOfflinePlayer(player)

    init {
        if (!file.exists()) {
            throw PlayerDoesNotExistException("An offline player file tried to be accessed, but could not be found")
        }
    }
}