package me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems

import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.getRandomStat
import me.bnogocarft.bnogorpg.Utils.BItemStack.BMaterial
import me.bnogocarft.bnogorpg.Utils.Exceptions.IllegalConstructorArgumentException
import me.bnogocarft.bnogorpg.Utils.others.Rarity.Rarity
import org.bukkit.ChatColor
import org.bukkit.inventory.ItemStack
import kotlin.random.Random

data class CraftGear(override var item: ItemStack) : CraftItem {
    override var type: BMaterial = BMaterial.valueOf(item.itemMeta.displayName.replace(" ", "_").uppercase())
    override var amount: Int = item.amount
    override var rarityVary: Pair<Rarity, Rarity> = Pair(Rarity.COMMON, Rarity.COMMON)
    private var dmgLine: Int = 0
    private var defLine: Int = 0
    private var mDmgLine: Int = 0
    private var mDefLine: Int = 0
    private var mana: Int = 0
    private var stamina: Int = 0

    var statVary = ArrayList<Int>(12)

    init {
        for (lore in item.itemMeta.lore) {
            if (lore.contains("Damage: ${ChatColor.DARK_GRAY}+")) {
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[0].toInt())
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[1].toInt())
                dmgLine = item.itemMeta.lore.indexOf(lore)
                continue
            }
            if (lore.contains("Defense: ${ChatColor.DARK_GRAY}+")) {
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[0].toInt())
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[1].toInt())
                defLine = item.itemMeta.lore.indexOf(lore)
                continue
            }
            if (lore.contains("Magic Dmg: ${ChatColor.DARK_GRAY}+")) {
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[0].toInt())
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[1].toInt())
                mDmgLine = item.itemMeta.lore.indexOf(lore)
                continue
            }
            if (lore.contains("Magic Def: ${ChatColor.DARK_GRAY}+")) {
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[0].toInt())
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[1].toInt())
                mDefLine = item.itemMeta.lore.indexOf(lore)
                continue
            }
            if (lore.contains("Mana: ${ChatColor.DARK_GRAY}+")) {
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[0].toInt())
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[1].toInt())
                mana = item.itemMeta.lore.indexOf(lore)
                continue
            }
            if (lore.contains("Stamina: ${ChatColor.DARK_GRAY}+")) {
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[0].toInt())
                statVary.add(lore.split(": ${ChatColor.DARK_GRAY}+")[1].split("-")[1].toInt())
                stamina = item.itemMeta.lore.indexOf(lore)
                continue
            }
            if (lore.contains(" ✪Star✪")) {
                val onlyStarLore = lore.drop(2).dropLast(7).split("-")
                rarityVary = Pair(Rarity.getRarity(onlyStarLore[0].toInt()), Rarity.getRarity(onlyStarLore[1].toInt()))
            }
        }
        if (statVary.size != 12) {
            throw IllegalConstructorArgumentException("Provided ItemStack does not have all the required stat lores")
        }
    }

    override fun craft(): ItemStack {
        val starsDiff = rarityVary.second.getStars() - rarityVary.first.getStars()
        val randomIndex = Random.nextInt(1, starsDiff + 1)
        val stats = getRandomStat(rarityVary, statVary, randomIndex)

        val copy = item.itemMeta.clone()
        val lore = copy.lore
        lore[dmgLine] = "${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${stats[0]}"
        lore[defLine] = "${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${stats[1]}"
        lore[mDmgLine] = "${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${stats[2]}"
        lore[mDefLine] = "${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${stats[3]}"
        lore[mana] = "${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${stats[4]}"
        lore[stamina] = "${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${stats[5]}"
        val stars = rarityVary.first.getStars() + randomIndex
        lore[lore.size - 1] = Rarity.getRarity(stars).getStarsString()
        lore.add(lore.size - 3, "")
        lore.add(lore.size - 3, "${ChatColor.BLUE}Enchantments:")
        lore.add(lore.size - 3, "")
        lore.add(lore.size - 3, "${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
        lore.add(lore.size - 3, "${ChatColor.GREEN}EXP: ${ChatColor.GRAY}0/10")

        val cloneItem = item.clone()

        copy.lore = lore
        cloneItem.itemMeta = copy
        return cloneItem
    }
}