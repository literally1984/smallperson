package me.bnogocarft.bnogorpg.utils.bitem.factory

import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItemType
import me.bnogocarft.bnogorpg.utils.bitem.BMaterial
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftItemType
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.LeatherArmorMeta
import kotlin.math.roundToInt

val scrollIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Ability Scroll"
val armorIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Armor"
val weaponIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Weapon"
val miscIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Misc"
val talismanIdentifier = "${ChatColor.GOLD}${ChatColor.ITALIC}Talisman"


data class FactoryIte(val name: String, val mat: Material, val type: BItemType, val rarity: Rarity) {
    val abilities = ArrayList<IAbility>()
    var levelReq = -1
    var stats = ArrayList<Int>()
    var armorColor: Color? = null
    var craftItemType: CraftItemType? = null
    val extras = HashMap<String, Any>()
}

interface FactoryItem {
    val name: String
    val mat: Material
    val rarity: Rarity
    val abilities: ArrayList<IAbility>
    val bMat: BMaterial
    fun produce(): ItemStack
}

class FactoryWeapon(
    override val name: String,
    override val mat: Material,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    override val bMat: BMaterial,
    val stats: ArrayList<Int>
) : FactoryItem {
    override fun produce(): ItemStack {
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("${ChatColor.GRAY}When held in hand:")
        lore.add("")

        lore.add(
            "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${stats[0]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${stats[1]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${stats[2]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${stats[3]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${stats[4]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add("")

        // abilities lore
        for (ability in abilities) {
            lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}${ability.type.getString()} ${ChatColor.RESET}${ChatColor.RED}Ability:")
            for (s in ability.description) lore.add("${ChatColor.GRAY}$s")
            lore.add("")
        }
        lore.add(weaponIdentifier)

        lore.add(rarity.getText())

        meta.lore = lore
        item.itemMeta = meta
        return item
    }
}

class FactoryArmor(
    override val name: String,
    override val mat: Material,
    override val rarity: Rarity,
    override val bMat: BMaterial,
    val stats: ArrayList<Int>,
    val setBonuses: ArrayList<SetBonus>,
    val color: Color
) : FactoryItem {
    override val abilities = ArrayList<IAbility>()

    override fun produce(): ItemStack {
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("${ChatColor.GRAY}When equiped in armor slot:")
        lore.add("")

        lore.add(
            "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${stats[0]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${stats[1]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${stats[2]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${stats[3]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${stats[4]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add("")

        // abilities lore
        for (bonus in setBonuses) {
            lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}Set Bonus: ${ChatColor.RESET}${rarity.getColor()}${bonus.name}")
            for (s in bonus.description) lore.add("${ChatColor.GRAY}$s")
            lore.add("")
        }
        lore.add(armorIdentifier)

        if (mat.toString().contains("leather", true)) {
            val colorMeta = meta as LeatherArmorMeta
            colorMeta.color = color
        }

        lore.add(rarity.getText())

        meta.lore = lore
        item.itemMeta = meta

        return item
    }

}

class FactoryTalisman(
    override val name: String,
    override val mat: Material,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    val stats: ArrayList<Int>,
    override val bMat: BMaterial
) : FactoryItem {
    override fun produce(): ItemStack {
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("${ChatColor.GRAY}Quality: ${rarity.getColor()}?")
        lore.add("${ChatColor.GRAY}When equiped in Talisman bag:")
        lore.add("")
        lore.add(
            "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${stats[0]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${stats[1]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${stats[2]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${stats[3]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${stats[4]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add(
            "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]} ${ChatColor.GRAY}+(${(stats[0] * 0.2).roundToInt()} Max from Quality)"
        )
        lore.add("")
        for (ability in abilities) {
            for (s in ability.description) {
                lore.add(s)
            }
        }
        lore.add("")
        lore.add(talismanIdentifier)

        lore.add("${ChatColor.GOLD}${stats[12]}-${stats[13]} ✪Star✪")

        meta.lore = lore
        item.itemMeta = meta
    }

}

class FactoryAScroll(
    override val name: String,
    override val mat: Material,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>,
    override val bMat: BMaterial
) : FactoryItem {
    override fun produce(): ItemStack {
        val item = ItemStack(mat)
        val meta = Bukkit.getItemFactory().getItemMeta(mat)
        val lore = ArrayList<String>()
        meta.displayName = name
        lore.add("")
        for (ability in abilities) {
            for (s in ability.description) {
                lore.add(s)
            }
        }
        lore.add("")
        lore.add(talismanIdentifier)

        lore.add("${ChatColor.GOLD}${stats[12]}-${stats[13]} ✪Star✪")

        meta.lore = lore
        item.itemMeta = meta
    }

}

class FactorySScroll(
    override val name: String,
    override val mat: Material,
    override val rarity: Rarity,
    override val abilities: ArrayList<IAbility>, override val bMat: BMaterial
) : FactoryItem {
    override fun produce(): ItemStack {
        TODO("Not yet implemented")
    }
}