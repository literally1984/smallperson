package tech.nully.primplug.recode.Utils.Database

import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import tech.nully.primplug.Main
import java.io.File
import java.io.IOException





class YMLUtils {

    companion object {
        fun getUsersFolder(): String {
            return "${Main.instance?.dataFolder}/users/"
        }

        fun getConfig(player: Player): FileConfiguration {
            val playerFile = File("${getUsersFolder()}/${player.displayName}.yml")
            return YamlConfiguration.loadConfiguration(playerFile)
        }

        fun saveCustomYml(ymlConfig: FileConfiguration, ymlFile: File?) {
            try {
                ymlConfig.save(ymlFile)
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }
    }
}