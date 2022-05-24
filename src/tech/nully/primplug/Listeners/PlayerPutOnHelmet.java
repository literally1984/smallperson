package tech.nully.primplug.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.inventory.ClickType;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.player.PlayerInteractEvent;

import tech.nully.primplug.API.PrimItems.PrimItem;

public class PlayerPutOnHelmet implements Listener{
    
    @EventHandler
    public void OnPlayerPutOnHelmet(InventoryClickEvent e) {
        if (e.getClick().equals(ClickType.LEFT)) {
            
        }
    }

    @EventHandler
    public void OnPlayerInteractHelmet(PlayerInteractEvent e) {
        if (e.getAction().equals(Action.RIGHT_CLICK_AIR) || e.getAction().equals(Action.RIGHT_CLICK_BLOCK)) {
            PrimItem prim = PrimItem.getPrimItem(e.getPlayer().getItemInHand());
            if (prim.getPrimType().equals("helmet")) {
                
            }
        }
    }
}
