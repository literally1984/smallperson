package tech.nully.primplug.Armor;

import org.bukkit.ChatColor;
import org.bukkit.inventory.ItemStack;
import tech.nully.primplug.itemStuff.rarityObject;

import java.util.ArrayList;
import java.util.List;

public class baseAttributesAdder {
    public List<String> addAttributes(ItemStack item, int damage, int magicDmg, int defense, int magicDef, int mana, int stamina) {
        List<String> itemLore = new ArrayList<String>();
        itemLore.add("");
        itemLore.add(ChatColor.GRAY + "Damage: " + ChatColor.RED + "" +damage);
        itemLore.add(ChatColor.GRAY + "Magic DMG: " + ChatColor.DARK_PURPLE + "" +magicDmg);
        itemLore.add(ChatColor.GRAY + "Defense: " + ChatColor.GREEN + "" + defense);
        itemLore.add(ChatColor.GRAY + "Magic DEF: " + ChatColor.LIGHT_PURPLE + "" + magicDef);
        itemLore.add(ChatColor.GRAY + "Mana: " + ChatColor.AQUA + "" + mana);
        itemLore.add(ChatColor.GRAY + "Stamina: " + ChatColor.GOLD + "" + stamina);
        rarityObject r = new rarityObject();
        int maxUpgrades = r.getMaxUpgrades(item);
        itemLore.add(ChatColor.GRAY + "----" + ChatColor.WHITE + "0/" + maxUpgrades + ChatColor.GRAY + "----");
        item.getItemMeta().setLore(itemLore);
        return itemLore;
    }

    public String lore() {
        String epikReturn = ChatColor.GRAY + "" + ChatColor.ITALIC;
        return epikReturn;
    }

    public String ability() {
        String epikReturn = ChatColor.YELLOW + "" + ChatColor.BOLD;
        return epikReturn;
    }

    public String common() {
        String epikReturn = ChatColor.GRAY + "" + ChatColor.BOLD;
        return epikReturn;
    }

    public String uncommon() {
        String epikReturn = ChatColor.GREEN+ "" + ChatColor.BOLD;
        return epikReturn;
    }

    public String rare() {
        String epikReturn = ChatColor.BLUE + "" + ChatColor.BOLD;
        return epikReturn;
    }

    public String epic() {
        String epikReturn = ChatColor.DARK_PURPLE+ "" + ChatColor.BOLD;
        return epikReturn;
    }

    public String legendary() {
        String epikReturn = ChatColor.GOLD + "" + ChatColor.BOLD;
        return epikReturn;
    }

    public String mythical() {
        String epikReturn = ChatColor.DARK_RED + "" + ChatColor.BOLD;
        return epikReturn;
    }
}
