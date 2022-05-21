package tech.nully.primplug.playerStatManagers.manaManager;

import org.bukkit.entity.Player;
import tech.nully.primplug.API.PrimItems.PrimPlayer;

import java.util.List;

public class manaManager {

    // a supermethod to set the player's max mana by looping through their inventory. only a player needs to be passed in
    public void setMaxMana(Player p) {
        PrimPlayer primPlayer = PrimPlayer.getPrimPlayer(p);

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
            primPlayer.setMaxMana(primPlayer.getMaxMana() + addedMana);
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
            primPlayer.setMaxMana(primPlayer.getMaxMana() + addedMana);
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
            primPlayer.setMaxMana(primPlayer.getMaxMana() + addedMana);
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
            primPlayer.setMaxMana(primPlayer.getMaxMana() + addedMana);
        }
    }
}