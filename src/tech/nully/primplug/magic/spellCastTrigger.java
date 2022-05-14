package tech.nully.primplug.magic;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.fileSystem.file;

public class spellCastTrigger implements Listener {

    // TODO: MAKE A SPELL LEARN LISTENER
    // TODO: MAKE SPELL LEARN ADD TO PLAYER FILES
    public static boolean checkIsWand(ItemStack i) {
        return wands.wands.contains(i.getItemMeta().getDisplayName());
    }
    

    @EventHandler
    public void onSpellCast(PlayerInteractEvent e) {
        Player caster = e.getPlayer();
        spellCast cast = new spellCast();
    }
    static HashMap<Player, List<ItemStack>> IsInMagicForm = new HashMap<Player, List<ItemStack>>();
    @EventHandler
    public void onFormChange(PlayerInteractEvent e) {
        if (e.getAction() == Action.RIGHT_CLICK_AIR || e.getAction() == Action.RIGHT_CLICK_BLOCK) {
            if (e.getPlayer().getItemInHand().getItemMeta().getDisplayName().toLowerCase().contains("Pheonix Wand")) {
                Player p = e.getPlayer();
                
                // loops through the player's hotbar and stores the items in a arrayList
                List<ItemStack> playerHotbarItems = new ArrayList<ItemStack>();
                for (int i = 0; i<9; i++) {
                    playerHotbarItems.add(p.getInventory().getItem(i));
                }
                IsInMagicForm.put(p, playerHotbarItems); // puts the List's Items into the hashMap


                // loops through the player's spells and sets the player's hotbar to the array
                file file = new file();
                int playerHotbarIndex = 0;
                for (String s : file.readFile(file.getFileConfig(p.getDisplayName()), "Spells")) {
                    p.getInventory().setItem(playerHotbarIndex, spellItems.spellConverter.get(s));
                }
            }
        }


    }
    
}
