package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Common {

    private baseAdder base = new baseAdder();

    private String name = base.common();

    private int maxUpgrades = 0;

    private int addedDamage = 0;

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
