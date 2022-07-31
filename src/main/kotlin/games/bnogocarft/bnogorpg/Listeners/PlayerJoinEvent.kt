package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Planes.PlaneEntity
import games.bnogocarft.bnogorpg.Planes.planeEntitites
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.*
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayer
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent

class PlayerJoinEvent : Listener {

    @EventHandler(priority = EventPriority.HIGHEST)
    fun playerJoinEvent(e: PlayerJoinEvent) {
        val bPlayer = BPlayer(e.player)
        val playerBar = bPlayer.bar
        playerBar.text =
            "wss://${ChatColor.RED}play.${ChatColor.BLUE}bnogocarft${ChatColor.DARK_GREEN}.games"
        playerBar.health = 100
        playerBar.display()
        BPlayers.put(e.player, bPlayer)
        Bukkit.getServer().consoleSender.sendMessage("${e.player.displayName}'s data files have been instanced and mapped at")
        Bukkit.getServer().consoleSender.sendMessage(bPlayer.playerFile.path)
        for (item in e.player.inventory.contents) {
            if (item != null) {
                if (BItemUtils.getBType(item).equals("weapon")) {
                    BItemUtils.addBWeapon(item, BWeapon(item))
                }

                if (BItemUtils.getBType(item).equals("armor")) {
                    BItemUtils.addBArmor(item, BArmor(item))
                }

                if (item.itemMeta.displayName == "Plane Key") {
                    planeEntitites[item] = PlaneEntity(item)
                }
            }
        }
    }
}