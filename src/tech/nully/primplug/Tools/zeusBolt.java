package tech.nully.primplug.Tools;

import net.minecraft.server.v1_5_R3.*;
import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.craftbukkit.v1_5_R3.inventory.CraftItemStack;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import tech.nully.primplug.Armor.baseAdder;

import java.util.List;

public class    zeusBolt {
    public static ItemStack zeusThunderBolt;

    public static void createZeusBolt() {
        ItemStack zeusBolt = new ItemStack(Material.BLAZE_ROD);
        ItemMeta zeusMeta = zeusBolt.getItemMeta();
        baseAdder b = new baseAdder();
        List<String> zeusLore = b.addAttributes(zeusBolt, 14, 7, 6, 9, 20, 20);

        zeusMeta.setDisplayName("Thunderbolt of Zeus");
        zeusLore.add("");
        zeusLore.add(ChatColor.GOLD + "" + ChatColor.ITALIC + "Celestial Artifact");
        zeusLore.add("");
        zeusLore.add(b.ability() + "Passive Ability: Zeus' Wrath");
        zeusLore.add(ChatColor.GRAY + "When you strike an opponent with this weapon,");
        zeusLore.add(ChatColor.GRAY + "a lightning bolt followed by a 1 block explosion");
        zeusLore.add(ChatColor.GRAY + "will hit the enemy dealing Physical damage");
        zeusLore.add("");
        zeusLore.add(b.ability() + "Interact Ability: Divine Retribution");
        zeusLore.add(ChatColor.GRAY + "Shift and right click while looking at the sky");
        zeusLore.add(ChatColor.GRAY + "to summon a powerful lightning bolt at your location");
        zeusLore.add(ChatColor.GRAY + "which creates a massive explosion");
        zeusLore.add("");
        zeusLore.add(b.lore() + "A thunderbolt rumored to have been brought down");
        zeusLore.add(b.lore() + "from the heavens by a legendary warrior who defeated");
        zeusLore.add(b.lore() + "the thunder god");
        zeusLore.add("");
        zeusLore.add(baseAdder.mythical() + "MYTHICAL");

        net.minecraft.server.v1_5_R3.ItemStack nmsStack = CraftItemStack.asNMSCopy(zeusBolt);
        NBTTagCompound compound = nmsStack.getTag();
        if (compound == null) {
            compound = new NBTTagCompound();
            nmsStack.setTag(compound);
            compound = nmsStack.getTag();
        }
        NBTTagList modifiers = new NBTTagList();

        //Attributes are set like this:
        NBTTagInt nbint = new NBTTagInt(6);


        NBTTagCompound damage = new NBTTagCompound();
        damage.set("AttributeName", new NBTTagString("generic.attackDamage"));
        damage.set("Name", new NBTTagString("generic.attackDamage"));
        damage.set("Amount", new NBTTagInt(6));
        damage.set("Operation", new NBTTagInt(0));
        damage.set("UUIDLeast", new NBTTagInt(894654));
        damage.set("UUIDMost", new NBTTagInt(2872));
        modifiers.add(damage);

        //Tags like Unbreakable can be set like this:
        compound.set("Unbreakable", new NBTTagByte((byte) 1));

        compound.set("AttributeModifiers", modifiers);
        nmsStack.setTag(compound);
        zeusBolt = CraftItemStack.asBukkitCopy(nmsStack);

        zeusThunderBolt = zeusBolt;
    }
}
