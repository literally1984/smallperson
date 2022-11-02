package me.bnogocarft.bnogorpg.Test

import me.bnogocarft.bnogorpg.Main
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Bat
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import org.bukkit.potion.PotionEffect
import org.bukkit.potion.PotionEffectType
import org.bukkit.util.Vector

class TestCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command lmao")
            return true
        }
        val skull = sender.location.world.spawnEntity(sender.location, EntityType.WITHER_SKULL)
        val bat = sender.location.world.spawnEntity(sender.location, EntityType.BAT) as Bat
        skull.passenger = bat
        bat.customName = "test"
        bat.isCustomNameVisible = true
        bat.addPotionEffect(PotionEffect(PotionEffectType.INVISIBILITY, 1000000, 1))
        Bukkit.getScheduler().scheduleSyncRepeatingTask(Main.instance, {
            skull.velocity = Vector(0, 0, 0)
        }, 0, 1)
        return true
    }
}