package tech.nully.primplug.manaManager;

import java.util.HashMap;
import java.util.List;

import org.bukkit.entity.Player;

public class manaManager {
    private HashMap<String, Integer> PlayerMaxMana = new HashMap<String, Integer>();
    private HashMap<String, Integer> PlayerMana = new HashMap<String, Integer>();

    private void setManaHash(String pName, int addedMana) {
        PlayerMaxMana.put(pName,addedMana);
        PlayerMana.put(pName,addedMana);
    }

    public int getMaxMana(String s) {
        int z = PlayerMaxMana.get(s);
        return z;
    }

    public void addMana(String playerName, int amnt) {
        PlayerMana.put(playerName, PlayerMana.get(playerName) + amnt);
    }


    public void subtractMana(String playerName, int amnt) {
        PlayerMana.put(playerName, PlayerMana.get(playerName) - amnt);
    }


    public void setMaxMana(Player p) {
        int index = 0;
        if (p.getInventory().getHelmet() != null) {
            List<String> helmLore = p.getInventory().getHelmet().getItemMeta().getLore();
            for (String s : helmLore) { // example code
                if (s.contains("Mana: ")) {
                index = helmLore.indexOf(s);
                }
            }
            // gets the amount of mana needed to be added (addedMana)
            String manaLine = helmLore.get(index);
            String[] manaLineArr = manaLine.split(" ");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p.getDisplayName()))) {
                setManaHash(p.getDisplayName(),0+addedMana);
                
            } else if (PlayerMaxMana.containsKey(p.getDisplayName())) {
                setManaHash(p.getDisplayName(), PlayerMaxMana.get(p.getDisplayName() + addedMana));
            }
        }


        if (p.getInventory().getChestplate() != null) {
            List<String> ChesLore = p.getInventory().getChestplate().getItemMeta().getLore();
            for (String s : ChesLore) { // example code
                if (s.contains("Mana: ")) {
                index = ChesLore.indexOf(s);
                }
            }
            // gets the amount of mana needed to be added (addedMana)
            String manaLine = ChesLore.get(index);
            String[] manaLineArr = manaLine.split(" ");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p.getDisplayName()))) {
                setManaHash(p.getDisplayName(),0+addedMana);
                
            } else if (PlayerMaxMana.containsKey(p.getDisplayName())) {
                setManaHash(p.getDisplayName(), PlayerMaxMana.get(p.getDisplayName() + addedMana));
            }



        }


        if (p.getInventory().getHelmet() != null) {
            List<String> LegLore = p.getInventory().getLeggings().getItemMeta().getLore();
            for (String s : LegLore) { // example code
                if (s.contains("Mana: ")) {
                index = LegLore.indexOf(s);
                }
            }
            // gets the amount of mana needed to be added (addedMana)
            String manaLine = LegLore.get(index);
            String[] manaLineArr = manaLine.split(" ");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p.getDisplayName()))) {
                setManaHash(p.getDisplayName(),0+addedMana);
                
            } else if (PlayerMaxMana.containsKey(p.getDisplayName())) {
                setManaHash(p.getDisplayName(), PlayerMaxMana.get(p.getDisplayName() + addedMana));
            }



        }


        if (p.getInventory().getHelmet() != null) {
            List<String> BootsLore = p.getInventory().getBoots().getItemMeta().getLore();
            for (String s : BootsLore) { // example code
                if (s.contains("Mana: ")) {
                index = BootsLore.indexOf(s);
                }
            }
            // gets the amount of mana needed to be added (addedMana)
            String manaLine = BootsLore.get(index);
            String[] manaLineArr = manaLine.split(" ");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p.getDisplayName()))) {
                setManaHash(p.getDisplayName(),0+addedMana);
                
            } else if (PlayerMaxMana.containsKey(p.getDisplayName())) {
                setManaHash(p.getDisplayName(), PlayerMaxMana.get(p.getDisplayName() + addedMana));
            }



        }
    }






    
    public int getMana(String p) {
        return PlayerMaxMana.get(p);
    }





    public void takeMana(Player p, int amnt) {
        PlayerMaxMana.put(p.getDisplayName(), PlayerMaxMana.get(p.getDisplayName()) - amnt);
    }
}
