package tech.nully.primplug.Tools;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Armor.baseAttributesAdder;


public class bloodThirstyBlade {
    public void init() {

    }
    private static baseAttributesAdder a = new baseAttributesAdder();

    private static void makeBloodThirstyBlade(){
        ItemStack bloodBlade = new ItemStack(Material.IRON_SWORD);
        ItemMeta bloodMeta = bloodBlade.getItemMeta();

        bloodMeta.setDisplayName(ChatColor.RED + "Bloodythirsy Blade");

        List<String> bladeLore = new ArrayList<String>();
        bladeLore.add("");
        a.addAttributes(bloodBlade, 7, 5, 10, 20);
        bladeLore.add("");
        bladeLore.add(Ch"");

    }
}
