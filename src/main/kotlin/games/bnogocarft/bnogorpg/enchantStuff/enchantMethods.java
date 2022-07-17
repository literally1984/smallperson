package games.bnogocarft.bnogorpg.enchantStuff;

import games.bnogocarft.bnogorpg.baseMethods;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

import org.bukkit.inventory.meta.ItemMeta;

import java.util.ArrayList;
import java.util.List;

public class enchantMethods {
    
    public static boolean IsEnchantable(ItemStack i) {
        baseMethods b = new baseMethods();
        if (b.checkIsArmor(i) || b.checkIsWeapon(i) || i.getItemMeta().getDisplayName().equals("Thunderbolt of Zeus")) {
            return true;
        } else return false;
    }

    public void updateEnchantItems(Inventory inv) {

        if (inv.getItem(13) != null && IsEnchantable(inv.getItem(13))) {
            ItemMeta level1EnchantMeta = inv.getItem(38).getItemMeta();
            level1EnchantMeta.setDisplayName("Enchant");
            List<String> lore = new ArrayList<>();
            lore.add("Click to Enchant yout item!");

        }
    }
}
