package games.bnogocarft.bnogorpg.Utils.CustomEvents

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.ClickType
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack


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

                    val type: String =
                        if (DropItemType.contains("boots")) "boots"
                        else if (DropItemType.contains("leggings")) "leggings"
                        else if (DropItemType.contains("leggings")) "leggings"
                        else if (DropItemType.contains("chestplate")) "chestplate"
                        else if (DropItemType.contains("helmet")) "helmet"
                        else return

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

                    val Type =
                        if (clickedSlotItem.contains("helmet")) "helmet"
                        else if (clickedSlotItem.contains("chestplate")) "chestplate"
                        else if (clickedSlotItem.contains("leggings")) "leggings"
                        else if (clickedSlotItem.contains("boots")) "boots"
                        else return

                    val clickedItemStack = e.inventory.getItem(e.slot)
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
                TODO("figure o0ut what i was tryna do here")
            }
        }
    }
}

fun getArmorSlot(itemStack: ItemStack): Int {
    if (BItemUtils.getBType(itemStack) == "armor") {
        val itemName = itemStack.itemMeta.displayName
        if (itemName.contains("helmet")) return 1
        if (itemName.contains("chestplate")) return 2
        if (itemName.contains("leggings")) return 3
        if (itemName.contains("boots")) return 4
    }
    return -1
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