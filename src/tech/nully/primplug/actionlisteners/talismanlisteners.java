package tech.nully.primplug.actionlisteners;


import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.Inventory;

import tech.nully.primplug.Items.Talisman;

public class talismanlisteners {
    boolean talismanclickhappened;
    public static Player player;
    // define the event
    @EventHandler
    public void onPlayerInteract(PlayerInteractEvent e) {
    player = e.getPlayer();
    Material mat = player.getItemInHand().getType();
     
    // On event
    if(e.getAction() == Action.RIGHT_CLICK_AIR || e.getAction() == Action.RIGHT_CLICK_BLOCK) {
        // TODO FIX THE CONDITION
        if (mat.equals(Talisman.BladeOfDespair)) 
        {
            Inventory inv = Bukkit.createInventory(null, 9, ChatColor.BLUE + "Talisman Bag");
        } else {

            }
        }
    }
}
