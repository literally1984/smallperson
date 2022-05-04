package tech.nully.primplug.Armor;

import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.itemStuff.rarityObject;

public class baseAttributesAdder {
    public void addAttributes(ItemStack item, int damage, int defense, int mana, int stamina) {
        List<String> itemLore = item.getItemMeta().getLore();
        itemLore.add(ChatColor.GRAY + "Damage: " + ChatColor.RED + damage);
        itemLore.add(ChatColor.GRAY + "Defense: " + ChatColor.GREEN+ defense);
        itemLore.add(ChatColor.GRAY + "Mana: " + ChatColor.AQUA + mana);
        itemLore.add(ChatColor.GRAY + "Stamina: " + ChatColor.GOLD + stamina);
        rarityObject r = new rarityObject();
        int maxUpgrades = r.getMaxUpgrades(item);
        itemLore.add(ChatColor.GRAY + "----" + ChatColor.WHITE + "0/" + maxUpgrades + ChatColor.GRAY + "----");
        
    }
}
