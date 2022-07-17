package games.bnogocarft.bnogorpg.recipeBook;

import games.bnogocarft.bnogorpg.recipeBook.GUIs.armorGUI;
import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;

import games.bnogocarft.bnogorpg.baseMethods;

public class recipeGUI {
    public void openGui(Player player){
        baseMethods e = new baseMethods();
        armorGUI a = new armorGUI();
        Inventory inv = Bukkit.createInventory(null, 54, ChatColor.DARK_GREEN + "Crafting");
        e.openBaseGui(inv);
        a.OpenArmor(inv);
        player.openInventory(inv);
    }
}