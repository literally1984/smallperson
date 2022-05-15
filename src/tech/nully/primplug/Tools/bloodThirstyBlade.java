package tech.nully.primplug.Tools;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import tech.nully.primplug.Armor.baseAttributesAdder;

import java.util.List;


public class bloodThirstyBlade {
    public static ItemStack blade;

    public static void makeBloodThirstyBlade(){
        ItemStack bloodBlade = new ItemStack(Material.IRON_SWORD);
        ItemMeta bloodMeta = bloodBlade.getItemMeta();

        bloodMeta.setDisplayName(ChatColor.RED + "Bloodythirsy Blade");
        baseAttributesAdder a = new baseAttributesAdder();
        List<String> bladeLore = a.addAttributes(bloodBlade, 11, 3, 5, 2, 10, 15);
        bladeLore.add("");
        bladeLore.add(a.ability() + "Passive ability: Bloodthirst");
        bladeLore.add(ChatColor.GRAY + "When this blade hits another player, it");
        bladeLore.add(ChatColor.GRAY + "repairs itself and increases its damage");
        bladeLore.add(ChatColor.GRAY + "by 1 for 3 seconds");
        bladeLore.add("");
        bladeLore.add(a.ability() + "Passive ability II: Infinite Bloodthirst");
        bladeLore.add(ChatColor.GRAY + "When a player is slain with this blade,");
        bladeLore.add(ChatColor.GRAY + "the blade gains + 10 damage for 10 seconds");
        bladeLore.add(ChatColor.GRAY + "and grants the player + 10 speed for 15 seconds");
        bladeLore.add("");
        bladeLore.add(a.lore() + "A blade said to be made of the blood of");
        bladeLore.add(a.lore() + "a legendary warrior who slew 100 beasts");
        bladeLore.add(a.lore() + "and 100 armies...");
        bladeLore.add("");
        bladeLore.add(a.legendary() + "EPIC");
        bloodMeta.setLore(bladeLore);
        // TODO: test if this durability thing works
        bloodBlade.setDurability((short) -1000);
        bloodBlade.setItemMeta(bloodMeta);

        blade = bloodBlade;

    }
}
