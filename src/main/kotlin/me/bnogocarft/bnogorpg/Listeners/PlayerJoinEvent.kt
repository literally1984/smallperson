package me.bnogocarft.bnogorpg.Listeners

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Planes.PlaneEntity
import me.bnogocarft.bnogorpg.Planes.planeEntitites
import me.bnogocarft.bnogorpg.Player.StatRegenTimer
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BArmor
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BWeapon
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayer
import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.scoreboard.DisplaySlot

class PlayerJoinEvent : Listener {

    @EventHandler(priority = EventPriority.HIGH)
    fun playerJoinEvent(e: PlayerJoinEvent) {
        val onlineBPlayer = OnlineBPlayer(e.player)
        val board = Bukkit.getScoreboardManager().newScoreboard
        val obj = board.registerNewObjective("test", "dummy")
        obj.displaySlot = DisplaySlot.SIDEBAR
        obj.displayName = "${ChatColor.GOLD}${ChatColor.BOLD}RPG Factions"
        val score = obj.getScore(Bukkit.getOfflinePlayer("${ChatColor.GOLD}Balance: 1"))
        score.score = 1
        e.player.scoreboard = board

        OnlineBPlayers[e.player] = onlineBPlayer

        if (onlineBPlayer.config.contains("o.msg")) {
            for (msg in onlineBPlayer.config.getStringList("o.msg")) {
                e.player.sendMessage(msg)
            }

            onlineBPlayer.config.set("o.msg", null)
        }
        e.player.sendMessage("${ChatColor.GOLD}${ChatColor.BOLD}Remember to check your stash for new items")
        e.player.sendMessage("${ChatColor.GOLD}${ChatColor.BOLD}that could have been given to you while you were")
        e.player.sendMessage("${ChatColor.GOLD}${ChatColor.BOLD}offline with ${ChatColor.BLUE}/stash!")
        if (onlineBPlayer.metadata["combatLogged"] == true) {
            e.player.inventory.clear()
            e.player.sendMessage("${ChatColor.RED}You have previously combat logged, you inventory has been cleared")
        }

        val playerBar = onlineBPlayer.bar
        playerBar.text =
            Main.serverIp
        playerBar.health = 300
        playerBar.display()
        Bukkit.getServer().consoleSender.sendMessage("${e.player.displayName}'s data files have been instanced and mapped at")
        Bukkit.getServer().consoleSender.sendMessage(onlineBPlayer.file.path)
        for (item in e.player.inventory.contents) {
            if (item != null) {
                if (BItemUtils.getBType(item).equals("weapon")) {
                    try {
                        BItemUtils.addBWeapon(item, BWeapon(item))
                    } catch (e: NumberFormatException) {
                        continue
                    }
                    continue
                }

                if (BItemUtils.getBType(item).equals("armor")) {
                    try {
                        BItemUtils.addBArmor(item, BArmor(item))
                    } catch (e: NumberFormatException) {
                        continue
                    }
                    continue
                }

                if (item.itemMeta.displayName == "Plane Key") {
                    planeEntitites[item] = PlaneEntity(item)
                }
            }
        }
        Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, StatRegenTimer(onlineBPlayer), 0, 20)
    }
}