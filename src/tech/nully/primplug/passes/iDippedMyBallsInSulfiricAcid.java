package tech.nully.primplug.passes;

public class IDippedMyBallsInSulfiricAcid implements Listener{
    public void ballsDip(PlayerInteractEvent e) {
        Player p = e.getPlayer();
        if (p.getItemInHand == Talisman.MisoTheRabbit) {
            p.getInventory.addItem(Talisman.BladeOfDespair);
            p.sendMessage("You have dipped ur balz in sulfuric acid and received a pass for it lmao");
            p.setHealth(1);
        if (p.getHealth > 1) {
            p.setHealth(1);
        }
        }
    }
}