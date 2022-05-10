package tech.nully.primplug.enchantStuff;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import org.bukkit.inventory.ItemStack;

import javafx.util.Pair;
import tech.nully.primplug.baseMethods;

public class enchantMechanic {
    // makes a method that prints out rick roll lyrics
    baseMethods b = new baseMethods();

    private int getPossibleEncLevels(String enchant) {
        if (enchant.equals("Sharpness") || enchant.equals("Smite") || enchant.equals("Efficiency")) {
            return 5;
        } else return 69;
    }
    private final String[] possibleSwordEnchants = {"Sharpness", "Smite",};
    private static HashMap<String, Integer> enchantLevels = new HashMap<String, Integer>();

    public static void createEnchantHashMap() {
        enchantLevels.put("Sharpness", 5);
        enchantLevels.put("Smite", 5);
        enchantLevels.put("Bane of Arthropods", 5);
        enchantLevels.put("Fortune", 3);
        enchantLevels.put("Efficiency", 5);
        enchantLevels.put("Fire Aspect", 2);
        enchantLevels.put("Power", 5);
        enchantLevels.put("Blast Protection", 5);
        enchantLevels.put("Protection", 5);
        enchantLevels.put("Projectile Protection", 5);
        enchantLevels.put("Sharpness", 5);
        enchantLevels.put("Feather Falling", 4);
        enchantLevels.put("Sharpness", 5);
    }

    


    public void applyEnchants(ItemStack item) {
        // gets the Item's lore and gets the line which the rarity is stated
        List<String> lore = item.getItemMeta().getLore();
        Random rand = new Random();
        int enchantIndex = rand.nextInt(possibleSwordEnchants.length - 1);

        // makes a list of the needed enchants to be applied
        List<String> neededEnchants = new ArrayList<String>();
        for (int i = 0; i < rand.nextInt(4); i++) {
            neededEnchants.add(possibleSwordEnchants[enchantIndex]);
        }

        // checks if the item is encahnted
        if (checkIsEnchanted(item).getKey()) {
            int indexOfFirstEnchant = checkIsEnchanted(item).getValue();

            // checks if item is weapon
            if (b.checkIsWeapon(item)) {
                for (String ench : neededEnchants) {
                    lore.set(indexOfFirstEnchant, lore.get(indexOfFirstEnchant) + "," + ench);
                }
            }
        } else {
            int indexOf = lore.indexOf(lore.get(lore.size() - 3));

            // while the current data in indexOf is not blank, interate the line before it
            while (!(lore.get(indexOf).equals(""))) {
                indexOf = indexOf - 1;
            }
            int enchant = rand.nextInt(possibleSwordEnchants.length - 1);
            for (int i = 0; i < rand.nextInt(4); i++) {
                if (b.checkIsWeapon(item)) {
                    lore.add(indexOf, possibleSwordEnchants[enchant]);
                }
            }
        lore.add(indexOf, "");
        }
    }


    public Pair<Boolean, Integer> checkIsEnchanted(ItemStack item) {
        List<String> lore = new ArrayList<String>();
        if (b.checkIsWeapon(item)) {
            for (String s : lore) {
                for (String ench : possibleSwordEnchants) {
                    if (s.contains(ench)) {
                        return new Pair<Boolean,Integer>(true, lore.indexOf(s));
                    }
                }
            }
        }
        return new Pair<Boolean,Integer>(false, null);
    }


}