package tech.nully.primplug.magic;

import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import tech.nully.primplug.Armor.baseAdder;

import java.util.ArrayList;
import java.util.List;

public class wands {
    public static List<String> wands = new ArrayList<String>();
    
    public static void init() {
        createPheonixWand();

    }
    private static baseAdder b = new baseAdder();

    private static ItemStack Pwand;
    
    private static void createPheonixWand() {
        ItemStack PheonixWand = new ItemStack(Material.BLAZE_ROD);
        ItemMeta PheonixMeta = PheonixWand.getItemMeta();

        List<String> PheonixWandLore = new ArrayList<>();

        PheonixMeta.setDisplayName("Pheonix Wand");
        PheonixWandLore.add("");
        PheonixWandLore.add(b.lore() + "Wand Item");
        PheonixWandLore.add("");
        b.addAttributes(PheonixWand, 3, 20, 8, 9, 40, 10);
        PheonixWandLore.add("");
        PheonixWandLore.add(b.ability() + "Passive Ability: Flames of Rejuvenation");
        PheonixWandLore.add(b.lore() + "On reaching 35% or less HP, the spirit");
        PheonixWandLore.add(b.lore() + "of the Pheonix will engulf its user with");
        PheonixWandLore.add(b.lore() + "its flames, granting them Regen II");
        PheonixWandLore.add("");
        PheonixWandLore.add(b.ability() + "Passive II: Mage of Flames");
        PheonixWandLore.add(b.lore() + "The Spirit of the Pheonix roams within");
        PheonixWandLore.add(b.lore() + "the user's body and protects them from");
        PheonixWandLore.add(b.lore() + "fire damage...");
        PheonixWandLore.add("");
        PheonixWandLore.add(b.epic() + "EPIC");

        Pwand = PheonixWand;
        wands.add(PheonixMeta.getDisplayName());
    }

    // TODO: make more wands
}
