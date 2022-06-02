package tech.nully.primplug.Armor.armorItems;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.Color;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.inventory.meta.LeatherArmorMeta;
import tech.nully.primplug.Armor.baseAdder;

import java.util.ArrayList;
import java.util.List;
public class cactusArmor {
    
    public static ItemStack Shard;
    public static ItemStack helm;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createCacShard();
        createCacHelm();
        createCacChestplate();
        createCacLeggings();
        createCacBoots();
    }
    // !  Obsidian

    private final static baseAdder a = new baseAdder();

    private static void createCacShard() {
        // DEFINE THE META -------------
        ItemStack CacShard = new ItemStack(Material.CACTUS, 1, (short) 1);
        ItemMeta CacShardMeta = CacShard.getItemMeta();


        // SET THE META ----------------
        CacShardMeta.setDisplayName("Cactus Shard");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add(ChatColor.YELLOW + "Used to craft Cactus armor");
        Helmlore.add(ChatColor.YELLOW + "Very pointy!");
        CacShardMeta.setLore(Helmlore);

        CacShardMeta.addEnchant(Enchantment.THORNS, 1, false);

        CacShard.setItemMeta(CacShardMeta);
        Shard = CacShard;
    }


    //! Cac Helmet
    private static void createCacHelm() {
        // DEFINE THE META -------------
        ItemStack CacHelm = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta CacHelmMeta = CacHelm.hasItemMeta() ? CacHelm.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacHelm.getType());


        // SET THE META ----------------
        CacHelmMeta.setDisplayName("Cactus Helmet");
            // HelmLore
        List<String> Helmlore = a.addAttributes(CacHelm, 3, 3, 6, 6, 4, 3);
        Helmlore.add("");
        Helmlore.add("Headwear made from cactus shards which");
        Helmlore.add("harms the oppenent when they attack you");
        Helmlore.add("Ouch! Pointy!");
        Helmlore.add("");
        Helmlore.add(ChatColor.GOLD+ "" + ChatColor.BOLD + "Set Bonus: Iron Spikes");
        Helmlore.add("Reflects 33% of the damage you take");
        Helmlore.add("back to your opponent, but reduces movement speed by 10%");
        Helmlore.add("");
        Helmlore.add(ChatColor.GREEN+ "" + ChatColor.BOLD + "UNCOMMON");
        Helmlore.add("");
        CacHelmMeta.setLore(Helmlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacHelmMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacHelm.setItemMeta(CacHelmMeta);
        helm = CacHelm;
    }

    // ! Cac Chesplate
    private static void createCacChestplate() {
        // DEFINE THE META -------------
        ItemStack CacChest = new ItemStack(Material.LEATHER_CHESTPLATE);
        ItemMeta CacChestMeta = CacChest.hasItemMeta() ? CacChest.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacChest.getType());


        // SET THE META ----------------
        CacChestMeta.setDisplayName("Cactus Chestplate");
            // ChestLore
        List<String> Chestlore = a.addAttributes(CacChest, 2, 2, 21, 21, 15, 25);
        Chestlore.add("");
        Chestlore.add("A shirt made from the shards of a cactus spine.");
        Chestlore.add("Gonna need a Band-Aid!");
        Chestlore.add("");
        Chestlore.add(ChatColor.GOLD+ "" + ChatColor.BOLD + "SET BONUS: Iron spikes");
        Chestlore.add("Reflects 33% of the damage you take");
        Chestlore.add("back to your opponent, but reduces movement speed by 10%");
        Chestlore.add("");
        Chestlore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        Chestlore.add("");
        CacChestMeta.setLore(Chestlore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacChestMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacChest.setItemMeta(CacChestMeta);
        ches = CacChest;
    }


    // ! Cac Leggings
    private static void createCacLeggings() {
        // DEFINE THE META -------------
        ItemStack CacLeg = new ItemStack(Material.LEATHER_LEGGINGS);
        ItemMeta CacLegMeta = CacLeg.hasItemMeta() ? CacLeg.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacLeg.getType());


        // SET THE META ----------------
        CacLegMeta.setDisplayName("Cac Leggings");
            // LegLore
        List<String> Leglore = a.addAttributes(CacLeg, 3, 3, 17, 17, 13, 20);
        Leglore.add("");
        Leglore.add("Pants made from the shards of a cactus spine.");
        Leglore.add("A little poky down under…");
        Leglore.add("");
        Leglore.add(ChatColor.GOLD + "Full Set Bonus: Iron Spikes");
        Leglore.add("Reflects 33% of the damage you take");
        Leglore.add("back to your opponent, but reduces movement speed by 10%");
        Leglore.add("");
        Leglore.add(ChatColor.GREEN + "" + ChatColor.BOLD + "UNCOMMON");
        Leglore.add("");
        CacLegMeta.setLore(Leglore);
        

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacLegMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacLeg.setItemMeta(CacLegMeta);
        leg = CacLeg;
    }
    // ! Cac Boots
    private static void createCacBoots() {
        // DEFINE THE META -------------
        ItemStack CacBoots = new ItemStack(Material.LEATHER_BOOTS);
        ItemMeta CacBootsMeta = CacBoots.hasItemMeta() ? CacBoots.getItemMeta() : Bukkit.getItemFactory().getItemMeta(CacBoots.getType());


        // SET THE META ----------------
        CacBootsMeta.setDisplayName("Cac Boots");
            // BootsLore
        List<String> Bootslore = a.addAttributes(CacBoots, 1, 1, 8, 8, 7, 13);
        Bootslore.add("Shoes made from the shards of a cactus spine.");
        Bootslore.add("A pain to walk in!");
        Bootslore.add("");
        Bootslore.add(ChatColor.YELLOW + "" + ChatColor.BOLD + "Full Set Bonus: Iron Spikes");
        Bootslore.add("Reflects 33% of the damage you take");
        Bootslore.add("back to your opponent, but reduces movement speed by 10%");
        Bootslore.add("");
        Bootslore.add(ChatColor.GREEN+ "" + ChatColor.BOLD + "UNCOMMON");
        CacBootsMeta.setLore(Bootslore);

        // LEATHER ARMOR META
        LeatherArmorMeta leatherArmorMeta = (LeatherArmorMeta) CacBootsMeta;
        leatherArmorMeta.setColor(Color.BLACK);


        CacBoots.setItemMeta(CacBootsMeta);
        boots = CacBoots;
    }
}
