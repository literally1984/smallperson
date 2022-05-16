package tech.nully.primplug.Tools;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import tech.nully.primplug.Armor.baseAttributesAdder;

import java.util.List;

public class    zeusBolt {
    public static ItemStack zeusThunderBolt;

    public static void createZeusBolt() {
        ItemStack zeusBolt = new ItemStack(Material.BLAZE_ROD);
        ItemMeta zeusMeta = zeusBolt.getItemMeta();
        baseAttributesAdder b = new baseAttributesAdder();
        List<String> zeusLore = b.addAttributes(zeusBolt, 14, 7, 6, 9, 20, 20);

        zeusMeta.setDisplayName("Thunderbolt of Zeus");
        zeusLore.add("");
        zeusLore.add(ChatColor.GOLD + "" + ChatColor.ITALIC + "Celestial Artifact");
        zeusLore.add("");
        zeusLore.add(b.ability() + "Passive Ability: Zeus' Wrath");
        zeusLore.add(ChatColor.GRAY + "When you strike an opponent with this weapon,");
        zeusLore.add(ChatColor.GRAY + "a lightning bolt followed by a 1 block explosion");
        zeusLore.add(ChatColor.GRAY + "will hit the enemy dealing Physical damage");
        zeusLore.add("");
        zeusLore.add(b.ability() + "Interact Ability: Divine Retribution");
        zeusLore.add(ChatColor.GRAY + "Shift and right click while looking at the sky");
        zeusLore.add(ChatColor.GRAY + "to summon a powerful lightning bolt at your location");
        zeusLore.add(ChatColor.GRAY + "which creates a massive explosion");
        zeusLore.add("");
        zeusLore.add(b.lore() + "A thunderbolt rumored to have been brought down");
        zeusLore.add(b.lore() + "from the heavens by a legendary warrior who defeated");
        zeusLore.add(b.lore() + "the thunder god");
        zeusLore.add("");
        zeusLore.add(b.mythical() + "MYTHICAL");

        zeusThunderBolt = zeusBolt;
    }
}
