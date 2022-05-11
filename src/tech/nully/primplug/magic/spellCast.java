package tech.nully.primplug.magic;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class spellCast {

    private static List<String> fireballLore = new ArrayList<String>();
    private static List<String> explosionLore = new ArrayList<String>();
    private static List<String> thousandCutsLore = new ArrayList<String>();
    private static List<String> ArrowRainLore = new ArrayList<String>();
    private static List<String> meteorShowerLore = new ArrayList<String>();
    
    private static ItemStack fireballSpell;

    public boolean IsSpell(ItemStack item) {
        String dispName = item.getItemMeta().getDisplayName();
        if (fireballSpell.getItemMeta().getLore() == fireballLore) {
            return true;
        }
        return false;
    }

    public void createSpells() {
        ItemStack fireball = new ItemStack(Material.FIREBALL);
        ItemMeta fireballMeta = fireball.getItemMeta();

        fireballMeta.setDisplayName(ChatColor.GOLD + "FIREBALL");
        fireballLore.add(ChatColor.YELLOW + "Right click to cast a fireball spell");

    }
}
