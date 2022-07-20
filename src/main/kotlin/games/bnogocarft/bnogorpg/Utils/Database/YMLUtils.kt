package games.bnogocarft.bnogorpg.Utils.Database

import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import tech.nully.primplug.Main
import java.io.File
import java.io.IOException





class YMLUtils {
    companion object {
        fun getUsersFolder(): String { // Returns the default folder where PPlayer data is stored
            return "${Main.instance?.dataFolder}/users/"
        }

        @Deprecated ("Already exists in PPlayer", ReplaceWith("PPlayer.playerConfig", "tech.nully.primplug.recode.Utils.PItems.PPlayer"))
        fun getConfig(player: Player): FileConfiguration { // Returns the player's FileConfiguration
            val playerFile = File("${getUsersFolder()}/${player.displayName}.yml")
            return YamlConfiguration.loadConfiguration(playerFile)
        }

        fun saveCustomYml(ymlConfig: FileConfiguration, ymlFile: File?) { // Creates the player's file, do not touch only to be used in the PlayerJoinEvent
            try {
                ymlConfig.save(ymlFile)
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }
    }
}