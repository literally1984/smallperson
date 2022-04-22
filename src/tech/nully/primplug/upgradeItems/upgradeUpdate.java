package tech.nully.primplug.upgradeItems;

import java.util.List;

import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class upgradeUpdate {
    public int damageStat = 0;
    public int defenseStat = 0;
    public int staminaStat = 0;
    public int manaStat = 0;
    public int total = damageStat + defenseStat + staminaStat + manaStat;
    public boolean isAtMax = false;
    public void update(ItemStack i) {
        ItemMeta itemMeta = i.getItemMeta();
        List<String> itemLore = itemMeta.getLore();
        if (total >= 45) {
            isAtMax = true;
        }
        itemLore.add("Stats:" + total + "/45");
        itemLore.add("Damage:" + damageStat);
        itemLore.add("Defense:" + defenseStat);
        itemLore.add("Mana:" + manaStat);
        itemLore.add("Stamina:" + staminaStat);
        itemMeta.setLore(itemLore);
        i.setItemMeta(itemMeta);
    }
}
