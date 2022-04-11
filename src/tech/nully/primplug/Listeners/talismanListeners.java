package tech.nully.primplug.Listeners;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import java.nio.file.Files;
import java.io.File;
import java.io.FileReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*; 
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.nio.file.StandardOpenOption;
import java.io.FileWriter;
import java.io.IOException;
import java.io.BufferedReader;

import tech.nully.primplug.Items.Talisman;

public class talismanListeners implements Listener {
    static Player p;
    @EventHandler
    public static void OnRightClickTalisman(PlayerInteractEvent i) throws IOException {
        p = i.getPlayer();
        ItemStack handItem = p.getItemInHand();
        ItemMeta handItemMeta = handItem.getItemMeta();
        // Listeners for right-click talismans
        // For Curse of despair
        if (p.getItemInHand().getType() == Material.RED_ROSE) {
            if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                    if (handItemMeta.getDisplayName() == Talisman.BladeOfDespair.getItemMeta().getDisplayName()) {
                        // TODO MAKE IT ADD TO CONFIG THING - idk if this works, bongo, commit ur code. -Null
                        p.getInventory().remove(Talisman.BladeOfDespair);
                        p.sendMessage(ChatColor.YELLOW + 
                        "Successfully added your" +
                         ChatColor.LIGHT_PURPLE + "" + 
                         ChatColor.BOLD + 
                         " Curse of Despair " + 
                         ChatColor.YELLOW + 
                         "Talisman to your Talisman Bag!");
                         String name = p.getName();  
                         Path path = Paths.get("/plugins/talismans/"+name);
                         if(!Files.exists(path)){
                             Files.createDirectory(path);
                         }
                         // create a file at the path
                         File file = new File("/plugins/talismans/"+name+"/talisman.txt");
                         // if file doesnt exists, then create it
                         if (!file.exists()) {
                             file.createNewFile();
                         }
                         String talisman = "Curse of Despair";
                         ArrayList<String> finaldraft = new ArrayList<String>();
                         finaldraft.add(talisman);
                         FileWriter writer = new FileWriter(file, true);
                         writer.write(talisman + "\n");
                         writer.close();
                    }


            }
            // prevent talisman from being placed
            if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                if (handItemMeta.getDisplayName() == Talisman.BladeOfDespair.getItemMeta().getDisplayName()) {
                    i.setCancelled(true);

                }
            }
        }
        // For Blessing of durability
        if (p.getItemInHand().getType() == Material.YELLOW_FLOWER) {
            if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                    if (handItemMeta.getDisplayName() == Talisman.BlessingOfDurability.getItemMeta().getDisplayName()) {
                        // TODO MAKE IT ADD TO CONFIG THING
                        p.getInventory().remove(Talisman.BlessingOfDurability);
                        p.sendMessage(ChatColor.YELLOW + 
                        "Successfully added your" + 
                        ChatColor.LIGHT_PURPLE + "" + 
                        ChatColor.BOLD + 
                        " Blessing of Durability " + 
                        ChatColor.YELLOW + 
                        "Talisman to your Talisman Bag!");
                }
            }
            // prevent talisman from being placed
            if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                if (handItemMeta.getDisplayName() == Talisman.BlessingOfDurability.getItemMeta().getDisplayName()) {
                    i.setCancelled(true);
                    }
                }
            }
                    // For Blessing of durability
        if (p.getItemInHand().getType() == Material.WOOL) {
            if (handItemMeta.getDisplayName() == Talisman.MisoTheRabbit.getItemMeta().getDisplayName()) {
                if (i.getAction() == Action.RIGHT_CLICK_AIR) {
                    // TODO MAKE IT ADD TO CONFIG THING
                    p.getInventory().remove(Talisman.MisoTheRabbit);
                    p.sendMessage(ChatColor.YELLOW + 
                    "Successfully added your" + 
                    ChatColor.LIGHT_PURPLE + "" + 
                    ChatColor.BOLD + 
                    " Miso the Rabbit " + 
                    ChatColor.YELLOW + 
                    "Talisman to your Talisman Bag!");
            }
            // prevent talisman from being placed
                if (i.getAction() == Action.RIGHT_CLICK_BLOCK) {
                    i.setCancelled(true);
                    }
                }
            }
    }
}
