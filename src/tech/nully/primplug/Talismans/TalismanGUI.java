package tech.nully.primplug.Talismans;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import tech.nully.primplug.baseMethods;
import tech.nully.primplug.fileSystem.file;

import java.util.List;

public class TalismanGUI {
    public void openTalismanBag(Player p) {
        Inventory inv = Bukkit.createInventory(null, 9, ChatColor.BLUE + "Talisman Bag");
        baseMethods b = new baseMethods();
        inv.setItem(0, b.base);
        inv.setItem(4, b.base);
        inv.setItem(8, b.base);
        file file = new file();

        // ---------------------------- Does the to do (untested) --------------------------------
        List<String> playerTalismans = file.readFile(file.getFileConfig(p.getDisplayName()), "Talisman");
        int indexOfHotbar = 1;
        talismanIdentifier t = new talismanIdentifier();

        // loops through the player's talismans and puts them in slots 1,2,3,5,6,7
        // WARNING: DOES NOT CHECK IF PLAYER'S TALISMANS IN FILES ARE OVER 6
        for (String s : playerTalismans) {
            if (indexOfHotbar == 4) indexOfHotbar++;
            p.getInventory().setItem(indexOfHotbar,t.convertToItem(s));
            indexOfHotbar++;
        }

        p.openInventory(inv);
    }
}
