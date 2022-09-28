package me.bnogocarft.bnogorpg.Utils.economyUtils.auction

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.*
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItem
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.Exceptions.IllegalConstructorArgumentException
import me.bnogocarft.bnogorpg.Utils.Senders.MessageSender
import me.bnogocarft.bnogorpg.economy.Auction.AHGui
import me.bnogocarft.bnogorpg.economy.Auction.AHGui.Companion.returnToManagerPage
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.ItemMeta
import java.sql.ResultSet


fun getAuctionType(item: ItemStack): AuctionType {
    if (item.hasItemMeta()) {
        var bItem: BItem? = null
        try {
            bItem = BItem(item)
        } catch (ignore: IllegalConstructorArgumentException) {
        }
        if (bItem != null) {
            return when (bItem.type) {
                BItemType.TALISMAN -> AuctionType.MAGIC_ITEMS
                BItemType.SCROLL -> AuctionType.MAGIC_ITEMS
                BItemType.WEAPON -> AuctionType.WEAPON
                BItemType.ARMOR -> AuctionType.ARMOR
                BItemType.MISC -> AuctionType.OTHER
                BItemType.CRAFT_ITEM -> AuctionType.OTHER
            }
        }
        // Checks if the item is a food item
    } else {
        if (item.type == Material.COOKED_BEEF ||
            item.type == Material.RAW_BEEF ||
            item.type == Material.RAW_CHICKEN ||
            item.type == Material.RAW_FISH ||
            item.type == Material.COOKED_CHICKEN ||
            item.type == Material.COOKED_FISH ||
            item.type == Material.PORK ||
            item.type == Material.GRILLED_PORK ||
            item.type == Material.APPLE ||
            item.type == Material.GOLDEN_APPLE ||
            item.type == Material.GOLDEN_CARROT ||
            item.type == Material.POTATO_ITEM ||
            item.type == Material.MELON
        ) {
            return AuctionType.FOOD
        }

        if (item.type.isBlock) {
            return AuctionType.BLOCKS
        }

        return AuctionType.OTHER
    }

    return AuctionType.OTHER
}

fun getAuctions(result: ResultSet): List<Auction> {
    val auctions = mutableListOf<Auction>()
    while (result.next()) {
        /*val auction = Auction(
            result.getString()
        )
        auctions.add(auction)
         */
    }
    return auctions
}

fun createAuctionItemFor(auc: Auction): ItemStack {
    val item = auc.item.clone()
    lateinit var meta: ItemMeta
    lateinit var lore: ArrayList<String>

    if (item.hasItemMeta()) {
        meta = auc.item.itemMeta.clone()
        lore = meta.lore as ArrayList<String>
        if (lore[lore.size - 1].contains("${ChatColor.GOLD}ID: ")) {
            return item
        }
    } else {
        meta = Bukkit.getItemFactory().getItemMeta(item.type)
        lore = ArrayList()
        lore.add("")
    }

    lore.add("${ChatColor.GRAY}------------------------------")
    lore.add("${ChatColor.GOLD}Seller: ${ChatColor.GRAY}${auc.creator}")
    lore.add("${ChatColor.GOLD}Starting Bid: ${ChatColor.GRAY}${auc.startingBid}")
    lore.add("")
    lore.add("${ChatColor.GOLD}Highest Bid: ${ChatColor.GRAY}${auc.highestBid}")
    lore.add(
        "${ChatColor.GOLD}Highest Bidder: ${ChatColor.GRAY}" +
                "${
                    if (auc.currentBidder == null) {
                        "N/A"
                    } else {
                        auc.currentBidder
                    }
                }"
    )
    lore.add("")
    var diff = auc.timeLeft - System.currentTimeMillis() / 1000
    var days: Int = 0
    var hours: Int = 0
    var minutes: Int = 0
    var seconds: Int = 0

    while (diff > 86400) {
        days += 1
        diff -= 86400
    }
    while (diff > 3600) {
        hours += 1
        diff -= 3600
    }
    while (diff > 60) {
        minutes += 1
        diff -= 60
    }
    lore.add(
        "${ChatColor.GOLD}Ends in: ${ChatColor.GRAY}" +
                "$days Days, " +
                "$hours Hours, " +
                "$minutes Minutes, " +
                "$diff Seconds"
    )
    lore.add("${ChatColor.GOLD}ID: ${ChatColor.GRAY}${auc.ID}")

    meta.lore = lore
    item.itemMeta = meta
    return item
}

