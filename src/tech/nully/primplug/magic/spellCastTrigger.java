package tech.nully.primplug.magic;


import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;

import java.util.HashMap;

public class spellCastTrigger implements Listener {
    static HashMap<Player, ItemStack[]> IsInMagicForm = new HashMap<Player, ItemStack[]>();
    @EventHandler
    public void onSpellCast(PlayerInteractEvent e) {

    }

    @EventHandler
    public void onFormChange(PlayerInteractEvent e) {
        if (e.getPlayer().getItemInHand().getItemMeta().getDisplayName().toLowerCase().contains("Pheonix Wand")) {
            
        }
    }
    
}
