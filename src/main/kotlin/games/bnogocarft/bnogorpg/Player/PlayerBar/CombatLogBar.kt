package games.bnogocarft.bnogorpg.Player.PlayerBar

data class CombatLogBar(val timeLeft: Int, override var health: Int) : Bar {
    override var name: String = "You are in Combat: $timeLeft"
    override val priority: Int = 2
}