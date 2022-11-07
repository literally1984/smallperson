package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.ItemAbility.Abilities.EnhancedMagic
import me.bnogocarft.bnogorpg.utils.ItemFactory.ArmorSetMaker
import me.bnogocarft.bnogorpg.utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class LapisArmor : ArmorSetMaker {
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

    val abil = EnhancedMagic()
    override fun createHelmet() {
        val factoryItem = BItemFactory.createBItem(
            "Lapis Helmet",
            Material.LEATHER_HELMET,
            BItemType.ARMOR
        )

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 1, 3, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapis_helmet", helm)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBItem("Lapis Chestplate", Material.LEATHER_CHESTPLATE, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(2, 8, 5, 9, 15, 21)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapis_chestplate", chestplate)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBItem("Lapis Leggings", Material.LEATHER_LEGGINGS, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(1, 6, 4, 7, 12, 18)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapis_leggings", leggings)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Lapis Boots", Material.LEATHER_BOOTS, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 0, 2, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.BLUE

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("lapis_boots", boots)
    }
}