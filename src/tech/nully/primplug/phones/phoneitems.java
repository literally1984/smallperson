package tech.nully.primplug.phones;

import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class phoneitems {
    
    public static ItemStack msges;
    public static ItemStack PornHub;


    public static void init() {
        createPhoneMessage();
        createPhonePHUB();
    }

    private static void createPhoneMessage() {
        // DEFINE THE META -------------
        ItemStack messages = new ItemStack(Material.WOOL, 1, DyeColor.RED.getWoolData());
        ItemMeta messageAppMeta = messages.getItemMeta();


        // SET THE META ----------------
        messageAppMeta.setDisplayName(ChatColor.GREEN + "Messages");
            // HelmLore

        messages.setItemMeta(messageAppMeta);
        msges = messages;
    }
    private static void createPhonePHUB() {
        // DEFINE THE META -------------
        ItemStack PHub = new ItemStack(Material.WOOL, 1, DyeColor.ORANGE.getWoolData());
        ItemMeta messageAppMeta = PHub.getItemMeta();


        // SET THE META ----------------
        messageAppMeta.setDisplayName(ChatColor.GREEN + "PornHub");
            // HelmLore

        PHub.setItemMeta(messageAppMeta);
        PornHub = PHub;
    }
}