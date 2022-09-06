package me.bnogocarft.bnogorpg.CustomItems.DefaultItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.Interfaces.FullSet
import me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import me.bnogocarft.bnogorpg.Utils.ItemFactory.BItemFactory
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe

class Diamond : FullSet {
    companion object {
        lateinit var helm: ItemStack
        lateinit var chestplate: ItemStack
        lateinit var leggings: ItemStack
        lateinit var boots: ItemStack
        lateinit var sword: ItemStack
        lateinit var pickaxe: ItemStack
        lateinit var axe: ItemStack
        lateinit var hoe: ItemStack
        lateinit var shovel: ItemStack

        lateinit var craftSword: ItemStack
        lateinit var craftHelmet: ItemStack
        lateinit var craftChestplate: ItemStack
        lateinit var craftLeggings: ItemStack
        lateinit var craftBoots: ItemStack
    }

    init {
        createRecipeSword()
        createCraftHelmet()

        createSword()
        createHoe()
        createPickaxe()
        createAxe()
        createShovel()
        createHelmet()
        createChestplate()
        createLeggings()
        createBoots()
    }

    override fun createSword() {
        val factoryItem = BItemFactory.createBItem("Diamond Sword", Material.DIAMOND_SWORD, BItemType.WEAPON)

        factoryItem.stats = arrayListOf(7, 1, 2, 0, 10, 20)
        factoryItem.rarity = Rarity.RARE

        sword = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_sword", sword)
    }

    fun createRecipeSword() {
        val factoryItem = BItemFactory.createBItem("Diamond Sword", Material.DIAMOND_SWORD, BItemType.CRAFT_ITEM)
        factoryItem.craftItemType = CraftItemType.WEAPON

        val statsVary = BMaterial.DIAMOND_SWORD.getStatVary()

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
            3, 4)
        craftSword = BItemFactory.produceItem(factoryItem)
        val recipe = ShapedRecipe(craftSword)
        recipe.shape(" d ", " d ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHoe() {
        val hoe = ItemStack(Material.DIAMOND_HOE)
        val recipe = ShapedRecipe(hoe)
        recipe.shape("dd ", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createPickaxe() {
        val pick = ItemStack(Material.DIAMOND_PICKAXE)
        val recipe = ShapedRecipe(pick)
        recipe.shape("ddd", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createAxe() {
        val axe = ItemStack(Material.DIAMOND_AXE)
        val recipe = ShapedRecipe(axe)
        recipe.shape(" dd", " sd", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createShovel() {
        val shovel = ItemStack(Material.DIAMOND_SPADE)
        val recipe = ShapedRecipe(shovel)
        recipe.shape(" d ", " s ", " s ")
        recipe.setIngredient('d', Material.DIAMOND)
        recipe.setIngredient('s', Material.STICK)
        Bukkit.addRecipe(recipe)
    }

    override fun createHelmet() {
        val factoryItem = BItemFactory.createBItem("Diamond Helmet", Material.DIAMOND_HELMET, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        helm = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_helmet", helm)

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    fun createCraftHelmet() {
        val factoryItem = BItemFactory.createBItem("Diamond Helmet", Material.DIAMOND_HELMET, BItemType.CRAFT_ITEM)
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
            3, 4)
        helm = BItemFactory.produceItem(factoryItem)
        val recipe = ShapedRecipe(craftSword)
        recipe.shape("ddd", "d d", "   ")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createChestplate() {
        val factoryItem = BItemFactory.createBItem("Diamond Chestplate", Material.DIAMOND_CHESTPLATE, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(3, 24, 2, 22, 30, 40)
        factoryItem.rarity = Rarity.RARE

        chestplate = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_chestplate", chestplate)

        val recipe = ShapedRecipe(chestplate)
        recipe.shape("d d", "ddd", "ddd")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createLeggings() {
        val factoryItem = BItemFactory.createBItem("Diamond Leggings", Material.DIAMOND_LEGGINGS, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(2, 19, 1, 17, 20, 30)
        factoryItem.rarity = Rarity.RARE

        leggings = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_pants", leggings)

        val recipe = ShapedRecipe(leggings)
        recipe.shape("ddd", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }

    override fun createBoots() {
        val factoryItem = BItemFactory.createBItem("Diamond Boots", Material.DIAMOND_BOOTS, BItemType.ARMOR)

        factoryItem.stats = arrayListOf(0, 11, 0, 9, 8, 16)
        factoryItem.rarity = Rarity.RARE

        boots = BItemFactory.produceItem(factoryItem)
        BItemFactory.register("diamond_boots", leggings)

        val recipe = ShapedRecipe(boots)
        recipe.shape("   ", "d d", "d d")
        recipe.setIngredient('d', Material.DIAMOND)
        Bukkit.addRecipe(recipe)
    }
}