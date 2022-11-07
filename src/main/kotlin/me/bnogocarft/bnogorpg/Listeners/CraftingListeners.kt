package me.bnogocarft.bnogorpg.Listeners

import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.BItemStack.CraftItems.CraftGear
import me.bnogocarft.bnogorpg.utils.ItemFactory.BItemFactory
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.CraftItemEvent

class CraftingListeners : Listener {

    @EventHandler
    fun onCraft(event: CraftItemEvent) {
        if (event.recipe.result.hasItemMeta() && (
                    event.recipe.result.itemMeta.displayName.contains("sword", true) ||
                            event.recipe.result.itemMeta.displayName.contains("helmet", true) ||
                            event.recipe.result.itemMeta.displayName.contains("chestplate", true) ||
                            event.recipe.result.itemMeta.displayName.contains("leggings", true) ||
                            event.recipe.result.itemMeta.displayName.contains("boots", true) ||
                            event.recipe.result.itemMeta.displayName.contains("warhammer", true) ||
                            event.recipe.result.itemMeta.displayName.contains("thunderbolt", true))
        ) {
            val gear = BItemFactory.makeItem(CraftGear(event.recipe.result).craft())
            event.inventory.result = gear
            BItemUtils.getBGear(gear)
        }
    }
}