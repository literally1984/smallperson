@file:Suppress("DEPRECATION")

package me.bnogocarft.bnogorpg.economy.Auction

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Utils.economyUtils.auction.*
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.scheduler.BukkitRunnable

class AhGuiUpdater : BukkitRunnable() {
    override fun run() {
        for (player in Bukkit.getOnlinePlayers()) {
            if (player.openInventory.title == "Auction House") {
                val inventory = player.openInventory
                if (inventory.getItem(11).type == Material.AIR) {
                    return
                }

                val auc = try {
                    getAuctionByID(
                        inventory.getItem(11).itemMeta.lore[
                                inventory.getItem(11).itemMeta.lore.size - 1
                        ].split(
                            ": ${ChatColor.GRAY}"
                        )[1]
                    )
                } catch (e: IllegalArgumentException) {
                    inventory.setItem(11, null)
                    return
                }

                when (
                    getAuctionType(
                        getAuctionByID(
                            inventory.getItem(11).itemMeta.lore[
                                    inventory.getItem(11).itemMeta.lore.size - 1
                            ].split(
                                ": ${ChatColor.GRAY}"
                            )[1]
                        ).item
                    )
                ) {
                    AuctionType.WEAPON -> {
                        val weaponAucs = ArrayList<Auction>()
                        for (auc in Main.auctions) {
                            if (auc.itemType == AuctionType.WEAPON) {
                                weaponAucs.add(auc)
                            }
                        }
                        for ((index, aucSlot) in AHGui.auctionSlots.withIndex()) {
                            try {
                                inventory.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
                            } catch (ignore: IndexOutOfBoundsException) {
                                inventory.setItem(aucSlot, null)
                            }
                        }
                        player.updateInventory()
                    }

                    AuctionType.ARMOR -> {
                        val weaponAucs = ArrayList<Auction>()
                        for (auc in Main.auctions) {
                            if (auc.itemType == AuctionType.ARMOR) {
                                weaponAucs.add(auc)
                            }
                        }
                        for ((index, aucSlot) in AHGui.auctionSlots.withIndex()) {
                            try {
                                inventory.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
                            } catch (ignore: IndexOutOfBoundsException) {
                                inventory.setItem(aucSlot, null)
                            }
                        }
                        player.updateInventory()
                    }

                    AuctionType.MAGIC_ITEMS -> {
                        val weaponAucs = ArrayList<Auction>()
                        for (auc in Main.auctions) {
                            if (auc.itemType == AuctionType.MAGIC_ITEMS) {
                                weaponAucs.add(auc)
                            }
                        }
                        for ((index, aucSlot) in AHGui.auctionSlots.withIndex()) {
                            try {
                                inventory.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
                            } catch (ignore: IndexOutOfBoundsException) {
                                inventory.setItem(aucSlot, null)
                            }
                        }
                        player.updateInventory()
                    }

                    AuctionType.FOOD -> {
                        val weaponAucs = ArrayList<Auction>()
                        for (auc in Main.auctions) {
                            if (auc.itemType == AuctionType.FOOD) {
                                weaponAucs.add(auc)
                            }
                        }
                        for ((index, aucSlot) in AHGui.auctionSlots.withIndex()) {
                            try {
                                inventory.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
                            } catch (ignore: IndexOutOfBoundsException) {
                                inventory.setItem(aucSlot, null)
                            }
                        }
                        player.updateInventory()
                    }

                    AuctionType.BLOCKS -> {
                        val weaponAucs = ArrayList<Auction>()
                        for (auc in Main.auctions) {
                            if (auc.itemType == AuctionType.BLOCKS) {
                                weaponAucs.add(auc)
                            }
                        }
                        for ((index, aucSlot) in AHGui.auctionSlots.withIndex()) {
                            try {
                                inventory.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
                            } catch (ignore: IndexOutOfBoundsException) {
                                inventory.setItem(aucSlot, null)
                            }
                        }
                        player.updateInventory()
                    }

                    AuctionType.OTHER -> {
                        val weaponAucs = ArrayList<Auction>()
                        for (auc in Main.auctions) {
                            if (auc.itemType == AuctionType.OTHER) {
                                weaponAucs.add(auc)
                            }
                        }
                        for ((index, aucSlot) in AHGui.auctionSlots.withIndex()) {
                            try {
                                inventory.setItem(aucSlot, createAuctionItemFor(weaponAucs[index]))
                            } catch (ignore: IndexOutOfBoundsException) {
                                inventory.setItem(aucSlot, null)
                            }
                        }
                        player.updateInventory()
                    }
                }
            }
        }
    }
}