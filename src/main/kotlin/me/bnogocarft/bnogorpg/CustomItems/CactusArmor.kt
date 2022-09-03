package me.bnogocarft.bnogorpg.CustomItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.ArmorSet
import me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ItemAbility
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class CactusArmor : ArmorSet {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
    }

    init {
        createHelmet()
        createChestplate()
        createLeggings()
        createBoots()
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createBItem("Cactus Helmet", Material.LEATHER_HELMET, BItemType.ARMOR)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 1, 3, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactushelmet", helm)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBItem("Cactus Chestplate", Material.LEATHER_CHESTPLATE, BItemType.ARMOR)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(2, 8, 5, 9, 15, 21)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactuschestplate", chestplate)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBItem("Cactus Leggings", Material.LEATHER_LEGGINGS, BItemType.ARMOR)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(1, 6, 4, 7, 12, 18)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusleggings", leggings)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Cactus Boots", Material.LEATHER_BOOTS, BItemType.ARMOR)

        val ability = ItemAbility.CactusSet
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 0, 2, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusboots", boots)
    }
}
