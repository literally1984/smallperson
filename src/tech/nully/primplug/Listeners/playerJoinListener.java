package tech.nully.primplug.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

import tech.nully.primplug.playerStatManagers.defenseManager.defenseManager;
import tech.nully.primplug.playerStatManagers.manaManager.manaManager;
import tech.nully.primplug.playerStatManagers.scoreboardManager.scoreboard;
import tech.nully.primplug.playerStatManagers.staminaManager.staminaManager;

public class playerJoinListener implements Listener{
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        manaManager m = new manaManager();
        staminaManager s = new staminaManager();
        defenseManager d = new defenseManager();
        scoreboard score = new scoreboard();

        score.makeScoreBoard(e.getPlayer());
        m.setMaxMana(e.getPlayer());
        s.setMaxStamina(e.getPlayer());
        d.setMaxdefense(e.getPlayer());
    }
}
