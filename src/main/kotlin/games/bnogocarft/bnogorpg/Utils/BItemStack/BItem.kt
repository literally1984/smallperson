package games.bnogocarft.bnogorpg.Utils.BItemStack

import games.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.RarityUtils
import games.bnogocarft.bnogorpg.Utils.EnchantUtils.BEnchantment
import games.bnogocarft.bnogorpg.Utils.EnchantUtils.EnchantUtils
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack

open class BItem(item: ItemStack) {
    val Enchants = ArrayList<BEnchantment>()
    var exp: Long = 0
    var level: Long = 0
    var bMaterial: BMaterial
    var rarity = RarityUtils.getRarity(item.itemMeta.lore[item.itemMeta.lore.size - 1])

    private val lore = item.itemMeta.lore

    init {
        for (clore in lore) {
            if (lore.contains("${ChatColor.BLUE}Enchantments:")) { // Gets the line that marks the start of enchantments
                var index = item.itemMeta.lore.indexOf(clore) + 1 // Gets the index of the line after the marker above
                while (lore[index].toString() != "") { // Loops through the enchants until it finds "" which is the seperator
                    index++
                    val enchantsInLine = clore.split(", ")
                    for (enchant in enchantsInLine) {
                        Enchants.add(EnchantUtils.parseEnchant(enchant))
                    }
                }
                continue
            }

            if (lore.contains("Level:")) {
                level = clore.split(" ")[1].toLong()
                exp = lore[lore.indexOf(clore) + 1].split(" ")[1].split("/")[0].toLong()
            }
        }

        bMaterial = if (this !is BGear) {
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
}