package tech.nully.primplug.API.Items.Rarity;

import org.bukkit.inventory.ItemStack;

public class Rarity {
    private static Common common = new Common();
    private static Uncommon uncommon = new Uncommon();
    private static Rare rare = new Rare();
    private static Epic epic = new Epic();
    private static Legendary legendary = new Legendary();
    private static Mythical mythical = new Mythical();
    public static Common Common() {
        return common;
    }

    public static Uncommon Uncommon() {
        return uncommon;
    }

    public static Rare Rare() {
        return rare;
    }

    public static Epic Epic() {
        return epic;
    }

    public static Legendary Legendary() {
        return legendary;
    }

    public static Mythical Mythical() {
        return Mythical;
    }

    public static Object getRarity(ItemStack i) {
        return Common;
    }
}
