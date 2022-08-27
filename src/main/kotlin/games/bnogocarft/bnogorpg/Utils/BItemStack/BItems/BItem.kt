package games.bnogocarft.bnogorpg.Utils.BItemStack.BItems

import games.bnogocarft.bnogorpg.Utils.BItemStack.BItemType
import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.RarityUtils
import games.bnogocarft.bnogorpg.Utils.EnchantUtils.BEnchantment
import games.bnogocarft.bnogorpg.Utils.Exceptions.InvalidConstructorInputException
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack
import java.lang.NullPointerException

open class BItem(item: ItemStack) {
    val Enchants = ArrayList<BEnchantment>()

    var material: BMaterial

    /*var lastUpdate: Update =
        when (decode(item.itemMeta.lore[item.itemMeta.lore.size - 1].split(" ")[1])) {
            "002" -> Update.zerozerotwo
            else -> Update.zerozerotwo
        }*/
    var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size - 1].split(" ")[0])
    var type: BItemType =
        try {
            when (item.itemMeta.lore[item.itemMeta.lore.size - 1].split(" ")[0]) {
                "${ChatColor.GOLD}${ChatColor.ITALIC}Talisman" -> BItemType.TALISMAN
                "${ChatColor.GOLD}${ChatColor.ITALIC}Ability Scroll" -> BItemType.SCROLL
                "${ChatColor.GOLD}${ChatColor.ITALIC}Weapon" -> BItemType.WEAPON
                "${ChatColor.GOLD}${ChatColor.ITALIC}Armor Item" -> BItemType.ARMOR
                else -> {
                    BItemType.MISC
                }
            }
        } catch (e: NullPointerException) {
            throw InvalidConstructorInputException("No type identifier found in item lore")
        }
    private var enchantLine: Int = 0

    init {
        if (!(item.hasItemMeta())) {
            throw InvalidConstructorInputException("ItemStack does not have an ItemMeta")
        }
        val lore = item.itemMeta.lore
        for (clore in lore) {
            if (clore.contains("${ChatColor.BLUE}Enchantments:")) { // Gets the line that marks the start of enchantments
                enchantLine = lore.indexOf(clore)
                var index = item.itemMeta.lore.indexOf(clore) + 1 // Gets the index of the line after the marker above
                while (!(lore[index].equals(""))) { // Loops through the enchants until it finds "" which is the seperator
                    index++
                    val enchantsInLine = clore.split(", ")
                    for (enchant in enchantsInLine) {
                        //Enchants.add(EnchantUtils.parseEnchant(enchant))
                        TODO("Add enchant parsing")
                    }
                }
                continue
            }
        }

        material = if (this !is BGear) {
            BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
        } else {
            val name = item.itemMeta.displayName
            try {
                BMaterial.valueOf(name.replace(" ", "_").uppercase())
            } catch (e: IllegalArgumentException) {
                val newNmae = name.split(" ").toMutableList()
                newNmae.removeAt(0)
                val newName = newNmae.joinToString("_").uppercase()
                BMaterial.valueOf(newName)
            }
        }
    }

    fun addEnchantment(enchantment: BEnchantment) {
        Enchants.add(enchantment)
    }

    fun removeEnchantment(enchantment: BEnchantment) {
        Enchants.remove(enchantment)
    }
}