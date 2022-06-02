package tech.nully.primplug.formChnage;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class formChnageItems {
    public static ItemStack Shard;

    public static void init() {
        createSkill1();
    }
    // !  Obsidian
    private static void createSkill1() {
        // DEFINE THE META -------------
        ItemStack S1 = new ItemStack(Material.DIAMOND);
        ItemMeta S1Meta = S1.getItemMeta();


        // SET THE META ----------------
        S1Meta.setDisplayName("Skill 1");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add(ChatColor.YELLOW + "Your first skill");
        Helmlore.add(ChatColor.YELLOW + "Bind it to your talisman, armor, or other");
        Helmlore.add(ChatColor.YELLOW + "item to be able to use it in battle form!");
        S1Meta.setLore(Helmlore);

        S1Meta.addEnchant(Enchantment.THORNS, 1, false);

        S1.setItemMeta(S1Meta);
        Shard = S1;
    }
}
