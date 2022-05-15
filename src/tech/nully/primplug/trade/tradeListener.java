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

import java.util.Arrays;
import java.util.List;

public class tradeListener implements Listener {

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
            List<Integer> noClickSlots = Arrays.asList(4, 13, 22,31, 40, 45, 46,47,48,49, 50, 51, 52, 5);
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
                // TODO MAKE HANDLERS FOR FUNCTION BUTTONS
                if (e.getSlot() == 46) {
                    p1Inv.setItem(48, new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData()));
                    p2Inv.setItem(50, new ItemStack(Material.WOOL, 1, DyeColor.GREEN.getDyeData()));
                }

                // If the clicked slot is NOT the noClick slots, update the clicked slot to player2's clicked slot + 5
            } else {
                int clickedSlot = e.getSlot();

                p2Inv.setItem(clickedSlot + 5, p1Inv.getItem(clickedSlot));
            }
        }
    }
}
