package tech.nully.primplug.Items;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class WASDPlaneKey {

    public static ItemStack PlaneKey;

    public static void init() {
        createPlaneKey();
    }

    private static void createPlaneKey() {
        // DEFINE THE META -------------
        ItemStack planeKey = new ItemStack(Material.BLAZE_ROD);
        ItemMeta planeKeyMeta = (ItemMeta) planeKey.getItemMeta();
        // SET THE META ----------------
        planeKeyMeta.setDisplayName(ChatColor.BLUE+"[Key]"+ChatColor.GOLD+" Airplane Key");
            // Lore ----------------------------------------------------
        List<String> planeKeylore = new ArrayList<>();
        planeKeylore.add(ChatColor.GREEN + "" + ChatColor.ITALIC + "Key Item");
        planeKeylore.add("");
        planeKeylore.add(ChatColor.YELLOW +"A Plane key used to turn minecarts");
        planeKeylore.add(ChatColor.YELLOW +"into Planes. Planes are steered with");
        planeKeylore.add(ChatColor.YELLOW +"WASD.");
        planeKeyMeta.setLore(planeKeylore);

        // Glowing effect

        planeKeyMeta.addEnchant(Enchantment.ARROW_DAMAGE, 1, false);

        planeKey.setItemMeta(planeKeyMeta);
        PlaneKey = planeKey;
    }
}
