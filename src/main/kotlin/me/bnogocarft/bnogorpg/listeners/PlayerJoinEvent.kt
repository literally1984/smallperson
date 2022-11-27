package me.bnogocarft.bnogorpg.listeners

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.planes.Plane
import me.bnogocarft.bnogorpg.planes.planeEntitites
import me.bnogocarft.bnogorpg.ticker.Ticker
import me.bnogocarft.bnogorpg.ticker.Ticker.Companion.lastArmor
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BArmor
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BWeapon
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayer
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayers
import me.bnogocarft.bnogorpg.utils.B
import me.bnogocarft.bnogorpg.utils.bitem.BItemUtils
import me.bnogocarft.bnogorpg.utils.canBe
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

        val s = onlineBPlayer.stats

        lastArmor[e.player] = e.player.inventory.armorContents

        onlineBPlayer.sendActionBar(
            "${ChatColor.AQUA}M: ${s.currentMana}/${s.maxMana}[██████████] || " +
                    "${ChatColor.GOLD}S: ${s.currentStamina}/${s.maxStamina}[██████████]"
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
        for (item in e.player.inventory.contents) {
            if (item != null) {
                if (item canBe B.WEAPON) {
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
                    planeEntitites[item] = Plane(item)
                }
            }
        }
    }
}