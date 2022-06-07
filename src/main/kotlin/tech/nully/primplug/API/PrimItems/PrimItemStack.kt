package tech.nully.primplug.API.PrimItems

import org.bukkit.inventory.ItemStack
import tech.nully.primplug.API.Items.Rarity.Rarity
import tech.nully.primplug.Armor.baseAdder
import tech.nully.primplug.enchantStuff.enchantMechanic
import java.util.*

data class PrimItem (val item: ItemStack) {
    var damage = 0
    private var magicDamage = 0
    var defense = 0
    private var magicDefense = 0
    var mana = 0
    var stamina = 0
    var exp: Int = 0
    var level: Int = 0
    private var enchants: MutableList<String>? = null
    var rarity: Rarity? = null;
    var primType: String? = null

    private fun createPrimItem(primItem: PrimItem) {

        // The EXP line will look like: Level: x || EXP: x/x

        // Gets the line of the item lore with EXP and level on it
        val EXPLine =
            item.itemMeta.lore[item.itemMeta.lore.size - 3].split("  ||  ").dropLastWhile { it.isEmpty() }
                .toTypedArray()

        // Splits the EXPLine string into two parts, the level and the EXP
        val Level = EXPLine[1].split(": ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1]
        val EXP = EXPLine[2].split(": ".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()[1]
        exp = EXP.toInt()

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

        // Gets the line which levels and EXP are defined and splits them by space
        val newExpLine: MutableList<String> =
            // This will result in Level:, x, ||, Exp:, x/x
            i.itemMeta.lore[i.itemMeta.lore.size - 3].split(" ".toRegex()).dropLastWhile { it.isEmpty() }
                .toMutableList()
        val ExpLine = newExpLine[4].split("".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()
        var LevelLine = newExpLine[1]

        ExpLine[0] = (newExpLine[0].toInt() + amount).toString()

        // Checks if the EXP is greater than the max EXP for the level and if so, levels up
        if (ExpLine[0] > ExpLine[2]) {
            ExpLine[0] = (ExpLine[2].toInt() - ExpLine[0].toInt()).toString()
            LevelLine = (LevelLine.toInt() + 1).toString()
        }

        this.item.itemMeta.lore[i.itemMeta.lore.size - 3] =
            "Level: $LevelLine || EXP: ${ExpLine[0]}/${ExpLine[2]}"
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