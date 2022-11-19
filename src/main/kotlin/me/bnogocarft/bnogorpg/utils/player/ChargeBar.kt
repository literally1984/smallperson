package me.bnogocarft.bnogorpg.utils.player

data class ChargeBar(val player: OnlineBPlayer) {
    var percentage: Int = 0
        set(value) {
            field = value
            if (enabled) {
                player.p.exp = player.p.exp - getNeededEXP(player.p.level) + (player.p.exp / 100 * percentage)
            }
        }
    var originalExp = player.p.exp
    var enabled = false
        set(value) {
            field = value
            if (value) {
                originalExp = player.p.exp
                player.p.exp = player.p.exp - getNeededEXP(player.p.level) + (player.p.exp / 100 * percentage)
            }

            if (!value) {
                player.p.exp = originalExp
                percentage = 0
            }
        }
}