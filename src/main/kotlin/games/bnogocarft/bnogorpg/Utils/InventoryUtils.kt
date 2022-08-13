package games.bnogocarft.bnogorpg.Utils

import games.bnogocarft.bnogorpg.Reforge.ReforgeUtils
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

fun isInDoubleChest(slot: Int): Boolean {
    if (slot in 0..53) {
        return true
    }
    return false
}

fun isInRecipeSlot(slot: Int): Boolean {
    if (slot in 10..12 || slot in 19..21 || slot in 28..30) {
        return true
    }
    return false
}

fun changeInventoryTo(from: Inventory, to: Inventory) {
    for (slot in 0 until to.size) {
        from.setItem(slot, to.getItem(slot))
    }
}

fun serializeItem(item: ItemStack): List<String> {
    val serialized = ArrayList<String>()
    serialized.add(item.type.toString())
    serialized.add(item.itemMeta.displayName)
    for (lore in item.itemMeta.lore) {
        serialized.add(lore)
    }

    return serialized
}

fun deserializeItem(serialized: List<String>): ItemStack {
    val deserialized = ItemStack(Material.valueOf(serialized[0]))
    val meta = Bukkit.getItemFactory().getItemMeta(Material.valueOf(serialized[0]))
    meta.displayName = serialized[1]
    val lore = ArrayList<String>()

    for (index in 2 until serialized.size) {
        lore.add(serialized[index])
    }

    meta.lore = lore
    deserialized.itemMeta = meta
    return deserialized
}


class GUIFactory {
    companion object {
        fun createInventory(name: String, size: Int): FactoryInventory {
            return FactoryInventory(name, size)
        }

        fun produceInventory(inv: FactoryInventory): Inventory {
            val inve = inv.inventory
            val clickables = HashMap<Int, Pair<BackgroundItem, String>>()
            for (layer in inv.layers) {
                for (item in layer.background) {
                    inve.setItem(item.slot, item.item)
                    clickables[item.slot] = Pair(item, "background")
                }
                for (button in layer.buttons) {
                    inve.setItem(button.slot, button.item)
                    clickables[button.slot] = Pair(button, "button")
                }
            }
            val buttons = ArrayList<GUIButton>()
            val backgroundItems = ArrayList<BackgroundItem>()
            for (slot in clickables.keys) {
                if (clickables[slot]!!.second.equals("button")) {
                    buttons.add(clickables[slot]!!.first as GUIButton)
                    continue
                }
                if (clickables[slot]!!.second.equals("background")) {
                    backgroundItems.add(clickables[slot]!!.first)
                    continue
                }
            }

            Inventories.add(GUI(inve, buttons, backgroundItems))
            return inve
        }
    }
}

data class FactoryInventory(val name: String, val size: Int) {
    var inventory: Inventory = Bukkit.createInventory(null, size, name)
    var layers = ArrayList<GUILayer>()
}

data class GUILayer(val buttons: List<GUIButton>, val background: List<BackgroundItem>)

data class GUIButton(override var item: ItemStack, override var slot: Int, val run: (OpenGUI) -> Unit) :
    BackgroundItem(item, slot)

open class BackgroundItem(open var item: ItemStack, open var slot: Int)

open class GUI(open val inv: Inventory, open val buttons: List<GUIButton>, open val background: List<BackgroundItem>)
data class OpenGUI(val gui: GUI, val player: Player, val slot: Int, val currentItem: ItemStack) :
    GUI(gui.inv, gui.buttons, gui.background)

class GUIListeners(inventories: List<GUI>) : Listener {
    var invs = inventories

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onGUIClick(e: InventoryClickEvent) {
        for (inv in invs) {
            if (e.inventory.title.equals(inv.inv.name)) {// Checks for matching GUI name
                print(e.slot)
                for (button in inv.buttons) {// Checks for matching button slots
                    if (e.currentItem != null && e.currentItem.itemMeta != null && e.currentItem.itemMeta.lore != null) {
                        if (e.slot == button.slot && e.currentItem.itemMeta.lore == button.item.itemMeta.lore) {
                            // Runs the button's function
                            e.isCancelled = true
                            button.run(OpenGUI(inv, e.whoClicked as Player, e.slot, e.currentItem))
                        }
                    }
                }
                for (background in inv.background) {
                    if (e.currentItem != null && e.currentItem.itemMeta != null) {
                        if (e.slot == background.slot && e.currentItem.itemMeta.displayName == background.item.itemMeta.displayName) {
                            e.isCancelled = true
                        }
                    }
                }
            }
        }
    }
}

val Inventories = ArrayList<GUI>()

val StandardBackground = ItemStack(Material.THIN_GLASS)

fun initUtils() {
    StandardBackground.itemMeta.displayName = ""
    ReforgeUtils()
}
