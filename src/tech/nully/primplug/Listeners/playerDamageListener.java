package tech.nully.primplug.Listeners;

import com.massivecraft.factions.entity.UPlayer;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityDamageEvent.DamageCause;
import tech.nully.primplug.API.events.entityDamageBySpellEvent;
import tech.nully.primplug.Armor.setBonuses;
import tech.nully.primplug.damageManager.getDamage;
import tech.nully.primplug.playerStatManagers.defenseManager.defenseManager;

public class playerDamageListener implements Listener {
    @EventHandler
    public void PlayerDamageEvent(EntityDamageEvent e) {
        if (e.getEntity().getType().isAlive()) {
            EntityDamageEvent event = (EntityDamageEvent) e;

            // defines damage and entities
            int finalDamage = e.getDamage();
            int reflectedDamage = 0;
            LivingEntity entityVictim = (LivingEntity) e.getEntity();
            LivingEntity entityDamager = (LivingEntity) entityVictim.getLastDamageCause().getEntity();

            // Entity damageCause checker
            if (e.getCause() == DamageCause.ENTITY_ATTACK) {

                // victim player checker
                if (entityVictim instanceof Player) {
                    Player playerVictim = (Player) entityVictim;

                    // define the 2 final damage stuff things
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

                        // ----------- Set bonus manager ---------------------
                        setBonuses set = new setBonuses();

                        // Cactus set bonus manager
                        if (set.getPlayerSetBonus(playerVictim).equals("cac")) {
                            reflectedDamage = e.getDamage() / 3;
                        }

                        // ------------------ Victim defense calculator ------------------
                        int playerDefense = d.getdefense(playerVictim);
                        int playerDefPerc = Math.round((100 * (playerDefense)) / ((100 * (playerDefense)) + 100));
                        int def = playerDefPerc / 100;


                        finalDamage = finalDamage + d.getArmorDamage(playerDamager) + dmg.getItemDamage(playerDamager.getItemInHand());
                    }
                    // TODO: finish revamping the rest of thsi stuff

                    // Does the final damage
                }

            }
            e.setCancelled(true);
            entityVictim.setHealth(finalDamage);
            entityVictim.setVelocity(entityDamager.getLocation().getDirection());
            if (entityVictim instanceof Player) {
                Player p = (Player) entityVictim;
                p.sendMessage("works yayy");
            }
        }
    }

    @EventHandler
    public void onMagicDamage(entityDamageBySpellEvent e) {

    }
}
