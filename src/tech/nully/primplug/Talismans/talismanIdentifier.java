package tech.nully.primplug.Talismans;

import java.util.HashMap;

public class talismanIdentifier {
    public HashMap<Integer, String> TalismanIDs;
    public HashMap<String, Integer> TalismanName;
    public void talismanIDput() {
        TalismanIDs = new HashMap<Integer, String>();
        TalismanName = new HashMap<String, Integer>();
        TalismanIDs.put(1, Talisman.BladeOfDespair.getItemMeta().getDisplayName());
        TalismanIDs.put(2, "BOD");
        TalismanIDs.put(3, "Miso");
        TalismanName.put("COD", 1);
        TalismanName.put("BOD", 2);
        TalismanName.put("Miso", 3);
    }
    public int talismanRead(String TalisName) {
        int TalismanID = TalismanName.get(TalisName);
        return TalismanID;
    }
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
}
