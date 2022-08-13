package games.bnogocarft.bnogorpg.Utils.StatUtils

import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack

data class ItemStat(val item: ItemStack) {
    constructor(stats: List<Int>, item: ItemStack) : this(item) {
        damage = stats[0]
        defense = stats[1]
        magicDmg = stats[2]
        magicDef = stats[3]
        mana = stats[4]
        stamina = stats[5]
    }

    var damage: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+")) {
                    val index = item.itemMeta.lore.indexOf(s)
                    print("line found")
                    val copy = item.itemMeta.clone()
                    val copylore = ArrayList<String>()
                    copylore.addAll(copy.lore)
                    copylore[index] = "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+$field"
                    print("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+$field")
                    print(copylore[index])
                    copy.lore = copylore
                    item.itemMeta = copy
                    print(item.itemMeta.lore[index])
                }
            }
        }
    var defense: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+")) {
                    val copy = item.itemMeta.clone()
                    val lore = copy.lore
                    lore[lore.indexOf(s)] = "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+$value"
                    item.itemMeta = copy
                }
            }
        }
    var magicDmg: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+")) {
                    val copy = item.itemMeta.clone()
                    val lore = copy.lore
                    lore[lore.indexOf(s)] = "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+$value"
                    item.itemMeta = copy
                }
            }
        }
    var magicDef: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+")) {
                    val copy = item.itemMeta.clone()
                    val lore = copy.lore
                    lore[lore.indexOf(s)] = "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+$value"
                    item.itemMeta = copy
                }
            }
        }
    var mana: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+")) {
                    val copy = item.itemMeta.clone()
                    val lore = copy.lore
                    lore[lore.indexOf(s)] = "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+$value"
                    item.itemMeta = copy
                }
            }
        }
    var stamina: Int = 0
        set(value) {
            field = value
            for (s: String in item.itemMeta.lore) {
                if (s.contains("${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+")) {
                    val copy = item.itemMeta.clone()
                    val lore = copy.lore
                    lore[lore.indexOf(s)] = "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+$value"
                    item.itemMeta = copy
                }
            }
        }

    init {
        for (s: String in item.itemMeta.lore) {
            if (s.contains("Damage: +")) {
                val lore = item.itemMeta.lore
                val indexOfS = lore.indexOf(s)

                damage = s.split(": +")[1].toInt()// Damage
                defense = lore[indexOfS + 1].split(": ${ChatColor.GRAY}+")[1].toInt()// defense
                magicDmg = lore[indexOfS + 2].split(": ${ChatColor.GRAY}+")[1].toInt()// magic damage
                magicDef = lore[indexOfS + 3].split(": ${ChatColor.GRAY}+")[1].toInt()// magic defense
                mana = lore[indexOfS + 4].split(": ${ChatColor.GRAY}+")[1].toInt()// mana
                stamina = lore[indexOfS + 5].split(": ${ChatColor.GRAY}+")[1].toInt()// stamina
            }
        }
    }
}