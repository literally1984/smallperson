package games.bnogocarft.bnogorpg.playerStatManagers.defenseManager;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;

import java.util.HashMap;
import java.util.List;

public class defenseManager {
    // TODO: rework litterally everything REEE need to use NMS anbd NBT tags, refer to https://bukkit.org/threads/how-do-i-add-attributes-to-a-itemstack.404299/
    HashMap<Player, Integer> Playerdefense = new HashMap<Player, Integer>();
    HashMap<Player, Integer> PlayerArmorDamage = new HashMap<Player, Integer>();

    public int getArmorDamage(Player p) {
        int armorDamage = PlayerArmorDamage.get(p);
        return armorDamage;
    }

    public boolean checkDefMapContains(Player key) {
        boolean bool = Playerdefense.containsKey(key);
        return bool;
    }

    public boolean checkAtkMapContains(Player key) {
        boolean bool = PlayerArmorDamage.containsKey(key);
        return bool;
    }

    public void setArmorDamage(Player p) {
        // Loops throught the Player's inventory
        for (ItemStack i : p.getInventory().getArmorContents()) {
            if (i != null) {

                List<String> helmLore = i.getItemMeta().getLore();
                int index = 0;

                // loops through the loop-items lore to find the index of the line that contains "Damage: "
                for (String s : helmLore) { // example code
                    if (s.contains("Damage: ")) {
                        index = helmLore.indexOf(s);
                    }
                }
                // gets the amount of defense needed to be added by seperating the damage line into 2 parts and getting the 2nd part
                // which is always an int
                String defenseLine = helmLore.get(index);
                String[] defenseLineArr = defenseLine.split(" ");
                int addeddefense = Integer.parseInt(defenseLineArr[1]);
    
                // checks if the player already has a spot in the hashmap
                if (!(PlayerArmorDamage.containsKey(p))) {
                    PlayerArmorDamage.put(p,0+addeddefense);
                    
                } else if (PlayerArmorDamage.containsKey(p)) {
                    PlayerArmorDamage.put(p, PlayerArmorDamage.get(p) + addeddefense);
                }
            }
        }
    }





    public void setMaxdefense(Player p) {
        for (ItemStack i : p.getInventory().getArmorContents()) {
            if (i != null) {
                List<String> helmLore = i.getItemMeta().getLore();
                int index = 0;
                for (String s : helmLore) { // example code
                    if (s.contains("Defense: ")) {
                        index = helmLore.indexOf(s);
                    }
                }
                // gets the amount of defense needed to be added (addeddefense)
                String defenseLine = helmLore.get(index);
                String[] defenseLineArr = defenseLine.split(" ");
                int addeddefense = Integer.parseInt(defenseLineArr[1]);
    
                // checks if the player already has a spot in the hashmap
                if (!(Playerdefense.containsKey(p))) {
                    Playerdefense.put(p,0+addeddefense);
                    
                } else if (Playerdefense.containsKey(p)) {
                    Playerdefense.put(p, Playerdefense.get(p) + addeddefense);
                }
            }
        }
    }






    // gets player defense from hashmap
    public int getdefense(Player p) {
        return Playerdefense.get(p);
    }





    public void takedefense(Player p, int amnt) {
        Playerdefense.put(p, Playerdefense.get(p) - amnt);
    }
}
