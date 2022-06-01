package tech.nully.primplug.API.PrimItems;

import org.bukkit.inventory.ItemStack



private var PrimItemHashMap: HashMap<ItemStack, PrimItem> = HashMap<ItemStack, PrimItem>()
data class PrimItem(val primItem: ItemStack) {
    val EXP = i.getItemMeta().getLore().get(i.getItemMeta().getLore().size() -3).split("/")[];
    fun getPrimItem(primItem: ItemStack): PrimItem? {
        if (PrimItemHashMap.containsKey(primItem)) {
            return PrimItemHashMap.get(primItem);
        }
        else {

            return this;
        }
    }
}


