package me.bnogocarft.bnogorpg.items

import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.ItemFactory.BItemFactory
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class GrapplerItem {
    companion object {
        lateinit var grapple: ItemStack
    }

    init {
        createGrapple()
    }

    fun createGrapple() {
        val fItem = BItemFactory.createBItem("Grappling Hook", Material.FISHING_ROD, BItemType.MISC)
        fItem.customAbility.add("${ChatColor.YELLOW}Right clicking with this item will")
        fItem.customAbility.add("${ChatColor.YELLOW}launch a grapple to your eye direction.")
        fItem.customAbility.add("${ChatColor.YELLOW}right clicking again will pull you")
        fItem.customAbility.add("${ChatColor.YELLOW}towards the grapple")

        fItem.rarity = Rarity.UNCOMMON


        grapple = BItemFactory.produceItem(fItem)
        BItemFactory.register("grapple", grapple)
    }
}