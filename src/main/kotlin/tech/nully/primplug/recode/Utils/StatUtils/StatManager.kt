package tech.nully.primplug.recode.Utils.StatUtils

import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

class StatManager {
    companion object {
        fun calculateStats(p: Player): List<Int> {
            val stats = ArrayList<Int>()

            for (i: ItemStack in p.inventory.armorContents) {
                for (s: String in i.itemMeta.lore) {
                    if (s.contains("${ChatColor.GREEN}Defense: ")) {
                        val lore = i.itemMeta.lore
                        val index = lore.indexOf(s)
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