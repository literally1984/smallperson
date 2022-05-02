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
        String Beserk = ChatColor.GOLD + "Beserk";
        String Cursed = ChatColor.DARK_RED + "Cursed";
        String Holy = ChatColor.YELLOW + "Holy";
        String Intelligent = ChatColor.AQUA + "Intelligent";
        String Ancient = ChatColor.GRAY + "Ancient";
        String Spicy = ChatColor.RED + "Spicy";
        String Heroic = ChatColor.GOLD + "Heroic";
        String[] reforgeList = {
        
        Superior, Superior, Superior,

        Holy, Cursed,

        Heroic, Heroic, Heroic, Heroic, 

        Beserk, Beserk, Beserk, Beserk, Beserk, 
        Beserk, Beserk, Beserk, 

        Common, Common, Common, Common, Common, 
        Common, Common, Common, Common, Common, 
        Common, Common, Common, Common, Common, 
        Common, Common, Common, Common, Common, 
        Common, Common, Common, Common, Common,

        Common, Common, Common, Common, Common,
        Common, Common, Common, Common, Common,
        Common, Common, Common, Common, Common,

        Spicy, Spicy, Spicy, Spicy, Spicy,
        Spicy, Spicy, Spicy, Spicy, Spicy, 
        Spicy, Spicy, Spicy, Spicy, Spicy, 
        Spicy, Spicy, Spicy, Spicy, Spicy, 

        Vampiric, Vampiric, Vampiric, Vampiric, Vampiric,
        Vampiric, Vampiric,

        Ancient, Ancient, Ancient, Ancient, Ancient, 
        Ancient, Ancient, Ancient, Ancient, Ancient, 
        Ancient, Ancient, Ancient, Ancient, Ancient, 


        Intelligent, Intelligent, Intelligent, Intelligent, Intelligent, 
        Intelligent, Intelligent, Intelligent, Intelligent, Intelligent, 
        Intelligent, Intelligent, Intelligent, Intelligent, Intelligent,
        Intelligent, Intelligent, Intelligent, Intelligent, Intelligent,
        
        Tanky, Tanky, Tanky, Tanky, Tanky, 
        Tanky, Tanky, Tanky, Tanky, Tanky, 
        Tanky, Tanky, Tanky, Tanky, Tanky};
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
