package games.bnogocarft.bnogorpg

import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import games.bnogocarft.bnogorpg.CustomItems.CactusArmor
import games.bnogocarft.bnogorpg.Listeners.HotbarChangeEvent
import games.bnogocarft.bnogorpg.Listeners.PlayerJoinEvent
import games.bnogocarft.bnogorpg.Listeners.PlayerLeaveEvent
import games.bnogocarft.bnogorpg.OtherCommands.GiveCommand
import games.bnogocarft.bnogorpg.OtherCommands.PlayTimeCommand
import games.bnogocarft.bnogorpg.OtherCommands.Reforge.ReforgeCommand
import games.bnogocarft.bnogorpg.Planes.PlaneKeyItem
import games.bnogocarft.bnogorpg.Planes.PlaneListeners
import games.bnogocarft.bnogorpg.Planes.SteerListener
import games.bnogocarft.bnogorpg.Planes.removeScheduler
import games.bnogocarft.bnogorpg.Utils.CustomEvents.ArmorWearListeners
import games.bnogocarft.bnogorpg.Utils.GUIListeners
import games.bnogocarft.bnogorpg.Utils.Inventories
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import games.bnogocarft.bnogorpg.Utils.initUtils
import games.bnogocarft.bnogorpg.Utils.logo
import games.bnogocarft.bnogorpg.Utils.others.PlaytimeUtils
import games.bnogocarft.bnogorpg.WebsiteCommunication.ComUtils
import org.bukkit.ChatColor
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin


class Main : JavaPlugin() {
    override fun onEnable() {
        instance = this
        val cSender = server.consoleSender
        protocolManager = ProtocolLibrary.getProtocolManager()
        cSender.sendMessage("$logo Main class variables have been instanced")

        cSender.sendMessage("$logo Constructing utils...")
        BPlayers
        initUtils()
        cSender.sendMessage("$logo Utlils have been constructed")

        cSender.sendMessage("$logo Registering listeners")
        server.pluginManager.registerEvents(PlayerJoinEvent(), this)
        server.pluginManager.registerEvents(HotbarChangeEvent(), this)
        server.pluginManager.registerEvents(PlayerLeaveEvent(), this)
        server.pluginManager.registerEvents(ArmorWearListeners(), this)
        cSender.sendMessage("$logo Registered Listeners")

        cSender.sendMessage("$logo Enabling RecipeBook...")
        //RecipeManager.registerRecipes(server.recipeIterator())
        cSender.sendMessage("$logo RecipeBook has been enabled")

        cSender.sendMessage("$logo Enabling Planes")
        PlaneKeyItem()
        server.pluginManager.registerEvents(PlaneListeners(), this)
        server.pluginManager.registerEvents(SteerListener(), this)
        server.scheduler.scheduleSyncRepeatingTask(this, removeScheduler(), 0, 1)
        cSender.sendMessage("$logo Planes have been enabled")

        cSender.sendMessage("$logo Enabling Websocket Server")
        //ComUtils.main()
        cSender.sendMessage("$logo Websocket Server has been enabled")

        cSender.sendMessage("$logo Enabling other commands...")
        getCommand("giv").executor = GiveCommand()
        getCommand("playtime").executor = PlayTimeCommand()
        getCommand("reforge").executor = ReforgeCommand()
        cSender.sendMessage("$logo all commands are enabled!")

        cSender.sendMessage("$logo Registering custom ItemStacks...")
        CactusArmor()
        cSender.sendMessage("$logo Registered custm Items")
        cSender.sendMessage("$logo Enabling GUI stuff...")
        server.pluginManager.registerEvents(GUIListeners(Inventories), this)
        cSender.sendMessage("$logo GUI Utils enabled")

        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage(
            "${ChatColor.LIGHT_PURPLE} $logo ${ChatColor.GREEN} BnogoRPG Vdev-0.0.4 Has been ${ChatColor.GREEN}Enabled"
        )
        cSender.sendMessage("--------------------------------------------")
        cSender.sendMessage("--------------------------------------------")
        saveDefaultConfig()
    }

    override fun onDisable() {
        server.consoleSender.sendMessage(
            ChatColor.LIGHT_PURPLE.toString() + "$logo" + ChatColor.RED + " BnogoRPG has been disabled D:"
        )
        for (player in server.onlinePlayers) {
            val bPlayer = BPlayers[player]!!
            PlaytimeUtils.addPlaytime(bPlayer)
            bPlayer.saveStats()
        }
    }

    companion object {
        var protocolManager: ProtocolManager? = null
        var instance: Plugin? = null
    }
}