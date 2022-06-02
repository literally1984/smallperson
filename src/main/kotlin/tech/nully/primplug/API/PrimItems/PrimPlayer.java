package tech.nully.primplug.API.PrimItems;

import org.bukkit.entity.Player;
import tech.nully.primplug.fileSystem.file;

import java.util.HashMap;
import java.util.List;

public class PrimPlayer {

    private static HashMap<Player, PrimPlayer> players = new HashMap<Player, PrimPlayer>();

    private Player p;

    private int Mana;

    private int MaxMana;

    private int Stamina;
    private int MaxStamina;
    private int bounty;

    private boolean isInForm;
    private String form;

    private List<String> Talisman;
    private List<String> Spells;

    private file file = new file();

    public PrimPlayer(Player p) {
        this.p = p;

        this.Mana = 10;
        this.MaxMana = 10;

        this.Stamina = 10;
        this.MaxStamina = 10;
        this.isInForm = false;
        this.form = "null";

        this.Spells = file.readFile(file.getFileConfig(p.getDisplayName()), "Spells");
        this.Talisman = file.readFile(file.getFileConfig(p.getDisplayName()), "Talisman");

        players.put(p, this);
    }


    public static PrimPlayer getPrimPlayer(Player p) {
        return players.get(p);
    }

    public List<String> getTalismans() {
        return this.Talisman;
    }

    public List<String> getSpells() {
        return this.Spells;
    }

    public Player getPlayer() {
        return this.p;
    }

    // Mana Getters and Setters
    public int getMana() {
        return this.Mana;
    }

    public int getMaxMana() {
        return this.MaxMana;
    }

    public void setMana(int amount) {
        this.Mana = amount;
    }
    public void setMaxMana(int amount) {
        this.Mana = amount;
    }

    // Stamina Getters and Setters
    public int getStamina() {
        return this.Stamina;
    }

    public int getMaxStamina() {
        return this.MaxStamina;
    }

    public void setMaxStamina(int amount) {
        this.MaxStamina = amount;
    }
    public void setStamina(int amount) {
        this.MaxStamina = amount;
    }

    public boolean checkInForm() {
        return this.isInForm;
    }

    public String getForm() {
        return this.form;
    }
}
