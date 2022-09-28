package me.bnogocarft.bnogorpg.CustomItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems.CraftItemType
import me.bnogocarft.bnogorpg.Utils.ItemFactory.ArmorSetMaker
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.Utils.ItemAbility.Abilities.SpikeySpikes
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class CactusArmor : ArmorSetMaker {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack

        lateinit var craftHelmet: ItemStack
        lateinit var craftChestplate: ItemStack
        lateinit var craftLeggings: ItemStack
        lateinit var craftBoots: ItemStack

        lateinit var craftShard: ItemStack

        val abil = SpikeySpikes()
    }

    init {
        createHelmet()
        createChestplate()
        createLeggings()
        createBoots()

        createCraftHelmet()
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createBItem("${ChatColor.GREEN}Cactus Helmet", Material.LEATHER_HELMET, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 1, 3, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactus_helmet", helm)
    }

    fun createCraftHelmet() {
        val factoryItem = BItemFactory.createBItem("${ChatColor.GREEN}Cactus Helmet", Material.LEATHER_HELMET, BItemType.CRAFT_ITEM)
        factoryItem.craftItemType = CraftItemType.ARMOR

        val statsVary = BMaterial.DIAMOND_HELMET.getStatVary()

        val atkVary = statsVary[0].split("-")
        val defVary = statsVary[1].split("-")
        val mAtkVary = statsVary[2].split("-")
        val mDefVary = statsVary[3].split("-")
        val manaVary = statsVary[4].split("-")
        val stamVary = statsVary[5].split("-")


        factoryItem.stats = arrayListOf(
            atkVary[0].toInt(),
            atkVary[1].toInt(),
            defVary[0].toInt(),
            defVary[1].toInt(),
            mAtkVary[0].toInt(),
            mAtkVary[1].toInt(),
            mDefVary[0].toInt(),
            mDefVary[1].toInt(),
            manaVary[0].toInt(),
            manaVary[1].toInt(),
            stamVary[0].toInt(),
            stamVary[1].toInt(),
            3, 4
        )
        craftHelmet = BItemFactory.produceItem(factoryItem)
        val recipe = ShapedRecipe(craftHelmet)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBItem("${ChatColor.GREEN}Cactus Chestplate", Material.LEATHER_CHESTPLATE, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(2, 8, 5, 9, 15, 21)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactus_chestplate", chestplate)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBItem("${ChatColor.GREEN}Cactus Leggings", Material.LEATHER_LEGGINGS, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(1, 6, 4, 7, 12, 18)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusleggings", leggings)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBItem("${ChatColor.GREEN}Cactus Boots", Material.LEATHER_BOOTS, BItemType.ARMOR)

        val ability = abil
        factoryItem.abilities.add(ability)
        factoryItem.stats = arrayListOf(0, 3, 0, 2, 5, 7)
        factoryItem.rarity = Rarity.UNCOMMON
        factoryItem.armorColor = Color.GREEN

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("cactusboots", boots)
    }
}
