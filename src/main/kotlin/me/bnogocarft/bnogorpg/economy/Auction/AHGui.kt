package me.bnogocarft.bnogorpg.economy.Auction

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.*
import me.bnogocarft.bnogorpg.Utils.economyUtils.auction.*
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

class AHGui {
    companion object {
        lateinit var browseGui: Inventory
        lateinit var mainGui: Inventory
        lateinit var createAucGui: Inventory

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
        lateinit var exitItem: ItemStack
        lateinit var bidItem: ItemStack
        lateinit var createItem: ItemStack

        val noBorderSlots = arrayOf(
            10, 11, 12, 13, 14, 15, 16,
            19, 20, 21, 22, 23, 24, 25,
            28, 29, 30, 31, 32, 33, 34,
            37, 38, 39, 40, 41, 42, 43,
        )
        val auctionSlots = arrayOf(
            11, 12, 13, 14, 15, 16,
            20, 21, 22, 23, 24, 25,
            29, 30, 31, 32, 33, 34,
            38, 39, 40, 41, 42, 43
        )

        fun returnToManagerPage(gui: OpenGUI) {
            gui.player.closeInventory()
            gui.player.openInventory(cloneInv(mainGui))
        }
    }

    init {
        createWeaponButton()
        createArmorButton()
        createMagicItemsButton()
        createFoodButton()
        createBlocksButton()
        createMiscButton()
        createAuctionCreateItem()
        createSelectCreateItem()
        createAuctionViewItem()
        createAuctionBrowseItem()
        createAuctionAucsItem()
        createExitItem()
        createBidItem()
        val fGui = GUIFactory.createInventory("Auction House", 54)

        val fGUILayer1 = GUILayer()
        for (index in 0..53) {
            if (auctionSlots.contains(index)) {
                fGUILayer1.buttons.add(GUIButton(ItemStack(Material.AIR), index, ::infoClickHandler))
                continue
            }
            fGUILayer1.backgrounds.add(GUIBackground(sBK, index))
        }

        fGUILayer1.buttons.add(GUIButton(weapon, 0, ::weaponPageHandler))
        fGUILayer1.buttons.add(GUIButton(armor, 9, ::armorPageHandler))
        fGUILayer1.buttons.add(GUIButton(magicItems, 18, ::magicPageHandler))
        fGUILayer1.buttons.add(GUIButton(food, 27, ::foodPageHandler))
        fGUILayer1.buttons.add(GUIButton(blocks, 36, ::blockPageHandler))
        fGUILayer1.buttons.add(GUIButton(misc, 45, ::miscPageHandler))
        fGUILayer1.buttons.add(GUIButton(exitItem, 53, ::returnToManagerPage))
        fGui.layers.add(fGUILayer1)


        browseGui = GUIFactory.produceInventory(fGui)

        // Creates the Main GUI
        val mGui = GUIFactory.createInventory("Auction Manager", 45)
        val mGUILayer1 = GUILayer()

        for (index in 0..43) {
            mGUILayer1.backgrounds.add(GUIBackground(sBK, index))
        }

        mGUILayer1.buttons.add(
            GUIButton(
                browseButton,
                11,
                fun(gui: OpenGUI) {
                    gui.player.openInventory(browseGui)
                })
        )

        mGUILayer1.buttons.add(
            GUIButton(
                viewButton,
                13,
                ::bidsClickHandler
            )
        )

        mGUILayer1.buttons.add(
            GUIButton(
                aucsButton,
                15,
                ::auctionsClickHandler
            )
        )

        mGUILayer1.buttons.add(
            GUIButton(
                createButton,
                31,
                ::createClickHandler
            )
        )
        mGui.layers.add(mGUILayer1)

        mainGui = GUIFactory.produceInventory(mGui)

        val createGui = GUIFactory.createInventory("Create an Auction", 54)
        val createGUILayer1 = GUILayer()
        for (index in 0..53) {
            createGUILayer1.backgrounds.add(GUIBackground(sBK, index))
        }

        for (index2 in 54..54 + 36) {
            createGUILayer1.slotFuncs.add(SlotFunction(index2, ::selectHandler))
        }

        createGUILayer1.backgrounds.add(GUIBackground(createItem, 13))
        createGui.layers.add(createGUILayer1)

        createAucGui = GUIFactory.produceInventory(createGui)
    }

