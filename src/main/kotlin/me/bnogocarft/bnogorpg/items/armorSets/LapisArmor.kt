package me.bnogocarft.bnogorpg.items.armorSets

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.factory.ArmorSetMaker
import me.bnogocarft.bnogorpg.utils.bitem.factory.BItemFactory
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.entity.player.bPlayer
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.Event
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

class EnhancedMagic : IAbility {
    override val description: ArrayList<String> = arrayListOf(
        "While wearing this armor in",
        "full set, the user gains +30%",
        "mana"
    )
    override val name: String = "Enhanced Magic"
    override val type: AbilityTrigger = AbilityTrigger.SET_BONUS

    override fun cast(caster: Player, abilityEvent: Event) {
        val player = caster.bPlayer()
        player.stats.maxMana += player.stats.maxMana / 3
    }

    init {
        Main.registeredAbilities.add(this)
    }
}
