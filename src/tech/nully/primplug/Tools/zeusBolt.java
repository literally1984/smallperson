package tech.nully.primplug.Tools;

import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Armor.baseAttributesAdder;

public class zeusBolt {
    public static void createZeusBolt() {
        ItemStack zeusBolt = new ItemStack(Material.BLAZE_ROD);
        ItemMeta zeusMeta = zeusBolt.getItemMeta();
        List<String> zeusLore = zeusMeta.getLore();

        baseAttributesAdder b = new baseAttributesAdder();


        zeusMeta.setDisplayName("Thunderbolt of Zeus");
        zeusLore.add("");
        b.addAttributes(zeusBolt, 16, 3, 35, 35);
        zeusLore.add("");
        zeusLore.add(b.ability() + "Passive Ability: Zeus' Wrath");
        zeusLore.add(ChatColor.GRAY + "When you strike an opponent with this");
        zeusLore.add(ChatColor.GRAY + "weapon, a lightning bolt followed by a");
        zeusLore.add(ChatColor.GRAY + "1 block wide explosion dealing high damage");
        zeusLore.add("");
        zeusLore.add(b.ability() + "Interact Ability: Divine Retribution");
        zeusLore.add(ChatColor.GRAY + "When you Shift and right clich while");
        zeusLore.add(ChatColor.GRAY + "looking at the sky, a powerful lighting");
        zeusLore.add(ChatColor.GRAY + "bolt strikes at your location and creates");
        zeusLore.add(ChatColor.GRAY + "a powerful explosion");
        zeusLore.add("");
        zeusLore.add(b.lore() + "A thunderbolt rumored to have been");
        zeusLore.add(b.lore() + "brought upon this world by the god of");
        zeusLore.add(b.lore() + "thunder himself and retains its old ");
        zeusLore.add(b.lore() + "master's abilities...");
        zeusLore.add("");
        zeusLore.add(b.mythical() + "MYTHICAL");


    }
}
