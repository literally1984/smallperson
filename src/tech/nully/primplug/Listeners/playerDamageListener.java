package tech.nully.primplug.Listeners;

import java.util.List;

import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.damageManager.getDamage;
import tech.nully.primplug.defenseManager.defenseManager;

public class playerDamageListener implements Listener{
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        Player p = (Player) e.getEntity();
        int finalDamage = e.getDamage();
        int pCurrentHealth;
        int armorDamage = 0;
        boolean hasArmor = false;

        for (ItemStack a : p.getInventory().getArmorContents()) {
            if (a != null) {
                hasArmor = true;
            }
        }

        baseMethods b = new baseMethods();
        ItemStack PlayerHandItem = p.getItemInHand();
        getDamage get = new getDamage();
        if (b.checkIsWeapon(PlayerHandItem)) {
            finalDamage = get.getItemDamage(PlayerHandItem);
        }
        
        if (hasArmor) {
            List<Integer> armor = get.getPlayerArmorDamage(p);
            int finalDamage = finalDamage + 
        }




        




        // defense calc
        defenseManager d = new defenseManager();
        int playerDefense = d.getdefense(p);
        int playerDefPerc = Math.round(100*(playerDefense)/(100*(playerDefense) + 100));
        int def = playerDefPerc/100;


        pCurrentHealth = p.getHealth();
        int damage = finalDamage;
        e.setCancelled(true);
        finalDamage = damage - (damage*def);



        if (e.getEntity() instanceof Player) {
            
        }
    }
}
