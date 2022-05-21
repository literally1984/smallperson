package tech.nully.primplug.API.PrimItems;

import org.bukkit.inventory.ItemStack;
import tech.nully.primplug.API.Items.Rarity.Rarity;

import java.util.HashMap;
import java.util.List;

public class PrimItem{
    static HashMap<ItemStack, PrimItem> primItems = new HashMap<ItemStack, PrimItem>();
    private ItemStack i;
    private int EXP;
    private int level;
    private List<String> enchants;
    private Rarity rarity;
    private String type;

    public PrimItem(ItemStack i) {
        this.i = i;
        String[] EXPLine = i.getItemMeta().getLore().get(i.getItemMeta().getLore().size() -3).split("/");
        this.EXP = Integer.parseInt(EXPLine[1]);
        this.level = Integer.parseInt(EXPLine[0]);
        //TODO: add enchants
        this.rarity = new Rarity(i.getItemMeta().getLore().get(i.getItemMeta().getLore().size()-1).substring(3, i.getItemMeta().getLore().get(i.getItemMeta().getLore().size()-1).length()-1));
        if (i.getType().toString().toLowerCase().contains("sword")) {
            this.type = "sword";
        }
        primItems.put(i, this);

    }

    public ItemStack getItem() {
        return this.i;
    }

    public int getEXP() {
        return this.EXP;
    }

    public int getLevel() {
        return this.level;
    }

    public List<String> getEnchants() {
        return this.enchants;
    }

    public Rarity getRarity() {
        return this.rarity;
    }
}
