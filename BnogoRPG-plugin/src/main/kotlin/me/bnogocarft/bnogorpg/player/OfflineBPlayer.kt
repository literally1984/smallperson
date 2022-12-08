package me.bnogocarft.bnogorpg.player

import me.bnogocarft.bnogorpg.utils.Exceptions.PlayerDoesNotExistException
import org.bukkit.Bukkit

data class OfflineBPlayer(override val playerName: String) : BPlayer(playerName) {
    val bukkitPlayer = Bukkit.getOfflinePlayer(playerName)

    init {
        if (!file.exists()) {
            throw PlayerDoesNotExistException("An offline player file tried to be accessed, but could not be found")
        }
    }
}