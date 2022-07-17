package games.bnogocarft.bnogorpg.Talismans;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class Talisman {

    public static ItemStack BladeOfDespair;
    public static ItemStack BlessingOfDurability;
    public static ItemStack MisoTheRabbit;

    public static HashMap<String, ItemStack> list = new HashMap<>();
    public static void init() {
        createBOD();
        createBLOD();
        createMiso();
    }

    private static void createBOD() {
        // DEFINE THE META -------------
        ItemStack BOD = new ItemStack(Material.RED_ROSE);
        ItemMeta BODMeta = (ItemMeta) BOD.getItemMeta();
        // SET THE META ----------------
        BODMeta.setDisplayName(ChatColor.BLUE+"[TALISMAN]"+ChatColor.GOLD+" Curse of Despair");
            // Lore ----------------------------------------------------
        List<String> BODlore = new ArrayList<>();
        BODlore.add(ChatColor.GOLD + "" + ChatColor.ITALIC + "Legendary artifact");
        BODlore.add("");
        BODlore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "It is said that strongest of wills");
        BODlore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "have been shattered by this curse.");
        BODlore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "Once, a Legendary warrior of the");
        BODlore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "ages used it to slay a great evil..");
        BODlore.add("");
        BODlore.add(ChatColor.RED + "Passive:");
        BODlore.add(ChatColor.WHITE + "Increases attack damage by 15%");
        BODlore.add("");
        BODlore.add(ChatColor.GOLD + "Right-Click ability: Bloodthirst");
        BODlore.add(ChatColor.WHITE + "Increases your attack damage by");
        BODlore.add(ChatColor.WHITE + "50% and lifesteal by 25%");
        BODMeta.setLore(BODlore);

        // Glowing effect

        BODMeta.addEnchant(Enchantment.ARROW_DAMAGE, 1, false);

        BOD.setItemMeta(BODMeta);
        BladeOfDespair = BOD;
        list.put(BODMeta.getDisplayName(),BOD);
    }


    private static void createBLOD() {
        // DEFINE THE META -------------
        ItemStack BLOD = new ItemStack(Material.YELLOW_FLOWER);
        ItemMeta BLODMeta = (ItemMeta) BLOD.getItemMeta();
        // SET THE META ----------------
        BLODMeta.setDisplayName(ChatColor.BLUE+"[TALISMAN]"+ChatColor.GOLD+" Blessing of Durability");
            // Lore ----------------------------------------------------
        List<String> BLODlore = new ArrayList<>();
        BLODlore.add(ChatColor.GOLD + "" + ChatColor.ITALIC + "Legendary artifact");
        BLODlore.add("");
        BLODlore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "Once, a brave warrior went on a");
        BLODlore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "quest to slay a great evil and was");
        BLODlore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "given this blessing by the gods");
        BLODlore.add("");
        BLODlore.add(ChatColor.RED + "Passive: Steel determination");
        BLODlore.add(ChatColor.WHITE + "Increases Defense by 20%");
        BLODlore.add("");
        BLODlore.add(ChatColor.RED + "2nd Passive: Last stand");
        BLODlore.add(ChatColor.WHITE + "When your HP drops to below");
        BLODlore.add(ChatColor.WHITE + "30%, you will gain +80% Defense");
        BLODlore.add("");
        BLODlore.add(ChatColor.GOLD + "Right-Click ability: Armor thicken");
        BLODlore.add(ChatColor.WHITE + "Renders you unable to move but");
        BLODlore.add(ChatColor.WHITE + "gain +99% defense");
        BLODMeta.setLore(BLODlore);

        // Glowing effect

        BLODMeta.addEnchant(Enchantment.ARROW_DAMAGE, 1, false);

        BLOD.setItemMeta(BLODMeta);
        BlessingOfDurability = BLOD;
        list.put(BLODMeta.getDisplayName(), BLOD);
    }
    private static void createMiso() {
        // DEFINE THE META -------------
        ItemStack Miso = new ItemStack(Material.WOOL, 1, DyeColor.BROWN.getDyeData());
        ItemMeta MisoMeta = (ItemMeta) Miso.getItemMeta();
        // SET THE META ----------------
        MisoMeta.setDisplayName(ChatColor.BLUE+"[TALISMAN]"+ChatColor.GOLD+" Miso the Rabbit");
            // Lore ----------------------------------------------------
        List<String> Misolore = new ArrayList<>();
        Misolore.add(ChatColor.GOLD + "" + ChatColor.ITALIC + "Legendary artifact");
        Misolore.add("");
        Misolore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "This artifact is said to be a");
        Misolore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "part of the spirit of a Rabbit");
        Misolore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "who served under the hero that");
        Misolore.add(ChatColor.YELLOW + "" + ChatColor.ITALIC + "slew the greatest evil..");
        Misolore.add("");
        Misolore.add(ChatColor.RED + "Passive: Extra" + ChatColor.BOLD + "CHONK");
        Misolore.add(ChatColor.WHITE + "With the power of "+ChatColor.BOLD+"CHONK,");
        Misolore.add(ChatColor.WHITE + "The talisman increases the");
        Misolore.add(ChatColor.WHITE + "HP of the user by 6 and defense");
        Misolore.add(ChatColor.WHITE + "by 10.");
        Misolore.add("");
        Misolore.add(ChatColor.GOLD + "Right-Click ability: Giga floof");
        Misolore.add(ChatColor.WHITE + "Grants the user regeneration 10");
        Misolore.add(ChatColor.WHITE + "for 5 seconds");
        MisoMeta.setLore(Misolore);

        // Glowing effect

        MisoMeta.addEnchant(Enchantment.ARROW_DAMAGE, 1, false);

        Miso.setItemMeta(MisoMeta);
        MisoTheRabbit = Miso;
        list.put(MisoMeta.getDisplayName(), Miso);
    }
}