package games.bnogocarft.bnogorpg.Utils.CustomEvents

import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack
import java.util.*


class ArmorWearListeners : Listener {
    @EventHandler(priority = EventPriority.LOW)
    fun onArmorWearByInventoryClick(e: InventoryClickEvent) {
        val p = e.whoClicked as Player
        val ArmorSlots = intArrayOf(5, 6, 7, 8)
        if (e.click == ClickType.DROP) {
            val DropItem = e.currentItem
            val DropItemType = DropItem.type.toString().lowercase()

            // Checks to see if the Clicked slot is an armor slot
            for (slot in ArmorSlots) {
                if (e.slot == slot) {
                    lateinit var Type: String
                    if (DropItemType.contains("helmet")) {
                        Type = "helmet"
                    }
                    if (DropItemType.contains("chestplate")) {
                        Type = "chestplate"
                    }
                    if (DropItemType.contains("leggings")) {
                        Type = "leggings"
                    }
                    Type = if (DropItemType.contains("boots")) {
                        "boots"
                    } else {
                        return
                    }
                    val a = ArmorWearEvent(p, DropItem, "drop", Type)
                    Bukkit.getPluginManager().callEvent(a)
                    if (a.isCancelled) {
                        e.isCancelled = true
                    }
                }
            }
        }
        if (e.click == ClickType.SHIFT_LEFT) {
            if (!(ArmorSlots.contains(e.slot))) {
                val clickedSlotItem = e.inventory.getItem(e.slot).itemMeta.displayName.lowercase()
                lateinit var Type: String
                if (clickedSlotItem.contains("helmet")) {
                    Type = "helmet"
                }
            }
        }
    }

    @EventHandler(priority = EventPriority.LOW)
    fun OnArmorWearByRightClick(e: PlayerInteractEvent) {
        if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
            val p = e.player
            val click = "right_click"
            val Item = e.player.itemInHand
            val ItemType = Item.type.toString().lowercase(Locale.getDefault())
            lateinit var Type: String
            if (ItemType.contains("helmet")) {
                Type = "helmet"
            }
            if (ItemType.contains("chestplate")) {
                Type = "chestplate"
            }
            if (ItemType.contains("leggings")) {
                Type = "leggings"
            }
            Type = if (ItemType.contains("boots")) {
                "boots"
            } else {
                return
            }
            val a = ArmorWearEvent(p, Item, click, Type)
            Bukkit.getPluginManager().callEvent(a)
            if (a.isCancelled) {
                e.isCancelled = true
            }
        }
    }
}


class ArmorWearEvent(val player: Player, val item: ItemStack, val clickType: String, val slot: String) : Event(),
    Cancellable {
    private var isCancelled = false
    override fun isCancelled(): Boolean {
        return isCancelled
    }

    override fun setCancelled(b: Boolean) {
        isCancelled = b
    }

    override fun getHandlers(): HandlerList {
        return handlerList
    }

    companion object {
        val handlerList = HandlerList()
    }
}