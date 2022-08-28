package games.bnogocarft.bnogorpg.economy.Auction

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.Auction
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.AuctionType
import games.bnogocarft.bnogorpg.Utils.economyUtils.auction.createAuctionItemFor
import net.milkbowl.vault.chat.Chat
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryView
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta

class AHGui {
    companion object {
        lateinit var browseGui: Inventory
        lateinit var mainGui: Inventory
        lateinit var borderGui: Inventory

        lateinit var weapon: ItemStack
        lateinit var armor: ItemStack
        lateinit var magicItems: ItemStack
        lateinit var food: ItemStack
        lateinit var blocks: ItemStack
        lateinit var misc: ItemStack

        lateinit var browseButton: ItemStack
        lateinit var viewButton: ItemStack
        lateinit var createButton: ItemStack
        lateinit var aucsButton: ItemStack

        val noBorderSlots = arrayOf(
            10,11,12,13,14,15,16,
            19,20,21,22,23,24,25,
            28,29,30,31,32,33,34,
            37,38,39,40,41,42,43,
        )
        val auctionSlots = arrayOf(
            11,12,13,14,15,16,
            20,21,22,23,24,25,
            29,30,31,32,33,34,
            38,39,40,41,42,43)
    }

    init {
        createWeaponButton()
        createArmorButton()
        createMagicItemsButton()
        createFoodButton()
        createBlocksButton()
        createMiscButton()
        createAuctionCreateItem()
        createAuctionViewItem()
        createAuctionBrowseItem()
        createBorderPage()
        val fGui = GUIFactory.createInventory("Auction House", 54)

        val layer1bk = ArrayList<BackgroundItem>()
        for (index in 0..53) {
            if (auctionSlots.contains(index)) {
                layer1bk.add(BackgroundItem(ItemStack(Material.AIR), index))
                continue
            }
            layer1bk.add(BackgroundItem(StandardBackground, index))
        }

        val layer2bt = ArrayList<GUIButton>()
        layer2bt.add(GUIButton(weapon, 0, ::switchToWeaponPage))
        layer2bt.add(GUIButton(armor, 9, ::switchToArmorPage))
        layer2bt.add(GUIButton(magicItems, 18, ::switchToMagicPage))
        layer2bt.add(GUIButton(food, 27, ::switchToFoodPage))
        layer2bt.add(GUIButton(blocks, 36, ::switchToBlockPage))
        layer2bt.add(GUIButton(misc, 45, ::switchToMiscPage))
        fGui.layers.add(GUILayer(ArrayList(), layer1bk))
        fGui.layers.add(GUILayer(layer2bt, ArrayList()))

        browseGui = GUIFactory.produceInventory(fGui)

        // Creates the Main GUI
        val mGui = GUIFactory.createInventory("Auction Manager", 45)
        val layer1 = ArrayList<BackgroundItem>()

        for (index in 0..43) {
            layer1.add(BackgroundItem(StandardBackground, index))
        }

        val layer2 = ArrayList<GUIButton>()

        layer2.add(GUIButton(
            browseButton,
            11,
            fun(gui: OpenGUI) {
                gui.player.openInventory(browseGui)
            }))

        layer2.add(GUIButton(
            viewButton,
            13,
            ::makeAucsPage))

        layer2.add(GUIButton(
            aucsButton,
            15,
            ::makeBidsPage))

        layer2.add(GUIButton(
            createButton,
            31,
            ::makeBidsPage))

        mGui.layers.add(GUILayer(layer2, layer1))

        mainGui = GUIFactory.produceInventory(mGui)
    }

    private fun createAuctionBrowseItem() {
        val item = ItemStack(Material.GOLD_BLOCK)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.GOLD_BLOCK)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Browse Auctions"
        lore.add("")
        lore.add("${ChatColor.GRAY}Look through the magnificent")
        lore.add("${ChatColor.GRAY}auctions that other players have")
        lore.add("${ChatColor.GRAY}created. It's time to lowball!")

