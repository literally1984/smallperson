package tech.nully.primplug.Armor;

import java.util.HashMap;

import org.bukkit.entity.Player;
<<<<<<< HEAD

import tech.nully.primplug.Armor.armorItems.Drakon;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.Armor.armorItems.hardenedDiamond;
import tech.nully.primplug.Armor.armorItems.demigodArmor;

=======
import org.bukkit.inventory.ItemStack;
>>>>>>> b0b0f252e895038c4fb45db9134f1413aeeb34d2

public class setBonuses {
    private HashMap<Player, String> hasSetBonus = new HashMap<Player, String>();


    public void getPlayerSetBonus(Player p) {
        hasSetBonus.get(p);
    }


<<<<<<< HEAD
    public void setPlayerSetBonus(Player p, String value) {
=======
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
>>>>>>> b0b0f252e895038c4fb45db9134f1413aeeb34d2


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

<<<<<<< HEAD
            hasSetBonus.put(p, "drakon");
            return;

        


            // if none of the above set bonuses apply, remove the player's key from the hashMap
        }
        
        if (playerHelm.equals(demigodArmor.helm.getItemMeta().getDisplayName()) &&
            playerChes.equals(demigodArmor.ches.getItemMeta().getDisplayName()) &&
            playerLeg.equals(demigodArmor.leg.getItemMeta().getDisplayName()) &&
            playerBoots.equals(demigodArmor.boots.getItemMeta().getDisplayName())){

            hasSetBonus.put(p, "godly");
            return;
        } 
        
        else {
            if (hasSetBonus.containsKey(p)) {
                hasSetBonus.remove(p);
                return;
            } else {
                return;
=======
                    
                    hasSetBonus.put(p, "demi");
                    return;
>>>>>>> b0b0f252e895038c4fb45db9134f1413aeeb34d2
            }
        }


    }
}
