package me.bnogocarft.bnogorpg.utils.stat

import me.bnogocarft.bnogorpg.utils.put
import me.bnogocarft.bnogorpg.utils.setGear
import org.bukkit.ChatColor
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

class StatManager {
    companion object {
        fun calculateStats(p: Player): HashMap<String, Int> {
            val stats = HashMap<String, Int>()

            // Loops through the players armor contents
            for (i in p.inventory.armorContents) {
                if (i != null) {
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

                                stats["def"] = defense
                                stats["mdef"] = mdefense
                                stats["mana"] = mana
                                stats["stam"] = stamina
                                stats["atk"] = damage
                            }
                        }
                    }
                }
            }
            return stats
        }

        fun calculateEntityStats(entity: LivingEntity): HashMap<String, Int> {
            val gear = arrayListOf(
                entity.equipment.helmet,
                entity.equipment.chestplate,
                entity.equipment.leggings,
                entity.equipment.boots,
                entity.equipment.itemInHand
            )

            val stats = HashMap<String, Int>()

            for (armor in gear) {
                if (armor != null) {
                    // Loops through each armor's lore
                    if (armor.hasItemMeta() && armor.itemMeta.hasLore()) {
                        for (s: String in armor.itemMeta.lore) {
                            // If the current armor lore line contains "Defense:"
                            if (s.contains("${ChatColor.GREEN}Defense: ")) {
                                val lore = armor.itemMeta.lore
                                val index = lore.indexOf(s)
                                // Split each stat in the lore by ": +"
                                val defense = s.split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()
                                val mdefense = lore.get(index + 2).split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()
                                val damage = lore.get(index - 1).split(": ${ChatColor.DARK_GRAY}+".toRegex())[1].toInt()

                                stats["atk"] = damage
                                stats["def"] = defense
                                stats["mdef"] = mdefense
                            }
                        }
                    }
                }
            }
            return stats
        }
    }
}