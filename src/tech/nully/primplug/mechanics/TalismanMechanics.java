package tech.nully.primplug.mechanics;

import tech.nully.primplug.actionlisteners.talismanlisteners;
import org.bukkit.event.entity.EntityDamageByEntityEvent;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import java.lang.Math;

public class TalismanMechanics {
    boolean talismanclickhappened;
    // define the event
    @EventHandler
    public void onDamage(EntityDamageByEntityEvent e) {
    // Gets the damager 
    EntityDamageByEntityEvent entityDamage = (EntityDamageByEntityEvent) e;
    Player p = (Player) entityDamage.getDamager();
    Player rp = p;
    talismanlisteners TL = new talismanlisteners();
    double bodAddedDamage = e.getDamage()*0.15;
    int intbod = (int)Math.round(bodAddedDamage);

    // Actually uses info to do stuff
    if (// TODO Change to if BOD list contains player) {
        e.setDamage(e.getDamage()+intbod);
        }
    }
}