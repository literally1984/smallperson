package tech.nully.primplug.Talismans;

import java.util.HashMap;

import org.bukkit.inventory.ItemStack;

public class talismanIdentifier {
    public HashMap<Integer, String> TalismanIDs;
    public HashMap<String, Integer> TalismanName;
    public void talismanIDput() {
        // put the names and ID's into hashmaps
        TalismanIDs = new HashMap<Integer, String>();
        TalismanName = new HashMap<String, Integer>();
        TalismanIDs.put(1, Talisman.BladeOfDespair.getItemMeta().getDisplayName());
        TalismanIDs.put(2, "BOD");
        TalismanIDs.put(3, "Miso");
        TalismanName.put(Talisman.BladeOfDespair.getItemMeta().getDisplayName(), 1);
        TalismanName.put(Talisman.BlessingOfDurability.getItemMeta().getDisplayName(), 2);
        TalismanName.put(Talisman.MisoTheRabbit.getItemMeta().getDisplayName(), 3);
    }

    // read the name and return an int
    public int talismanRead(String TalisName) {
        int TalismanID = TalismanName.get(TalisName);
        return TalismanID;
    }

    // read a int and return the name
    public String talismanIDRead(Integer TalismanID) {
        // check if ID is valid
        if (TalismanID == 1 || TalismanID == 2 || TalismanID == 3) {
            String TalisName = TalismanIDs.get(TalismanID);
            // Talisman name is the output of the string
            switch (TalisName) {
                case "COD":
                    String CODname = Talisman.BladeOfDespair.getItemMeta().getDisplayName();
                    return CODname;
                case "BOD":
                    String BODname = Talisman.BlessingOfDurability.getItemMeta().getDisplayName();
                    return BODname;
                case "Miso":
                    String MisoName = Talisman.MisoTheRabbit.getItemMeta().getDisplayName();
                    return MisoName;
            }
        } else {
            throw new IllegalArgumentException("Invalid ID");
        }
        String invalid = "";
        return invalid;
    }
    // isTalisman checker
    public boolean isTalisman(ItemStack item) {
        String CODName = Talisman.BladeOfDespair.getItemMeta().getDisplayName();
        String BODName = Talisman.BlessingOfDurability.getItemMeta().getDisplayName();
        String MISOName = Talisman.MisoTheRabbit.getItemMeta().getDisplayName();
        if (item.getItemMeta().getDisplayName().equals(CODName) || 
            item.getItemMeta().getDisplayName().equals(BODName) || 
            item.getItemMeta().getDisplayName().equals(MISOName)) {
            return true;
        } else return false;
    }

    public ItemStack convertToItem(String itemName) {

    }
}
