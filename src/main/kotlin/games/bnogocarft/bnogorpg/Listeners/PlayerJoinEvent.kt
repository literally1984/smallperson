package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItemUtils
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayer
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent

class PlayerJoinEvent : Listener {

    @EventHandler (priority = EventPriority.HIGHEST)
    fun playerJoinEvent(e: PlayerJoinEvent) {
        val bPlayer = BPlayer(e.player)
        val playerBar = bPlayer.bar
        playerBar.text = "${ChatColor.RED}--> play.${ChatColor.BLUE}bnogocarft${ChatColor.GREEN}.games ${ChatColor.RED}<--"
        playerBar.display()
        BPlayers.put(e.player, bPlayer)
        Bukkit.getServer().consoleSender.sendMessage("${e.player.displayName}'s data files have been instanced and mapped at")
        Bukkit.getServer().consoleSender.sendMessage(bPlayer.playerFile.path)
        for (item in e.player.inventory.contents) {
            if (item != null) {
                if (BItemUtils.getBType(item).equals("weapon")) {
                    BItemUtils.addBWeapon(item)
                }

                if (BItemUtils.getBType(item).equals("pickaxe")) {
                    BItemUtils.addBPickaxe(item)
                }

                if (BItemUtils.getBType(item).equals("axe")) {
                    BItemUtils.addBAxe(item)
                }
            }
        }
    }
}