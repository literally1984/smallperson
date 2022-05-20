package tech.nully.primplug.API.PrimItems;

import org.bukkit.inventory.ItemStack;

import java.util.List;

public class PrimItem{
    private ItemStack i;
    private int EXP;
    private int level;
    private List<String> enchants;
    private String Rarity;
    private String type;

    public PrimItem(ItemStack i) {
        this.i = i;
        String[] EXPLine = i.getItemMeta().getLore().get(i.getItemMeta().getLore().size() -3).split("/");
        this.EXP = Integer.parseInt(EXPLine[1]);
        this.level = Integer.parseInt(EXPLine[0]);
        this.Rarity = i.getItemMeta().getLore().get(i.getItemMeta().getLore().size()-1).substring(3, i.getItemMeta().getLore().get(i.getItemMeta().getLore().size()-1).length()-1);
    }


}
