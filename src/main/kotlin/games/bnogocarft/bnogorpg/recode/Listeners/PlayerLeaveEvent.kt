package games.bnogocarft.bnogorpg.recode.Listeners

import games.bnogocarft.bnogorpg.recode.Utils.PItems.PPlayer.BPlayer
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import java.text.SimpleDateFormat
import java.util.*

class PlayerLeaveEvent : Listener {

    @EventHandler
    fun onPlayerLeave(e: PlayerQuitEvent) {
        val player = BPlayer(e.player)
        val joinTime = player.joinTime

        val now = Date()
        val format = SimpleDateFormat("dd,MM,yyyy,HH,mm,ss")

        val joinDate = format.parse(joinTime)
        val nowDate = format.parse(format.format(now))

        val diff = nowDate.time - joinDate.time
        val beforeTime = player.playerConfig.getString("other.playTime").split(" ")
        val hourDiff = (diff / ((1000 * 60 * 60)) % 24) + (beforeTime[0].toInt())
        val minuteDiff = (diff / ((1000 * 60)) % 60) + (beforeTime[1].toInt())

        player.playerConfig.set("other.playTime", "$hourDiff $minuteDiff")
    }
}