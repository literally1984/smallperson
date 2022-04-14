public class PetheriteSet {

    public static ItemStack epikPhone;
    public static ItemStack ches;
    public static ItemStack leg;
    public static ItemStack boots;

    public static void init() {
        createPhone();
    }

    private static void createPhone() {
        // DEFINE THE META -------------
        ItemStack phone = new ItemStack(Material.IRON_INGOT);
        ItemMeta phoneMeta = phone.hasItemMeta() ? phone.getItemMeta() : Bukkit.getItemFactory().getItemMeta(phone.getType());


        // SET THE META ----------------
        phoneMeta.setDisplayName("Cell Phone");
            // HelmLore
        List<String> Helmlore = new ArrayList<>();
        Helmlore.add("A phone used to open apps");
        phoneMeta.setLore(Helmlore);


        phone.setItemMeta(phoneMeta);
        epikPhone = phone;
    }