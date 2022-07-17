package games.bnogocarft.bnogorpg.API.Items.Rarity;

import games.bnogocarft.bnogorpg.Armor.baseAdder;

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
