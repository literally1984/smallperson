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
        // TODO convert the ID's in the players file back to ItemStacks and display them in the slots 1 ,2, 3, 5, 6, 7
        int[] slots = {1,2,3,5,6,7};
        file file = new file();

        List<String> playerTalismans = file.readFile(file.getFileConfig(p.getDisplayName()), "Talisman");
        for (int i : slots) {
            p.getInventory().setItem(i, );
        }

        p.openInventory(inv);
    }
}
