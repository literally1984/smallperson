package games.bnogocarft.bnogorpg.Utils.others

import games.bnogocarft.bnogorpg.Utils.Database.YMLUtils
import games.bnogocarft.bnogorpg.Utils.PPlayer.BPlayer
import java.text.SimpleDateFormat
import java.util.*

class PlaytimeUtils {
    companion object {

        /**
         * Adds to the given player's playtime since they joined and sets their joinTime to the time that this function is called
         * @param player The BPlayer to add Playtime to
         */
        fun addPlaytime(player: BPlayer) {
            val joinTime = player.joinTime

            val now = Date()
            val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")

            val joinDate = format.parse(joinTime)
            val nowDate = format.parse(format.format(now))

            val diff = nowDate.time - joinDate.time
            val beforeTime = player.config.getString("other.playTime").split(" ")
            var hourDiff = (diff / ((1000 * 60 * 60)) % 24) + (beforeTime[0].toInt())
            var minuteDiff = (diff / ((1000 * 60)) % 60) + (beforeTime[1].toInt())

            while (minuteDiff >= 60) {
                minuteDiff -= 60
                hourDiff++
            }

            player.config.set("other.playTime", "$hourDiff $minuteDiff")
            YMLUtils.saveCustomYml(player.config, player.playerFile)
            player.joinTime = format.format(now)
        }
    }
}