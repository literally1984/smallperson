package games.bnogocarft.bnogorpg.Utils.PPlayer.Abilities.PlayerAbility

class AbilityUtils {
    companion object {
        fun getAbility(s: String): Ability {
            when (s) {
                "Fireball" -> Ability.Fireball
                "MeteorSummon" -> Ability.MeteorSummon
                "LightningStrike" -> Ability.LightningStrike
                "WrathOfZeus" -> Ability.WrathOfZeus

                "Berserk" -> Ability.Berserk
                "FlameWeapon" -> Ability.FlameWeapon
                "LastStand" -> Ability.LastStand
                "StunArrow" -> Ability.StunArrow
            }
            return Ability.NONE
        }
    }
}