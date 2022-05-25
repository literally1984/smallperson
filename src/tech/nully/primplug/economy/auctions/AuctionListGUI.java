package tech.nully.primplug.economy.auctions;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;

public class AuctionListGUI {

    public static void OpenAuctionList(Player p) {
        Inventory AucInv = Bukkit.createInventory(null, 54, ChatColor.BLACK + "Auction House");
    }
}
