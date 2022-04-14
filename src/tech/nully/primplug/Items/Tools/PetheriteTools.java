package tech.nully.primplug.Items.Tools;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class PetheriteTools {
    
    public static ItemStack Sword;

    public static void init() {
        createPetheriteSword();
    }
    private static void createPetheriteSword() {
        // DEFINE THE META -------------
        ItemStack PSword = new ItemStack(Material.IRON_SWORD);
        ItemMeta PSwordMeta = PSword.hasItemMeta() ? PSword.getItemMeta() : Bukkit.getItemFactory().getItemMeta(PSword.getType());


        // SET THE META ----------------
        PSwordMeta.setDisplayName("Petherite Sword");
            // SwordLore
        List<String> Swordlore = new ArrayList<>();
        Swordlore.add("Its like a bootleg Netherite Sword");
        PSwordMeta.setLore(Swordlore);


        PSword.setItemMeta(PSwordMeta);
        Sword = PSword;
    }
}