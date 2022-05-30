package tech.nully.primplug.magic;

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

import java.util.ArrayList;
import java.util.List;

public class spellCast {

    private static List<String> fireballLore = new ArrayList<String>();
    private static List<String> thousandCutsLore = new ArrayList<String>();
    private static List<String> ArrowRainLore = new ArrayList<String>();
    private static List<String> meteorShowerLore = new ArrayList<String>();
    
    private static ItemStack fireballSpell;

    public boolean IsSpell(ItemStack item) {
        if (item.getItemMeta().getLore() == fireballLore) {
            return true;
            // TODO: Finish this Flag: Labor
        }
        return false;
    }

    public void createSpells() {
        ItemStack fireball = new ItemStack(Material.FIREBALL);
        ItemMeta fireballMeta = fireball.getItemMeta();

        fireballMeta.setDisplayName(ChatColor.GOLD + "FIREBALL");
        fireballLore.add(ChatColor.YELLOW + "Right click to cast a fireball spell");

    }

    // ------------ Everything below here i copied from bukkit forums so i have no idea what it does lmao------------------------
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
        arrow.setVelocity(p.getLocation().getDirection());
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

    // --- I think im starting to get what im doing beyond this point---
    public void castMetorShower(Player p) {
        if (p.getItemInHand().getItemMeta().getLore().equals(meteorShowerLore)) {
            Location from = p.getLocation().add(0, 6, 0);

        Fireball meteor = p.getWorld().spawn(from, Fireball.class);
        Fireball meteor2 = p.getWorld().spawn(from, Fireball.class);
        Fireball meteor3 = p.getWorld().spawn(from, Fireball.class);
        Fireball meteor4 = p.getWorld().spawn(from, Fireball.class);
        Fireball meteor5 = p.getWorld().spawn(from, Fireball.class);
        Fireball meteor6 = p.getWorld().spawn(from, Fireball.class);
        Location loc = p.getLocation().subtract(0, 0, 45);
        Location loc2 = p.getLocation().subtract(0, 0, 20);
        Vector vec = loc.toVector();
        Vector vec2 = loc2.toVector();

        meteor.setDirection(vec);
        meteor2.setDirection(vec);
        meteor3.setDirection(vec);
        meteor4.setDirection(vec2);
        meteor5.setDirection(vec2);
        meteor6.setDirection(vec2);
        }
    }

}
