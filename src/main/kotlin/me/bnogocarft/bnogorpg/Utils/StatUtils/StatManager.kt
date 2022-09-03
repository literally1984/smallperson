package me.bnogocarft.bnogorpg.Utils.StatUtils

import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

class StatManager {
    companion object {
        fun calculateStats(p: Player): List<Int> {
            val stats = ArrayList<Int>()
            stats.add(0)
            stats.add(0)
            stats.add(20)
            stats.add(20)
            stats.add(1)

            // Loops through the players armor contents
            for (i: ItemStack in p.inventory.armorContents) {
                // Loops through each armor's lore
                if (i.hasItemMeta() && i.itemMeta.hasLore()) {
                    for (s: String in i.itemMeta.lore) {
                        // If the current armor lore line contains "Defense:"
                        if (s.contains("${ChatColor.GREEN}Defense: ")) {
                            val lore = i.itemMeta.lore
                            val index = lore.indexOf(s)
                            // Split each stat in the lore by ": +"
                            val defense = s.split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()
                            val mdefense = lore.get(index + 2).split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()
                            val mana = lore.get(index + 3).split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()
                            val stamina = lore.get(index + 4).split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()
                            val damage = lore.get(index - 1).split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()

                            stats[0] += defense
                            stats[1] += mdefense
                            stats[2] += mana
                            stats[3] += stamina
                            stats[4] += damage
                        }
                    }
                }
            }
            return stats
        }
    }
}