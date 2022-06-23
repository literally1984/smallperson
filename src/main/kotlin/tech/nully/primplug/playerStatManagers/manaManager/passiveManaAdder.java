package tech.nully.primplug.playerStatManagers.manaManager;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;

public class passiveManaAdder {
    public void addMana() {
        manaManager m = new manaManager();
        Bukkit.getServer().getScheduler().scheduleSyncRepeatingTask(Main.getInstance(), new Runnable() {
            public void run() {
                for (Player p : Bukkit.getOnlinePlayers()) {
                    if (m.getMana(p) < m.getMaxMana(p)) {
                        m.addMana(p, m.getMaxMana(p)/70);
                    } else {
                        return;
                    }
                }
            }
        }, 15, 15);
    }
}
