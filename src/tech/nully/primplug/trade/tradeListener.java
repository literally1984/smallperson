package tech.nully.primplug.trade;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;

import java.util.Arrays;
import java.util.List;

public class tradeListener implements Listener {

    @EventHandler
    public void onTradeClick(InventoryClickEvent e) {
        Player requestee = (Player) e.getWhoClicked();
        tradeCommand trade = new tradeCommand();
        Player requester;
        if (trade.activeRequests.containsKey(requestee)) {
            requester = trade.activeRequests.get(requestee);
        }

        // Checks if the clicked-item is one of the items that you cant take/click
        List<Integer> noClickSlots = Arrays.asList(4, 13, 22,31, 40, 45, 46,47,48,49, 50, 51, 52, 5);
        if (noClickSlots.contains(e.getSlot())) {
            e.setCancelled(true);
            // TODO MAKE HANDLERS FOR FUNCTION BUTTONS
            // Handlers for the accept and deny buttons
        } else {
            int clickedSlot = e.getSlot();

        }
    }
}
