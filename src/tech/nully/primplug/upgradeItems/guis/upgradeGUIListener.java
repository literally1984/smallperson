package tech.nully.primplug.upgradeItems.guis;

import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Material;
import org.bukkit.Sound;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.RPGcommands.reforges.reforgeGUI;
import tech.nully.primplug.RPGcommands.reforges.reforges;
import tech.nully.primplug.upgradeItems.upgradeUpdate;

public class upgradeGUIListener implements Listener {
    @EventHandler
    public void onInventoryClick(InventoryClickEvent e) {

        upgradeGUI u = new upgradeGUI();
        ItemStack clickItem = e.getCurrentItem();

        // ! REFORGE GUI STUFF
        // Check if inventory is the upgrade inventory
        if (clickItem == null) {
            return;
        }
        Player player = (Player) e.getWhoClicked();
        player.sendMessage("ya clicked ur inv lmao");
        reforgeGUI r = new reforgeGUI();
        baseMethods b = new baseMethods();


        // checks if inventory is the reforge inventory
        if (clickItem.getItemMeta().getDisplayName() == b.base.getItemMeta().getDisplayName()) {
            e.setCancelled(true);
            return;
        }

            // check if clicked item is reforge anvil
        if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.reforgeAnvil.getItemMeta().getDisplayName())) {
            e.setCancelled(true);
            ItemStack reforgeItem = r.inv.getItem(13);
            if (reforgeItem == new ItemStack(Material.AIR)) {
                return;
            }
            Player p = (Player) e.getWhoClicked();
            p.sendMessage("inventory check passed");
            reforges re = new reforges();
            re.reforgeName(reforgeItem, e.getInventory());
            p.playSound(p.getLocation(), Sound.ANVIL_USE, 100, 0);
            return;
        }

            // !UPGRADE GUI STUFF
            if (clickItem.getItemMeta().getDisplayName().equals(baseMethods.damageUpgrade.getItemMeta().getDisplayName()) ||
                clickItem.getItemMeta().getDisplayName().equals(baseMethods.defenseUpgrade.getItemMeta().getDisplayName()) ||
                clickItem.getItemMeta().getDisplayName().equals(baseMethods.manaUpgrade.getItemMeta().getDisplayName()) ||
                clickItem.getItemMeta().getDisplayName().equals(baseMethods.staminaUpgrade.getItemMeta().getDisplayName())) {
                e.setCancelled(true);

                // some varaibble stuff
                ItemStack upgradeItem = u.inv.getItem(13);
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
        }
