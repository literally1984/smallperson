package me.bnogocarft.bnogorpg.utils.Armorset.Sets

import me.bnogocarft.bnogorpg.items.CactusArmor
import me.bnogocarft.bnogorpg.utils.Armorset.ArmorSet
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus

class CactusSet : ArmorSet {
    override val setBonuses = arrayListOf<SetBonus>(CactusArmor.abil)
    override val name = "cactus"
}