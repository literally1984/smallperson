package tech.nully.primplug.magic;

import java.util.ArrayList;
import java.util.List;

import org.bukkit.ChatColor;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.entity.Arrow;
import org.bukkit.entity.Entity;
import org.bukkit.entity.Fireball;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.util.Vector;

public class spellCast {

    private static List<String> fireballLore = new ArrayList<String>();
    private static List<String> explosionLore = new ArrayList<String>();
    private static List<String> thousandCutsLore = new ArrayList<String>();
    private static List<String> ArrowRainLore = new ArrayList<String>();
    private static List<String> meteorShowerLore = new ArrayList<String>();
    
    private static ItemStack fireballSpell;

    public boolean IsSpell(ItemStack item) {
        if (fireballSpell.getItemMeta().getLore() == fireballLore) {
            return true;
        }
        return false;
    }

    public void createSpells() {
        ItemStack fireball = new ItemStack(Material.FIREBALL);
        ItemMeta fireballMeta = fireball.getItemMeta();

        fireballMeta.setDisplayName(ChatColor.GOLD + "FIREBALL");
        fireballLore.add(ChatColor.YELLOW + "Right click to cast a fireball spell");

    }


    public void castFireBall(Player p) {
        double pitch = ((p.getLocation().getPitch() + 90) * Math.PI) / 180;
        double yaw = ((p.getLocation().getYaw() + 90) * Math.PI) / 180;

        double x = Math.sin(pitch) * Math.cos(yaw);
        double y = Math.sin(pitch) * Math.sin(yaw);
        double z = Math.cos(pitch);


        Location spawnAt = p.getEyeLocation().toVector().add(p.getEyeLocation().getDirection()).toLocation(p.getWorld());
        Fireball spell = p.getWorld().spawn(spawnAt, Fireball.class);

        Vector vector = new Vector(x, z, y);

        spell.setDirection(vector.multiply(10));
        spell.setBounce(false);
        spell.setIsIncendiary(false);
        spell.setYield(4F);


    }

    // ! untested
    public void castArrowRain(Player p) {
        Location loc = p.getLocation();
        Arrow arrow = (Arrow)p.getWorld().spawn(loc.add(0, 3, 0), Arrow.class);
        outerloop: for (double i = 0.5; i < 12; i+=0.5){ //This will rapidly increase the range so you don't get so many mobs at one, and instead checks a few blocks at a time
            for (Entity e : arrow.getNearbyEntities(i, 3, i)){ //Gets ALL nearby entities using the loop variable above it
                if (e != arrow.getShooter()){ //Checks to make sure the entities isn't the shooter
                    if (e.getType().isAlive()){ //Checks to make sure the entity is alive
                        Location from = arrow.getLocation(); //Gets the arrows location
                        Location to = e.getLocation(); //Gets the entities Location
                        Vector vFrom = from.toVector(); //Converts the from location to a vector
                        Vector vTo = to.toVector(); //Converts the to location to a vector
                        Vector direction = vTo.subtract(vFrom).normalize(); //Subtracts the to variable to the from variable and normalizes it.
                        arrow.setVelocity(direction); //Sets the arrows newfound direction
                        break outerloop;
                    }
                }
            }

        }
    }


    public void castMetorShower(Player p) {
        Location from = p.getLocation().add(0, 6, 0);

        Fireball meteor = p.getWorld().spawn(from, Fireball.class);

    }

}
