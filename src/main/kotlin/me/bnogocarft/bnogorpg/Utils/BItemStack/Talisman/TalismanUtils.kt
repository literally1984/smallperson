package me.bnogocarft.bnogorpg.Utils.BItemStack.Talisman

class TalismanUtils {
    companion object {
        fun getTalisman(talismanName: String): Talisman {
            when (talismanName) {
                "Miso" -> return Talisman.Miso
                "CurseOfDespair" -> return Talisman.CurseOfDespair
                "BladeOfDespair" -> return Talisman.BladeOfDespair
                "MagicRune" -> return Talisman.MagicRune
                "SoulAmulet" -> return Talisman.SoulAmulet
                "ManaStone" -> return Talisman.ManaStone
                "BasicStone" -> return Talisman.BasicStone
                "CurseOfPoison" -> return Talisman.CurseOfPoison
                "CurseOfWithering" -> return Talisman.CurseOfWithering
                "AngelicBlessing" -> return Talisman.AngelicBlessing
            }
            return Talisman.NONE
        }
    }
}