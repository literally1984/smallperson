package tech.nully.primplug.recipeBook.crafts;

import org.bukkit.Bukkit;
import org.bukkit.inventory.Inventory;

import tech.nully.primplug.Items.Armor.PetheriteSet;
import tech.nully.primplug.recipeBook.baseMethods;

public class armorcraftings {
    public void PetheriteH(Inventory inv) {
        // avaliable slots are:
        //10 11 12
        //19 20 21      24
        //28 29 30
        inv.clear();
        baseMethods b = new baseMethods();
        b.makeBaseCraft(inv);
        inv.setItem(11, PetheriteSet.helm);
    }
}
