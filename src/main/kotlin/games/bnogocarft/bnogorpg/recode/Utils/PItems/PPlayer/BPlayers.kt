package games.bnogocarft.bnogorpg.recode.Utils.PItems.PPlayer

import org.bukkit.entity.Player

class BPlayers() {
    companion object {
        lateinit var BPlayerMap : HashMap<Player, BPlayer>
    }
    init {
        BPlayerMap = hashMapOf<Player, BPlayer>()
    }
}