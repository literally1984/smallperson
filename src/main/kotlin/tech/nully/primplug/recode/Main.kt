package tech.nully.primplug

import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import org.bukkit.ChatColor
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin
import tech.nully.primplug.recode.Listeners.PlayerJoinEvent
import tech.nully.primplug.recode.Utils.PItems.PPlayer.BPlayers

class Main : JavaPlugin() {
    override fun onEnable() {
        protocolManager = ProtocolLibrary.getProtocolManager()
        server.consoleSender.sendMessage("ProtocolManager has been successfully instanced")
        instance = this
        BPlayers.init()
        server.consoleSender.sendMessage("PPlayerMap has been constructed")
        server.pluginManager.registerEvents(PlayerJoinEvent(), this)
        server.consoleSender.sendMessage("Registered Listeners")
        server.consoleSender.sendMessage("--------------------------------------------")
        server.consoleSender.sendMessage("--------------------------------------------")
        server.consoleSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[BnogoMMO]" + ChatColor.GREEN + " BnogoMMO recoded vdev-0.0.1 Has been Enabled"
        )
        server.consoleSender.sendMessage("--------------------------------------------")
        server.consoleSender.sendMessage("--------------------------------------------")
        saveDefaultConfig()
    }

    override fun onDisable() {
        server.consoleSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[BnogoCore]" + ChatColor.RED + " BnogoCore has been disabled D:"
        )
    }

    companion object {
        var protocolManager: ProtocolManager? = null
        var instance: Plugin? = null;
    }
}