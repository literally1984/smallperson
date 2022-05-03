package tech.nully.primplug.Armor;

import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.itemStuff.rarityObject;

public class baseAttributesAdder {
    public void addAttributes(ItemStack item, int damage, int defense, int mana, int stamina) {
        List<String> itemLore = item.getItemMeta().getLore();
        itemLore.add(ChatColor.RED + "Damage: " + ChatColor.GRAY + damage);
        itemLore.add(ChatColor.GREEN + "Defense: " + ChatColor.GRAY + defense);
        itemLore.add(ChatColor.AQUA + "Mana: " + ChatColor.GRAY + mana);
        itemLore.add(ChatColor.GOLD + "Stamina: " + ChatColor.GRAY + stamina);
        rarityObject r = new rarityObject();
        r.getItemRarity(item).getMaxUpgrades();
    }
}
