package games.bnogocarft.bnogorpg.Utils

import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

class InventoryUtils {
    companion object {

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
    }
}

class InventoryFactory {
    companion object {
        fun createInventory(name: String, size: Int): FactoryInventory {
            return FactoryInventory(name, size)
        }

        fun produceInventory(inv: FactoryInventory): Inventory {
            Inventories.add(inv)
            return inv.inventory
        }
    }
}

data class FactoryInventory(val name: String, val size: Int) {
    var inventory: Inventory = Bukkit.createInventory(null, size, name)
    var buttons = ArrayList<GUIButton>()
    var backgroundItems = ArrayList<BackgroundItem>()
}

data class GUIButton(val item: ItemStack, val slot: Int, val run: (GUI) -> Unit) {}
data class BackgroundItem(val item: ItemStack, val slot: Int) {}

data class GUI(val recipient: Player, val inv: Inventory) {}

class GUIListeners(inventories: List<FactoryInventory>) : Listener {
    var invs = inventories
    @EventHandler
    fun onGUIClick(e: InventoryClickEvent) {
        for (inv in invs) {
            if (e.inventory.equals(inv.inventory)) {
                for (button in inv.buttons) {
                    if (e.slot == button.slot) {
                        e.whoClicked.closeInventory()
                        button.run(GUI(e.whoClicked as Player, e.inventory))
                        e.isCancelled = true
                    }
                }

                for (background in inv.backgroundItems) {
                    if (e.slot == background.slot) {
                        e.isCancelled = true
                    }
                }
            }
        }
    }
}
val Inventories = ArrayList<FactoryInventory>()

val StandardBackground = ItemStack(Material.PISTON_EXTENSION)

fun initUtils() {
    StandardBackground.itemMeta.displayName = ""
}
