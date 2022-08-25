package games.bnogocarft.bnogorpg.Utils.Senders

import games.bnogocarft.bnogorpg.Utils.BPlayer.OfflineBPlayer
import games.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayers
import games.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import org.bukkit.Bukkit
import org.bukkit.inventory.ItemStack
import java.io.File

data class ItemSender(val player: String) {
    val items = ArrayList<ItemStack>()
    fun sendItems() {
        val userFile = File("${YMLUtils.getUsersFolder()}/$player.yml")
        if (userFile.exists()) {
            var isOnline = false
            for (p in Bukkit.getOnlinePlayers()) {
                if (p.name == player) {
                    isOnline = true
                }
            }

            if (isOnline) {
                val bplayer = OnlineBPlayers[Bukkit.getPlayer(player)]
                for (item in items) {
                    bplayer!!.stash.adde(item)
                }
            } else {
                val bplayer = OfflineBPlayer(player)
                for (item in items) {
                    bplayer.stash.adde(item)
                }
                bplayer.saveStats()
            }
        }
    }
}