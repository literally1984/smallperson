package tech.nully.primplug.formChnage;

import java.util.HashMap;

import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

public class formChanger {
    public HashMap<String, Boolean> playerIsInBattleMode = new HashMap<String, Boolean>();
    public HashMap<String, ItemStack[]> playerinv = new HashMap<String, ItemStack[]>();
    public void formChange(Player p) {
        String lowerCaseWeapon = p.getItemInHand().getItemMeta().getDisplayName().toLowerCase();
        if (playerIsInBattleMode.get(p.getDisplayName()) == false) {
            if (lowerCaseWeapon.contains("sword") || lowerCaseWeapon.contains("blade")) {
                ItemStack playerWeapon = p.getItemInHand();
                ItemStack[] playerHotbar = 
                {p.getInventory().getItem(0), 
                p.getInventory().getItem(1), 
                p.getInventory().getItem(2), 
                p.getInventory().getItem(3), 
                p.getInventory().getItem(4), 
                p.getInventory().getItem(5), 
                p.getInventory().getItem(6), 
                p.getInventory().getItem(7), 
                p.getInventory().getItem(8)};

                playerinv.put(p.getDisplayName(), playerHotbar);

                Inventory playerInv = p.getInventory();
                playerInv.setItem(0, playerWeapon);
                playerIsInBattleMode.put(p.getDisplayName(), true);


            }
        } else {
            for (int i = 0; i<9; i++) {
                p.getInventory().setItem(i, playerinv.get(p.getDisplayName())[i]);
            }
        }


    }
}
