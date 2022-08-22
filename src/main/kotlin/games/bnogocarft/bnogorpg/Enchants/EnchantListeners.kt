package games.bnogocarft.bnogorpg.Enchants

import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerInteractEvent

class EnchantListeners : Listener {
    @EventHandler
    fun onPlayerOpenEnchant(e: PlayerInteractEvent) {
        if (e.action == Action.RIGHT_CLICK_BLOCK && e.clickedBlock.type == Material.ENCHANTMENT_TABLE) {
            val p = e.player
            e.isCancelled = true
        }
    }

    @EventHandler
    fun onPlayerEnchant(e: InventoryClickEvent) {
        if (e.inventory.name.equals("Enchantment table")) {
            if (e.currentItem != null && e.currentItem.itemMeta != null) {
                if (e.currentItem.itemMeta.displayName.equals("Enchant") && e.currentItem.itemMeta.lore[1] ==
                    "${ChatColor.GREEN}Click here to enchant your item!"
                ) {
                    e.isCancelled = true
                }
            }
        }
    }
}