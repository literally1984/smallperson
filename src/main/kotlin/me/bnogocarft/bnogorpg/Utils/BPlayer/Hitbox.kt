package me.bnogocarft.bnogorpg.Utils.BPlayer

import me.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.entity.Player

data class Hitbox(val player: Player) {
    var top1: Location =
        Location(player.world, player.location.x - 0.3, player.location.y + 1.8, player.location.z - 0.3)
    var top2: Location =
        Location(player.world, player.location.x + 0.3, player.location.y + 1.8, player.location.z - 0.3)
    var top3: Location =
        Location(player.world, player.location.x - 0.3, player.location.y + 1.8, player.location.z + 0.3)
    var top4: Location =
        Location(player.world, player.location.x + 0.3, player.location.y + 1.8, player.location.z + 0.3)

    var bottom1: Location = Location(player.world, player.location.x - 0.3, player.location.y, player.location.z - 0.3)
    var bottom2: Location = Location(player.world, player.location.x + 0.3, player.location.y, player.location.z - 0.3)
    var bottom3: Location = Location(player.world, player.location.x - 0.3, player.location.y, player.location.z + 0.3)
    var bottom4: Location = Location(player.world, player.location.x + 0.3, player.location.y, player.location.z + 0.3)

    init {
        Bukkit.getScheduler().scheduleSyncRepeatingTask(
            Main.instance,
            {
                if (player.isOnline) {
                    update()
                } else {
                    return@scheduleSyncRepeatingTask
                }
            }, 0, 1
        )
    }

    fun update() {
        var top1 = Location(player.world, player.location.x - 0.3, player.location.y + 1.8, player.location.z - 0.3)
        var top2 = Location(player.world, player.location.x + 0.3, player.location.y + 1.8, player.location.z - 0.3)
        var top3 = Location(player.world, player.location.x - 0.3, player.location.y + 1.8, player.location.z + 0.3)
        var top4 = Location(player.world, player.location.x + 0.3, player.location.y + 1.8, player.location.z + 0.3)

        var bottom1 = Location(player.world, player.location.x - 0.3, player.location.y, player.location.z - 0.3)
        var bottom2 = Location(player.world, player.location.x + 0.3, player.location.y, player.location.z - 0.3)
        var bottom3 = Location(player.world, player.location.x - 0.3, player.location.y, player.location.z + 0.3)
        var bottom4 = Location(player.world, player.location.x + 0.3, player.location.y, player.location.z + 0.3)
    }

    fun isInHitbox(location: Location): Boolean {
        return location.x in bottom1.x..bottom2.x &&
                location.y in bottom1.y..top1.y &&
                location.z in bottom1.z..top1.z
    }
}