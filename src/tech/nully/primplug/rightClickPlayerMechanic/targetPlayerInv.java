package tech.nully.primplug.rightClickPlayerMechanic;

public class targetPlayerInv {
    public void getPlayerInv(Player p) {
        Inventory inv = Bukkit.createInventory(null, 54, ChatColor.GREEN + p.getDisplayName() + "'s" + "Specs");
        ItemStack playerWeapon = new ItemStack(Material.AIR);
        for (int i = 0; i < 10; i++) {
            if (p.getInventory().getItem(i).getDisplayName().contains("sword") || 
                p.getInventory().getItem(i).getDisplayName().contains("blade")) {
                    playerWeapon = p.getInventory().getItem(i);
                }
        }
        inv.setItem(10, p.getHelmet());
        inv.setItem(19, p.getChestplate());
        inv.setItem(28, p.getLeggings());
        inv.setItem(37, p.getBoots());
        inv.setItem(21, playerWeapon);
    }
}
