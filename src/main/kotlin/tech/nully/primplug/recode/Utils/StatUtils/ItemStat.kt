package tech.nully.primplug.recode.Utils.StatUtils

import org.bukkit.inventory.ItemStack

data class ItemStat(val item:ItemStack) {
    init {
        var damage: Int;
        var defense: Int;
        var magicDmg: Int;
        var magicDef: Int;
        var mana: Int;
        var stamina: Int;

        // Loops through the Item's lore to find the first stat line
        for (s: String in item.itemMeta.lore) {
            if (s.contains("Damage: +")) {
                val lore = item.itemMeta.lore
                val indexOfS = lore.indexOf(s)

                damage = s.split(": +")[1].toInt() // Damage
                defense = lore[indexOfS + 1].split(": +")[1].toInt()// defense
                magicDmg = lore[indexOfS + 2].split(": +")[1].toInt()// magic damage
                magicDef = lore[indexOfS + 3].split(": +")[1].toInt()// magic defense
                mana = lore[indexOfS + 4].split(": +")[1].toInt()// mana
                stamina = lore[indexOfS + 5].split(": +")[1].toInt()// stamina
            }
        }
    }
}