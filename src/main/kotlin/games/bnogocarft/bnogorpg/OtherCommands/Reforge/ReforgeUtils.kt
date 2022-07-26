package games.bnogocarft.bnogorpg.OtherCommands.Reforge

import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.Reforge
import org.bukkit.ChatColor
import org.bukkit.DyeColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

fun Reforge(gui: OpenGUI) {
    val reforgeItem = gui.inv.getItem(13)
    if (reforgeItem != null) {
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
        gui.player.sendMessage("You reforged your Item")
    }
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
        val buttons = ArrayList<GUIButton>()
        val backgrounds = ArrayList<BackgroundItem>()

        for (i in 0..53) {
            if (i == 13) continue
            backgrounds.add(BackgroundItem(StandardBackground, i))
        }
        for (i in 0..8) {
            backgrounds.add(BackgroundItem(ItemStack(Material.WOOL, 1, DyeColor.GREEN.dyeData.toShort()), i))
        }
        for (i in 45..53) {
            backgrounds.add(BackgroundItem(ItemStack(Material.WOOL, 1, DyeColor.GREEN.dyeData.toShort()), i))
        }
        val layer1 = GUILayer(buttons, backgrounds)

        val reforgeButton = GUIButton(ItemStack(Material.ANVIL), 40, ::Reforge)
        val layer2 = GUILayer(listOf(reforgeButton), ArrayList())
        inv.layers.add(layer1)
        inv.layers.add(layer2)

        reforgeGUI = GUIFactory.produceInventory(inv)
    }
}