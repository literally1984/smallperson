package games.bnogocarft.bnogorpg.Player.PlayerBar

import games.bnogocarft.bnogorpg.Main

class MainBar : Bar {
    override var name: String = Main.serverIp
    override val priority: Int = 1
    override var health: Int = 300
}