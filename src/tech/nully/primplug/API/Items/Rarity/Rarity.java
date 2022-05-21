package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Rarity {
    private String rarity;

    private baseAdder base = new baseAdder();

    private int maxUpgrades = 0;

    private int addedDamage = 0;

    public Rarity(String rarity) {
        this.rarity = rarity
    }

    public int GetMaxUpgrades() {}
}
