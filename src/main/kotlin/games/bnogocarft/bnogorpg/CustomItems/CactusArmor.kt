package games.bnogocarft.bnogorpg.CustomItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import games.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class CactusArmor {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
    }

    init {
        createCactusHelm()
        createCactusChestplate()
        createCactusLeggings()
        createCactusBoots()
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
        factoryItem.stats = arrayListOf(2, 8, 5, 9, 15, 21)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactuschestplate", chestplate)
    }

    private fun createCactusLeggings() {
        val factoryItem = BItemFactory.createRPGItem("Cactus Leggings", Material.LEATHER_LEGGINGS)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(1, 6, 4, 7, 12, 18)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusleggings", leggings)
    }

    private fun createCactusBoots() {
        val factoryItem = BItemFactory.createRPGItem("Cactus Boots", Material.LEATHER_BOOTS)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 0, 2, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusboots", boots)
    }
}
