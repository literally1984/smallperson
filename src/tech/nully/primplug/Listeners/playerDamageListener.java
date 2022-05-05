package tech.nully.primplug.Listeners;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityDamageEvent.DamageCause;
import org.bukkit.inventory.ItemStack;

import tech.nully.primplug.baseMethods;
import tech.nully.primplug.Armor.armorItems.cactusArmor;
import tech.nully.primplug.damageManager.getDamage;
import tech.nully.primplug.playerStatManagers.defenseManager.defenseManager;

public class playerDamageListener implements Listener{
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        // define some stuff
        Player p = (Player) e.getEntity();
        int finalDamage = e.getDamage();
        int reflectedDamage = 0;
        boolean DamagerhasArmor = false;
        List<ItemStack> playerArmor = new ArrayList<>();


        EntityDamageEvent event = (EntityDamageEvent) e;

        // checks if the event cause is from an entity damaging
        if (event.getCause() == DamageCause.ENTITY_ATTACK) {


            //Checks if event-entity is a player
            if (p.getLastDamageCause().getEntity() instanceof Player) {

                // defines damager as the entity that last damaged the player casted into a player
                Player damager = (Player) p.getLastDamageCause().getEntity();

                // loops through the damager's armor to check if they have any armor
                for (ItemStack i : damager.getInventory().getArmorContents()) {
                    if (i != null) {
                        DamagerhasArmor = true;
                        playerArmor.add(i);
                        break;
                    }
                    playerArmor.add(new ItemStack(Material.AIR));
                }

                // define more variables
                baseMethods b = new baseMethods();
                ItemStack DamagerHandItem = damager.getItemInHand();
                getDamage get = new getDamage();


                if (b.checkIsWeapon(DamagerHandItem)) {
                    finalDamage = get.getItemDamage(DamagerHandItem);
                }
                

                // checks if the damager has armor, if so, uses the getPlayerArmorDamage method from the getDamage class
                if (DamagerhasArmor) {
                    List<Integer> armor = get.getPlayerArmorDamage(p);
                    finalDamage = finalDamage + armor.get(0) + armor.get(1) + armor.get(2) + armor.get(3);
                }
            }

        }




        




        // defense calc
        defenseManager d = new defenseManager();
        int playerDefense = d.getdefense(p);
        int playerDefPerc = Math.round(100*(playerDefense)/(100*(playerDefense) + 100));
        int def = playerDefPerc/100;


        int damage = finalDamage;
        e.setCancelled(true);
        finalDamage = damage - (damage*def);
        p.setHealth(p.getHealth() - finalDamage);
        p.sendMessage("works yayy!!");
    }
}