    private fun createBidItem() {
        val item = ItemStack(Material.EMERALD)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.EMERALD)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GREEN}Bid on Auction"
        lore.add("")
        lore.add("${ChatColor.GRAY}Bid on an auction and maybe.. just")
        lore.add("${ChatColor.GRAY}maybe.. win it and get rich quick!")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Bid on Current Auction")


        meta.lore = lore
        item.itemMeta = meta

        bidItem = item
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
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view Auction House")


        meta.lore = lore
        item.itemMeta = meta

        browseButton = item
    }

    private fun createExitItem() {
        val item = ItemStack(Material.WOOD_DOOR)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.WOOD_DOOR)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Return"
        lore.add("")
        lore.add("${ChatColor.GRAY}Return to the Auction Manager")
        lore.add("${ChatColor.GRAY}to view other auction stuff")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to return to Auction Manager")

        meta.lore = lore
        item.itemMeta = meta

        exitItem = item
    }

    private fun createAuctionViewItem() {
        val item = ItemStack(Material.GOLDEN_CARROT)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.GOLDEN_CARROT)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Browse Bids"
        lore.add("")
        lore.add("${ChatColor.GRAY}Look at auctions that you have")
        lore.add("${ChatColor.GRAY}bid on to make sure no one outbids")
        lore.add("${ChatColor.GRAY}you!")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view your Bids")


        meta.lore = lore
        item.itemMeta = meta

        viewButton = item
    }

    private fun createAuctionCreateItem() {
        val item = ItemStack(Material.WORKBENCH)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.WORKBENCH)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Create Auction"
        lore.add("")
        lore.add("${ChatColor.GRAY}Too lazy to use the command? No")
        lore.add("${ChatColor.GRAY}problem! Just create an auction")
        lore.add("${ChatColor.GRAY}with this GUI!")

        meta.lore = lore
        item.itemMeta = meta

        createButton = item
    }

    private fun createAuctionAucsItem() {
        val item = ItemStack(Material.SKULL)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.SKULL)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GOLD}Your Auctions"
        lore.add("")
        lore.add("${ChatColor.GRAY}Look through the Auctions you have")
        lore.add("${ChatColor.GRAY}created, see their highest bids")
        lore.add("${ChatColor.GRAY}and who bid on them. Stonks!")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to view your Auctions")


        meta.lore = lore
        item.itemMeta = meta

        aucsButton = item
    }

    private fun createSelectCreateItem() {
        val item = ItemStack(Material.BEACON)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.BEACON)
        val lore = ArrayList<String>()

        meta.displayName = "${ChatColor.GREEN}Select An Item"
        lore.add("")
        lore.add("${ChatColor.GRAY}Select an Item in your inventory")
        lore.add("${ChatColor.GRAY}to Auction!")
        lore.add("")
        lore.add("${ChatColor.GREEN}Click to Select an item to auction")


        meta.lore = lore
        item.itemMeta = meta

        createItem = item
    }

    private fun weaponPageHandler(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.WEAPON) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                gui.inv.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun armorPageHandler(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.ARMOR) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                gui.inv.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun magicPageHandler(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.MAGIC_ITEMS) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                gui.inv.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun foodPageHandler(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.FOOD) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                gui.inv.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun blockPageHandler(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.BLOCKS) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                gui.inv.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun miscPageHandler(gui: OpenGUI) {
        val weaponAucs = ArrayList<Auction>()
        for (auc in Main.auctions) {
            if (auc.itemType == AuctionType.OTHER) {
                weaponAucs.add(auc)
            }
        }
        for ((index, aucSlot) in auctionSlots.withIndex()) {
            try {
                gui.inv.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
            } catch (ignore: IndexOutOfBoundsException) {
                gui.inv.setItem(aucSlot, null)
            }
        }
    }

    private fun selectHandler(gui: OpenGUI) {
        if (gui.currentItem.type != Material.AIR) {
            // Checks if an Item is already selected for auction
            if (gui.inv.getItem(13) != createItem) {
                gui.player.inventory.addItem(gui.inv.getItem(13))
            }
            gui.player.openInventory.setItem(13, gui.currentItem)
            gui.currentItem = ItemStack(Material.AIR)
            gui.player.openInventory.bottomInventory.setItem(gui.slot, null)
        }
    }

    private fun createBorderPage(name: String): FactoryInventory {
        val mGui = GUIFactory.createInventory(name, 54)
        val layer1 = GUILayer()

        for (index in 0..53) {
            if (noBorderSlots.contains(index)) {
                layer1.backgrounds.add(GUIBackground(ItemStack(Material.AIR), index))
                continue
            }
            layer1.backgrounds.add(GUIBackground(sBK, index))
        }

        mGui.layers.add(layer1)

        return mGui
    }

    private fun auctionsClickHandler(gui: OpenGUI) {
        //Gets the players auctions
        val items = ArrayList<ItemStack>()

        for (auc in Main.auctions) {
            if (auc.creator == gui.player.name) {
                items.add(createAuctionItemFor(auc))
            }
        }

        //Sets the Inventory to display the players auctions
        val inv = createBorderPage("${ChatColor.GOLD}Your Auctions")
        val layer1 = GUILayer()
        for ((index, i) in noBorderSlots.withIndex()) {
            try {
                layer1.buttons.add(GUIButton(items[index], i, ::infoClickHandler))
            } catch (e: IndexOutOfBoundsException) {
                layer1.backgrounds.add(GUIBackground(ItemStack(Material.AIR), i))
                continue
            }
        }

        inv.layers.add(layer1)

        gui.player.closeInventory()
        gui.player.openInventory(GUIFactory.produceInventory(inv))
    }

    private fun infoClickHandler(gui: OpenGUI) {
        if (gui.currentItem.type == Material.AIR) {
            return
        }
        gui.player.closeInventory()
        gui.player.openInventory(
            createAuctionInfoGui(
                try {
                    getAuctionByID(
                        gui.currentItem.itemMeta.lore[
                                gui.currentItem.itemMeta.lore.size - 1
                        ].split(": ${ChatColor.GRAY}")[1]
                    )
                } catch (e: IllegalArgumentException) {
                    return
                }
            )
        )
    }

    private fun bidsClickHandler(gui: OpenGUI) {
        //Gets the players auctions
        val items = ArrayList<ItemStack>()

        for (auc in Main.auctions) {
            if (auc.currentBidder == gui.player.name) {
                items.add(createAuctionItemFor(auc))
            }
        }

        //Sets the Inventory to display the players auctions
        val inv = createBorderPage("${ChatColor.GOLD}Your Bids")
        val layer1 = GUILayer()
        for ((index, i) in noBorderSlots.withIndex()) {
            try {
                layer1.buttons.add(GUIButton(items[index], i, ::infoClickHandler))
            } catch (e: IndexOutOfBoundsException) {
                layer1.backgrounds.add(GUIBackground(ItemStack(Material.AIR), i))
                continue
            }
        }
        inv.layers.add(layer1)

        gui.player.closeInventory()
        gui.player.openInventory(GUIFactory.produceInventory(inv))
    }

    private fun createClickHandler(gui: OpenGUI) {
        gui.player.closeInventory()
        gui.player.openInventory(createAucGui)
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