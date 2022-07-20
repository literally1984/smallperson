package games.bnogocarft.bnogorpg.Utils.PPlayer

import org.bukkit.entity.Player

class BPlayers() {
    companion object {
        lateinit var BPlayerMap : HashMap<Player, BPlayer>
    }
    init {
        BPlayerMap = hashMapOf<Player, BPlayer>()
    }
}