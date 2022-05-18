package tech.nully.primplug.magic.events;


import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;
import tech.nully.primplug.fileSystem.file;
import tech.nully.primplug.magic.spellCast;
import tech.nully.primplug.magic.spellItems;
import tech.nully.primplug.magic.wands;

import java.util.ArrayList;
import java.util.List;

public class magicTriggers implements Listener {

    // TODO: MAKE A SPELL LEARN LISTENER
    // TODO: MAKE SPELL LEARN ADD TO PLAYER FILES
    public static boolean checkIsWand(ItemStack i) {
        return wands.wands.contains(i.getItemMeta().getDisplayName());
    }

    @EventHandler
    public void onSpellLearn(PlayerInteractEvent e) {
        Player learner = e.getPlayer();

        // Checks if the item in the player's hand is a spell and if the interact action is right_click_air or right_click_block
        if (spellItems.isSpell(learner.getItemInHand()) && (e.getAction() == Action.RIGHT_CLICK_AIR || e.getAction() == Action.RIGHT_CLICK_BLOCK)) {
            spellLearnEvent learnEvent = new spellLearnEvent(learner, learner.getItemInHand().getItemMeta().getDisplayName());
            Bukkit.getPluginManager().callEvent(learnEvent);
        }
    }

    @EventHandler
    public void entityDamageBySpellEvent(EntityDamageEvent e) {
        if (e.getCause().equals(EntityDamageEvent.DamageCause.ENTITY_EXPLOSION) ||
        e.getCause().equals(EntityDamageEvent.DamageCause.LIGHTNING) ||
        e.getCause().equals(EntityDamageEvent.DamageCause.PROJECTILE)) {
            
        }
    }


    @EventHandler
    public void onSpellCast(PlayerInteractEvent e) {
        Player caster = e.getPlayer();
        spellCast cast = new spellCast();
    }

    @EventHandler
    public void onFormChange(PlayerInteractEvent e) {
        // Checks if the action is right_click_air or right_click_block
        if (e.getAction() == Action.RIGHT_CLICK_AIR || e.getAction() == Action.RIGHT_CLICK_BLOCK) {

            // checks if the player's item in hand is Pheonix wand
            // TODO: change to check if it is a wand
            if (e.getPlayer().getItemInHand().getItemMeta().getDisplayName().toLowerCase().contains("Pheonix Wand")) {
                Player p = e.getPlayer();

                // loops through the player's hotbar and stores the items in a arrayList
                List<ItemStack> playerHotbarItems = new ArrayList<ItemStack>();
                for (int i = 0; i < 9; i++) {
                    playerHotbarItems.add(p.getInventory().getItem(i));
                }

                file file = new file();

                // Loops through the player's file under the category of Spells and sets the slot in playerHotbarIndex
                List<String> spells = new ArrayList<String>(file.readFile(file.getFileConfig(p.getDisplayName()), "Spells"));

                formSwitchEvent formSwitch = new formSwitchEvent(p, true, playerHotbarItems, spells);

                Bukkit.getPluginManager().callEvent(formSwitch);
            }
        }


    }

}
