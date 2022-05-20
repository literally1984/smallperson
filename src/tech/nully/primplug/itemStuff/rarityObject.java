package tech.nully.primplug.itemStuff;

import org.bukkit.inventory.ItemStack;


public class rarityObject {
    private int maxUpgrades;
    private String name;

    public rarityObject(ItemStack i) {
        this.name = i.getItemMeta().getLore().get(i.getItemMeta().getLore().size() - 1);
        i
    }

    public int getMaxUpgrades() {
        return this.maxUpgrades;
    }

    public String getName() {
        return this.name;
    }


}