fun createAuctionInfoGui(auc: Auction): Inventory {
    val fGui = GUIFactory.createInventory("${ChatColor.GOLD}Auction Info for: ${auc.ID}", 45)
    val layer1 = GUILayer()
    for (index in 0..44) {
        layer1.backgrounds.add(GUIBackground(sBK, index))
    }

    layer1.backgrounds.add(GUIBackground(createAuctionItemFor(auc), 13))
    layer1.buttons.add(
        GUIButton(
            AHGui.bidItem, 31,
            fun(gui: OpenGUI) {
                val auction = getAuctionByID(
                    gui.inv.getItem(13).itemMeta.lore[
                            gui.inv.getItem(13).itemMeta.lore.size - 1
                    ].split(": ${ChatColor.GRAY}")[1]
                )
                if (auction.creator == gui.player.name) {
                    gui.player.sendMessage("${ChatColor.RED}You cannot bid on your own auction!")
                    return
                }
                gui.player.closeInventory()

                var bid: Double? = null
                var valid = true

                val inp = ChatInput()
                inp.promptInput(
                    gui.player,
                    arrayListOf(
                        "${ChatColor.GREEN}Enter your bid for this auction! (Current highest bid: " +
                                "${
                                    if (auction.highestBid > 0) {
                                        auction.highestBid
                                    } else {
                                        auction.startingBid
                                    }
                                })"
                    ),
                    object : ChatInput.InputListener {
                        override fun onSend(msg: String) {
                            try {
                                bid = msg.toDouble()
                                print(bid)
                                if (bid != null && auction.highestBid < bid!!) {
                                    bidOnAuction(gui.player.name, auction, bid!!, true)
                                    gui.player.openInventory(createAuctionInfoGui(auction))
                                } else {
                                    gui.player.sendMessage("${ChatColor.RED}Bid must be higher than current highest bid!")
                                }
                            } catch (e: NumberFormatException) {
                                gui.player.sendMessage("${ChatColor.RED}Invalid bid!")
                                valid = false
                            }
                        }
                    }
                )
                if (!valid) {
                    gui.player.openInventory(createAuctionInfoGui(auction))
                    return
                }
            }
        )
    )

    layer1.buttons.add(GUIButton(AHGui.exitItem, 8, ::returnToManagerPage))

    fGui.layers.add(layer1)
    return GUIFactory.produceInventory(fGui)
}

fun bidOnAuction(name: String, auc: Auction, amount: Double, online: Boolean) {
    if (auc.currentBidder != null) {
        val mSender = MessageSender(auc.currentBidder!!)
        mSender.messages.add("${ChatColor.RED}You have been outbid on auction #${auc.ID}")
        mSender.messages.add(
            "${ChatColor.RED}(" +
                    "${
                        if (auc.item.hasItemMeta())
                            auc.item.itemMeta.displayName
                        else
                            auc.item.type.toString()
                    })"
        )
        mSender.sendMessage()
    }
    auc.highestBid = amount
    auc.currentBidder = name
    Main.econ.withdrawPlayer(name, amount)
    if (online) {
        Bukkit.getPlayer(name).sendMessage(
            "${ChatColor.GREEN}You bid $amount on ${auc.ID} (" +
                    "${
                        if (auc.item.hasItemMeta())
                            auc.item.itemMeta.displayName
                        else
                            auc.item.type.toString()
                    })"
        )
    }
}

fun getAuctionByID(id: String): Auction {
    var contains = false
    var auc: Auction? = null

    for (auction in Main.auctions) {
        if (auction.ID == id) {
            auc = auction
            contains = true
        }
    }
    if (!contains) {
        throw IllegalArgumentException("Provided ID is not a valid Auction ID")
    }

    return auc!!
}

enum class AuctionType {
    WEAPON,
    ARMOR,
    MAGIC_ITEMS,
    FOOD,
    BLOCKS,
    OTHER
}