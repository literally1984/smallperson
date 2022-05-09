package tech.nully.primplug.magic;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Armor.baseAttributesAdder;

public class wands {
    
    public static void init() {

    }
    private static baseAttributesAdder b = new baseAttributesAdder();
    
    private static void createPheonixWand() {
        ItemStack PheonixWand = new ItemStack(Material.BLAZE_ROD);
        ItemMeta PheonixMeta = PheonixWand.getItemMeta();

        List<String> PheonixWandLore = new ArrayList<>();

        PheonixMeta.setDisplayName("Pheonix Wand");
        PheonixWandLore.add("");
        b.addMagicAttributes(PheonixWand, 10, 10, 50);
        PheonixWandLore.add("");
        PheonixWandLore.add(b.ability() + "Passive Ability: Flames of Rejuvenation");
        PheonixWandLore.add(b.lore() + "On reaching 35% or less HP, the spirit");
        PheonixWandLore.add(b.lore() + "of the Pheonix will engulf its user with");
        PheonixWandLore.add(b.lore() + "its flames, granting them Regen II");
        PheonixWandLore.add("");
    }
}
