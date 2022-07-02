package tech.nully.primplug.recode.Utils.PItems.PPlayer

import org.bukkit.entity.Player

class BPlayers() {
    companion object {
        var BPlayerMap : HashMap<Player, BPlayer>? = null;
        fun init() {
            BPlayerMap = hashMapOf<Player, BPlayer>()
        }
    }
}