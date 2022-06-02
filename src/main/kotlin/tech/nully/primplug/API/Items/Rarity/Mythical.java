package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Mythical {
    private baseAdder base = new baseAdder();

    private String name = base.mythical();

    private int maxUpgrades = 25;

    private int addedDamage = 5;

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
