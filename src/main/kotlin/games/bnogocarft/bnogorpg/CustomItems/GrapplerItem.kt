package games.bnogocarft.bnogorpg.CustomItems

import org.bukkit.Bukkit
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
        val item = ItemStack(Material.FISHING_ROD)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.FISHING_ROD)
        meta.displayName = "Grappling Hook"
        val lore = ArrayList<String>()
        lore.add("")
        lore.add("${ChatColor.YELLOW}Right clicking with this item will")
        lore.add("${ChatColor.YELLOW}launch a grapple to your eye direction.")
        lore.add("${ChatColor.YELLOW}right clicking again will pull you")
        lore.add("${ChatColor.YELLOW}towards the grapple")
        meta.lore = lore
        item.itemMeta = meta

        grapple = item
    }
}