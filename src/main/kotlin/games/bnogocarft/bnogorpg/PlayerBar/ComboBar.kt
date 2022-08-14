package games.bnogocarft.bnogorpg.PlayerBar

import games.bnogocarft.bnogorpg.combat.ComboCounter.Combo

class ComboBar(combo: Combo, override var health: Int) : Bar {
    override var name: String = "Combo Damage: ${combo.damage}"
    override var priority: Int = 3
}