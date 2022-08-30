package games.bnogocarft.bnogorpg.Reforge

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BArmor
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BGear
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BWeapon
import games.bnogocarft.bnogorpg.Utils.BItemStack.Reforge
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.enchantments.Enchantment
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import java.util.*

fun Reforge(gui: OpenGUI) {
    val reforgeItem = gui.inv.getItem(13)
    if (reforgeItem != null && (BItemUtils.getBType(reforgeItem) == "weapon" || BItemUtils.getBType(reforgeItem) == "armor")) {
        if (Main.econ.getBalance(gui.player.name) >= 1500) {
            val weightedList = mutableListOf( //  156 currently
                Reforge.Blessed, Reforge.Blessed, Reforge.Blessed,
                Reforge.Cursed, Reforge.Cursed, Reforge.Cursed,
                Reforge.Heavenly,
                Reforge.Demonic,
                Reforge.Godly,
                Reforge.Grim, Reforge.Grim, Reforge.Grim, Reforge.Grim,
                Reforge.Vampiric, Reforge.Vampiric, Reforge.Vampiric, Reforge.Vampiric, Reforge.Vampiric,
                Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable,
                Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable,
                Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable, Reforge.Durable,
                Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart,
                Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart,
                Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart, Reforge.Smart,
                Reforge.Wise, Reforge.Wise, Reforge.Wise, Reforge.Wise, Reforge.Wise,
                Reforge.Wise, Reforge.Wise, Reforge.Wise, Reforge.Wise, Reforge.Wise,
                Reforge.Heavy, Reforge.Heavy, Reforge.Heavy, Reforge.Heavy,
                Reforge.Heavy, Reforge.Heavy, Reforge.Heavy, Reforge.Heavy,
                Reforge.Light, Reforge.Light, Reforge.Light, Reforge.Light,
                Reforge.Light, Reforge.Light, Reforge.Light, Reforge.Light,
                Reforge.Strong, Reforge.Strong, Reforge.Strong, Reforge.Strong, Reforge.Strong,
                Reforge.Strong, Reforge.Strong, Reforge.Strong, Reforge.Strong, Reforge.Strong,
                Reforge.Strong, Reforge.Strong, Reforge.Strong, Reforge.Strong, Reforge.Strong,
                Reforge.Weak, Reforge.Weak, Reforge.Weak, Reforge.Weak, Reforge.Weak,
                Reforge.Weak, Reforge.Weak, Reforge.Weak, Reforge.Weak, Reforge.Weak,
                Reforge.Dumb, Reforge.Dumb, Reforge.Dumb, Reforge.Dumb, Reforge.Dumb,
                Reforge.Dumb, Reforge.Dumb, Reforge.Dumb, Reforge.Dumb, Reforge.Dumb,
                Reforge.Naive, Reforge.Naive, Reforge.Naive, Reforge.Naive, Reforge.Naive,
                Reforge.Naive, Reforge.Naive,
                Reforge.Hopeless, Reforge.Hopeless, Reforge.Hopeless, Reforge.Hopeless, Reforge.Hopeless,
                Reforge.Hopeless, Reforge.Hopeless, Reforge.Hopeless, Reforge.Hopeless, Reforge.Hopeless,
                Reforge.Brittle, Reforge.Brittle, Reforge.Brittle, Reforge.Brittle, Reforge.Brittle,
                Reforge.Brittle, Reforge.Brittle, Reforge.Brittle, Reforge.Brittle, Reforge.Brittle,
                Reforge.Brittle, Reforge.Brittle, Reforge.Brittle, Reforge.Brittle, Reforge.Brittle,
                Reforge.Dull, Reforge.Dull, Reforge.Dull, Reforge.Dull, Reforge.Dull,
                Reforge.Dull, Reforge.Dull, Reforge.Dull, Reforge.Dull, Reforge.Dull,
                Reforge.Dull, Reforge.Dull, Reforge.Dull, Reforge.Dull, Reforge.Dull
            )
            val reforge = weightedList.random()
            val newMeta = reforgeItem.itemMeta.clone()
            val bItem = BGear(reforgeItem)

            if (bItem.reforge == Reforge.NONE) {
                newMeta.displayName = "$reforge ${reforgeItem.itemMeta.displayName}"
                reforgeItem.itemMeta = newMeta
            } else {
                bItem.reforge = reforge
                val displayArray = newMeta.displayName.split(" ").toMutableList()
                displayArray[0] = "$reforge"
                newMeta.displayName = displayArray.joinToString(" ")
                reforgeItem.itemMeta = newMeta
            }

            Main.econ.withdrawPlayer(gui.player.name, 1500.0)

            if (BItemUtils.getBType(reforgeItem) == "weapon") {
                BItemUtils.addBWeapon(reforgeItem, BWeapon(reforgeItem))
            } else {
                BItemUtils.addBArmor(reforgeItem, BArmor(reforgeItem))
            }

            val chance = (weightedList.size) / (Collections.frequency(weightedList, reforge))

            gui.player.playSound(gui.player.location, Sound.ANVIL_USE, 10f, 1f)
            gui.player.sendMessage("${ChatColor.GREEN}You paid $1500 to reforge your weapon!")
            gui.player.sendMessage("${ChatColor.GOLD}You reforged your item and got the ${ChatColor.RED}$reforge ${ChatColor.GOLD}reforge!")
            gui.player.sendMessage("${ChatColor.GOLD}That reforge has a 1 in ${ChatColor.RED}${ChatColor.BOLD}$chance ${ChatColor.GOLD}chance of ${ChatColor.BLUE}manifesting!")
        }
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
            backgrounds.add(BackgroundItem(sBK, i))
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