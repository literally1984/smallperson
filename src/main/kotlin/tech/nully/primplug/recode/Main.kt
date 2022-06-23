package tech.nully.primplug

import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import org.bukkit.ChatColor
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin

class Main : JavaPlugin() {
    override fun onEnable() {
        val protocolManager = ProtocolLibrary.getProtocolManager()
        instance = this
        server.consoleSender.sendMessage("--------------------------------------------")
        server.consoleSender.sendMessage("--------------------------------------------")
        server.consoleSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[PrimPlugin]" + ChatColor.GREEN + " PrimPlugin V0.2.6 is now Enabled! :D"
        )
        server.consoleSender.sendMessage("--------------------------------------------")
        server.consoleSender.sendMessage("--------------------------------------------")
        saveDefaultConfig()
    }

    override fun onDisable() {
        server.consoleSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[PrimPlugin]" + ChatColor.RED + "PrimPlugin is now Disabled! :("
        )
    }

    companion object {
        var protocolManager: ProtocolManager? = null
        var instance: Plugin? = null;
    }
}