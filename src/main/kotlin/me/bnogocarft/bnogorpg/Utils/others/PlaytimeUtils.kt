package me.bnogocarft.bnogorpg.Utils.others

import me.bnogocarft.bnogorpg.Utils.BPlayer.OnlineBPlayer
import me.bnogocarft.bnogorpg.Utils.Database.BnogoSQL
import java.text.SimpleDateFormat
import java.util.*

class PlaytimeUtils {
    companion object {

        /**
         * Adds to the given player's playtime since they joined and sets their joinTime to the time that this function is called
         * @param player The BPlayer to add Playtime to
         */
        fun addPlaytime(player: OnlineBPlayer) {
            val joinTime = player.joinTime

            val now = Date()
            val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")

            val joinDate = format.parse(joinTime)
            val nowDate = format.parse(format.format(now))

            val diff = nowDate.time - joinDate.time
            val beforeTime = player.playTime
            print(beforeTime)
            var hourDiff = (diff / ((1000 * 60 * 60)) % 24) + (beforeTime[0].code)
            var minuteDiff = (diff / ((1000 * 60)) % 60) + (beforeTime[1].code)

            while (minuteDiff >= 60) {
                minuteDiff -= 60
                hourDiff++
            }

            BnogoSQL.con.prepareStatement(
                "UPDATE players SET \"playTime\" = '$hourDiff $minuteDiff' WHERE name = '${player.player}';"
            ).executeUpdate()

            player.joinTime = format.format(now)
            player.playTime = "$hourDiff $minuteDiff"
        }
    }
}