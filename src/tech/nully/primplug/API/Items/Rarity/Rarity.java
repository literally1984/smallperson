package tech.nully.primplug.API.Items.Rarity;

import tech.nully.primplug.Armor.baseAdder;

public class Rarity {
    private String rarity;

    private int maxUpgrades = 0;

    private int addedDamage = 0;

    private String Name;

    private String DisplayName;

    public Rarity(String rarity) {
        this.rarity = rarity;
        switch (rarity) {
            case "Mythical":
                this.maxUpgrades = 12;
                this.addedDamage = 5;
                this.DisplayName = baseAdder.mythical();
            case "Legendary":
                this.maxUpgrades = 10;
                this.addedDamage = 4;
                this.DisplayName = baseAdder.legendary();
            case "Epic":
                this.maxUpgrades = 8;
                this.addedDamage = 3;
                this.DisplayName = baseAdder.epic();
            case "Rare":
                this.maxUpgrades = 6;
                this.addedDamage = 2;
                this.DisplayName = baseAdder.rare();
            case "Uncommon":
                this.maxUpgrades = 4;
                this.addedDamage = 1;
                this.DisplayName = baseAdder.uncommon();
            case "Common":
                this.maxUpgrades = 2;
                this.addedDamage = 0;
                this.DisplayName = baseAdder.common();
        }
    }

    public int GetMaxUpgrades() {
        return this.maxUpgrades;
    }

    public int GetAddedDamage() {
        return this.addedDamage;
    }

    public String getRarity() {
        return this.Name;
    }

    public String getDisplayName() {
        return this.DisplayName;
    }
}
