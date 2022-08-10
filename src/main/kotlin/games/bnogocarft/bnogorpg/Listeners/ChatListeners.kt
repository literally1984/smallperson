package games.bnogocarft.bnogorpg.Listeners

import com.massivecraft.factions.entity.UPlayer
import games.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.AsyncPlayerChatEvent


class ChatListeners : Listener {

    @EventHandler
    fun onChat(event: AsyncPlayerChatEvent) {
        if (Main.onChatCooldown.contains(event.player)) {
            event.isCancelled = true
            event.player.sendMessage("${ChatColor.RED}ey man chill out 1 message every 1.5 seconds thanks")
            return
        }

        val arrayMessage = event.message.split(" ").toMutableList()
        for (word in arrayMessage) {
            if (word.contains("nigger", true) ||
                word.contains("faggot", true) ||
                word.contains("cum", true) ||
                word.contains("fag", true) ||
                word.contains("nazi", true) ||
                word.contains("nig", true) ||
                word.contains("beaner", true) ||
                word.contains("niggers", true) ||
                word.contains("nig", true) ||
                word.contains("faggots", true) ||
                word.contains("fags", true) ||
                word.contains("nigga", true) ||
                word.contains("niggas", true) ||
                word.contains("faggotass", true) ||
                word.contains("n1gger", true) ||
                word.contains("n1g", true) ||
                word.contains("n1gga", true) ||
                word.contains("n1g", true) ||
                word.contains("beaners", true)
            ) {
                val re = Regex("[A-Za-z]")
                arrayMessage[arrayMessage.indexOf(word)] = re.replace(word, "#")
            }
        }
        event.message = arrayMessage.joinToString(" ")
        val player = event.player
        if (player.hasPermission("bnogorpg.chat.admin")) {
            event.format =
                "${ChatColor.DARK_GRAY}[${ChatColor.DARK_RED}Admin${ChatColor.DARK_GRAY}] ${ChatColor.DARK_RED}${player.name}${ChatColor.DARK_GRAY}» ${ChatColor.WHITE}${event.message}"
            return
        }
        if (player.hasPermission("bnogorpg.chat.mod")) {
            event.format =
                "${ChatColor.DARK_GRAY}[${ChatColor.DARK_BLUE}Mod${ChatColor.DARK_GRAY}] ${ChatColor.DARK_BLUE}${player.name}${ChatColor.DARK_GRAY}» ${ChatColor.WHITE}${event.message}"
            return
        }
        if (player.hasPermission("bnogorpg.chat.helper")) {
            event.format =
                "${ChatColor.DARK_GRAY}[${ChatColor.BLUE}Helper${ChatColor.DARK_GRAY}]${ChatColor.GRAY} ${
                    UPlayer.get(
                        player
                    ).faction.name
                } ${ChatColor.GRAY}${player.name}${ChatColor.DARK_GRAY}» ${ChatColor.GRAY}${event.message}"
            Main.onChatCooldown.add(event.player)
            Bukkit.getScheduler().scheduleSyncDelayedTask(Main.instance, {
                Main.onChatCooldown.remove(event.player)
            }, 30L)
            return
        } else {
            event.format =
                "${ChatColor.GRAY}${UPlayer.get(player).faction.name} ${ChatColor.GRAY}${player.name}${ChatColor.DARK_GRAY}» ${ChatColor.GRAY}${event.message}"
            Main.onChatCooldown.add(event.player)
            Bukkit.getScheduler().scheduleSyncDelayedTask(Main.instance, {
                Main.onChatCooldown.remove(event.player)
            }, 30L)
            return
        }
    }
}