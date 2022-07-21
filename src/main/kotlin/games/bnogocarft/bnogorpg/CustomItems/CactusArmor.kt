package games.bnogocarft.bnogorpg.CustomItems

import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import games.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import games.bnogocarft.bnogorpg.Utils.Rarity.Rarity
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class CactusArmor {
    companion object {
        lateinit var helm: ItemStack
    }

    init {
        createCactusHelm()
    }

    fun createCactusHelm() {
        val factoryItem = BItemFactory.createRPGItem("Cactus Helmet", Material.LEATHER_HELMET)
        val AbilityDesc = ArrayList<String>()
        val ability = ItemAbility.CactusSet
        AbilityDesc.add("When the wearer is hit, 30% of the")
        AbilityDesc.add("incoming damage is reflected to the")
        AbilityDesc.add("attacker.")
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf<Int>(3, 5, 1, 3, 15, 20)
        factoryItem.rarity = Rarity.UNCOMMON
        helm = BItemFactory.produceItem(factoryItem)
    }

}