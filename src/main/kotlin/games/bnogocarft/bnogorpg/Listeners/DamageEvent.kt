package games.bnogocarft.bnogorpg.Listeners

import games.bnogocarft.bnogorpg.Main
import games.bnogocarft.bnogorpg.PlayerBar.CombatLogBar
import games.bnogocarft.bnogorpg.Utils.BPlayer.BPlayers
import games.bnogocarft.bnogorpg.combat.CombatLog.CombatLog
import games.bnogocarft.bnogorpg.combat.CombatLog.CombatLogTimer
import games.bnogocarft.bnogorpg.combat.ComboCounter.Combo
import games.bnogocarft.bnogorpg.combat.ComboCounter.ComboTimer
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.scheduler.BukkitTask

class DamageEvent : Listener {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onPlayerDamage(e: EntityDamageByEntityEvent) {
        if (e.entity is LivingEntity) {
            if ((e.entity as LivingEntity).noDamageTicks <= 1) {

                // handlers for if the damager is player and recipient is a mob
                if (e.damager is Player) {
                    val bDamager = BPlayers[e.damager]!!

                    // Checks if the damaged entity is also a player
                    if (e.entity is Player) {
                        // Starts combat log timer for damager
                        lateinit var combatLogtask: BukkitTask
                        bDamager.metadata["combat"] = CombatLog(combatLogtask)
                        combatLogtask =
                            Bukkit.getScheduler().runTaskTimer(Main.instance, CombatLogTimer(bDamager), 0, 20)
                        (e.damager as Player).sendMessage("${ChatColor.RED}You are in Combat! Please do not log out or else")
                        (e.damager as Player).sendMessage("${ChatColor.RED}you will lose all of your items!")
                        val cBar = CombatLogBar(5, 300)
                        bDamager.bars.add(cBar)
                        var display = true
                        for (bar in bDamager.bars) {
                            if (bar.priority > 2) {
                                display = false
                            }
                        }
                        if (display) {
                            bDamager.bar.text = cBar.name
                            bDamager.bar.health = cBar.health
                        }

                        // Starts a combat log timer for the damaged
                        val bDamaged = BPlayers[e.entity]!!
                        lateinit var combatLogtask2: BukkitTask
                        bDamaged.metadata["combat"] = CombatLog(combatLogtask)
                        combatLogtask =
                            Bukkit.getScheduler().runTaskTimer(Main.instance, CombatLogTimer(bDamaged), 0, 20)
                        (e.damager as Player).sendMessage("${ChatColor.RED}You are in Combat! Please do not log out or else")
                        (e.damager as Player).sendMessage("${ChatColor.RED}you will lose all of your items!")
                    }

                    // Starts a Combo for the damager
                    if (bDamager.combo == null) { // If the player is not currently comboing
                        bDamager.bar.text = "Combo Damage: ${e.damage}"
                        val comboTask = Bukkit.getScheduler().runTaskTimer(Main.instance, ComboTimer(bDamager), 0, 1)
                        bDamager.combo = Combo(comboTask, 5, e.damage)
                    } else { // If the player is comboing
                        bDamager.bar.text = "Combo Damage: ${e.damage + bDamager.combo!!.damage}"
                        bDamager.bar.health = 200
                        bDamager.combo!!.damage += e.damage
                        bDamager.combo!!.timeLeft = 5
                    }
                }

                if (e.entity is Player) {
                    val player = BPlayers[e.entity]!!
                }
            }
        }
    }
}


