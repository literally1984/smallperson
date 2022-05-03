package tech.nully.primplug.itemStuff;

import org.bukkit.inventory.ItemStack;


public class rarityObject {
    String ItemRarityy;
    int ItemmaxUpgrades;

    public rarityObject getItemRarity(ItemStack targetItem) {
        String ItemRarity = targetItem.getItemMeta().getLore().get(targetItem.getItemMeta().getLore().size() - 1);
        this.ItemRarityy = ItemRarity;
        return this;
    }

    public rarityObject getMaxUpgrades() {
        int maxUpgrades;
        if (ItemRarityy.toLowerCase().contains("common")) {
            maxUpgrades = 15;
        }

        if (ItemRarityy.toLowerCase().contains("uncommon")) {
            maxUpgrades = 25;
        }

        if (ItemRarityy.toLowerCase().contains("rare")) {
            maxUpgrades = 35;
        }

        if (ItemRarityy.toLowerCase().contains("epic")) {
            maxUpgrades = 45;
        }

        if (ItemRarityy.toLowerCase().contains("legendary")) {
            maxUpgrades = 50;
        }

        if (ItemRarityy.toLowerCase().contains("mythical")) {
            maxUpgrades = 60;
        } else {
            maxUpgrades = 0;
        }

        this.ItemmaxUpgrades = maxUpgrades;
        return this;
    }


}
