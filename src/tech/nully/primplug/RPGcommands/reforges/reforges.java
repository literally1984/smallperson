package tech.nully.primplug.RPGcommands.reforges;

import java.util.Random;

import org.bukkit.ChatColor;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class reforges {
    public void reforgeName(ItemStack reforge, Inventory inv) {
        Random rand = new Random();
        // weighted list of reforges
        String Common = ChatColor.GRAY + "Common";
        String Vampiric = ChatColor.RED + "Vampiric";
        String Tanky = ChatColor.BLACK + "Tanky";
        String Superior = ChatColor.GOLD + "Superior";
        String[] reforgeList = {Superior,
        Common, Common, Common, Common, Common, Common,
        Vampiric, Vampiric,
        Tanky, Tanky, Tanky};
        int pick = rand.nextInt(reforgeList.length - 1);

        // Identifies the meta

        ItemMeta reforgeMeta = reforge.getItemMeta();

        // sets the desplayName of the item to the picked reforge
        reforgeMeta.setDisplayName(reforgeList[pick] +  " " + reforgeMeta.getDisplayName());
        ItemStack resultItem = new ItemStack(reforge.getType());
        resultItem.setItemMeta(reforgeMeta);
        inv.setItem(13, resultItem);

    }
}
