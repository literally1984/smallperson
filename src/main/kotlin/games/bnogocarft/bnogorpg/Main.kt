package games.bnogocarft.bnogorpg

import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import games.bnogocarft.bnogorpg.Listeners.HotbarChangeEvent
import games.bnogocarft.bnogorpg.Listeners.PlayerJoinEvent
import games.bnogocarft.bnogorpg.Listeners.PlayerLeaveEvent
import games.bnogocarft.bnogorpg.OtherCommands.GiveCommand
import games.bnogocarft.bnogorpg.OtherCommands.PlayTimeCommand
import games.bnogocarft.bnogorpg.Planes.*
import games.bnogocarft.bnogorpg.RecipeBook.RecipeBookListeners
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import games.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import org.bukkit.ChatColor
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin


class Main : JavaPlugin() {
    override fun onEnable() {
        instance = this
        val cSender = server.consoleSender
        protocolManager = ProtocolLibrary.getProtocolManager()
        cSender.sendMessage("[BnogoRPG] Main class variables have been instanced")

        cSender.sendMessage("[BnogoRPG] Constructing BPlayer utils...")
        BPlayers
        cSender.sendMessage("[BnogoRPG] BPlayers have been constructed")

        cSender.sendMessage("[BnogoRPG] Registering listeners")
        server.pluginManager.registerEvents(PlayerJoinEvent(), this)
        server.pluginManager.registerEvents(RecipeBookListeners(), this)
        server.pluginManager.registerEvents(HotbarChangeEvent(), this)
        server.pluginManager.registerEvents(PlayerLeaveEvent(), this)
        cSender.sendMessage("[BnogoRPG] Registered Listeners")

        cSender.sendMessage("[BnogoRPG] Enabling RecipeBook...")
        //RecipeManager.registerRecipes(server.recipeIterator())
        cSender.sendMessage("[BnogoRPG] RecipeBook has been enabled")

        cSender.sendMessage("[BnogoRPG] Enabling Planes")
        PlaneKeyItem()
        server.pluginManager.registerEvents(PlaneListeners(), this)
        server.pluginManager.registerEvents(SteerListener(), this)
        RemoveLooper()
        cSender.sendMessage("[BnogoRPG] Planes have been enabled")

        cSender.sendMessage("[BnogoRPG] Enabling Websocket Server")
        //ComUtils.main()
        cSender.sendMessage("[BnogoRPG] Websocket Server has been enabled")

        cSender.sendMessage("[BnogoRPG] Enabling other commands...")
        getCommand("giv").executor = GiveCommand()
        getCommand("playtime").executor = PlayTimeCommand()
        cSender.sendMessage("[BnogoRPG] all commands are enabled!")

        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[BnogoRPG]" + ChatColor.GREEN + " BnogoRPG Vdev-0.0.2 Has been Enabled"
        )
        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage("--------------------------------------------")
        saveDefaultConfig()
    }

    override fun onDisable() {
        server.consoleSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "[BnogoRPG]" + ChatColor.RED + " BnogoRPG has been disabled D:"
        )
        for (player in server.onlinePlayers) {
            val bPlayer = BPlayers[player]!!
            PlaytimeUtils.addPlaytime(bPlayer)

        }
    }

    companion object {
        var protocolManager: ProtocolManager? = null
        var instance: Plugin? = null
    }
}