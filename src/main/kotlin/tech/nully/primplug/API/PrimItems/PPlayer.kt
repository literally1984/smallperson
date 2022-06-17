package tech.nully.primplug.API.PrimItems

import org.bukkit.entity.Player
import tech.nully.primplug.fileSystem.file

data class PrimPlayer(val player: Player) {

    // Mana Getters and Setters
    var mana = 10
    var maxMana = 10
    // Stamina Getters and Setters
    var stamina = 10
    var maxStamina = 10
    private var bounty = 0
    private var isInForm = false
    var form = "null"
    var talismans: List<String>
    var spells: List<String>
    private var file = file()

    init {
        spells = file.readFile(file.getFileConfig(player.displayName), "Spells")
        talismans = file.readFile(file.getFileConfig(player.displayName), "Talisman")
        players[player] = this
    }

    companion object {
        private val players = HashMap<Player, PrimPlayer>()
        fun getPrimPlayer(p: Player): PrimPlayer? {
            return players[p]
        }
    }
}