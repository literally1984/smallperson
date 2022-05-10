package tech.nully.primplug.enchantStuff;

import java.util.List;

import org.bukkit.inventory.ItemStack;

public class enchantMechanic {
    private int getPossibleEncLevels(String enchant) {
        if (enchant.equals("Sharpness") || enchant.equals("Smite") || enchant.equals("Efficiency")) {
            return 5;
        } else return 69;
    }

    private final String[] possibleSwordEnchants = {};
    public void applyEnchants(ItemStack i) {
        // gets the Item's lore and gets the line which the rarity is stated
        List<String> lore = i.getItemMeta().getLore();
        int indexOf = lore.indexOf(lore.get(lore.size() - 3));

        // while the current data in indexOf is not blank, interate the line before it
        while (!(lore.get(indexOf).equals(""))) {
            indexOf = indexOf - 1;
        }


    }
}