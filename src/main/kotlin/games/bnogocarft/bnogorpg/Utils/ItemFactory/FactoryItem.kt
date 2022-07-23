package games.bnogocarft.bnogorpg.Utils.ItemFactory

import games.bnogocarft.bnogorpg.Utils.Rarity.Rarity
import org.bukkit.Color
import org.bukkit.Material

data class FactoryItem(val name: String, val mat: Material) {
    val abilities = ArrayList<ItemAbility>()
    var stats = ArrayList<Int>()
    var rarity = Rarity.COMMON
    var armorColor = Color.FUCHSIA
}