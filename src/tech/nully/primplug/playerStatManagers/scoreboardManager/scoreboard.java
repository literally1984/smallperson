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
    //! WARNINING: the makeScoreBoard method does not have a hashMap checker so you have to make one yourself when calling it

    private HashMap<String, Scoreboard> playerBoards = new HashMap<String, Scoreboard>();
    public void makeScoreBoard(Player p) {
        ScoreboardManager manager = Bukkit.getScoreboardManager();
        manaManager m = new manaManager();
        staminaManager s = new staminaManager();

        Scoreboard board = manager.getNewScoreboard();
        Objective obj = board.registerNewObjective("epikBoard", "dummy");
        obj.setDisplaySlot(DisplaySlot.SIDEBAR);
        Score manaScore = obj.getScore(Bukkit.getServer().getOfflinePlayer((ChatColor.AQUA + "" + m.getMana(p) + "/" + m.getMaxMana(p))));
        manaScore.setScore(1);
        Score staminaScore = obj.getScore(Bukkit.getServer().getOfflinePlayer(ChatColor.AQUA + "" + s.getStamina(p) + "/" + s.getMaxStamina(p)));
        staminaScore.setScore(2);
        p.setScoreboard(board);
        playerBoards.put(p.getDisplayName(), board);
    }

    public Scoreboard getScore(Player p) {
        Scoreboard epikReturn = playerBoards.get(p);
        return epikReturn;
    }

    public void updateScoreboard(Player p) {
        manaManager m = new manaManager();
        staminaManager s = new staminaManager();
        Scoreboard board = playerBoards.get(p.getDisplayName());
        Objective obj = board.registerNewObjective("epikBoard", "dummy");
        obj.setDisplaySlot(DisplaySlot.SIDEBAR);
        Score manaScore = obj.getScore(Bukkit.getServer().getOfflinePlayer((ChatColor.AQUA + "" + m.getMana(p) + "/" + m.getMaxMana(p))));
        manaScore.setScore(1);
        Score staminaScore = obj.getScore(Bukkit.getServer().getOfflinePlayer(ChatColor.AQUA + "" + s.getStamina(p) + "/" + s.getMaxStamina(p)));
        staminaScore.setScore(2);
        p.setScoreboard(board);
        playerBoards.put(p.getDisplayName(), board);
    }
}
