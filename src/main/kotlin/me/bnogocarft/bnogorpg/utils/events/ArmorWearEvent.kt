package me.bnogocarft.bnogorpg.utils.events

import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemUtils
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack


class ArmorWearListeners : Listener {
    val armorSlots = intArrayOf(5, 6, 7, 8)

    @EventHandler(priority = EventPriority.LOW)
    fun onArmorWearByInventoryClick(e: InventoryClickEvent) {
        val p = e.whoClicked as Player
        if (e.click == ClickType.DROP) {
            val dropItem = e.currentItem
            val dropItemtype = dropItem.type.toString().lowercase()

            // Checks to see if the Clicked slot is an armor slot
            for (slot in armorSlots) {
                if (e.slot == slot) {

                    val type: String =
                        if (dropItemtype.contains("boots")) "boots"
                        else if (dropItemtype.contains("leggings")) "leggings"
                        else if (dropItemtype.contains("leggings")) "leggings"
                        else if (dropItemtype.contains("chestplate")) "chestplate"
                        else if (dropItemtype.contains("helmet")) "helmet"
                        else return

                    val a = ArmorWearEvent(p, dropItem, "drop", type)
                    Bukkit.getPluginManager().callEvent(a)
                    if (a.isCancelled) {
                        e.isCancelled = true
                    }
                }
            }
        }
        // Handler for when the player shifts clicks in their inventory while not having armor on
        if (e.click == ClickType.SHIFT_LEFT) {
            if (!(armorSlots.contains(e.slot))) {
                if (e.whoClicked.inventory.armorContents.contains(null)) {
                    val clickedSlotItem = e.inventory.getItem(e.slot).itemMeta.displayName.lowercase()

                    val type =
                        if (clickedSlotItem.contains("helmet")) "helmet"
                        else if (clickedSlotItem.contains("chestplate")) "chestplate"
                        else if (clickedSlotItem.contains("leggings")) "leggings"
                        else if (clickedSlotItem.contains("boots")) "boots"
                        else return

                    val clickedItemStack = e.inventory.getItem(e.slot)
                    val armorEvent = ArmorWearEvent(p, clickedItemStack, "shift_left", type)
                    Bukkit.getPluginManager().callEvent(armorEvent)
                    if (armorEvent.isCancelled) {
                        e.isCancelled = true
                    }
                }
            }
        }
    }

    @EventHandler(priority = EventPriority.LOW)
    fun onArmorWearByRightClick(e: PlayerInteractEvent) {
        if (e.player.itemInHand != null && BItemUtils.getBType(e.player.itemInHand).equals("armor")) {
            val item = e.player.itemInHand
            if (e.action == Action.RIGHT_CLICK_AIR || e.action == Action.RIGHT_CLICK_BLOCK) {
                // Gets the slots in the players armor inventory that are empty
                val nullSlots = ArrayList<Int>()

                for ((indexOfArmor, cItem) in e.player.inventory.armorContents.withIndex()) {
                    if (cItem == null) {
                        nullSlots.add(armorSlots[indexOfArmor])
                    }
                }
                val type =
                    if (item.itemMeta.displayName.contains("helmet")) "helmet"
                    else if (item.itemMeta.displayName.contains("chestplate")) "chestplate"
                    else if (item.itemMeta.displayName.contains("leggings")) "leggings"
                    else if (item.itemMeta.displayName.contains("boots")) "boots"
                    else return

                for (slot in nullSlots) {
                    if (getArmorSlot(item) == slot) {
                        val armorEvent = ArmorWearEvent(e.player, item, "right", type)
                        Bukkit.getPluginManager().callEvent(armorEvent)
                        if (armorEvent.isCancelled) {
                            e.isCancelled = true
                        }
                    }
                }
            }
        }
    }
}

fun getArmorSlot(itemStack: ItemStack): Int {
    if (BItemUtils.getBType(itemStack) == "armor") {
        val itemName = itemStack.itemMeta.displayName
        if (itemName.contains("helmet")) return 5
        if (itemName.contains("chestplate")) return 6
        if (itemName.contains("leggings")) return 7
        if (itemName.contains("boots")) return 8
    }
    return -1
}


class ArmorWearEvent(val player: Player, val item: ItemStack, val clicktype: String, val slot: String) : Event(),
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