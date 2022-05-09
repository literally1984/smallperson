package tech.nully.primplug.enchantStuff;

import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.baseMethods;

public class enchantMethods {
    
    public boolean IsEnchantable(ItemStack i) {
        baseMethods b = new baseMethods();
        if (b.checkIsArmor(i) || b.checkIsWeapon(i) || i.getItemMeta().getDisplayName().equals("Thunderbolt of Zeus")) {
            return true;
        } else return false;
    }
}
