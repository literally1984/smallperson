package me.bnogocarft.bnogorpg.Enchants

import me.bnogocarft.bnogorpg.utils.BItemClass
import me.bnogocarft.bnogorpg.utils.BItemStack.BItems.BItemUtils
import me.bnogocarft.bnogorpg.utils.canBe
import me.bnogocarft.bnogorpg.utils.enchants.EnchantGUI
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerInteractEvent

class EnchantListeners : Listener {
    @EventHandler
    fun onPlayerOpenEnchant(e: PlayerInteractEvent) {
        if (e.action == Action.RIGHT_CLICK_BLOCK && e.clickedBlock.type == Material.ENCHANTMENT_TABLE) {
            val p = e.player
            p.openInventory(EnchantGUI.gui)
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

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onHit(e: EntityDamageByEntityEvent) {
        if (e.damager is Player) {
            val damaged = (e.damager as Player)
            if (damaged.itemInHand canBe BItemClass.WEAPON) {
                val item = BItemUtils.getBWeapon(damaged.itemInHand)
                for (enchant in item.enchantments) {
                    enchant.apply(e)
                }
            }
        }
    }
}