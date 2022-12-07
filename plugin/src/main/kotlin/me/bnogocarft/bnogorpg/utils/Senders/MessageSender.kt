package me.bnogocarft.bnogorpg.utils.Senders

import me.bnogocarft.bnogorpg.database.YMLUtils
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration
import java.io.File

data class MessageSender(val player: String) {
    val messages = ArrayList<String>()
    fun sendMessage() {
        val userFile = File("${YMLUtils.getUsersFolder()}/$player.yml")
        if (userFile.exists()) {
            var playerIsOnline = false
            for (p in Bukkit.getOnlinePlayers()) {
                if (p.name == player) {
                    val pl = Bukkit.getPlayer(player)
                    for (message in messages) {
                        pl.sendMessage(message)
                    }
                    playerIsOnline = true
                }
            }

            if (!playerIsOnline) {
                val conf = YamlConfiguration.loadConfiguration(userFile)
                conf.set("o.msg", messages)
                YMLUtils.saveCustomYml(conf, userFile)
            }
        }
    }
}