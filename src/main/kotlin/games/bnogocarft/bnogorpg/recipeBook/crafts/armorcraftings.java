package games.bnogocarft.bnogorpg.recipeBook.crafts;

import org.bukkit.Material;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;

import games.bnogocarft.bnogorpg.baseMethods;

public class armorcraftings {
    public void init() {
        
    }
    public void PetheriteH(Inventory inv) {
        // avaliable slots are:
        //10 11 12
        //19 20 21      24
        //28 29 30
        inv.clear();
        baseMethods b = new baseMethods();
        b.makeBaseCraft(inv);
        ItemStack diaChes = new ItemStack(Material.getMaterial(310));
        inv.setItem(11, diaChes);
    }
}
