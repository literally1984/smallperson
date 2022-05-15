package tech.nully.primplug.trade;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;

import java.util.Arrays;
import java.util.List;

public class tradeListener implements Listener {

    @EventHandler
    public void onTradeClick(InventoryClickEvent e) {
        Player currentPlayer = (Player) e.getWhoClicked();
        tradeCommand trade = new tradeCommand();
        Player otherPlayer;
        if (trade.activeRequests.containsKey(currentPlayer)) {
            otherPlayer = trade.activeRequests.get(currentPlayer);
        }

        // Checks if the clicked-item is one of the items that you cant take/click
        List<Integer> noClickSlots = Arrays.asList(4, 13, 22,31, 40, 45, 46,47,48,49, 50, 51, 52, 5);
        if (noClickSlots.contains(e.getSlot())) {
            e.setCancelled(true);
            // TODO MAKE HANDLERS FOR FUNCTION BUTTONS
            // Handlers for the accept and deny buttons
        } else {
            int clickedSlot = e.getSlot();
            if (currentPlayer.getOpenInventory() == )
        }
    }
}
