package games.bnogocarft.bnogorpg.CustomItems

import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import games.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import games.bnogocarft.bnogorpg.Utils.Rarity.Rarity
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class CactusArmor {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
    }

    init {
        createCactusHelm()
    }

    private fun createCactusHelm() {
        val factoryItem = BItemFactory.createRPGItem("Cactus Helmet", Material.LEATHER_HELMET)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 1, 3, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactushelmet", helm)
    }

    private fun createCactusChestplate() {
        val factoryItem = BItemFactory.createRPGItem("Cactus Chestplate", Material.LEATHER_CHESTPLATE)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(3, 8, 5, 9, 15, 21)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactushelmet", helm)
    }
}
