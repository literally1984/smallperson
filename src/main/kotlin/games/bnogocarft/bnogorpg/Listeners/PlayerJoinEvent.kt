package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Planes.PlaneEntity
import games.bnogocarft.bnogorpg.Planes.planeEntitites
import games.bnogocarft.bnogorpg.Player.StatRegenTimer
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BArmor
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BWeapon
import games.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayer
import games.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent

class PlayerJoinEvent : Listener {

    @EventHandler(priority = EventPriority.HIGHEST)
    fun playerJoinEvent(e: PlayerJoinEvent) {
        val onlineBPlayer = OnlineBPlayer(e.player)
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
        Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, StatRegenTimer(onlineBPlayer), 0, 20)
    }
}