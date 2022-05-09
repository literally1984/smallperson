package tech.nully.primplug.enchantStuff;

import java.util.List;

import org.bukkit.inventory.ItemStack;

public class enchantMechanic {
    private int getPossibleEncLevels(String enchant) {
        if (enchant.equals("Sharpness") || enchant.equals("Smite") || enchant.equals("Efficiency")) {
            return 5;
        }
    }

    private final String[] possibleSwordEnchants = {};
    public void applyEnchants(ItemStack i) {
        List<String> lore = i.getItemMeta().getLore()
        int indexOf = lore.indexOf(lore.get(lore.size() - 1));

        while (!(lore.get(indexOf).equals(""))) {
            indexOf = indexOf -1;
        }


    }
}