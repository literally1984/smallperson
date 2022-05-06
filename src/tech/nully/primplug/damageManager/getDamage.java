package tech.nully.primplug.damageManager;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

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

    public void setDamage(ItemStack i, int amnt) {
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
        int epikReturn = addeddamage + amnt;
        String newDamage = "Damage: " + epikReturn;
        itemLore.add(index, newDamage);
    }
}
