package me.bnogocarft.bnogorpg.items.comatSets

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftItemType
import me.bnogocarft.bnogorpg.utils.bitem.factory.ArmorSetMaker
import me.bnogocarft.bnogorpg.utils.bitem.factory.BItemFactory
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.utils.player.bPlayer
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class CactusArmor : ArmorSetMaker {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack

        lateinit var craftShard: ItemStack

        val abil = SpikeySpikes()
    }

    init {
        createHelmet()
    }

    override fun createHelmet() {
        val factoryItem =
            BItemFactory.createBItem("${ChatColor.GREEN}Cactus Helmet", Material.LEATHER_HELMET, BItemType.CRAFT_ITEM)
        factoryItem.craftItemType = CraftItemType.ARMOR
        helm = BItemFactory.createCraftItem(factoryItem, BMaterial.CACTUS_HELMET, "3-4")
        BItemFactory.register("cactus_helmet", helm)
        val recipe = ShapedRecipe(helm)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.CACTUS)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBItem(
            "${ChatColor.GREEN}Cactus Chestplate",
            Material.LEATHER_HELMET,
            BItemType.CRAFT_ITEM
        )
        factoryItem.craftItemType = CraftItemType.ARMOR
        chestplate = BItemFactory.createCraftItem(factoryItem, BMaterial.CACTUS_HELMET, "3-4")
        BItemFactory.register("cactus_chestplate", chestplate)
        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.CACTUS)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem =
            BItemFactory.createBItem("${ChatColor.GREEN}Cactus Leggings", Material.LEATHER_LEGGINGS, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(1, 6, 4, 7, 12, 18)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusleggings", leggings)
    }

    override fun createBoots() {
        val factoryItem =
            BItemFactory.createBItem("${ChatColor.GREEN}Cactus Boots", Material.LEATHER_BOOTS, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 0, 2, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusboots", boots)
    }
}

class SpikeySpikes : SetBonus {
    override val description: ArrayList<String> = arrayListOf(
        "When an opponent damages you,",
        "30% of the damage will be",
        "reflected back to them."
    )
    override val name: String = "Spiky Spikes"

    override val type: AbilityTrigger = AbilityTrigger.HIT

    override fun cast(caster: Player, abilityEvent: Event) {

    }

    init {
        Main.registeredAbilities.add(this)
    }
}
