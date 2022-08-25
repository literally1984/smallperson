package games.bnogocarft.bnogorpg.Utils.Senders

import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayer
import games.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import org.bukkit.inventory.ItemStack
import java.io.File

data class ItemSender(val player: String) {
    val items = ArrayList<ItemStack>()
    fun sendItems() {
        val userFile = File("${YMLUtils.getUsersFolder()}/$player.yml")
        if (userFile.exists()) {
            val pl = BPlayer(player)
            for (item in items) {
                pl.stash.adde(item)
                pl.saveStats()
            }
        }
    }
}