package tech.nully.primplug.upgradeItems;

import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.baseMethods;

public class upgradeGUIListener implements Listener{
    @EventHandler
    public void onInventoryClick(InventoryClickEvent e) {
        Player p = (Player) e.getWhoClicked();
        upgradeGUI u = new upgradeGUI();
        ItemStack clickItem = e.getCurrentItem();
        // Check if inventory is the upgrade inventory
        if (clickItem == null) {
            return;
        }
        if (e.getInventory().getName().equals(ChatColor.BLACK + "Item Upgrades") && !(e.getCurrentItem() == e.getInventory().getItem(22)) || !(e.getInventory().getName().equals(p.getInventory().getName()))) {
            e.setCancelled(true);

            // some varaibble stuff
            ItemStack upgradeItem = u.inv.getItem(13);
            baseMethods b = new baseMethods();
            upgradeUpdate up = new upgradeUpdate();
            ItemMeta damageUpgradeMeta = baseMethods.damageUpgrade.getItemMeta();
            List<String> damageUpgradeLore = damageUpgradeMeta.getLore();

            ItemMeta defenseUpgradeMeta = baseMethods.defenseUpgrade.getItemMeta();
            List<String> defenseUpgradeLore = defenseUpgradeMeta.getLore();

            ItemMeta staminaUpgradeMeta = baseMethods.staminaUpgrade.getItemMeta();
            List<String> staminaUpgradeLore = staminaUpgradeMeta.getLore();

            ItemMeta manaUpgradeMeta = baseMethods.manaUpgrade.getItemMeta();
            List<String> manaUpgradeLore = manaUpgradeMeta.getLore();

            baseMethods.damageUpgrade.setItemMeta(damageUpgradeMeta);
            baseMethods.defenseUpgrade.setItemMeta(damageUpgradeMeta);
            baseMethods.staminaUpgrade.setItemMeta(staminaUpgradeMeta);
            baseMethods.manaUpgrade.setItemMeta(manaUpgradeMeta);


            if (up.isAtMax == true) {
                damageUpgradeLore.add(ChatColor.RED + "You cannot upgrade your item because");
                damageUpgradeLore.add(ChatColor.RED + "your item is at it's maximum upgrades");

                defenseUpgradeLore.add(ChatColor.RED + "You cannot upgrade your item because");
                defenseUpgradeLore.add(ChatColor.RED + "your item is at it's maximum upgrades");

                staminaUpgradeLore.add(ChatColor.RED + "You cannot upgrade your item because");
                staminaUpgradeLore.add(ChatColor.RED + "your item is at it's maximum upgrades");

                manaUpgradeLore.add(ChatColor.RED + "You cannot upgrade your item because");
                manaUpgradeLore.add(ChatColor.RED + "your item is at it's maximum upgrades");

                damageUpgradeMeta.setLore(damageUpgradeLore);
                defenseUpgradeMeta.setLore(damageUpgradeLore);
                staminaUpgradeMeta.setLore(damageUpgradeLore);
                manaUpgradeMeta.setLore(damageUpgradeLore);
            }
            // check if click item is the base item
            if (clickItem.getItemMeta().getDisplayName().equals(b.base.getItemMeta().getDisplayName())) {
                return;
            }
            // checks if clicked item is damage upgrade item
            if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.damageUpgrade.getItemMeta().getDisplayName())) {
                if (up.isAtMax == false) {
                    up.damageStat++;
                    up.update(upgradeItem);
                    return;
                }
                return;
            }

            // check if it is defense item which is clicked
            if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.defenseUpgrade.getItemMeta().getDisplayName())) {
                if (up.isAtMax == false) {
                    up.defenseStat = up.defenseStat + 1;
                    up.update(upgradeItem);
                    return;
                }
                return;
            }


            if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.staminaUpgrade.getItemMeta().getDisplayName())) {
                if (up.isAtMax == false) {
                    up.staminaStat = up.staminaStat + 1;
                    up.update(upgradeItem);
                    return;
                }
                return;
            }


            if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.manaUpgrade.getItemMeta().getDisplayName())) {
                if (up.isAtMax == false) {
                    up.manaStat = up.manaStat + 1;
                    up.update(upgradeItem);
                    return;
                }
                return;
            }
        }
    }
}
