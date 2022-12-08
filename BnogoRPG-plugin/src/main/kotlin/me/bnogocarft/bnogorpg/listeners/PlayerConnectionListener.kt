package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.ticker.Ticker
import me.bnogocarft.bnogorpg.ticker.Ticker.Companion.lastArmor
import me.bnogocarft.bnogorpg.player.OnlineBPlayer
import me.bnogocarft.bnogorpg.player.OnlineBPlayers
import me.bnogocarft.bnogorpg.database.*
import me.bnogocarft.bnogorpg.database.data.PlayerData
import me.bnogocarft.bnogorpg.utils.others.PlaytimeUtils
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.scoreboard.DisplaySlot

class PlayerConnectionListener : Listener {

    @EventHandler(priority = EventPriority.HIGH)
    fun playerJoinEvent(e: PlayerJoinEvent) {
        val onlineBPlayer = OnlineBPlayer(e.player)

        val s = onlineBPlayer.stats

        lastArmor[e.player] = e.player.inventory.armorContents

        onlineBPlayer.sendActionBar(
            "${ChatColor.AQUA}M: ${s.currentMana}/${s.maxMana}[■■■■■■■■■■] || " +
                    "${ChatColor.GOLD}S: ${s.currentStamina}/${s.maxStamina}[■■■■■■■■■■]"
        )
        val board = Bukkit.getScoreboardManager().newScoreboard
        val obj = board.registerNewObjective("Mainboard", "dummy")
        obj.displaySlot = DisplaySlot.SIDEBAR
        obj.displayName =
            "      ${ChatColor.BOLD}${ChatColor.RED}R${ChatColor.GREEN}P${ChatColor.BLUE}G ${ChatColor.YELLOW}Factions"

        val bal = obj.getScore(Bukkit.getOfflinePlayer("${ChatColor.GREEN}Bal: ${Main.econ.getBalance(e.player.name)}"))

        Ticker.oldPlayerBalanceScores[e.player] = "${ChatColor.GREEN}Bal: ${Main.econ.getBalance(e.player.name)}"

        bal.score = 1

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
        val select = BnogoSQL.select(
            Table.PLAYER,
            arrayListOf(Property.PLAYER_BITEMS),
            Table.PLAYER.getComparator(e.player.name)) as PlayerData
    }

    @EventHandler
    fun onPlayerLeave(e: PlayerQuitEvent) {
        val player = OnlineBPlayers[e.player]
        player.isInCastMode = false
        if (player.metadata["combat"] != null) {
            player.metadata["combatLogged"] = true
            for (item in e.player.inventory) {
                e.player.world.dropItemNaturally(e.player.location, item)
            }
        }
        PlaytimeUtils.addPlaytime(player)
        player.saveStats()
        OnlineBPlayers.remove(e.player)
    }
}