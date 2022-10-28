package me.bnogocarft.bnogorpg.Utils

import com.comphenix.protocol.wrappers.nbt.NbtCompound
import com.comphenix.protocol.wrappers.nbt.NbtFactory
import me.bnogocarft.bnogorpg.Reforge.ReforgeUtils
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import java.util.*


fun cloneInv(inv: Inventory): Inventory {
    val clone = Bukkit.createInventory(null, inv.size, inv.title)
    for (i in 0 until inv.size) {
        clone.setItem(i, inv.getItem(i))
    }
    return clone
}

fun cloneInv(inv: Inventory, name: String): Inventory {
    val clone = Bukkit.createInventory(null, inv.size, name)
    for (i in 0 until inv.size) {
        clone.setItem(i, inv.getItem(i))
    }
    return clone
}

fun isInDoubleChest(slot: Int): Boolean {
    if (slot in 0..53) {
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
    if (item.hasItemMeta() && item.itemMeta.hasLore()) {
        serialized.add(item.type.toString())
        serialized.add(item.amount.toString())
        serialized.add(item.itemMeta.displayName)
        for (lore in item.itemMeta.lore) {
            serialized.add(lore)
        }
    } else {
        serialized.add(item.type.toString())
        serialized.add(item.amount.toString())
        serialized.add("no meta")
    }

    return serialized
}

fun deserializeItem(serialized: List<String>): ItemStack {
    print(serialized)
    val mSerialized = serialized.toMutableList()
    print(mSerialized)
    mSerialized[0] = mSerialized[0].replace(Regex("[\\[[\\]]*\\]]"), "")
    val deserialized = ItemStack(Material.valueOf(mSerialized[0]), mSerialized[1].toInt())

    if (mSerialized[2] != "no meta") {
        val meta = Bukkit.getItemFactory().getItemMeta(deserialized.type)
        meta.displayName = mSerialized[2]
        val lore = ArrayList<String>()

        for (index in 3 until mSerialized.size) {
            lore.add(mSerialized[index])
        }

        meta.lore = lore
        deserialized.itemMeta = meta
    }
    return deserialized
}


class GUIFactory {
    companion object {
        fun createInventory(name: String, size: Int): FactoryInventory {
            return FactoryInventory(name, size)
        }

        fun produceInventory(inv: FactoryInventory): Inventory {
            val inve = inv.inventory
            val clickables = HashMap<Int, GUIBackground>()
            val slotFuncs = ArrayList<SlotFunction>()
            for (layer in inv.layers) {
                for (item in layer.backgrounds) {
                    inve.setItem(item.slot, item.item)
                    clickables[item.slot] = item
                }
                for (func in layer.slotFuncs) {
                    slotFuncs.add(func)
                }
                for (button in layer.buttons) {
                    inve.setItem(button.slot, button.item)
                    clickables[button.slot] = button
                }
            }
            val buttons = ArrayList<GUIButton>()
            val GUIBackgrounds = ArrayList<GUIBackground>()
            for (slot in clickables.keys) {
                if (clickables[slot]!! is GUIButton) {
                    buttons.add(clickables[slot] as GUIButton)
                    continue
                }
                if (clickables[slot] is GUIBackground) {
                    GUIBackgrounds.add(clickables[slot]!!)
                    continue
                }
            }

            guis.add(GUI(inve, buttons, GUIBackgrounds, slotFuncs))
            return inve
        }
    }
}

data class FactoryInventory(val name: String, val size: Int) {
    var inventory: Inventory = Bukkit.createInventory(null, size, name)
    var layers = ArrayList<GUILayer>()
}

class GUILayer {
    val buttons = ArrayList<GUIButton>()
    val backgrounds = ArrayList<GUIBackground>()
    val slotFuncs = ArrayList<SlotFunction>()
}

data class GUIButton(override var item: ItemStack, override var slot: Int, val run: (OpenGUI) -> Unit) :
    GUIBackground(item, slot)

open class GUIBackground(open var item: ItemStack, open var slot: Int)

data class SlotFunction(val slot: Int, val run: (OpenGUI) -> Unit)

open class GUI(
    open val inv: Inventory,
    open val buttons: List<GUIButton>,
    open val background: List<GUIBackground>,
    open val slotFuncs: List<SlotFunction>
)

data class OpenGUI(val gui: GUI, val player: Player, val slot: Int, var currentItem: ItemStack) :
    GUI(gui.inv, gui.buttons, gui.background, gui.slotFuncs)

class GUIListeners(inventories: List<GUI>) : Listener {
    var invs = inventories

    @EventHandler(priority = EventPriority.HIGHEST)
    fun onGUIClick(e: InventoryClickEvent) {
        for (inv in invs) {
            if (e.inventory.title.equals(inv.inv.name)) {// Checks for matching GUI name
                for (button in inv.buttons) {// Checks for matching button slots
                    if (e.rawSlot == button.slot) {
                        // Runs the button's function
                        e.isCancelled = true
                        button.run(OpenGUI(inv, e.whoClicked as Player, e.slot, e.currentItem))
                        return
                    }
                }
                for (func in inv.slotFuncs) {// Checks for matching button slots
                    if (e.rawSlot == func.slot) {
                        // Runs the button's function
                        e.isCancelled = true
                        func.run(OpenGUI(inv, e.whoClicked as Player, e.slot, e.currentItem))
                        return
                    }
                }
                for (background in inv.background) {
                    if (e.rawSlot == background.slot) {
                        e.isCancelled = true
                        return
                    }
                }
            }
        }
    }
}

val guis = ArrayList<GUI>()

val sBK = ItemStack(Material.THIN_GLASS)

fun initUtils() {
    sBK.itemMeta.displayName = ""
    ReforgeUtils()
}
