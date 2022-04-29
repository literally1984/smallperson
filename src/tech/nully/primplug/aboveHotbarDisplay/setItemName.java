package tech.nully.primplug.aboveHotbarDisplay;

import org.bukkit.entity.Player;

import tech.nully.primplug.manaManager.manaManager;

public class setItemName {
    public void setToStats(Player p) {
        manaManager m = new manaManager();
        p.getItemInHand().getItemMeta().setDisplayName(m.getMana(p.getDisplayName()) + "/");
    }
}