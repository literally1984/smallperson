package games.bnogocarft.bnogorpg.Utils.StatUtils

import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack

data class ItemStat(val item: ItemStack) {
    var damage: Int = 0
        set(value) {
            for (s: String in item.itemMeta.lore) {
                if (s.contains("Damage: +")) {
                    val lore = item.itemMeta.lore
                    lore[lore.indexOf(s)] = "${ChatColor.RED}Damage: +$value"
                }
            }
            field = value
        }
    var defense: Int = 0
        set(value) {
            for (s: String in item.itemMeta.lore) {
                if (s.contains("Defense: +")) {
                    val lore = item.itemMeta.lore
                    lore[lore.indexOf(s)] = "${ChatColor.GREEN}Defense: +$value"
                }
            }
            field = value
        }
    var magicDmg: Int = 0
        set(value) {
            for (s: String in item.itemMeta.lore) {
                if (s.contains("Magic Damage: +")) {
                    val lore = item.itemMeta.lore
                    lore[lore.indexOf(s)] = "${ChatColor.LIGHT_PURPLE}Magic Damage: +$value"
                }
            }
            field = value
        }
    var magicDef: Int = 0
        set(value) {
            for (s: String in item.itemMeta.lore) {
                if (s.contains("Magic Defense: +")) {
                    val lore = item.itemMeta.lore
                    lore[lore.indexOf(s)] = "${ChatColor.DARK_PURPLE}Magic Defense: +$value"
                }
            }
            field = value
        }
    var mana: Int = 0
        set(value) {
            for (s: String in item.itemMeta.lore) {
                if (s.contains("Mana: +")) {
                    val lore = item.itemMeta.lore
                    lore[lore.indexOf(s)] = "${ChatColor.AQUA}Mana: +$value"
                }
            }
            field = value
        }
    var stamina: Int = 0
        set(value) {
            for (s: String in item.itemMeta.lore) {
                if (s.contains("Stamina: +")) {
                    val lore = item.itemMeta.lore
                    lore[lore.indexOf(s)] = "${ChatColor.GOLD}Stamina: +$value"
                }
            }
            field = value
        }
    init {
        for (s: String in item.itemMeta.lore) {
            if (s.contains("Damage: +")) {
                val lore = item.itemMeta.lore
                val indexOfS = lore.indexOf(s)

                damage = s.split(": +")[1].toInt()// Damage
                defense = lore[indexOfS + 1].split(": +")[1].toInt()// defense
                magicDmg = lore[indexOfS + 2].split(": +")[1].toInt()// magic damage
                magicDef = lore[indexOfS + 3].split(": +")[1].toInt()// magic defense
                mana = lore[indexOfS + 4].split(": +")[1].toInt()// mana
                stamina = lore[indexOfS + 5].split(": +")[1].toInt()// stamina

            }
        }
    }
}