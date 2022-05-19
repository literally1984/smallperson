package tech.nully.primplug.API;

import org.bukkit.entity.Player;

public class PrimPlayer {

    private Player p;

    private int Mana;

    private int MaxMana;

    private int Stamina;
    private int MaxStamina;

    private boolean isInForm;
    private String form;
    
    public PrimPlayer(Player p) {
        this.p = p;

        this.Mana = 10;
        this.MaxMana = 10;
        
        this.Stamina = 10;
        this.MaxStamina = 10;
        this.isInForm = false;
        this.form = "null";
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

    public boolean checkInForm() {
        return this.isInForm;
    }

    public String getForm() {
        return this.form;
    }


}
