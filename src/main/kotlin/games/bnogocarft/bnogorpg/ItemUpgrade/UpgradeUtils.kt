package games.bnogocarft.bnogorpg.ItemUpgrade

import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory

class UpgradeUtils {
    companion object {
        lateinit var gui: Inventory
    }

    init {
        createUpgradeGUI()
    }

    private fun createUpgradeGUI() {
        /*
        0  1  2  3  4  5  6  7  8
        9  10 AT 12 DF 14 MA 16 17
        18 19 20 21 ES 23 24 25 26
        27 28 MD 30 MA 32 ST 34 35
        36 37 38 39 40 41 42 43 44
        45 46 47 48 49 50 51 52 53

        11 = attack
        13 = defense
        15 = magic atk
        29 = magic def
        31 = mana
        33 = stamina
        22 = empty slot
        */
        val gui = GUIFactory.createInventory("Upgrade Item", 54)
        val backgroundItems = ArrayList<BackgroundItem>()

        // Sets the backgound
        for (index in 0..53) {
            backgroundItems.add(BackgroundItem(StandardBackground, index))
        }
        val backgroundLayer = GUILayer(ArrayList(), backgroundItems)

        val buttons = ArrayList<GUIButton>()
        buttons.add()
        buttons.add()
        buttons.add()
        buttons.add()
        buttons.add()
        buttons.add()

    }

    fun upgradeATK(gui: OpenGUI) {
        val inv = gui.inv
        if (inv.getItem(22) != null) {
            val item = inv.getItem(22)
            if (BItemUtils.getBType(item) != null) {
            }
        }
    }

    fun upgradeDEF(gui: OpenGUI, click: InventoryClickEvent) {

    }

    fun upgradeMAGATK(gui: OpenGUI, click: InventoryClickEvent) {

    }

    fun upgradeMAGDEF(gui: OpenGUI, click: InventoryClickEvent) {

    }

    fun upgradeMANA(gui: OpenGUI, click: InventoryClickEvent) {

    }

    fun upgradeSTAM(gui: OpenGUI, click: InventoryClickEvent) {

    }
}