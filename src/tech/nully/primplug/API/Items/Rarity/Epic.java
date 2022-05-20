package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Epic {

    private baseAdder base = new baseAdder();

    private String name = base.epic();

    private int maxUpgrades = 15;

    private int addedDamage = 3;

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
