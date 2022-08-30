package games.bnogocarft.bnogorpg.Utils

import games.bnogocarft.bnogorpg.Reforge.ReforgeUtils
import net.minecraft.server.v1_5_R3.NBTTagCompound
import net.minecraft.server.v1_5_R3.NBTTagList
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.craftbukkit.v1_5_R3.inventory.CraftItemStack
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

class StashArrayList : ArrayList<ItemStack?>(54) {
    fun adde(element: ItemStack?): Boolean {
        for (i in 0..53) {
            if (super.get(i) == null) {
                super.set(i, element)
                return true
            }
        }
        return false
    }

    init {
        for (i in 0..53) {
            super.add(null)
        }
    }
}

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

fun addGlow(item: ItemStack?): ItemStack? {
    val nmsStack: net.minecraft.server.v1_5_R3.ItemStack = CraftItemStack.asNMSCopy(item)
    var tag: NBTTagCompound? = null
    if (!nmsStack.hasTag()) {
        tag = NBTTagCompound()
        nmsStack.setTag(tag)
    }
    if (tag == null) tag = nmsStack.getTag()
    val ench = NBTTagList()
    tag?.set("ench", ench)
    nmsStack.setTag(tag)
    return CraftItemStack.asCraftMirror(nmsStack)
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
    if (item.hasItemMeta()) {
        serialized.add(item.type.toString())
        serialized.add(item.itemMeta.displayName)
        for (lore in item.itemMeta.lore) {
            serialized.add(lore)
        }
    } else {
        serialized.add(item.type.toString())
        serialized.add("no meta")
    }

    return serialized
}

fun deserializeItem(serialized: List<String>): ItemStack {
    val deserialized = ItemStack(Material.valueOf(serialized[0]))
    if (serialized[0] != "no meta") {
        val meta = Bukkit.getItemFactory().getItemMeta(Material.valueOf(serialized[0]))
        meta.displayName = serialized[1]
        val lore = ArrayList<String>()

        for (index in 2 until serialized.size) {
            lore.add(serialized[index])
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
            val clickables = HashMap<Int, BackgroundItem>()
            for (layer in inv.layers) {
                for (item in layer.background) {
                    inve.setItem(item.slot, item.item)
                    clickables[item.slot] = item
                }
                for (button in layer.buttons) {
                    inve.setItem(button.slot, button.item)
                    clickables[button.slot] = button
                }
            }
            val buttons = ArrayList<GUIButton>()
            val backgroundItems = ArrayList<BackgroundItem>()
            for (slot in clickables.keys) {
                if (clickables[slot]!! is GUIButton) {
                    buttons.add(clickables[slot] as GUIButton)
                    continue
                }
                if (clickables[slot] is BackgroundItem) {
                    backgroundItems.add(clickables[slot]!!)
                    continue
                }
            }

            guis.add(GUI(inve, buttons, backgroundItems))
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
                for (button in inv.buttons) {// Checks for matching button slots
                    if (e.rawSlot == button.slot) {
                        print(button.slot)
                        print("button")
                        // Runs the button's function
                        e.isCancelled = true
                        button.run(OpenGUI(inv, e.whoClicked as Player, e.slot, e.currentItem))
                        return
                    }
                }
                for (background in inv.background) {
                    if (e.rawSlot == background.slot) {
                        print(background.slot)
                        print("backgroound")
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
