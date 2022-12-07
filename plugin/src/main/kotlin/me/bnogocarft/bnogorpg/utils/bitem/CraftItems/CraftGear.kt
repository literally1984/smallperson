package me.bnogocarft.bnogorpg.utils.bitem.CraftItems

import me.bnogocarft.bnogorpg.utils.bitem.BItems.getRandomStat
import me.bnogocarft.bnogorpg.utils.others.Rarity.Rarity
import me.bnogocarft.bnogorpg.utils.rand
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack

data class CraftGear(override var item: ItemStack) : CraftItem(item) {
    override var type: BMaterial = BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
    private var dmgLine: Int = 0
    private var defLine: Int = 0
    private var mDmgLine: Int = 0
    private var mDefLine: Int = 0
    private var manaLine: Int = 0
    private var staminaLine: Int = 0
    private var quality = rand(0.0f, 100.0f)
    private var rarity = Rarity.getRarity(item.itemMeta.lore.last())

    var stats = ArrayList<Int>()

    init {
        for (lore in item.itemMeta.lore) {
            if (lore.contains("Damage")) {
                dmgLine = item.itemMeta.lore.indexOf(lore)
                defLine = dmgLine + 1
                mDmgLine = defLine + 1
                mDefLine = mDmgLine + 1
                manaLine = mDefLine + 1
                staminaLine = manaLine + 1
                for (index in dmgLine..staminaLine) {
                    stats.add(item.itemMeta.lore[index].split(": ${ChatColor.GRAY}+")[1].toInt())
                }
            }
        }
    }

    override fun craft(): ItemStack {
        val copy = item.itemMeta.clone()
        val lore = copy.lore
        lore[0] = "${ChatColor.GRAY}Quality: ${rarity.getColor()}$quality"
        lore[dmgLine] = "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${getRandomStat(quality, stats[0], rarity)}"
        lore[defLine] = "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${getRandomStat(quality, stats[1], rarity)}"
        lore[mDmgLine] = "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${getRandomStat(quality, stats[2], rarity)}"
        lore[mDefLine] = "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${getRandomStat(quality, stats[3], rarity)}"
        lore[manaLine] = "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${getRandomStat(quality, stats[4], rarity)}"
        lore[staminaLine] = "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${getRandomStat(quality, stats[5], rarity)}"

        val cloneItem = item.clone()

        copy.lore = lore
        cloneItem.itemMeta = copy
        return cloneItem
    }
}