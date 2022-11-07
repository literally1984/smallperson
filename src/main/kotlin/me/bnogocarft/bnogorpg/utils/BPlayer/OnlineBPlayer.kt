package me.bnogocarft.bnogorpg.utils.BPlayer

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.Player.PlayerBar.Bar
import me.bnogocarft.bnogorpg.Player.PlayerBar.MainBar
import me.bnogocarft.bnogorpg.utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.utils.Abilities.Spell
import me.bnogocarft.bnogorpg.utils.Armorset.SetBonus
import me.bnogocarft.bnogorpg.utils.GUIBackground
import me.bnogocarft.bnogorpg.utils.GUIFactory
import me.bnogocarft.bnogorpg.utils.GUILayer
import me.bnogocarft.bnogorpg.utils.JVMUtils.BarArrayList
import me.bnogocarft.bnogorpg.utils.Mode.Mode
import me.bnogocarft.bnogorpg.utils.StatUtils.StatManager
import me.bnogocarft.bnogorpg.combat.ComboCounter.Combo
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import tech.nully.BossBarAPI.BossBar
import java.text.SimpleDateFormat
import java.util.*
import kotlin.math.roundToInt


/**
 * Stores the RPG attributes of a player.
 * @constructor Fully constructs the RPG attributes of a given Online Player
 */
data class OnlineBPlayer(val p: Player) : BPlayer(p.name) {
    private val playerStats = StatManager.calculateStats(p)

    /**
     * The server time in which the player joined
     */
    var joinTime: String

    val bar = BossBar(p)
    var bars = BarArrayList()
    var currentBar: Bar = MainBar()

    var combo: Combo? = null
    var currentSetBonus = object : SetBonus {
        override val type = AbilityTrigger.NONE
        override val description = ArrayList<String>()
        override val name = "placeholder"

        override fun cast(caster: Player, abilityEvent: PlayerEvent) {
        }
    }

    var gamemode = GameMode.SURVIVAL

    /**
     * The player's current [Mode]
     */
    var mode: Mode = Mode.NONE

    val regHotbar = arrayListOf<ItemStack?>(null, null, null, null, null, null, null, null, null)
    val spellItemMap = HashMap<ItemStack, Spell>()
    val skull = ItemStack(Material.SKULL)
    val onDamage = ArrayList<DamageHandler>()
    var isInCastMode = false
        set(value) {
            // If the Player was not previously in spellcast form
            if (field != value) {
                if (value) {
                    p.sendMessage("${ChatColor.GREEN}Combat mode ${ChatColor.BOLD}ON")
                    val castItem = p.itemInHand
                    for (i in 0..8) {
                        regHotbar[i] = p.inventory.getItem(i)
                        if (i == 8) {
                            p.inventory.setItem(8, castItem)
                            continue
                        }
                        try {
                            val disItem = spells[i].displayItem
                            p.inventory.setItem(i, disItem)
                            spellItemMap[disItem] = spells[i]
                        } catch (e: IndexOutOfBoundsException) {
                            p.inventory.setItem(i, null)
                            print("null")
                            continue
                        }
                    }
                    p.inventory.heldItemSlot = 8
                } else {
                    p.sendMessage("${ChatColor.GREEN}Combat mode ${ChatColor.BOLD}OFF")
                    for (i in 0..8) {
                        p.inventory.setItem(i, regHotbar[i])
                        regHotbar[i] = null
                    }
                }
            }
            field = value
        }

    val hitbox = Hitbox(p)

    /**
     * The latest update of the player's [PlayerStat]
     */
    var stats = PlayerStat(playerStats)
        get() {
            val manaDiff = field.maxMana - field.currentMana
            val staminaDiff = field.maxStamina - field.currentStamina
            val gearStats = StatManager.calculateStats(p).toMutableList()
            field = PlayerStat(gearStats)
            field.currentMana -= manaDiff
            field.currentStamina -= staminaDiff
            return field
        }

    val metadata = HashMap<String, Any>()

    init {
        bars.add(MainBar())
        metadata["combatLogged"] = config.getBoolean("o.cl")

        val now = Date()
        val format = SimpleDateFormat("dd-MM-yyyy HH:mm:ss")
        joinTime = format.format(now)

        try {
            config.set("o.cl", metadata["combatLogged"])
        } catch (e: NullPointerException) {
            config.set("o.cl", false)
        }
        val skullMeta = Bukkit.getItemFactory().getItemMeta(Material.SKULL)
        skullMeta.displayName = "$player's Profile"
        skull.itemMeta = skullMeta
    }

    fun addToMelee(amount: Int) {
        combatEXP += amount / 2
        meleeEXP += amount
        if (meleeEXP >= getNeededEXP(meleeLVL)) {
            levelUp("melee")
        }

        if (combatEXP >= getNeededEXP(combatLVL)) {
            levelUp("combat")
        }
    }

    fun addToSpellcast(amount: Int) {
        combatEXP += amount / 2
        spellcastEXP += amount

        if (spellcastEXP >= getNeededEXP(spellcastLVL)) {
            levelUp("spellcast")
        }

        if (combatEXP >= getNeededEXP(combatLVL)) {
            levelUp("combat")
        }
    }

