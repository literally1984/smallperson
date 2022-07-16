package tech.nully.primplug

import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import org.bukkit.ChatColor
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin
import tech.nully.primplug.recode.Listeners.PlayerJoinEvent
import tech.nully.primplug.recode.RecipeBook.RecipeBookListeners
import tech.nully.primplug.recode.Utils.PItems.PPlayer.BPlayers
import tech.nully.primplug.recode.RecipeBook.RecipeManager

class Main : JavaPlugin() {
    override fun onEnable() {
        instance = this
        val cSender = server.consoleSender
        protocolManager = ProtocolLibrary.getProtocolManager()
        cSender.sendMessage("ProtocolManager has been successfully instanced")

        BPlayers.init()
        cSender.sendMessage("PPlayerMap has been constructed")

        cSender.sendMessage("Registering listeners")
        server.pluginManager.registerEvents(PlayerJoinEvent(), this)
        server.pluginManager.registerEvents(RecipeBookListeners(), this)
        cSender.sendMessage("Registered Listeners")

        cSender.sendMessage("Enabling RecipeBook...")
        RecipeManager.registerRecipes(server.recipeIterator())
        cSender.sendMessage("RecipeBook has been enabled")

        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[BnogoRPG]" + ChatColor.GREEN + " BnogoRPG recoded vdev-0.0.1 Has been Enabled"
        )
        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage("--------------------------------------------")
        saveDefaultConfig()
    }

    override fun onDisable() {
        server.consoleSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[BnogoRPG]" + ChatColor.RED + " BnogoRPG has been disabled D:"
        )
    }

    companion object {
        var protocolManager: ProtocolManager? = null
        var instance: Plugin? = null;
    }
}