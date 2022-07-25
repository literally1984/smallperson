package games.bnogocarft.bnogorpg.OtherCommands.Reforge

import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.Reforge
import org.bukkit.ChatColor
import org.bukkit.DyeColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

fun Reforge(gui: GUI) {
    val reforgeItem = gui.inv.getItem(13)
    val weightedList = arrayOf(
        Reforge.Blessed, Reforge.Blessed, Reforge.Blessed,
        Reforge.Cursed, Reforge.Cursed, Reforge.Cursed,
        Reforge.Heavenly,
        Reforge.Demonic,
        Reforge.Godly,
        Reforge.Grim, Reforge.Grim, Reforge.Grim, Reforge.Grim, Reforge.Grim,
        Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable,
        Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable,
        Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable,
        Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart,
        Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart,
        Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart,
        Reforge.Heavy, Reforge.Heavy, Reforge.Heavy, Reforge.Heavy,
        Reforge.Heavy, Reforge.Heavy, Reforge.Heavy, Reforge.Heavy,
    )
    val reforge = weightedList.random()
    val reforgeName = "$reforge ${reforgeItem.itemMeta.displayName}"

    reforgeItem.itemMeta.displayName = reforgeName
}

class ReforgeUtils {
    companion object {
        lateinit var reforgeGUI: Inventory
    }

    init {
        generateReforgeGUI()
    }

    private fun generateReforgeGUI() {
        val inv = GUIFactory.createInventory("${ChatColor.BLACK}Reforge", 54)
        for (i in 0..53) {
            inv.backgroundItems.add(BackgroundItem(StandardBackground, i))
        }
        for (i in 0..8) {
            inv.backgroundItems.add(BackgroundItem(ItemStack(Material.WOOL, 1, DyeColor.GREEN.dyeData.toShort()), i))
        }
        for (i in 45..53) {
            inv.backgroundItems.add(BackgroundItem(ItemStack(Material.WOOL, 1, DyeColor.GREEN.dyeData.toShort()), i))
        }
        inv.inventory.setItem(13, null)
        val reforgeButton = GUIButton(ItemStack(Material.ANVIL), 40, ::Reforge)
        inv.buttons.add(reforgeButton)

        reforgeGUI = GUIFactory.produceInventory(inv)
    }
}