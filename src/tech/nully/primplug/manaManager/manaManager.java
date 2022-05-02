package tech.nully.primplug.manaManager;

import java.util.HashMap;
import java.util.List;

import org.bukkit.entity.Player;

public class manaManager {
    private HashMap<Player, Integer> PlayerMaxMana = new HashMap<Player, Integer>();
    private HashMap<Player, Integer> PlayerMana = new HashMap<Player, Integer>();

    private void setManaHash(Player pName, int addedMana) {
        PlayerMaxMana.put(pName,addedMana);
        PlayerMana.put(pName,addedMana);
    }

    public int getMaxMana(Player s) {
        int z = PlayerMaxMana.get(s);
        return z;
    }

    public void addMana(Player playerName, int amnt) {
        PlayerMana.put(playerName, PlayerMana.get(playerName) + amnt);
    }


    public void subtractMana(Player playerName, int amnt) {
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
            String[] manaLineArr = manaLine.split(" §7");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p))) {
                setManaHash(p,0+addedMana);
            } else if (PlayerMaxMana.containsKey(p)) {
                setManaHash(p, PlayerMaxMana.get(p) + addedMana);
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
            String[] manaLineArr = manaLine.split(" §7");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p))) {
                setManaHash(p,0+addedMana);
                
            } else if (PlayerMaxMana.containsKey(p)) {
                setManaHash(p, PlayerMaxMana.get(p) + addedMana);
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
            String[] manaLineArr = manaLine.split(" §7");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p))) {
                setManaHash(p,0+addedMana);
                
            } else if (PlayerMaxMana.containsKey(p)) {
                setManaHash(p, PlayerMaxMana.get(p) + addedMana);
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
            String[] manaLineArr = manaLine.split(" §7");
            int addedMana = Integer.parseInt(manaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxMana.containsKey(p))) {
                setManaHash(p,0+addedMana);
                
            } else if (PlayerMaxMana.containsKey(p)) {
                setManaHash(p, PlayerMaxMana.get(p) + addedMana);
            }



        }
    }






    
    public int getMana(Player p) {
        return PlayerMaxMana.get(p);
    }





    public void takeMana(Player p, int amnt) {
        PlayerMaxMana.put(p, PlayerMaxMana.get(p) - amnt);
    }
}
