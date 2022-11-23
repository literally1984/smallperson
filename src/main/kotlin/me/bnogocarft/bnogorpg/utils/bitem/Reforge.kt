package me.bnogocarft.bnogorpg.utils.bitem

import org.bukkit.ChatColor

enum class Reforge {
    Vampiric,
    Cursed,
    Blessed,
    Heavenly,
    Demonic,
    Heroic,
    Strong,
    Wise,
    Durable,
    Godly,
    NONE,
    Grim,
    Light,
    Heavy,
    Smart,
    Faithful,

    Naive,
    Hopeless,
    Weak,
    Brittle,
    Dull;

    fun getColor(): ChatColor {
        when (this) {
            Vampiric -> return ChatColor.RED
            Cursed -> return ChatColor.RED
            Blessed -> return ChatColor.GOLD
            Heavenly -> return ChatColor.YELLOW
            Demonic -> return ChatColor.DARK_RED
            Heroic -> return ChatColor.BLUE
            Strong -> return ChatColor.RED
            Wise -> return ChatColor.DARK_PURPLE
            Durable -> return ChatColor.GRAY
            Godly -> return ChatColor.YELLOW
            NONE -> return ChatColor.GRAY
            Grim -> return ChatColor.DARK_PURPLE
            Light -> return ChatColor.YELLOW
            Heavy -> return ChatColor.WHITE
            Smart -> return ChatColor.LIGHT_PURPLE
            Faithful -> return ChatColor.GREEN
            Naive -> return ChatColor.GREEN
            Hopeless -> return ChatColor.DARK_GREEN
            Weak -> return ChatColor.DARK_AQUA
            Brittle -> return ChatColor.AQUA
            Dull -> return ChatColor.DARK_GRAY
        }
    }
}
