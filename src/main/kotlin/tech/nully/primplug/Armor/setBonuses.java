package tech.nully.primplug.Armor;

import java.util.HashMap;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;

public class setBonuses {
    private HashMap<Player, String> hasSetBonus = new HashMap<Player, String>();


    public String getPlayerSetBonus(Player p) {
        return hasSetBonus.get(p);
    }


    public boolean hasSet(Player p) {
        boolean hasSet = false;
        for (ItemStack i : p.getInventory().getArmorContents()) {
            if (i == null) {
                hasSet = true;
                break;
            }
        }

        return hasSet;
    }


    public void setPlayerSetBonus(Player p) {


        // defines the player's armor items
        String playerHelm = p.getInventory().getHelmet().getItemMeta().getDisplayName();
        String playerChes = p.getInventory().getChestplate().getItemMeta().getDisplayName();
        String playerLeg = p.getInventory().getLeggings().getItemMeta().getDisplayName();
        String playerBoots = p.getInventory().getBoots().getItemMeta().getDisplayName();

        if (hasSet(p)) {
            if (playerHelm.contains("Cactus Helmet") &&
                playerChes.contains("Cactus Chestplate") &&
                playerLeg.contains("Cactus Leggings") &&
                playerBoots.contains("Cactus Boots")) {


                    hasSetBonus.put(p, "cac");
                    return;
            }

            if (playerHelm.contains("Drakon Helmet") &&
                playerChes.contains("Drakon Chestplate") &&
                playerLeg.contains("Drakon Leggings") &&
                playerBoots.contains("Drakon Boots")) {

                    
                    hasSetBonus.put(p, "drak");
                    return;
            }

            if (playerHelm.contains("Demigod Helmet") &&
                playerChes.contains("Demigod Chestplate") &&
                playerLeg.contains("Demigod Leggings") &&
                playerBoots.contains("Demigod Boots")) {

                    
                    hasSetBonus.put(p, "demi");
                    return;
            }
        }


    }
}
