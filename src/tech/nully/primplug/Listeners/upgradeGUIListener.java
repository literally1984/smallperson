package tech.nully.primplug.Listeners;

import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.RPGcommands.reforges.reforgeGUI;
import tech.nully.primplug.RPGcommands.reforges.reforges;
import tech.nully.primplug.upgradeItems.upgradeUpdate;
import tech.nully.primplug.upgradeItems.guis.upgradeGUI;

public class upgradeGUIListener implements Listener {
    @EventHandler
    public void onInventoryClick(InventoryClickEvent e) {
        upgradeGUI u = new upgradeGUI();
        reforgeGUI r = new reforgeGUI();


        ItemStack clickItem = e.getCurrentItem();

        // Checks if the clicked invetory is the upgrade inventory
        if (e.getInventory().getName().equals(u.inv.getName())) {


            // checks if the clicked slot is within the upgrade inventory and not the player inventory, if so, cancel the event
            if (e.getSlot() >= 0 && e.getSlot() <= 54 && e.getSlot() != 22) {
                e.setCancelled(true);
                ItemStack upgradeItem = e.getInventory().getItem(22);


                // checks if the clicked item is one of the upgrade buttons
                if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.damageUpgrade.getItemMeta().getDisplayName()) ||
                    clickItem.getItemMeta().getDisplayName().equals(baseMethods.defenseUpgrade.getItemMeta().getDisplayName()) ||
                    clickItem.getItemMeta().getDisplayName().equals(baseMethods.manaUpgrade.getItemMeta().getDisplayName()) ||
                    clickItem.getItemMeta().getDisplayName().equals(baseMethods.staminaUpgrade.getItemMeta().getDisplayName())) {
                    e.setCancelled(true);

                // some varaibble stuff
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


                    // if the player's upgrades are at max, it will set the upgrade buttons to a special lore
                    if (up.getStatTotal(e.getCurrentItem()) >= 45) {
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
                        return;
                    }
                    // check if click item is the base item
                    // checks if clicked item is damage upgrade item
                        if (up.getStatTotal(e.getCurrentItem()) >= 45) {
                            if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.damageUpgrade.getItemMeta().getDisplayName())) {
                                up.damageAdd(upgradeItem);
                                return;
                            }

                        // check if it is defense item which is clicked
                        if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.defenseUpgrade.getItemMeta().getDisplayName())) {
                            up.defAdd(upgradeItem);
                            return;
                        }


                        if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.staminaUpgrade.getItemMeta().getDisplayName())) {
                            up.stamAdd(upgradeItem);
                            return;
                        }


                        if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.manaUpgrade.getItemMeta().getDisplayName())) {
                                up.manaAdd(upgradeItem);
                                return;
                            }
                            return;
                        }
            }
            
        }

        // if the clicked inventory is the reforge inventory
        if (e.getInventory().getName().equals(r.inv.getName())) {


            if (e.getSlot() >= 0 && e.getSlot() <= 54 && e.getSlot() != 13) {
                ItemStack reforgeItem = e.getInventory().getItem(13);
                reforges re = new reforges();
                e.setCancelled(true);
                
                if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.reforgeAnvil.getItemMeta().getDisplayName())) {
                    re.reforgeName(reforgeItem, e.getInventory());
                    }


                }
            }


        }
    }
}
