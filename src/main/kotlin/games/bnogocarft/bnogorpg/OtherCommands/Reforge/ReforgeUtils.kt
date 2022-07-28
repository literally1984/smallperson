package games.bnogocarft.bnogorpg.OtherCommands.Reforge

import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.*
import net.minecraft.server.v1_5_R3.Packet62NamedSoundEffect
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.craftbukkit.v1_5_R3.entity.CraftPlayer
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import java.util.*
import kotlin.collections.ArrayList

fun Reforge(gui: OpenGUI) {
    val reforgeItem = gui.inv.getItem(13)
    if (reforgeItem != null && (BItemUtils.getBType(reforgeItem) == "weapon" || BItemUtils.getBType(reforgeItem) == "armor")) {
        val weightedList = mutableListOf( //  52 currently
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
            Reforge.Heavy, Reforge.Heavy, Reforge.Heavy, Reforge.Heavy
        )
        val reforge = weightedList.random()
        val newMeta = reforgeItem.itemMeta.clone()
        val bItem: BGear = if (BItemUtils.getBType(reforgeItem) == "weapon") {
            BItemUtils.getBWeapon(reforgeItem)
        } else {
            BItemUtils.getBArmor(reforgeItem)
        }

        if (bItem.reforge == Reforge.NONE) {
            newMeta.displayName = "$reforge ${reforgeItem.itemMeta.displayName}"
            reforgeItem.itemMeta = newMeta
            gui.player.sendMessage("no ref")
        } else {
            bItem.reforge = reforge
            val displayArray = newMeta.displayName.split(" ").toMutableList()
            displayArray[0] = "$reforge"
            newMeta.displayName = displayArray.joinToString(" ")
            reforgeItem.itemMeta = newMeta
            gui.player.sendMessage("ref")
        }

        if (bItem is BWeapon) {
            BItemUtils.addBWeapon(reforgeItem, bItem)
        } else {
            BItemUtils.addBArmor(reforgeItem, bItem as BArmor)
        }

        val chance = (weightedList.size)/(Collections.frequency(weightedList, reforge))

        val anvilSound = Packet62NamedSoundEffect("anvil.use", gui.player.location.x, gui.player.location.y, gui.player.location.z, 1f, 63f)
        (gui.player as CraftPlayer).handle.playerConnection.sendPacket(anvilSound)
        gui.player.sendMessage("You reforged your Item and got the $reforge reforge!")
        gui.player.sendMessage("that reforge is a 1 in $chance chance")
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
        val WoolBackground = ItemStack(Material.FIRE)
        WoolBackground.addUnsafeEnchantment(Enchantment.FIRE_ASPECT, 5)
        WoolBackground.itemMeta.displayName = ""

        for (i in 0..53) {
            if (i == 13) continue
            backgrounds.add(BackgroundItem(StandardBackground, i))
        }
        for (i in 0..8) {
            backgrounds.add(BackgroundItem(WoolBackground, i))
        }
        for (i in 45..53) {
            backgrounds.add(BackgroundItem(WoolBackground, i))
        }
        val layer1 = GUILayer(buttons, backgrounds)

        val reforgeAnvil = ItemStack(Material.ANVIL)

        val reforgeMeta = Bukkit.getItemFactory().getItemMeta(Material.ANVIL)
        reforgeMeta.displayName = "${ChatColor.GOLD}Reforge"
        val reforgeLore = ArrayList<String>()
        reforgeLore.add("${ChatColor.GREEN}Click to reforge your item")
        reforgeMeta.lore = reforgeLore
        reforgeAnvil.itemMeta = reforgeMeta
        val reforgeButton = GUIButton(reforgeAnvil, 40, ::Reforge)
        val layer2 = GUILayer(listOf(reforgeButton), ArrayList())
        inv.layers.add(layer1)
        inv.layers.add(layer2)

        reforgeGUI = GUIFactory.produceInventory(inv)
    }
}