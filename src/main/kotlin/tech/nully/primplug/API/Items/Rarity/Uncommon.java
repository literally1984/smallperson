package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Uncommon {

    private baseAdder base = new baseAdder();

    private String name = base.uncommon();

    private int maxUpgrades = 5;

    private int addedDamage = 1;

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
