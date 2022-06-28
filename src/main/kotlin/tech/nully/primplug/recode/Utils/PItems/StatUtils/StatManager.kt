package tech.nully.primplug.recode.Utils.PItems.StatUtils

import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

class StatManager {
    companion object {
        fun calculateStats(p: Player): List<Int> {
            val stats = ArrayList<Int>()

            // Loops through the players armor contents
            for (i: ItemStack in p.inventory.armorContents) {
                // Loops through each armor's lore
                for (s: String in i.itemMeta.lore) {
                    // If the current armor lore line contains "Defense:"
                    if (s.contains("${ChatColor.GREEN}Defense: ")) {
                        val lore = i.itemMeta.lore
                        val index = lore.indexOf(s)
                        // Split each stat in the lore by ": +"
                        val defense = s.split(": +".toRegex())[1].toInt()
                        val mdefense = lore.get(index + 2).split(": +".toRegex())[1].toInt()
                        val mana = lore.get(index + 3).split(": +".toRegex())[1].toInt()
                        val stamina = lore.get(index + 4).split(": +".toRegex())[1].toInt()

                        stats.add(defense)
                        stats.add(mdefense)
                        stats.add(mana)
                        stats.add(stamina)
                    }
                }
            }
            return stats
        }
    }
}