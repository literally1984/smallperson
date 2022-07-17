package games.bnogocarft.bnogorpg.upgradeItems;

import java.util.List;

import org.bukkit.inventory.ItemStack;

public class upgradeUpdate {
    public int getStatTotal(ItemStack i) {
        List<String> itemLore = i.getItemMeta().getLore();
        int DamageLine = 0;
        for (String s : itemLore) {
            if (s.contains("Damage: ")){
                DamageLine = itemLore.indexOf(s);
            }
        }
        int DefenseLine = DamageLine+1;
        int manaLine = DamageLine+2;
        int staminaLine = DamageLine+3;

        String[] DmageLineArr = itemLore.get(DamageLine).split(" ");
        int damageInt = Integer.parseInt(DmageLineArr[1]);

        String[] DefLineArr = itemLore.get(DefenseLine).split(" ");
        int defeInt = Integer.parseInt(DefLineArr[1]);

        String[] manaLineArr = itemLore.get(manaLine).split(" ");
        int manaInt = Integer.parseInt(manaLineArr[1]);

        String[] stamLineArr = itemLore.get(staminaLine).split(" ");
        int stamInt = Integer.parseInt(stamLineArr[1]);

        int total = damageInt + defeInt + manaInt + stamInt;

        return total;
    }

    public void damageAdd(ItemStack i) {


        List<String> itemLore = i.getItemMeta().getLore();
        int correctLine = 0;


        for (String s : itemLore) {
            if (s.contains("Damage: ")){
                correctLine = itemLore.indexOf(s);
                break;
            }
        }
        String[] loreArray = itemLore.get(correctLine).split(" ");
        int damage = Integer.parseInt(loreArray[1]) + 1;
        itemLore.set(correctLine, "Damage: " + damage);
        i.getItemMeta().setLore(itemLore);
        i.setItemMeta(i.getItemMeta());
    }

    public void defAdd(ItemStack i) {


        List<String> itemLore = i.getItemMeta().getLore();
        int correctLine = 0;


        for (String s : itemLore) {
            if (s.contains("Defense: ")){
                correctLine = itemLore.indexOf(s);
                break;
            }
        }
        String[] loreArray = itemLore.get(correctLine).split(" ");
        int defense = Integer.parseInt(loreArray[1]) + 1;
        itemLore.set(correctLine, "Defense: " + defense);
        i.getItemMeta().setLore(itemLore);
        i.setItemMeta(i.getItemMeta());
    }

    public void manaAdd(ItemStack i) {


        List<String> itemLore = i.getItemMeta().getLore();
        int correctLine = 0;


        for (String s : itemLore) {
            if (s.contains("Mana: ")){
                correctLine = itemLore.indexOf(s);
                break;
            }
        }
        String[] loreArray = itemLore.get(correctLine).split(" ");
        int mana = Integer.parseInt(loreArray[1]) + 1;
        itemLore.set(correctLine, "Mana: " + mana);
        i.getItemMeta().setLore(itemLore);
        i.setItemMeta(i.getItemMeta());
    }

    public void stamAdd(ItemStack i) {


        List<String> itemLore = i.getItemMeta().getLore();
        int correctLine = 0;


        for (String s : itemLore) {
            if (s.contains("Stamina: ")){
                correctLine = itemLore.indexOf(s);
                break;
            }
        }
        String[] loreArray = itemLore.get(correctLine).split(" ");
        int stamina = Integer.parseInt(loreArray[1]) + 1;
        
        itemLore.set(correctLine, "Stamina: " + stamina);
        i.getItemMeta().setLore(itemLore);
        i.setItemMeta(i.getItemMeta());
    }
}
