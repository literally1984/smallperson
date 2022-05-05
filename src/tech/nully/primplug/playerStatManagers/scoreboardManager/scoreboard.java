package tech.nully.primplug.playerStatManagers.scoreboardManager;

import java.util.HashMap;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.scoreboard.DisplaySlot;
import org.bukkit.scoreboard.Objective;
import org.bukkit.scoreboard.Score;
import org.bukkit.scoreboard.Scoreboard;
import org.bukkit.scoreboard.ScoreboardManager;

import tech.nully.primplug.playerStatManagers.manaManager.manaManager;
import tech.nully.primplug.playerStatManagers.staminaManager.staminaManager;

public class scoreboard {
    public void makeScoreBoard() {
        ScoreboardManager manager = Bukkit.getScoreboardManager();
        manaManager m = new manaManager();
        staminaManager s = new staminaManager();
        
        HashMap<String, Scoreboard> playerBoards = new HashMap<String, Scoreboard>();
        for (Player p : Bukkit.getServer().getOnlinePlayers()) {
            Scoreboard board = manager.getNewScoreboard();
            Objective obj = board.registerNewObjective("epikBoard", "dummy");
            obj.setDisplaySlot(DisplaySlot.SIDEBAR);
            Score manaScore = obj.getScore(Bukkit.getServer().getOfflinePlayer(ChatColor.AQUA + "Mana :"));
            manaScore.setScore(m.getMana(p));
            Score staminaScore = obj.getScore(Bukkit.getServer().getOfflinePlayer(ChatColor.AQUA + "Stamina :"));
            staminaScore.setScore(s.getStamina(p));
            p.setScoreboard(board);
            playerBoards.put(p.getDisplayName(), board);
        }
    }
}
