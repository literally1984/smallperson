package games.bnogocarft.bnogorpg.CustomItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import games.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class BladeOfHermes {
    companion object {
        lateinit var blade: ItemStack
    }

    init {
        createBlade()
    }

    private fun createBlade() {
        val facItem = BItemFactory.createBGearItem("Blade of Hermes", Material.DIAMOND_SWORD)

        val ability = ItemAbility.QuickDash
        facItem.abilities.add(ability)
        facItem.stats = arrayListOf(8, 2, 3, 1, 30, 25)
        facItem.rarity = Rarity.EPIC

        blade = BItemFactory.produceItem(facItem)
        BItemFactory.register("hermesblade", blade)
    }

}