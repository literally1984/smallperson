package tech.nully.primplug.defenseManager;

import java.util.HashMap;
import java.util.List;

import org.bukkit.entity.Player;

public class defenseListener {
    HashMap<String, Integer> Playerdefense = new HashMap<String, Integer>();

    public void setMaxdefense(Player p) {
        int index = 0;
        if ((!(p.getInventory().getHelmet() == null))) {
            List<String> helmLore = p.getInventory().getHelmet().getItemMeta().getLore();
            for (String s : helmLore) { // example code
                if (s.contains("defense: ")) {
                index = helmLore.indexOf(s);
                }
            }
            // gets the amount of defense needed to be added (addeddefense)
            String defenseLine = helmLore.get(index);
            String[] defenseLineArr = defenseLine.split(" ");
            int addeddefense = Integer.parseInt(defenseLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(Playerdefense.containsKey(p.getDisplayName()))) {
                Playerdefense.put(p.getDisplayName(),0+addeddefense);
                
            } else if (Playerdefense.containsKey(p.getDisplayName())) {
                Playerdefense.put(p.getDisplayName(), Playerdefense.get(p.getDisplayName() + addeddefense));
            }
        }


        if ((!(p.getInventory().getChestplate() == null))) {
            List<String> ChesLore = p.getInventory().getChestplate().getItemMeta().getLore();
            for (String s : ChesLore) { // example code
                if (s.contains("defense: ")) {
                index = ChesLore.indexOf(s);
                }
            }
            // gets the amount of defense needed to be added (addeddefense)
            String defenseLine = ChesLore.get(index);
            String[] defenseLineArr = defenseLine.split(" ");
            int addeddefense = Integer.parseInt(defenseLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(Playerdefense.containsKey(p.getDisplayName()))) {
                Playerdefense.put(p.getDisplayName(),0+addeddefense);
                
            } else if (Playerdefense.containsKey(p.getDisplayName())) {
                Playerdefense.put(p.getDisplayName(), Playerdefense.get(p.getDisplayName() + addeddefense));
            }



        }


        if ((!(p.getInventory().getHelmet() == null))) {
            List<String> LegLore = p.getInventory().getLeggings().getItemMeta().getLore();
            for (String s : LegLore) { // example code
                if (s.contains("defense: ")) {
                index = LegLore.indexOf(s);
                }
            }
            // gets the amount of defense needed to be added (addeddefense)
            String defenseLine = LegLore.get(index);
            String[] defenseLineArr = defenseLine.split(" ");
            int addeddefense = Integer.parseInt(defenseLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(Playerdefense.containsKey(p.getDisplayName()))) {
                Playerdefense.put(p.getDisplayName(),0+addeddefense);
                
            } else if (Playerdefense.containsKey(p.getDisplayName())) {
                Playerdefense.put(p.getDisplayName(), Playerdefense.get(p.getDisplayName() + addeddefense));
            }



        }


        if ((!(p.getInventory().getHelmet() == null))) {
            List<String> BootsLore = p.getInventory().getBoots().getItemMeta().getLore();
            for (String s : BootsLore) { // example code
                if (s.contains("defense: ")) {
                index = BootsLore.indexOf(s);
                }
            }
            // gets the amount of defense needed to be added (addeddefense)
            String defenseLine = BootsLore.get(index);
            String[] defenseLineArr = defenseLine.split(" ");
            int addeddefense = Integer.parseInt(defenseLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(Playerdefense.containsKey(p.getDisplayName()))) {
                Playerdefense.put(p.getDisplayName(),0+addeddefense);
                
            } else if (Playerdefense.containsKey(p.getDisplayName())) {
                Playerdefense.put(p.getDisplayName(), Playerdefense.get(p.getDisplayName() + addeddefense));
            }



        }
    }






    // gets player defense from hashmap
    public int getdefense(Player p) {
        return Playerdefense.get(p.getDisplayName());
    }





    public void takedefense(Player p, int amnt) {
        Playerdefense.put(p.getDisplayName(), Playerdefense.get(p.getDisplayName()) - amnt);
    }
}
