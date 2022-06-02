package tech.nully.primplug.API.PrimItems

import org.bukkit.inventory.ItemStack
import tech.nully.primplug.API.Items.Rarity.Rarity
import tech.nully.primplug.Armor.baseAdder
import tech.nully.primplug.enchantStuff.enchantMechanic
import java.util.*

data class PrimItem (val item: ItemStack) {
    var damage = 0
    var magicDamage = 0
    var defense = 0
    var magicDefense = 0
    var mana = 0
    var stamina = 0
    val eXP: Int
    val level: Int
    private val enchants: MutableList<String>? = null
    val rarity: Rarity
    val primType: String? = null

    init {

        // The EXP line will look like: Level: x || EXP: x/x
        val EXPLine =
            item.itemMeta.lore[item.itemMeta.lore.size - 3].split(" {2}{2}| {2}".toRegex()).dropLastWhile { it.isEmpty() }
                .toTypedArray()
        val Level = EXPLine[1].split(": ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1]
        val EXP = EXPLine[2].split(": ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1]
        eXP = EXP.toInt()
        level = Level.toInt()
        rarity = Rarity(
            item.itemMeta.lore[item.itemMeta.lore.size - 1].substring(
                3,
                item.itemMeta.lore[item.itemMeta.lore.size - 1].length - 1
            )
        )

        // Loops through the Item's lore to get Enchants and stats ------------------
        for (s in item.itemMeta.lore) {
            // Checks if the current line is the line that defines damage and bases the rest of the stats off of that line
            if (s.contains("Damage:")) {
                val lore = item.itemMeta.lore
                val index = lore.indexOf(s)
                damage = s.split(" ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1].toInt()
                magicDamage =
                    lore[index + 1].split(" ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1].toInt()
                defense = lore[index + 2].split(" ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1].toInt()
                magicDefense =
                    lore[index + 3].split(" ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1].toInt()
                mana = lore[index + 4].split(" ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1].toInt()
                stamina = lore[index + 5].split(" ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1].toInt()
            }
            // Loops through the full list of enchantments
            for (ench in enchantMechanic.getEnchants()) {
                if (s.contains(ench)) {
                    enchants!!.add(ench)
                }
            }
        }
        //---------------------------------------------------------------------------
        primItems[item] = this
    }

    fun AddEXP(amount: Int) {
        val i = item
        // TODO: Finish this
        val newExpLine: String =
            i.itemMeta.lore[i.itemMeta.lore.size - 3].split(" ".toRegex()).dropLastWhile { it.isEmpty() }
                .toTypedArray()
        val EXPLine: Array<String> =
            i.itemMeta.lore.set(i.itemMeta.lore.size - 3 /* !!! Hit visitElement for element type: class org.jetbrains.kotlin.nj2k.tree.JKErrorExpression !!! */)
    }

    fun getEnchants(): List<String>? {
        return enchants
    }

    companion object {
        var primItems = HashMap<ItemStack, PrimItem>()
        private val b = baseAdder()
        private fun getItemType(item: ItemStack): String? {
            // TODO Finish this
            val stats = 7
            if (item.itemMeta.lore[stats + 4] == b.ability() + "Passive Ability: Zeus' Wrath") return "weapon"
            if (item.itemMeta.lore[stats + 2] == b.ability() + "Passive ability: Bloodthirst") return "weapon"
            return if (item.type.toString().lowercase(Locale.getDefault()).contains("helmet") ||
                item.type.toString().lowercase(Locale.getDefault()).contains("chestplate") ||
                item.type.toString().lowercase(Locale.getDefault()).contains("leggings") ||
                item.type.toString().lowercase(Locale.getDefault()).contains("boots")
            ) "armor" else null
        }

        fun isPrimItem(item: ItemStack): Boolean {
            return getItemType(item) != null
        }

        fun getPrimItem(i: ItemStack): PrimItem? {
            return if (primItems.containsKey(i)) {
                primItems[i]
            } else PrimItem(i)
        }
    }
}