    fun generateInspectGui(): Inventory {
        val fInv = GUIFactory.createInventory("$player's Profile", 54)
        val layer1 = GUILayer()
        fInv.layers.add(layer1)

        layer1.backgrounds.add(GUIBackground(skull, 13))

        val balItem = ItemStack(Material.EMERALD)
        val balMeta = Bukkit.getItemFactory().getItemMeta(Material.EMERALD)
        balMeta.displayName = "${ChatColor.GREEN}$player's Balance:"

        val emeraldLore = ArrayList<String>()
        emeraldLore.add("${ChatColor.GREEN}\$${Main.econ.getBalance(player)}")
        balMeta.lore = emeraldLore
        balItem.itemMeta = balMeta

        val manaItem = ItemStack(Material.LAPIS_BLOCK)
        val manaMeta = Bukkit.getItemFactory().getItemMeta(Material.LAPIS_BLOCK)
        manaMeta.displayName = "${ChatColor.AQUA}$player's Mana:"

        val manaLore = ArrayList<String>()
        manaLore.add("${ChatColor.AQUA}${stats.currentMana}/${stats.maxMana}")
        manaMeta.lore = manaLore
        manaItem.itemMeta = manaMeta

        val staminaItem = ItemStack(Material.BLAZE_POWDER)
        val staminaMeta = Bukkit.getItemFactory().getItemMeta(Material.BLAZE_POWDER)
        staminaMeta.displayName = "${ChatColor.GOLD}$player's Stamina:"

        val staminaLore = ArrayList<String>()
        staminaLore.add("${ChatColor.GOLD}${stats.currentMana}/${stats.maxMana}")
        staminaMeta.lore = staminaLore
        staminaItem.itemMeta = staminaMeta

        layer1.backgrounds.add(GUIBackground(balItem, 22))
        layer1.backgrounds.add(GUIBackground(manaItem, 21))
        layer1.backgrounds.add(GUIBackground(staminaItem, 23))



        return GUIFactory.produceInventory(fInv)
    }

    /**
     * Simiulates the current [OnlineBPlayer] dealing damage to another [OnlineBPlayer], Handles EXP gain and more
     */
    fun dealDamage(other: LivingEntity, amount: Int) {
        val damage = if (other is Player) {
            val player = OnlineBPlayers[other]
            try {
                amount * (player.stats.defense / player.stats.defense + 10)
            } catch (e: ArithmeticException) {
                amount
            }
        } else {
            amount
        }
        other.health -= damage
        addToMelee((damage * 0.7).roundToInt())
    }


    fun dealSpellDamage(player: OnlineBPlayer, amount: Int) {
        val damage = amount * (player.stats.mDefense / player.stats.mDefense + 10)
        player.p.health -= damage
        spellcastEXP += damage
        if (spellcastEXP >= getNeededEXP(player.spellcastLVL)) {
            levelUp("spellcast")
        }
    }

    fun levelUp(stat: String) {
        when (stat) {
            "melee" -> {
                if (meleeEXP >= getNeededEXP(meleeLVL)) {
                    meleeLVL++
                    meleeEXP -= getNeededEXP(meleeLVL)
                    p.sendMessage("You have leveled up to your melee level to $meleeLVL!")
                    p.sendMessage("Your current melee EXP is $meleeEXP and you need ${getNeededEXP(meleeLVL)} to level up again!")
                }
            }

            "spellcast" -> {
                if (spellcastEXP >= getNeededEXP(spellcastLVL)) {
                    spellcastLVL++
                    spellcastEXP -= getNeededEXP(spellcastLVL)
                    p.sendMessage("You have leveled up to your spellcast level to $spellcastLVL!")
                    p.sendMessage(
                        "Your current spellcast EXP is $spellcastEXP and you need ${
                            getNeededEXP(
                                spellcastLVL
                            )
                        } to level up again!"
                    )
                }
            }

            "woodcutting" -> {
                if (woodCuttingEXP >= getNeededEXP(woodCuttingLVL)) {
                    woodCuttingLVL++
                    woodCuttingEXP -= getNeededEXP(woodCuttingLVL)
                    p.sendMessage("You have leveled up to your woodcutting level to $woodCuttingLVL!")
                    p.sendMessage(
                        "Your current woodcutting EXP is $woodCuttingEXP and you need ${
                            getNeededEXP(
                                woodCuttingLVL
                            )
                        } to level up again!"
                    )
                }
            }

            "mining" -> {
                if (miningEXP >= getNeededEXP(miningLVL)) {
                    miningLVL++
                    miningEXP -= getNeededEXP(miningLVL)
                    p.sendMessage("You have leveled up to your mining level to $miningLVL!")
                    p.sendMessage("Your current mining EXP is $miningEXP and you need ${getNeededEXP(miningLVL)} to level up again!")
                }
            }

            "combat" -> {
                if (combatEXP >= getNeededEXP(combatLVL)) {
                    combatLVL++
                    combatEXP -= getNeededEXP(combatLVL)
                    p.sendMessage("You have leveled up to your combat level to $combatLVL!")
                    p.sendMessage("Your current combat EXP is $combatEXP and you need ${getNeededEXP(combatLVL)} to level up again!")
                }
            }

            "farming" -> {
                if (farmingEXP >= getNeededEXP(farmingLVL)) {
                    farmingLVL++
                    farmingEXP -= getNeededEXP(farmingLVL)
                    p.sendMessage("You have leveled up to your farming level to $farmingLVL!")
                    p.sendMessage("Your current farming EXP is $farmingEXP and you need ${getNeededEXP(farmingLVL)} to level up again!")
                }
            }
        }
    }

    fun sendMessage(message: String) {
        p.sendMessage(message)
    }
}