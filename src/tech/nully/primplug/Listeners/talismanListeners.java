package tech.nully.primplug.Listeners;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.Items.Talisman;

public class talismanListeners implements Listener {
    static Player p;
    @EventHandler
    public static void OnRightClickTalisman(PlayerInteractEvent i) {
        p = i.getPlayer();
        ItemStack handItem = p.getItemInHand();
        // Listeners for right-click talismans
        // For Curse of despair
        if (handItem == Talisman.BladeOfDespair) {
            if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                // TODO MAKE IT ADD TO CONFIG THING
                p.getInventory().remove(Talisman.BladeOfDespair);
                p.sendMessage(ChatColor.YELLOW + 
                "Successfully added your" + 
                ChatColor.LIGHT_PURPLE + "" + 
                ChatColor.BOLD + 
                " Curse of Despair " + 
                ChatColor.YELLOW + 
                "Talisman to your Talisman Bag!");
            }
            // prevent talisman from being placed
            if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                i.setCancelled(true);

                }
            }
        // For Blessing of durability
        if (handItem == Talisman.BlessingOfDurability) {
            if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                    p.getInventory().remove(Talisman.BlessingOfDurability);
                    p.sendMessage(ChatColor.YELLOW + 
                    "Successfully added your" + 
                    ChatColor.LIGHT_PURPLE + "" + 
                    ChatColor.BOLD + 
                    // add name here
                    " Blessing of Durability " + 
                    ChatColor.YELLOW + 
                    "Talisman to your Talisman Bag!");
                }
            }
            // prevent talisman from being placed
            if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                i.setCancelled(true);
        }
         // For Miso
        if (handItem == Talisman.MisoTheRabbit) {
            if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                    p.getInventory().remove(Talisman.MisoTheRabbit);
                    p.sendMessage(ChatColor.YELLOW + 
                    "Successfully added your" + 
                    ChatColor.LIGHT_PURPLE + "" + 
                    ChatColor.BOLD + 
                    // add name here
                    " Miso the Rabbit " + 
                    ChatColor.YELLOW + 
                    "Talisman to your Talisman Bag!");
                }
            }
            // prevent talisman from being placed
            if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                i.setCancelled(true);
        }
    }
}
