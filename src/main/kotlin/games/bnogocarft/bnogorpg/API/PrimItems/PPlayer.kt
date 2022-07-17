package games.bnogocarft.bnogorpg.API.PrimItems

import org.bukkit.entity.Player

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
    private var file = _root_ide_package_.games.bnogocarft.bnogorpg.fileSystem.file()

    init {
        spells = file.readFile(file.getFileConfig(player.displayName), "Spells")
        talismans = file.readFile(file.getFileConfig(player.displayName), "Talisman")
        _root_ide_package_.games.bnogocarft.bnogorpg.API.PrimItems.PrimPlayer.Companion.players[player] = this
    }

    companion object {
        private val players = HashMap<Player, _root_ide_package_.games.bnogocarft.bnogorpg.API.PrimItems.PrimPlayer>()
        fun getPrimPlayer(p: Player): _root_ide_package_.games.bnogocarft.bnogorpg.API.PrimItems.PrimPlayer? {
            return _root_ide_package_.games.bnogocarft.bnogorpg.API.PrimItems.PrimPlayer.Companion.players[p]
        }
    }
}