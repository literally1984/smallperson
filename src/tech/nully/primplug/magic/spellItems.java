package tech.nully.primplug.magic;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import tech.nully.primplug.Armor.baseAttributesAdder;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class spellItems {

    public static void init() {
        makeSpells();
        makeSpellScrolls();
    }

    static baseAttributesAdder b = new baseAttributesAdder();

    public static HashMap<String, ItemStack> spellConverter = new HashMap<String, ItemStack>();

    private static void makeSpells() {
        ItemStack FireballSpell = new ItemStack(Material.FIREBALL);
        ItemMeta FireballMeta = FireballSpell.getItemMeta();

        FireballMeta.setDisplayName(ChatColor.GOLD + "Fireball Spell");
        List<String> FireballItemLore = new ArrayList<>();
        FireballItemLore.add("");
        FireballItemLore.add(ChatColor.GRAY + "Spell Item");
        FireballItemLore.add("");
        FireballItemLore.add(ChatColor.GRAY + "Scales 100% on Magic Damage");
        FireballItemLore.add(ChatColor.RED + "Base Damage:" + ChatColor.GRAY + "6");
        FireballItemLore.add("");
        FireballItemLore.add("Launches a fireball in the direction that you");
        FireballItemLore.add("look at, causing a an explosion.");
        FireballItemLore.add("");
        FireballItemLore.add(b.uncommon() + "UNCOMMON");

        FireballMeta.setLore(FireballItemLore);
        spellConverter.put(FireballMeta.getDisplayName(), FireballSpell);

    }

    private static void makeSpellScrolls() {
        ItemStack FireballScroll = new ItemStack(Material.FIREBALL);
        ItemMeta FireballScrollMeta = FireballScroll.getItemMeta();
        List<String> FireballLore = new ArrayList<String>();

        FireballScrollMeta.setDisplayName("Fireball Scroll");
        FireballLore.add("");
        FireballLore.add(ChatColor.GRAY + "Spell Scroll Item");
        FireballLore.add("");
        FireballLore.add(ChatColor.GRAY + "Scales 100% on Magic Damage");
        FireballLore.add(ChatColor.RED + "Base Damage:" + ChatColor.GRAY + "6");
        FireballLore.add("");
        FireballLore.add(ChatColor.GRAY + "Right Click the air to learn this spell");
        FireballLore.add(ChatColor.GREEN + "Levels needed to learn: 21");
        FireballLore.add("");
        FireballLore.add("Launches a fireball in the direction that you");
        FireballLore.add("look at, causing a an explosion.");
        FireballLore.add("");
        FireballLore.add(b.uncommon() + "UNCOMMON");

        FireballScrollMeta.setLore(FireballLore);



    }
}
