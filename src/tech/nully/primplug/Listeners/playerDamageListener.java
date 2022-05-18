package tech.nully.primplug.Listeners;

import com.massivecraft.factions.entity.UPlayer;
import org.bukkit.entity.Entity;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import org.bukkit.entity.TNTPrimed;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityDamageEvent.DamageCause;
import tech.nully.primplug.Armor.setBonuses;
import tech.nully.primplug.damageManager.getDamage;
import tech.nully.primplug.playerStatManagers.defenseManager.defenseManager;
import tech.nully.primplug.playerStatManagers.magicDamageManager.magicDamageManager;

public class playerDamageListener implements Listener {
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        // TODO: INTEGRATE FACTIONS
        EntityDamageEvent event = (EntityDamageEvent) e;
        // Entity damageCause checker
        if (e.getCause() == DamageCause.ENTITY_ATTACK) {

            // defines the 2 parties in the event
            Entity entityVictim = e.getEntity();
            Entity entityDamager = entityVictim.getLastDamageCause().getEntity();

            // victim player checker
            if (entityVictim instanceof Player) {
                Player playerVictim = (Player) entityVictim;

                // define the 2 final damage stuff things
                int finalDamage = e.getDamage();
                int reflectedDamage = 0;
                defenseManager d = new defenseManager();

                getDamage dmg = new getDamage();

                // gets the attackers armor damage and weapon damage && handles factions stuff
                if (entityDamager instanceof Player) {
                    Player playerDamager = (Player) entityDamager;

                    // --------- Factions stuff -----------
                    UPlayer uPlayerDamager = UPlayer.get(playerDamager);
                    UPlayer uPlayerVictim = UPlayer.get(playerVictim);

                    if (uPlayerVictim.getFaction().equals(uPlayerDamager.getFaction())) {
                        e.setCancelled(true);
                        return;
                    }
                    // --------------------------------------

                    finalDamage = finalDamage + d.getArmorDamage(playerDamager) + dmg.getItemDamage(playerDamager.getItemInHand());
                }
                // TODO: finish revamping the rest of thsi stuff

                // --------------------- Victim physical defense manager ------------------------
                if (event.getEntity() instanceof Player) {
                    Player damaged = (Player) event.getEntity();

                    // ----------- Set bonus manager ---------------------
                    setBonuses set = new setBonuses();

                    // Cactus set bonus manager
                    if (set.getPlayerSetBonus(damaged).equals("cac")) {
                        reflectedDamage = e.getDamage() / 3;
                    }

                    // ------------------ Victim defense calculator ------------------
                    int playerDefense = d.getdefense(victim);
                    int playerDefPerc = Math.round((100 * (playerDefense)) / ((100 * (playerDefense)) + 100));
                    int def = playerDefPerc / 100;

                }

                // Does the final damage
                e.setCancelled(true);
                LivingEntity damaged = (LivingEntity) event.getEntity();
                damaged.setHealth(damaged.getHealth() - finalDamage);
                victim.sendMessage("works yayy!!");
            }
        }

        // TODO: Make magic damage caclulator and magic defense calculator
        //  --------------- Magic Damage Calculator (WIP) -----------------
        if (event.getCause() == DamageCause.ENTITY_EXPLOSION && event.getEntity() instanceof TNTPrimed) {
            TNTPrimed tnt = (TNTPrimed) event.getEntity();
            magicDamageManager m = new magicDamageManager();

            // Uses the MagicDamageManager's HashMap system to get an integer value for the damage that should be dealt
            // and adds it to the finalDamage int
            if (m.checkTNTContains(tnt)) {

                finalDamage = finalDamage + m.getActiveTNT(tnt);
                m.removeTNT(tnt);
            }

        }
    }
}
