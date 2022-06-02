package tech.nully.primplug.formChnage;

import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;

public class formChange implements Listener {
    @EventHandler
    public void changeForm(PlayerInteractEvent e) {
        if (e.getAction() == Action.RIGHT_CLICK_AIR) {
            if (e.getPlayer().isSneaking()) {
                Player p = e.getPlayer();
                p.getInventory().setItem(0, new ItemStack(Material.ACTIVATOR_RAIL));
            }
        }
    }
    
}
