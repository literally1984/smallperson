package games.bnogocarft.bnogorpg.CustomItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import games.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import games.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class LapisArmor : ArmorSet {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
    }

    override fun init() {
        createHelmet()
        createChestplate()
        createLeggings()
        createBoots()
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createRPGItem("Lapis Helmet", Material.LEATHER_HELMET)

        val ability = ItemAbility.LapisSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 1, 3, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapishelmet", helm)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createRPGItem("Lapis Chestplate", Material.LEATHER_CHESTPLATE)

        val ability = ItemAbility.LapisSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(2, 8, 5, 9, 15, 21)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapischestplate", chestplate)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createRPGItem("Lapis Leggings", Material.LEATHER_LEGGINGS)

        val ability = ItemAbility.LapisSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(1, 6, 4, 7, 12, 18)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapisleggings", leggings)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createRPGItem("Lapis Boots", Material.LEATHER_BOOTS)

        val ability = ItemAbility.LapisSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 0, 2, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapisboots", boots)
    }
}
