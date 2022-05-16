package tech.nully.primplug.trade;

import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class tradeListener implements Listener {
    int[] opposeSlots = {5,6,7,8,14,15,16,17,23,24,25,26,32,33,34,35,41,42,43,44,50,51,52,53};
    List<Integer> noClickSlots = Arrays.asList(4, 13, 22,31, 40, 45, 46,47,48,49, 50, 51, 52, 5);

    @EventHandler
    public void onTradeClick(InventoryClickEvent e) {
        Player currentPlayer = (Player) e.getWhoClicked();

        // Correct inventory checker
        if (currentPlayer.getOpenInventory().getTitle().equals(ChatColor.BLACK + "YOU               " + "OTHER")) {
            tradeCommand trade = new tradeCommand();
            Player otherPlayer;

            // Defines the 2 players
            if (trade.activeRequests.containsKey(currentPlayer)) {
                otherPlayer = trade.activeRequests.get(currentPlayer);
            } else otherPlayer = trade.activeRequestsReversed.get(currentPlayer);

            // Checks if the clicked-item is one of the items that you cant take/click
            Inventory p1Inv = (Inventory) currentPlayer.getOpenInventory();
            Inventory p2Inv = (Inventory) otherPlayer.getOpenInventory();

            // 0  1  2  3  4  5  6  7  8
            // 9  10 11 12 13 14 15 16 17
            // 18 19 20 21 22 23 24 25 26
            // 27 28 29 30 31 32 33 34 35
            // 36 37 38 39 40 41 42 43 44
            // 45 46 47 48 49 50 51 52 53
            if (noClickSlots.contains(e.getSlot())) {
                e.setCancelled(true);
                // TODO: MAKE HANDLERS FOR FUNCTION BUTTONS
                // A------------------ accept key handler -------------------
                if (e.getSlot() == 46) {
                    ItemStack midAccept = new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData());
                    p1Inv.setItem(48, midAccept);
                    p2Inv.setItem(50, midAccept);

                    // if both players accepted
                    if (p1Inv.getItem(48) == midAccept && p2Inv.getItem(50) == midAccept) {
                        List<ItemStack> needToAddItems = new ArrayList<>();
                        List<ItemStack> needToAddItems2 = new ArrayList<>();
                        for (int i : opposeSlots) {
                            needToAddItems.add(p1Inv.getItem(i));
                            needToAddItems2.add(p2Inv.getItem(i));
                        }
                        currentPlayer.closeInventory();
                        otherPlayer.closeInventory();

                        for (ItemStack item : needToAddItems) {
                            currentPlayer.getInventory().addItem(item);
                        }

                        for (ItemStack item2 : needToAddItems2) {
                            otherPlayer.getInventory().addItem(item2);
                        }
                    }
                }



                // If the clicked slot is NOT the noClick slots, update the clicked slot to player2's clicked slot + 5
            } else {
                int clickedSlot = e.getSlot();

                p2Inv.setItem(clickedSlot + 5, p1Inv.getItem(clickedSlot));
            }
        }
    }
}
