package tech.nully.primplug.RPGcommands.reforges;

import java.util.Random;

import org.bukkit.Bukkit;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class reforges {
    public void reforgeName(ItemStack reforge) {
        Random rand = new Random();
        int pick = rand.nextInt(5);
        // weighted list of reforges
        String[] reforgeList = {"Vampiric", "Vampiric", "Superior", "Common", "Tanky"};

        // Identifies the meta

        ItemMeta reforgeMeta = reforge.hasItemMeta() ? 
        reforge.getItemMeta() : 
        Bukkit.getItemFactory().getItemMeta(reforge.getType());

        // sets the desplayName of the item to the picked reforge
        reforgeMeta.setDisplayName(reforgeList[pick] + reforgeMeta.getDisplayName());
        reforge.setItemMeta(reforgeMeta);
    }
}
