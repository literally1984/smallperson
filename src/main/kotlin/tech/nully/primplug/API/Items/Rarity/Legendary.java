package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Legendary {
    private baseAdder base = new baseAdder();

    private String name = base.legendary();

    private int maxUpgrades = 20;

    private int addedDamage = 4;

    public String getName() {
        return this.name;
    }

    public int getMaxUpgrades() {
        return this.maxUpgrades;
    }

    public int getAddedDamage() {
        return this.addedDamage;
    }
}