        meta.lore = lore
        item.itemMeta = meta

        browseButton = item
    }

    private fun createAuctionViewItem() {
        val item = ItemStack(Material.GLASS)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.GLASS)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Browse Auctions"
        lore.add("")
        lore.add("${ChatColor.GRAY}Look through the magnificent")
        lore.add("${ChatColor.GRAY}auctions that other players have")
        lore.add("${ChatColor.GRAY}created. It's time to lowball!")

        meta.lore = lore
        item.itemMeta = meta

        viewButton = item
    }

    private fun createAuctionCreateItem() {
        val item = ItemStack(Material.WORKBENCH)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.WORKBENCH)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Browse Auctions"
        lore.add("")
        lore.add("${ChatColor.GRAY}Look through the magnificent")
        lore.add("${ChatColor.GRAY}auctions that other players have")
        lore.add("${ChatColor.GRAY}created. It's time to lowball!")

        meta.lore = lore
        item.itemMeta = meta

        browseButton = item
    }

    private fun createAuctionAucsItem() {
        val item = ItemStack(Material.SKULL_ITEM)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.SKULL_ITEM)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Browse Auctions"
        lore.add("")
        lore.add("${ChatColor.GRAY}Look through the magnificent")
        lore.add("${ChatColor.GRAY}auctions that other players have")
        lore.add("${ChatColor.GRAY}created. It's time to lowball!")

        meta.lore = lore
        item.itemMeta = meta

        browseButton = item
    }

    private fun switchToWeaponPage(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.WEAPON) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                createAuctionItemFor(weaponAucs[index])
                gui.inv.setItem(aucSlot, weaponAucs[index].item)
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun switchToArmorPage(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.ARMOR) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                createAuctionItemFor(weaponAucs[index])
                gui.inv.setItem(aucSlot, weaponAucs[index].item)
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun switchToMagicPage(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.MAGIC_ITEMS) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                createAuctionItemFor(weaponAucs[index])
                gui.inv.setItem(aucSlot, weaponAucs[index].item)
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun switchToFoodPage(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.FOOD) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                createAuctionItemFor(weaponAucs[index])
                gui.inv.setItem(aucSlot, weaponAucs[index].item)
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun switchToBlockPage(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.BLOCKS) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                createAuctionItemFor(weaponAucs[index])
                gui.inv.setItem(aucSlot, weaponAucs[index].item)
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun switchToMiscPage(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.OTHER) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                createAuctionItemFor(weaponAucs[index])
                gui.inv.setItem(aucSlot, weaponAucs[index].item)
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun createBorderPage() {
        val mGui = GUIFactory.createInventory("${ChatColor.GOLD}Your Auctions", 54)
        val layer1 = ArrayList<BackgroundItem>()

        for (index in 0..53) {
            if (noBorderSlots.contains(index)) {
                layer1.add(BackgroundItem(ItemStack(Material.AIR), index))
                continue
            }
            layer1.add(BackgroundItem(StandardBackground, index))
        }
        mGui.layers.add(GUILayer(ArrayList(), layer1))

        borderGui = GUIFactory.produceInventory(mGui)
    }

    private fun makeAucsPage(gui: OpenGUI) {
        val items = ArrayList<ItemStack>()

        for (auc in Main.auctions) {
            if (auc.creator == gui.player.name) {
                items.add(createAuctionItemFor(auc))
            }
        }
        val inv = cloneInv(borderGui)
        for ((index, i) in noBorderSlots.withIndex()) {
            inv.setItem(i, items[index])
        }
        gui.player.openInventory(inv)
    }

    private fun makeBidsPage(gui: OpenGUI) {
        val items = ArrayList<ItemStack>()

        for (auc in Main.auctions) {
            if (auc.currentBidder == gui.player.name) {
                items.add(createAuctionItemFor(auc))
            }
        }
        val inv = cloneInv(borderGui)
        for ((index, i) in noBorderSlots.withIndex()) {
            inv.setItem(i, items[index])
        }
        gui.player.openInventory(inv)
    }

    private fun createWeaponButton() {
        val item = ItemStack(Material.DIAMOND_SWORD)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.DIAMOND_SWORD)
        meta.displayName = "${ChatColor.GOLD}Weapons"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.DARK_GRAY}Category")
        lore.add("")
        lore.add("${ChatColor.GRAY}This Category includes:")
        lore.add("${ChatColor.GRAY}  Swords")
        lore.add("${ChatColor.GRAY}  Bows")
        lore.add("${ChatColor.GRAY}  WarHammers/WarAxes")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Weapon auctions")

        meta.lore = lore
        item.itemMeta = meta

        weapon = item
    }

    // Creates the armor button for the GUI
    private fun createArmorButton() {
        val item = ItemStack(Material.DIAMOND_CHESTPLATE)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.DIAMOND_CHESTPLATE)
        meta.displayName = "${ChatColor.GOLD}Armor"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.DARK_GRAY}Category")
        lore.add("")
        lore.add("${ChatColor.GRAY}This Category includes:")
        lore.add("${ChatColor.GRAY}  Helmets")
        lore.add("${ChatColor.GRAY}  Chestplates")
        lore.add("${ChatColor.GRAY}  Leggings")
        lore.add("${ChatColor.GRAY}  Boots")
        lore.add("${ChatColor.GRAY}  Robes")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Armor auctions")
        meta.lore = lore
        item.itemMeta = meta

        armor = item
    }

    // Creates the magic items button for the GUI
    private fun createMagicItemsButton() {
        val item = ItemStack(Material.ENCHANTED_BOOK)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.ENCHANTED_BOOK)
        meta.displayName = "${ChatColor.GOLD}Magic Items"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.DARK_GRAY}Category")
        lore.add("")
        lore.add("${ChatColor.GRAY}This Category includes:")
        lore.add("${ChatColor.GRAY}  Ability Scrolls")
        lore.add("${ChatColor.GRAY}  Talismans")
        lore.add("${ChatColor.GRAY}  Magic Stones")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Magic Item auctions")
        meta.lore = lore
        item.itemMeta = meta

        magicItems = item
    }

    // Creates the food button for the GUI
    private fun createFoodButton() {
        val item = ItemStack(Material.APPLE)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.APPLE)
        meta.displayName = "${ChatColor.GOLD}Food Items"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.DARK_GRAY}Category")
        lore.add("")
        lore.add("${ChatColor.GRAY}This Category includes:")
        lore.add("${ChatColor.GRAY}  Cooked Food")
        lore.add("${ChatColor.GRAY}  Raw Food")
        lore.add("${ChatColor.GRAY}  Potions")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Food Item auctions")
        meta.lore = lore
        item.itemMeta = meta

        food = item
    }

    // Creates the blocks button for the GUI
    private fun createBlocksButton() {
        val item = ItemStack(Material.GRASS)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.GRASS)
            meta.displayName = "${ChatColor.GOLD}Blocks"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.DARK_GRAY}Category")
        lore.add("")
        lore.add("${ChatColor.GRAY}This Category includes:")
        lore.add("${ChatColor.GRAY}  Any kind of placable block")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Block auctions")
        meta.lore = lore
        item.itemMeta = meta

        blocks = item
    }

    private fun createMiscButton() {
        val item = ItemStack(Material.STICK)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.STICK)
        meta.displayName = "${ChatColor.GOLD}Misc"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.DARK_GRAY}Category")
        lore.add("")
        lore.add("${ChatColor.GRAY}This Category includes:")
        lore.add("${ChatColor.GRAY}  Everything else")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Misc Item auctions")
        meta.lore = lore
        item.itemMeta = meta

        misc = item
    }
}