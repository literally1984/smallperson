package tech.nully.primplug.itemStuff;

import org.bukkit.inventory.ItemStack;


public class rarityObject {

    public int getMaxUpgrades(ItemStack targetItem) {
        int maxUpgrades;
        String ItemRarity = targetItem.getItemMeta().getLore().get(targetItem.getItemMeta().getLore().size() - 1);
        if (ItemRarity.toLowerCase().contains("common")) {
            maxUpgrades = 15;
        }

        if (ItemRarity.toLowerCase().contains("uncommon")) {
            maxUpgrades = 25;
        }

        if (ItemRarity.toLowerCase().contains("rare")) {
            maxUpgrades = 35;
        }

        if (ItemRarity.toLowerCase().contains("epic")) {
            maxUpgrades = 45;
        }

        if (ItemRarity.toLowerCase().contains("legendary")) {
            maxUpgrades = 50;
        }

        if (ItemRarity.toLowerCase().contains("mythical")) {
            maxUpgrades = 60;
        } else {
            maxUpgrades = 0;
        }

        return maxUpgrades ;
    }


}
