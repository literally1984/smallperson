package tech.nully.primplug.recipeBook;

import org.bukkit.entity.Player;

import tech.nully.primplug.recipeBook.GUIs.armorGUI;

public class recipeGUI {
    public void openGui(Player player){
        baseMethods e = new baseMethods();
        armorGUI a = new armorGUI();
        e.makeMenu(e.inv);
        e.openBaseGui(player);
        a.OpenArmor(e.inv);
    }
}