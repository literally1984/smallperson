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
        makebloodThirstyBlade();
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
        bladeLore.add(a.ability() + "Passive ability: Bloodthirst");
        bladeLore.add(a.lore() + "When this blade hits another player, it");
        bladeLore.add(a.lore() + "repairs itself and increases its damage");
        bladeLore.add(a.lore() + "by 1 for 3 seconds");
        bladeLore.add("");
        bladeLore.add(a.ability() + "Passive ability: Infinite Bloodthirst");
        bladeLore.add(a.lore() + "When a player is slain with this blade,");
        bladeLore.add(a.lore() + "the blade gains + 10 damage for 10 seconds");
        bladeLore.add(a.lore() + "and grants the player + 10 speed for 15 seconds");
        bladeLore.add("");
        bladeLore.add(a.lore() + "A blade said to be made of the blood of");
        bladeLore.add(a.lore() + "a legendary warrior who slew 100 beasts");
        bladeLore.add(a.lore() + "and 100 armies...");
        bladeLore.add("");
        bladeLore.add(ChatColor.GOLD + "" + ChatColor.BOLD +"LEGENDARY");
        bloodMeta.setLore(bladeLore);
        bloodBlade.setItemMeta(bloodMeta);

    }
}
