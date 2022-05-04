package tech.nully.primplug.Armor;

import java.util.HashMap;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.Armor.armorItems.Drakon;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.Armor.armorItems.hardenedDiamond;

public class setBonuses {
    private HashMap<Player, String> hasSetBonus = new HashMap<Player, String>();


    public void getPlayerSetBonus(Player p) {
    }


    public void setPlayerSetBonus(Player p) {


        // defines the player's armor items
        String playerHelm = p.getInventory().getHelmet().getItemMeta().getDisplayName();
        String playerChes = p.getInventory().getChestplate().getItemMeta().getDisplayName();
        String playerLeg = p.getInventory().getLeggings().getItemMeta().getDisplayName();
        String playerBoots = p.getInventory().getBoots().getItemMeta().getDisplayName();


        // checks if the player's armor is a set of cactusArmor
        if (playerHelm.equals(cactusArmor.helm.getItemMeta().getDisplayName()) && 
            playerChes.equals(cactusArmor.ches.getItemMeta().getDisplayName()) && 
            playerLeg.equals(cactusArmor.leg.getItemMeta().getDisplayName()) && 
            playerBoots.equals(cactusArmor.boots.getItemMeta().getDisplayName())) {
            

            hasSetBonus.put(p, "cac");
        }


        if (playerHelm.equals(hardenedDiamond.helm.getItemMeta().getDisplayName()) && 
            playerChes.equals(hardenedDiamond.ches.getItemMeta().getDisplayName()) && 
            playerLeg.equals(hardenedDiamond.leg.getItemMeta().getDisplayName()) && 
            playerBoots.equals(hardenedDiamond.boots.getItemMeta().getDisplayName())) {
            

            hasSetBonus.put(p, "hdia");
        }


        if (playerHelm.equals(Drakon.helm.getItemMeta().getDisplayName()) && 
            playerChes.equals(Drakon.ches.getItemMeta().getDisplayName()) && 
            playerLeg.equals(Drakon.leg.getItemMeta().getDisplayName()) && 
            playerBoots.equals(Drakon.boots.getItemMeta().getDisplayName())) {
            

            hasSetBonus.put(p, "hdia");
        }


    }
}
