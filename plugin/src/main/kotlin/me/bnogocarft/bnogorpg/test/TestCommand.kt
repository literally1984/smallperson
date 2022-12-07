package me.bnogocarft.bnogorpg.test

import me.bnogocarft.bnogorpg.utils.addFakeBlock
import me.bnogocarft.bnogorpg.utils.glow
import me.bnogocarft.bnogorpg.utils.spawnParticle
import me.bnogocarft.bnogorpg.utils.times
import net.minecraft.server.v1_8_R3.EnumParticle
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.util.Vector
import kotlin.math.cos
import kotlin.math.sin

class TestCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("Only players can use this command lmao")
            return true
        }

        val item = sender.itemInHand
        item.glow()
        sender.location.addFakeBlock(sender, Material.DIRT)
        val dir = sender.location.direction
        val planeDir = Vector(dir.x, 0.0, dir.y)

        val frontLeft = sender.location.add(planeDir.add(Vector(cos(135.0), 0.5, sin(135.0)))*1.5)
        val bottomRight = sender.location.add(planeDir.add(Vector(cos(0.0), -0.5, sin(0.0))))

        frontLeft.spawnParticle(EnumParticle.FLAME)
        bottomRight.spawnParticle(EnumParticle.FLAME)

        return true
    }
}