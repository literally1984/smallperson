package tech.nully.primplug.passes;

public class PetheriteSet {

    public static ItemStack IDIppedPass;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createPetheriteHelm();
        createPetheriteChestplate();
        createPetheriteLeggings();
        createPetheriteBoots();
    }

    private static void createIDppedPass() {
        // DEFINE THE META -------------
        ItemStack IDIpped = new ItemStack(Material.LEATHER_HELMET);
        ItemMeta IDIppedMeta = IDIpped.hasItemMeta() ? IDIpped.getItemMeta() : Bukkit.getItemFactory().getItemMeta(IDIpped.getType());


        // SET THE META ----------------
        IDIppedMeta.setDisplayName("I dipped my balls in sulfiric acid PASS");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("This pass is obtained by proving");
        Helmlore.add("through a test that one is the");
        Helmlore.add("ultimate sigma male");
        IDIppedMeta.setLore(Helmlore);



        IDIpped.setItemMeta(IDIppedMeta);
        IDIppedPass = IDIpped;
    }