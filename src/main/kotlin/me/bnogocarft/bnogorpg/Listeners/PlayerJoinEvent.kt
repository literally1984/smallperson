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
import me.bnogocarft.bnogorpg.tickUpdater.Ticker
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
        val obj = board.registerNewObjective("Mainboard", "dummy")
        obj.displaySlot = DisplaySlot.SIDEBAR
        obj.displayName = "      ${ChatColor.BOLD}${ChatColor.RED}R${ChatColor.GREEN}P${ChatColor.BLUE}G ${ChatColor.YELLOW}Factions"

        val mana = obj
            .getScore(
                Bukkit.getOfflinePlayer(
                    "${ChatColor.AQUA}Mana: " +
                            "${onlineBPlayer.stats.currentMana}" +
                            "/" +
                            "${onlineBPlayer.stats.maxMana}"
                )
            )

        val stamina = obj
            .getScore(
                Bukkit.getOfflinePlayer(
                    "${ChatColor.GOLD}Stamina: " +
                            "${onlineBPlayer.stats.currentStamina}" +
                            "/" +
                            "${onlineBPlayer.stats.maxStamina}"
                )
            )

        val bal = obj.getScore(Bukkit.getOfflinePlayer("${ChatColor.GREEN}Bal: ${Main.econ.getBalance(e.player.name)}"))

        Ticker.oldPlayerBalanceScores[e.player] = "${ChatColor.GREEN}Bal: ${Main.econ.getBalance(e.player.name)}"
        Ticker.oldPlayerManaScores[e.player] = "${ChatColor.AQUA}Mana: " +
                "${onlineBPlayer.stats.currentMana}" +
                "/" +
                "${onlineBPlayer.stats.maxMana}"

        Ticker.oldPlayerStaminaScores[e.player] = "${ChatColor.GOLD}Stamina: " +
                "${onlineBPlayer.stats.currentStamina}" +
                "/" +
                "${onlineBPlayer.stats.maxStamina}"

        bal.score = 1
        mana.score = 2
        stamina.score = 3
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