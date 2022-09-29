package me.bnogocarft.bnogorpg.Utils.Armorset.Sets

import me.bnogocarft.bnogorpg.CustomItems.CactusArmor
import me.bnogocarft.bnogorpg.Utils.Armorset.ArmorSet
import me.bnogocarft.bnogorpg.Utils.Armorset.SetBonus

class CactusSet : ArmorSet{
    override val setBonuses = arrayListOf<SetBonus>(CactusArmor.abil)
    override val name = "cactus"
}