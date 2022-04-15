package tech.nully.primplug.passes;

import org.bukkit.entity.Player;
import org.bukkit.event.Listener;
import org.bukkit.event.block.Action;
import org.bukkit.event.player.PlayerInteractEvent;

import tech.nully.primplug.Talismans.Talisman;

public class iDippedMyBallsInSulfiricAcid implements Listener{
    public void ballsDip(PlayerInteractEvent e) {
        if (e.getAction() == Action.RIGHT_CLICK_AIR) {
            Player p = e.getPlayer();
            if (p.getItemInHand() == Talisman.MisoTheRabbit) {
                p.getInventory().addItem(Talisman.BladeOfDespair);
                p.sendMessage("You have dipped ur balz in sulfuric acid and received a pass for it lmao");
                p.setHealth(1);
            if (p.getHealth() > 1) {
                p.setHealth(1);
                }
            }
        }
    }
}