package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Rare {

    private baseAdder base = new baseAdder();

    private String name = base.mythical();

    private int maxUpgrades = 10;

    private int addedDamage = 2;

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
