package tech.nully.primplug.Tools;

import java.util.List;

import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.Armor.baseAttributesAdder;

public class zeusBolt {
    public static void createZeusBolt() {
        ItemStack zeusBolt = new ItemStack(Material.BLAZE_ROD);
        ItemMeta zeusMeta = zeusBolt.getItemMeta();
        List<String> zeusLore = zeusMeta.getLore();

        baseAttributesAdder b = new baseAttributesAdder();


        zeusMeta.setDisplayName("Thunderbolt of Zeus");
        zeusLore.add("");
        b.addAttributes(zeusBolt, 16, 3, 35, 35);

    }
}
