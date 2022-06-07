package tech.nully.primplug.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerInteractEvent;

public class PlayerPutOnHelmet implements Listener{
    
    @EventHandler
    public void OnPlayerPutOnHelmet(InventoryClickEvent e) {
        if (PrimItem.isPrimItem(e.getCurrentItem()) == false) return;
        PrimItem primItem = PrimItem.getPrimItem(e.getCurrentItem());
        if (primItem.getPrimType().equals("helmet")) {
            e.getWhoClicked().getInventory().setHelmet(e.getCurrentItem());
            e.getWhoClicked().setItemOnCursor(null);
        }
    }

    @EventHandler
    public void OnPlayerInteractHelmet(PlayerInteractEvent e) {
        if (e.getAction().equals(Action.RIGHT_CLICK_AIR) || e.getAction().equals(Action.RIGHT_CLICK_BLOCK)) {
            if (PrimItem.isPrimItem(e.getPlayer().getItemInHand()) == false) return;
            PrimItem prim = PrimItem.getPrimItem(e.getPlayer().getItemInHand());
            if (prim.getPrimType().equals("helmet")) {
                e.getPlayer().getInventory().setHelmet(e.getPlayer().getItemInHand());
            }
        }
    }
}
