package tech.nully.primplug.Talismans;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;

public class talismanListeners implements Listener {
    @EventHandler
    public static void OnRightClickTalisman(PlayerInteractEvent i) {
        if (i.getAction() == Action.RIGHT_CLICK_AIR || i.getAction() == Action.RIGHT_CLICK_AIR) {

            Player p = i.getPlayer();
            talismanIdentifier t = new talismanIdentifier();
            ItemStack itemHand = p.getItemInHand();


            // Check if Item in hand is talisman
            if (t.isTalisman(itemHand) == true) {


                // if so, remove the item and store the ID into an int
                p.getInventory().remove(itemHand);
                p.sendMessage(ChatColor.YELLOW + 
                "You added a" + 
                itemHand.getItemMeta().getDisplayName() + 
                ChatColor.YELLOW + 
                "to your Talisman Bag!");

                // TODO: input this int into the player's file
                int TalismanID = t.TalismanName.get(itemHand.getItemMeta().getDisplayName());
            }  
        }
    }
}
