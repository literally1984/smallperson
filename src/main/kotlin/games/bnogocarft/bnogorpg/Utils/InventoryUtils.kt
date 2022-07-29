package games.bnogocarft.bnogorpg.Utils

import games.bnogocarft.bnogorpg.OtherCommands.Reforge.ReforgeUtils
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

data class GUIButton(override var item: ItemStack, override var slot: Int, val run: (OpenGUI, InventoryClickEvent) -> Unit) :
    BackgroundItem(item, slot)

open class BackgroundItem(open var item: ItemStack, open var slot: Int)

open class GUI(open val inv: Inventory, open val buttons: List<GUIButton>, open val background: List<BackgroundItem>)
data class OpenGUI(val gui: GUI, val player: Player) : GUI(gui.inv, gui.buttons, gui.background)

class GUIListeners(inventories: List<GUI>) : Listener {
    var invs = inventories

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onGUIClick(e: InventoryClickEvent) {
        for (inv in invs) {
            if (e.inventory.title.equals(inv.inv.name)) {// Checks for matching GUI name
                print(e.slot)
                for (button in inv.buttons) {// Checks for matching button slots
                    if (e.currentItem != null && e.currentItem.itemMeta != null && e.currentItem.itemMeta.lore != null) {
                        print("itemmeta check passed")
                        if (e.slot == button.slot && e.currentItem.itemMeta.lore == button.item.itemMeta.lore) {
                            print("Button slot")
                            // Runs the button's function
                            button.run(OpenGUI(inv, e.whoClicked as Player), e)
                            e.isCancelled = true
                        }
                    }
                }
                for (background in inv.background) {
                    if (e.currentItem != null && e.currentItem.itemMeta != null) {
                        if (e.slot == background.slot && e.currentItem.itemMeta.displayName == background.item.itemMeta.displayName) {
                            print("Background slot")
                            e.isCancelled = true
                        }
                    }
                }
            }
        }
    }
}

val Inventories = ArrayList<GUI>()

val StandardBackground = ItemStack(Material.PISTON_EXTENSION)

fun initUtils() {
    StandardBackground.itemMeta.displayName = ""
    ReforgeUtils()
}
