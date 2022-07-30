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
    val ArmorSlots = intArrayOf(5, 6, 7, 8)
    @EventHandler(priority = EventPriority.LOW)
    fun onArmorWearByInventoryClick(e: InventoryClickEvent) {
        val p = e.whoClicked as Player
        if (e.click == ClickType.DROP) {
            val DropItem = e.currentItem
            val DropItemType = DropItem.type.toString().lowercase()

            // Checks to see if the Clicked slot is an armor slot
            for (slot in ArmorSlots) {
                if (e.slot == slot) {
                    lateinit var type: String
                    if (DropItemType.contains("helmet")) {
                        type = "helmet"
                    }
                    if (DropItemType.contains("chestplate")) {
                        type = "chestplate"
                    }
                    if (DropItemType.contains("leggings")) {
                        type = "leggings"
                    }
                    type = if (DropItemType.contains("boots")) {
                        "boots"
                    } else {
                        return
                    }
                    // TODO: search up how to use contains with a when statement
                    val a = ArmorWearEvent(p, DropItem, "drop", type)
                    Bukkit.getPluginManager().callEvent(a)
                    if (a.isCancelled) {
                        e.isCancelled = true
                    }
                }
            }
        }
        // Handler for when the player shifts clicks in their inventory while not having armor on
        if (e.click == ClickType.SHIFT_LEFT) {
            if (!(ArmorSlots.contains(e.slot))) {
                if (e.whoClicked.inventory.armorContents.contains(null)) {
                    val clickedSlotItem = e.inventory.getItem(e.slot).itemMeta.displayName.lowercase()
                    lateinit var Type: String
                    if (clickedSlotItem.contains("helmet")) {
                        Type = "helmet"
                    }
                    if (clickedSlotItem.contains("chestplate")) {
                        Type = "chestplate"
                    }
                    if (clickedSlotItem.contains("leggings")) {
                        Type = "leggings"
                    }
                    Type = if (clickedSlotItem.contains("boots")) {
                        "boots"
                    } else {
                        return
                    }

                    val clickedItemStack =  e.inventory.getItem(e.slot)
                    val armorEvent = ArmorWearEvent(p, clickedItemStack, "shift_left", Type)
                    if (armorEvent.isCancelled) {
                        e.isCancelled = true
                    }
                }
            }
        }
    }

    @EventHandler(priority = EventPriority.LOW)
    fun OnArmorWearByRightClick(e: PlayerInteractEvent) {
        if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
            val nullSlots = ArrayList<Int>()

            for ((indexOfArmor, item) in e.player.inventory.armorContents.withIndex()) {
                if (item == null) {
                    nullSlots.add(ArmorSlots[indexOfArmor])
                }
                //TODO: Add a function that returns the armor slot of an armor piece
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