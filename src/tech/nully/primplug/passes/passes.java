package tech.nully.primplug.passes;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class passes {

    public static ItemStack IDIppedPass;

    public static void init() {
        createIDppedPass();
    }

    private static void createIDppedPass() {
        // DEFINE THE META -------------
        ItemStack IDIpped = new ItemStack(Material.PAPER);
        ItemMeta IDIppedMeta = IDIpped.hasItemMeta() ? IDIpped.getItemMeta() : Bukkit.getItemFactory().getItemMeta(IDIpped.getType());


        // SET THE META ----------------
        IDIppedMeta.setDisplayName("I dipped my balls in sulfiric acid PASS");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("This pass is obtained by proving");
        Helmlore.add("through a test that one is the");
        Helmlore.add("ultimate sigma male");
        IDIppedMeta.setLore(Helmlore);

        IDIppedMeta.addEnchant(Enchantment.ARROW_FIRE, 1, false);



        IDIpped.setItemMeta(IDIppedMeta);
        IDIppedPass = IDIpped;
    }
}