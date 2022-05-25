package tech.nully.primplug.economy.auctions;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;

public class AuctionListGUI {
    private static int[] AvaliableSlots = {10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34,37,38,39,40,41,42,43};

    public static void OpenAuctionList(Player p) {
        Inventory AucInv = Bukkit.createInventory(null, 54, ChatColor.BLACK + "Auction House");
        int IndexOfInv = 0;
        for (Long l : AuctionCommand.auctions.keySet()) {
            AucInv.setItem(AvaliableSlots[IndexOfInv], AuctionCommand.auctions.get(l).getItem());
        }
        
    }
}
