package tech.nully.primplug.Armor;

import java.util.HashMap;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.Armor.armorItems.cactusArmor;

public class setBonuses {
    private HashMap<Player, String> hasSetBonus = new HashMap<Player, String>();


    public void getPlayerSetBonus(Player p) {

    }



    public void setPlayerSetBonus(Player p) {
        String playerHelm = p.getInventory().getHelmet().getItemMeta().getDisplayName();

        // cac set checker
        if (p.getInventory().getHelmet().getItemMeta().getDisplayName().equals(cactusArmor.helm.getItemMeta().getDisplayName()) && 
            p.getInventory().getChestplate().getItemMeta().getDisplayName().equals(cactusArmor.ches.getItemMeta().getDisplayName()) && 
            p.getInventory().getLeggings().getItemMeta().getDisplayName().equals(cactusArmor.leg.getItemMeta().getDisplayName()) && 
            p.getInventory().getBoots().getItemMeta().getDisplayName().equals(cactusArmor.boots.getItemMeta().getDisplayName())) {
            

            hasSetBonus.put(p, "cac");
        }


        if (p.getInventory().getChestplate() != null) {
            
        }


        if (p.getInventory().getHelmet() != null) {
            
        }


        if (p.getInventory().getHelmet() != null) {
            
        }
    }
}
