package tech.nully.primplug.recipeBook.GUIs;

import org.bukkit.inventory.Inventory;

import tech.nully.primplug.Items.Armor.Drakon;
import tech.nully.primplug.Items.Armor.PetheriteSet;

public class weaponGUI {
    public void openWeapon(Inventory inv){
        inv.setItem(10, Drakon.ches);
        inv.setItem(19, Drakon.ches);
        inv.setItem(28, Drakon.ches);
        inv.setItem(37, Drakon.ches);
        

        inv.setItem(11, PetheriteSet.helm);
        inv.setItem(20, PetheriteSet.ches);
        inv.setItem(29, PetheriteSet.ches);
        inv.setItem(38, PetheriteSet.ches);
    }
}
