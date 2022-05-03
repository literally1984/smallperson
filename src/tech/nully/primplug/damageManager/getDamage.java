package tech.nully.primplug.damageManager;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;

public class getDamage {
    public int getItemDamage(ItemStack i) {
        List<String> itemLore = i.getItemMeta().getLore();
        int index = 0;
        // Loops through the item's lore
        for (String s : itemLore) {
            if (s.contains("Damage: ")) {
            index = itemLore.indexOf(s);
            }
        }
        // gets the amount of damage
        String damageLine = itemLore.get(index);
        String[] damageLineArr = damageLine.split(" §7");
        int addeddamage = Integer.parseInt(damageLineArr[1]);
        return addeddamage;
    }


    public List<Integer> getPlayerArmorDamage(Player p) {
        List<Integer> armorDamages = new ArrayList<Integer>();

        // Loops through the Player's armor contents
        for (ItemStack i : p.getInventory().getArmorContents()) {

            // Null checker
            if (i == null) {
                continue;
            }

            List<String> armorLore = i.getItemMeta().getLore();
            int index = 0;

            // Loops through the current looped item's lore in order to find the Damage: line
            for (String s : armorLore) {
                if (s.contains("Damage: ")) {
                    // gets the index of the Damage: line
                    index = armorLore.indexOf(s);
                }
            }
            // Finds the Integer value of the damage line's int and puts it in the armorDamages list
            String armorDamage = armorLore.get(index);
            String[] damageLineArr = armorDamage.split(" §7");
            armorDamages.add(Integer.parseInt(damageLineArr[1]));
        }

        return armorDamages;
    }


}
