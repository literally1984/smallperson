package tech.nully.primplug.playerStatManagers.staminaManager;

import java.util.HashMap;
import java.util.List;

import org.bukkit.entity.Player;

public class staminaManager {
    private HashMap<Player, Integer> PlayerMaxStamina = new HashMap<Player, Integer>();
    private HashMap<Player, Integer> PlayerStamina = new HashMap<Player, Integer>();


    // a private method to change both the PlayerMaxStamina and PlayerStamina hashmaps
    private void setStaminaHash(Player pName, int addedStamina) {
        PlayerMaxStamina.put(pName,addedStamina);
        PlayerStamina.put(pName,addedStamina);
    }


    // returns the Stamina of Player
    public int getMaxStamina(Player s) {
        int z = PlayerMaxStamina.get(s);
        return z;
    }

    // adds int to player's Stamina
    public void addStamina(Player playerName, int amnt) {
        PlayerStamina.put(playerName, PlayerStamina.get(playerName) + amnt);
    }


    // takes away int from player's Stamina
    public void subtractStamina(Player playerName, int amnt) {
        PlayerStamina.put(playerName, PlayerStamina.get(playerName) - amnt);
    }

    // a supermethod to set the player's max Stamina by looping through their inventory. only a player needs to be passed in
    public void setMaxStamina(Player p) {
        int index = 0;
        if (p.getInventory().getHelmet() != null) {
            List<String> helmLore = p.getInventory().getHelmet().getItemMeta().getLore();
            for (String s : helmLore) { // example code
                if (s.contains("Stamina: ")) {
                index = helmLore.indexOf(s);
                }
            }
            // gets the amount of Stamina needed to be added (addedStamina)
            String StaminaLine = helmLore.get(index);
            String[] StaminaLineArr = StaminaLine.split(" §7");
            int addedStamina = Integer.parseInt(StaminaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxStamina.containsKey(p))) {
                setStaminaHash(p,0+addedStamina);
            } else if (PlayerMaxStamina.containsKey(p)) {
                setStaminaHash(p, PlayerMaxStamina.get(p) + addedStamina);
            }
        }


        if (p.getInventory().getChestplate() != null) {
            List<String> ChesLore = p.getInventory().getChestplate().getItemMeta().getLore();
            for (String s : ChesLore) { // example code
                if (s.contains("Stamina: ")) {
                index = ChesLore.indexOf(s);
                }
            }
            // gets the amount of Stamina needed to be added (addedStamina)
            String StaminaLine = ChesLore.get(index);
            String[] StaminaLineArr = StaminaLine.split(" §7");
            int addedStamina = Integer.parseInt(StaminaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxStamina.containsKey(p))) {
                setStaminaHash(p,0+addedStamina);
                
            } else if (PlayerMaxStamina.containsKey(p)) {
                setStaminaHash(p, PlayerMaxStamina.get(p) + addedStamina);
            }



        }


        if (p.getInventory().getHelmet() != null) {
            List<String> LegLore = p.getInventory().getLeggings().getItemMeta().getLore();
            for (String s : LegLore) { // example code
                if (s.contains("Stamina: ")) {
                index = LegLore.indexOf(s);
                }
            }
            // gets the amount of Stamina needed to be added (addedStamina)
            String StaminaLine = LegLore.get(index);
            String[] StaminaLineArr = StaminaLine.split(" §7");
            int addedStamina = Integer.parseInt(StaminaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxStamina.containsKey(p))) {
                setStaminaHash(p,0+addedStamina);
                
            } else if (PlayerMaxStamina.containsKey(p)) {
                setStaminaHash(p, PlayerMaxStamina.get(p) + addedStamina);
            }



        }


        if (p.getInventory().getHelmet() != null) {
            List<String> BootsLore = p.getInventory().getBoots().getItemMeta().getLore();
            for (String s : BootsLore) { // example code
                if (s.contains("Stamina: ")) {
                index = BootsLore.indexOf(s);
                }
            }
            // gets the amount of Stamina needed to be added (addedStamina)
            String StaminaLine = BootsLore.get(index);
            String[] StaminaLineArr = StaminaLine.split(" §7");
            int addedStamina = Integer.parseInt(StaminaLineArr[1]);

            // checks if the player already has a spot in the hashmap
            if (!(PlayerMaxStamina.containsKey(p))) {
                setStaminaHash(p,0+addedStamina);
                
            } else if (PlayerMaxStamina.containsKey(p)) {
                setStaminaHash(p, PlayerMaxStamina.get(p) + addedStamina);
            }



        }
    }






    // returns the players Stamina
    public int getStamina(Player p) {
        return PlayerStamina.get(p);
    }
}
