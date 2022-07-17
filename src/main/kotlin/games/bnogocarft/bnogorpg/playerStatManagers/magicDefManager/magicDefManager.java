package games.bnogocarft.bnogorpg.playerStatManagers.magicDefManager;

import java.util.HashMap;
import java.util.List;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;

public class magicDefManager {
    HashMap<Player, Integer> PlayerMagicDef = new HashMap<Player, Integer>();
    HashMap<Player, Integer> PlayerArmorMagicDamage = new HashMap<Player, Integer>();

    public int getArmorMagicDamage(Player p) {
        int armorMagicDamage = PlayerArmorMagicDamage.get(p);
        return armorMagicDamage;
    }

    public boolean checkDefMapContains(Player key) {
        boolean bool = PlayerMagicDef.containsKey(key);
        return bool;
    }

    public boolean checkAtkMapContains(Player key) {
        boolean bool = PlayerArmorMagicDamage.containsKey(key);
        return bool;
    }

    public void setArmorMagicDamage(Player p) {
        // Loops throught the Player's inventory
        for (ItemStack i : p.getInventory().getArmorContents()) {
            if (i != null) {

                List<String> helmLore = i.getItemMeta().getLore();
                int index = 0;

                // loops through the loop-items lore to find the index of the line that contains "Damage: "
                for (String s : helmLore) { // example code
                    if (s.contains("Magic Damage:")) {
                        index = helmLore.indexOf(s);
                    }
                }
                // gets the amount of MagicDef needed to be added by seperating the damage line into 2 parts and getting the 2nd part
                // which is always an int
                String MagicDefLine = helmLore.get(index);
                String[] MagicDefLineArr = MagicDefLine.split(" ");
                int addedMagicDef = Integer.parseInt(MagicDefLineArr[1]);
    
                // checks if the player already has a spot in the hashmap
                if (!(PlayerArmorMagicDamage.containsKey(p))) {
                    PlayerArmorMagicDamage.put(p,0+addedMagicDef);
                    
                } else if (PlayerArmorMagicDamage.containsKey(p)) {
                    PlayerArmorMagicDamage.put(p, PlayerArmorMagicDamage.get(p) + addedMagicDef);
                }
            }
        }
    }





    public void setMaxMagicDef(Player p) {
        for (ItemStack i : p.getInventory().getArmorContents()) {
            if (i != null) {
                List<String> helmLore = i.getItemMeta().getLore();
                int index = 0;
                for (String s : helmLore) { // example code
                    if (s.contains("Magic Defense: ")) {
                        index = helmLore.indexOf(s);
                    }
                }
                // gets the amount of MagicDef needed to be added (addedMagicDef)
                String MagicDefLine = helmLore.get(index);
                String[] MagicDefLineArr = MagicDefLine.split(" ");
                int addedMagicDef = Integer.parseInt(MagicDefLineArr[1]);
    
                // checks if the player already has a spot in the hashmap
                if (!(PlayerMagicDef.containsKey(p))) {
                    PlayerMagicDef.put(p,0+addedMagicDef);
                    
                } else if (PlayerMagicDef.containsKey(p)) {
                    PlayerMagicDef.put(p, PlayerMagicDef.get(p) + addedMagicDef);
                }
            }
        }
    }






    // gets player MagicDef from hashmap
    public int getMagicDef(Player p) {
        return PlayerMagicDef.get(p);
    }





    public void takeMagicDef(Player p, int amnt) {
        PlayerMagicDef.put(p, PlayerMagicDef.get(p) - amnt);
    }
}
