package games.bnogocarft.bnogorpg.ItemUpgrade

import games.bnogocarft.bnogorpg.Utils.*
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.enchantments.Enchantment
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.LeatherArmorMeta

class UpgradeUtils {
    companion object {
        lateinit var gui: Inventory
        lateinit var atkItem: ItemStack
        lateinit var defItem: ItemStack
        lateinit var mAtkItem: ItemStack
        lateinit var mDefItem: ItemStack
        lateinit var manaItem: ItemStack
        lateinit var stamItem: ItemStack

    }

    init {
        createUpgradeGUI()
        createATKItem()
        createDEFItem()
        createMAGATKItem()
        createMAGDEFItem()
        createMANAItem()
        createSTAMItem()
    }

    private fun createATKItem() {
        val item = ItemStack(Material.DIAMOND_SWORD)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.DIAMOND_SWORD)
        meta.displayName = "${ChatColor.GREEN}Upgrade ${ChatColor.RED}Damage/Attack"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.YELLOW}Click this button to ${ChatColor.GREEN}upgrade ${ChatColor.YELLOW}your")
        lore.add("${ChatColor.YELLOW}item's ${ChatColor.RED}Damage/Attack ${ChatColor.BLUE}stat")

        meta.lore = lore
        item.itemMeta = meta
        item.addUnsafeEnchantment(Enchantment.DAMAGE_ALL, 10)
        atkItem = item
    }

    private fun createDEFItem() {
        val item = ItemStack(Material.DIAMOND_CHESTPLATE)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.DIAMOND_CHESTPLATE)
        meta.displayName = "${ChatColor.GREEN}Upgrade ${ChatColor.RED}Defense"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.YELLOW}Click this button to ${ChatColor.GREEN}upgrade ${ChatColor.YELLOW}your")
        lore.add("${ChatColor.YELLOW}item's ${ChatColor.GREEN}Defense ${ChatColor.BLUE}stat")

        meta.lore = lore
        item.itemMeta = meta
        item.addUnsafeEnchantment(Enchantment.PROTECTION_ENVIRONMENTAL, 10)
        defItem = item
    }

    private fun createMAGATKItem() {
        val item = ItemStack(Material.BLAZE_ROD)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.BLAZE_ROD)
        meta.displayName = "${ChatColor.GREEN}Upgrade ${ChatColor.RED}Damage/Attack"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.YELLOW}Click this button to ${ChatColor.GREEN}upgrade ${ChatColor.YELLOW}your")
        lore.add("${ChatColor.YELLOW}item's ${ChatColor.RED}Magic Attack/Damage ${ChatColor.BLUE}stat")

        meta.lore = lore
        item.itemMeta = meta
        item.addUnsafeEnchantment(Enchantment.ARROW_FIRE, 10)
        mAtkItem = item
    }

    private fun createMAGDEFItem() {
        val item = ItemStack(Material.LEATHER_CHESTPLATE)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.LEATHER_CHESTPLATE)
        meta.displayName = "${ChatColor.GREEN}Upgrade ${ChatColor.DARK_PURPLE}Magic Defense"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.YELLOW}Click this button to ${ChatColor.GREEN}upgrade ${ChatColor.YELLOW}your")
        lore.add("${ChatColor.YELLOW}item's ${ChatColor.DARK_PURPLE}Magic Defense ${ChatColor.BLUE}stat")

        val lMeta = meta as LeatherArmorMeta
        lMeta.color = Color.PURPLE

        meta.lore = lore
        item.itemMeta = meta
        item.addUnsafeEnchantment(Enchantment.PROTECTION_PROJECTILE, 10)
        mDefItem = item
    }

    private fun createMANAItem() {
        val item = ItemStack(Material.EYE_OF_ENDER)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.EYE_OF_ENDER)
        meta.displayName = "${ChatColor.GREEN}Upgrade ${ChatColor.AQUA}Mana"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.YELLOW}Click this button to ${ChatColor.GREEN}upgrade ${ChatColor.YELLOW}your")
        lore.add("${ChatColor.YELLOW}item's ${ChatColor.AQUA}Mana ${ChatColor.BLUE}stat")

        meta.lore = lore
        item.itemMeta = meta
        item.addUnsafeEnchantment(Enchantment.DURABILITY, 10)
        manaItem = item
    }

    private fun createSTAMItem() {
        val item = ItemStack(Material.BLAZE_POWDER)
        val meta = Bukkit.getItemFactory().getItemMeta(Material.BLAZE_POWDER)
        meta.displayName = "${ChatColor.GREEN}Upgrade ${ChatColor.GOLD}Stamina"
        val lore = ArrayList<String>()
        lore.add("${ChatColor.YELLOW}Click this button to ${ChatColor.GREEN}upgrade ${ChatColor.YELLOW}your")
        lore.add("${ChatColor.YELLOW}item's ${ChatColor.GOLD}Stamina ${ChatColor.BLUE}stat")

        meta.lore = lore
        item.itemMeta = meta
        item.addUnsafeEnchantment(Enchantment.DURABILITY, 10)
        stamItem = item
    }



    private fun createUpgradeGUI() {
        /*
        0  1  AT  3  4  5 MA  7  8
        9  10 11 12 DF 14 15 16 17
        18 19 DE 21 ES 23 MD 25 26
        27 28 29 30 MA 32 ST 34 35
        36 37 ST 39 40 41 MA 43 44
        45 46 47 48 49 50 51 52 53

        2  = attack
        20 = defense
        6  = magic atk
        24 = magic def
        42 = mana
        38 = stamina
        22 = empty slot
        */
        val fGui = GUIFactory.createInventory("Upgrade Item", 54)
        val backgroundItems = ArrayList<BackgroundItem>()

        // Sets the backgound
        for (index in 0..53) {
            backgroundItems.add(BackgroundItem(StandardBackground, index))
        }
        val backgroundLayer = GUILayer(ArrayList(), backgroundItems)

        val buttons = ArrayList<GUIButton>()
        buttons.add(GUIButton(atkItem, 2, ::upgradeATK))
        buttons.add(GUIButton(defItem, 20, ::upgradeDEF))
        buttons.add(GUIButton(mAtkItem, 6, ::upgradeMAGATK))
        buttons.add(GUIButton(mDefItem, 25, ::upgradeMAGDEF))
        buttons.add(GUIButton(stamItem, 38, ::upgradeSTAM))
        buttons.add(GUIButton(manaItem, 42, ::upgradeMANA))
        val layer2 = GUILayer(buttons, ArrayList())
        fGui.layers.add(backgroundLayer)
        fGui.layers.add(layer2)

        gui = GUIFactory.produceInventory(fGui)
    }

    fun upgradeATK(gui: OpenGUI) {
        val inv = gui.inv
        if (inv.getItem(22) != null) {
            val item = inv.getItem(22)
            if (BItemUtils.getBType(item) != null) {
                val gear = BItemUtils.getBGear(item)
                gear.stats.damage += 1
            }
        }
    }

    fun upgradeDEF(gui: OpenGUI) {
        val inv = gui.inv
        if (inv.getItem(22) != null) {
            val item = inv.getItem(22)
            if (BItemUtils.getBType(item) != null) {
                val gear = BItemUtils.getBGear(item)
                gear.stats.defense += 1
            }
        }
    }

    fun upgradeMAGATK(gui: OpenGUI) {
        val inv = gui.inv
        if (inv.getItem(22) != null) {
            val item = inv.getItem(22)
            if (BItemUtils.getBType(item) != null) {
                val gear = BItemUtils.getBGear(item)
                gear.stats.magicDmg += 1
            }
        }
    }

    fun upgradeMAGDEF(gui: OpenGUI) {
        val inv = gui.inv
        if (inv.getItem(22) != null) {
            val item = inv.getItem(22)
            if (BItemUtils.getBType(item) != null) {
                val gear = BItemUtils.getBGear(item)
                gear.stats.magicDef += 1
            }
        }
    }

    fun upgradeMANA(gui: OpenGUI) {
        val inv = gui.inv
        if (inv.getItem(22) != null) {
            val item = inv.getItem(22)
            if (BItemUtils.getBType(item) != null) {
                val gear = BItemUtils.getBGear(item)
                gear.stats.mana += 1
            }
        }
    }

    fun upgradeSTAM(gui: OpenGUI) {
        val inv = gui.inv
        if (inv.getItem(22) != null) {
            val item = inv.getItem(22)
            if (BItemUtils.getBType(item) != null) {
                val gear = BItemUtils.getBGear(item)
                gear.stats.stamina += 1
            }
        }
    }
}