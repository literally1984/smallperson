package me.bnogocarft.bnogorpg

import com.comphenix.protocol.PacketType.Play
import com.comphenix.protocol.ProtocolLibrary
import com.comphenix.protocol.ProtocolManager
import com.comphenix.protocol.events.ListenerPriority
import com.comphenix.protocol.events.PacketAdapter
import com.comphenix.protocol.events.PacketEvent
import com.comphenix.protocol.wrappers.nbt.NbtCompound
import com.comphenix.protocol.wrappers.nbt.NbtFactory
import me.bnogocarft.bnogorpg.Events.BloodMoon
import me.bnogocarft.bnogorpg.Events.BloodMoonCommand
import me.bnogocarft.bnogorpg.commands.GiveCommand
import me.bnogocarft.bnogorpg.commands.PlayTimeCommand
import me.bnogocarft.bnogorpg.commands.SummonCommand
import me.bnogocarft.bnogorpg.economy.Auction.AHGui
import me.bnogocarft.bnogorpg.economy.Auction.AhGuiUpdater
import me.bnogocarft.bnogorpg.economy.Auction.AuctionCommand
import me.bnogocarft.bnogorpg.economy.Auction.AuctionListeners
import me.bnogocarft.bnogorpg.enchants.EnchantListeners
import me.bnogocarft.bnogorpg.entity.player.OnlineBPlayers
import me.bnogocarft.bnogorpg.items.DefaultOverrider
import me.bnogocarft.bnogorpg.items.armorSets.LapisArmor
import me.bnogocarft.bnogorpg.items.comatSets.CactusArmor
import me.bnogocarft.bnogorpg.items.single.EnderwarriorBlade
import me.bnogocarft.bnogorpg.items.single.GrapplerItem
import me.bnogocarft.bnogorpg.items.single.Thunderbolt
import me.bnogocarft.bnogorpg.items.updater.Updates.Update
import me.bnogocarft.bnogorpg.listeners.*
import me.bnogocarft.bnogorpg.particle.animationTestCommand
import me.bnogocarft.bnogorpg.planes.PlaneKeyItem
import me.bnogocarft.bnogorpg.planes.PlaneListeners
import me.bnogocarft.bnogorpg.planes.removeScheduler
import me.bnogocarft.bnogorpg.player.Inspect.InspectListener
import me.bnogocarft.bnogorpg.player.Stash.StashCommand
import me.bnogocarft.bnogorpg.player.Stash.StashListener
import me.bnogocarft.bnogorpg.recipe.RecipeBook
import me.bnogocarft.bnogorpg.recipe.RecipeBookCommand
import me.bnogocarft.bnogorpg.recipe.RecipeManager
import me.bnogocarft.bnogorpg.reforge.ReforgeBlockListener
import me.bnogocarft.bnogorpg.reforge.ReforgeCommand
import me.bnogocarft.bnogorpg.spells.GiveScrollCommand
import me.bnogocarft.bnogorpg.spells.SpellCastListener
import me.bnogocarft.bnogorpg.spells.spells.FireballSpell
import me.bnogocarft.bnogorpg.spells.spells.MeteorSpell
import me.bnogocarft.bnogorpg.test.TestCommand
import me.bnogocarft.bnogorpg.ticker.Ticker
import me.bnogocarft.bnogorpg.upgrade.UpgradeCMD
import me.bnogocarft.bnogorpg.upgrade.UpgradeUtils
import me.bnogocarft.bnogorpg.utils.*
import me.bnogocarft.bnogorpg.utils.ability.IAbility
import me.bnogocarft.bnogorpg.utils.auction.Auction
import me.bnogocarft.bnogorpg.utils.auction.AuctionTimer
import me.bnogocarft.bnogorpg.utils.bitem.BItemUtils
import me.bnogocarft.bnogorpg.utils.bitem.factory.CustomItem
import me.bnogocarft.bnogorpg.database.data.AuctionData
import me.bnogocarft.bnogorpg.database.BnogoSQL
import me.bnogocarft.bnogorpg.database.Table
import me.bnogocarft.bnogorpg.database.YMLUtils
import me.bnogocarft.bnogorpg.utils.others.PlaytimeUtils
import me.bnogocarft.bnogorpg.utils.stat.StatCommands
import net.milkbowl.vault.economy.Economy
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask
import java.io.File
import kotlin.properties.Delegates

val items = ArrayList<CustomItem>()

class Main : JavaPlugin() {
    companion object {
        val bar = "■"
        val socket = Websocket(1234)
        private val baseSpawnArea = SpawnArea(
            150F, -150F, arrayListOf(null, null, null, null, null), 1
        )
        var recipeBook = RecipeBook()

        lateinit var protocolManager: ProtocolManager
        lateinit var instance: Plugin

        var serverIp =
            "${ChatColor.BLUE}B${ChatColor.RED}n${ChatColor.YELLOW}o${ChatColor.AQUA}g${ChatColor.GOLD}o${ChatColor.LIGHT_PURPLE}Carft ${ChatColor.YELLOW}RPG Factions"
        val patch = Update.zerozerotwo
        val onChatCooldown = ArrayList<Player>()

        lateinit var serverFile: File
        lateinit var ymlConfig: YamlConfiguration

        val auctions = ArrayList<Auction>()
        var lastAuctionID by Delegates.notNull<String>()

        lateinit var econ: Economy

        lateinit var input: SignInputer
        val registeredAbilities = ArrayList<IAbility>()
        var isBloodMoon = false
            set(value) {
                field = value
                if (value) {
                    Bukkit.broadcastMessage("${ChatColor.RED}${ChatColor.BOLD}Blood Moon has risen! Stay at your bases!")
                } else {
                    Bukkit.broadcastMessage("${ChatColor.RED}${ChatColor.BOLD}Blood Moon has ended!")
                }
            }

        private val ring1 = SpawnRing(
            baseSpawnArea, 250f, -250f, arrayListOf(
                ItemStack(Material.DIAMOND_HELMET),
                null,
                null,
                null,
                null
            ), 2
        )
        private val ring2 = SpawnRing(
            ring1, 400f, -400f, arrayListOf(
                ItemStack(Material.DIAMOND_HELMET),
                null,
                null,
                null,
                null
            ), 3
        )
        private val ring3 = SpawnRing(
            ring2, 550f, -550f, arrayListOf(
                ItemStack(Material.DIAMOND_HELMET),
                null,
                null,
                null,
                null
            ), 4
        )
        private val ring4 = SpawnRing(
            ring3, 700f, -700f, arrayListOf(
                ItemStack(Material.DIAMOND_HELMET),
                null,
                null,
                null,
                null
            ), 5
        )
        private val rest = SpawnEdge(
            ring4.topLeft,
            ring4.bottomRight, arrayListOf(
                ItemStack(Material.DIAMOND_HELMET),
                null,
                null,
                null,
                null
            ), 7
        )
        val spawnZones = arrayListOf(
            baseSpawnArea,
            ring1,
            ring2,
            ring3,
            ring4,
            rest
        )
    }

    override fun onEnable() {
        BnogoSQL.enable()
        instance = this
        serverFile = File("${instance.dataFolder}/server.yml")
        input = SignInputer(this)
        ymlConfig = YamlConfiguration.loadConfiguration(serverFile)
        if (!(serverFile.exists())) {
            ymlConfig.set("auction.lastAucID", "0")
        }
        YMLUtils.saveCustomYml(ymlConfig, serverFile)

        lastAuctionID = ymlConfig.getString("auction.lastAucID")

        val cSender = server.consoleSender
        protocolManager = ProtocolLibrary.getProtocolManager()

        cSender.sendMessage("$logo Main class variables have been instanced")
        cSender.sendMessage("$logo Overriding default combat Items...")
        DefaultOverrider.overrideRecipes()
        cSender.sendMessage("$logo Overriding default combat Items... Done")

        cSender.sendMessage("$logo Constructing utils...")
        initUtils()
        cSender.sendMessage("$logo Utils have been constructed")

        cSender.sendMessage("$logo Registering listeners")
        server.pluginManager.registerEvents(PlayerConnectionListener(), this)
        server.pluginManager.registerEvents(ChatInput.ChatListener(), this)
        server.pluginManager.registerEvents(PlayerAbilityChangeListeners(), this)
        server.pluginManager.registerEvents(PlayerLeaveEvent(), this)
        server.pluginManager.registerEvents(DamageEvent(), this)
        server.pluginManager.registerEvents(AbilityListeners(), this)
        server.pluginManager.registerEvents(ChatListeners(), this)
        server.pluginManager.registerEvents(ReforgeBlockListener(), this)
        server.pluginManager.registerEvents(EnchantListeners(), this)
        server.pluginManager.registerEvents(TestListeners(), this)
        server.pluginManager.registerEvents(StashListener(), this)
        server.pluginManager.registerEvents(CraftingListeners(), this)
        server.pluginManager.registerEvents(AuctionListeners(), this)
        server.pluginManager.registerEvents(SpellCastListener(), this)
        server.pluginManager.registerEvents(InspectListener(), this)
        server.pluginManager.registerEvents(SpawnListeners(), this)
        server.pluginManager.registerEvents(ExpListeners(), this)
        server.pluginManager.registerEvents(PlayerUtilListeners(), this)
        cSender.sendMessage("$logo Registered Listeners")

        cSender.sendMessage("$logo Enabling ItemUpgrades...")
        UpgradeUtils()
        cSender.sendMessage("$logo ItemUpgrades Enabled!")

        cSender.sendMessage("$logo Enabling Planes")
        PlaneKeyItem()
        server.pluginManager.registerEvents(PlaneListeners(), this)

        server.scheduler.scheduleSyncRepeatingTask(this, removeScheduler(), 0, 3)
        cSender.sendMessage("$logo Planes have been enabled")

        cSender.sendMessage("$logo Enabling Websocket Server")
        socket.run()
        cSender.sendMessage("$logo Websocket Server has been enabled")

        cSender.sendMessage("Initializing Auctions...")

        val aucs = BnogoSQL.select(Table.AUCTION) as AuctionData

        for (auction in aucs.data) {
            val auc = Auction(
                auction.,
                auction["seller"] as String,
                auction["item"] as String,
                auction["price"] as String,
                auction["time"] as String,
                auction["bids"] as String
            )
            auctions.add(auc)
        }
        while (aucs.next()) {
            @Suppress("RegExpRedundantEscape", "RegExpSimplifiable", "RegExpRedundantNestedCharacterClass")
            val auction = Auction(
                deserializeItem(aucs.getString("item").replace(Regex("[\\[[\\]]*\\]]"), "").split(", ")),
                aucs.getFloat("startBid").toDouble(),
                aucs.getString("creator"),
                ((aucs.getInt("endTime") + (System.currentTimeMillis() / 1000)) - aucs.getInt("lastServerStop")).toInt(),
                aucs.getString("currentBidder"),
                aucs.getFloat("highestBid").toDouble(),
                aucs.getString("id")
            )
            if ((System.currentTimeMillis() / 1000) > auction.endTimeUnix) {
                auction.endAuction()
                val task: BukkitTask = Bukkit.getScheduler().runTaskTimer(instance, AuctionTimer(auction), 0, 20)
                auction.task = task
            }
        }
        AHGui()
        Bukkit.getScheduler().scheduleSyncRepeatingTask(this, AhGuiUpdater(), 0, 20)
        cSender.sendMessage("All paused auctions are continued!")

        cSender.sendMessage("$logo Enabling other commands...")
        getCommand("giv").executor = GiveCommand()
        getCommand("playtime").executor = PlayTimeCommand()
        getCommand("reforge").executor = ReforgeCommand()
        getCommand("anim").executor = animationTestCommand()
        getCommand("upgrade").executor = UpgradeCMD()
        getCommand("auction").executor = AuctionCommand()
        getCommand("stash").executor = StashCommand()
        getCommand("scroll").executor = GiveScrollCommand()
        getCommand("stat").executor = StatCommands()
        getCommand("test").executor = TestCommand()
        getCommand("bloodmoon").executor = BloodMoonCommand()
        getCommand("summon").executor = SummonCommand()
        cSender.sendMessage("$logo all commands are enabled!")

        cSender.sendMessage("$logo Registering custom ItemStacks...")
        CactusArmor()
        LapisArmor()
        EnderwarriorBlade()
        GrapplerItem()
        Thunderbolt()
        cSender.sendMessage("$logo Registered custom Items")

        cSender.sendMessage("$logo Enabling RecipeBook...")
        recipeBook = RecipeManager.registerRecipes(server.recipeIterator())
        getCommand("recipes").executor = RecipeBookCommand()
        cSender.sendMessage("$logo RecipeBook has been enabled")

        cSender.sendMessage("$logo Enabling GUI stuff...")
        server.pluginManager.registerEvents(GUIListeners(guis), this)
        cSender.sendMessage("$logo GUI Utils enabled")

        cSender.sendMessage("$logo Enabling Economy...")
        if (!setupEconomy()) {
            cSender.sendMessage(
                String.format(
                    "[%s] - Disabled due to no Vault dependency found!",
                    description.name
                )
            )
            server.pluginManager.disablePlugin(this)
            return
        }
        cSender.sendMessage("$logo Economy enabled")
        cSender.sendMessage("$logo Enabling Spells")
        FireballSpell.init()
        MeteorSpell.init()
        cSender.sendMessage("$logo Spells enabled")
        cSender.sendMessage("$logo Starting events...")
        BloodMoon.startListener()
        cSender.sendMessage("$logo Events enabled")

        protocolManager.addPacketListener(
            object : PacketAdapter(
                this,
                ListenerPriority.HIGHEST,
                Play.Server.WINDOW_ITEMS,
                Play.Server.SET_SLOT
            ) {
                override fun onPacketSending(event: PacketEvent) {
                    if (event.packetType == Play.Server.SET_SLOT) {
                        if (event.packet.itemModifier.read(0) != null) {
                            addGlow(arrayOf(event.packet.itemModifier.read(0)))
                        }
                    } else {
                        if (event.packet.itemArrayModifier.read(0) != null) {
                            addGlow(event.packet.itemArrayModifier.read(0))
                        }
                    }
                }
            }
        )

        cSender.sendMessage(
            "${ChatColor.LIGHT_PURPLE} $logo ${ChatColor.GREEN} BnogoRPG Vdev-0.0.4 has been ${ChatColor.GREEN}Enabled"
        )
        Bukkit.getScheduler().scheduleSyncRepeatingTask(this, {
            update()
        }, 20, 20 * 60 * 60 * 2)
        Ticker.startPlayerUpdater()
        saveDefaultConfig()
        System.gc()
    }

    override fun onDisable() {
        server.consoleSender.sendMessage(
            "${ChatColor.LIGHT_PURPLE} $logo ${ChatColor.RED} BnogoRPG has been disabled D:"
        )
        for (player in server.onlinePlayers) {
            val bPlayer = OnlineBPlayers[player]
            bPlayer.isInCastMode = false
            PlaytimeUtils.addPlaytime(bPlayer)
            bPlayer.saveStats()
            player.kickPlayer("Server is restarting, please rejoin in about 20 seconds")
        }
        update()
        for (auc in auctions) {
            val query = BnogoSQL.con.prepareStatement(
                "UPDATE auctions SET \"lastStop\" = ${System.currentTimeMillis() / 1000} WHERE \"id\" = '${auc.ID}';"
            )
            query.execute()
        }
        ymlConfig.set("auction.lastAucID", lastAuctionID)
        YMLUtils.saveCustomYml(ymlConfig, serverFile)
    }

    fun update() {
        for (auc in auctions) {
            val replace =
                BnogoSQL.con.prepareStatement("UPDATE auctions SET \"currentBidder\" = '${auc.currentBidder}', \"highestBid\" = ${auc.highestBid} WHERE id = '${auc.ID}';")
                    .executeUpdate()
            if (replace > 0) {
                continue
            }
            val query = BnogoSQL.con.prepareStatement(
                "INSERT INTO auctions VALUES (" +
                        "'${auc.ID}', " +
                        "'${serializeItem(auc.itemStack)}', " +
                        "${auc.startingBid}, " +
                        "'${auc.currentBidder}', " +
                        "${auc.highestBid}, " +
                        "'${auc.creator}', " +
                        "'${auc.endTimeUnix}', " +
                        "-1, " +
                        "'${auc.itemType}');"
            )

            BnogoSQL.insert(
                Table.AUCTION,
                auc.ID,
                auc.itemStack,
                auc.startingBid,
                auc.currentBidder,
                auc.highestBid,
                auc.creator,
                auc.endTimeUnix,
                -1,
                auc.itemType
            )
            query.execute()
        }

        for (item in BItemUtils.BGears.values) {
            val stringAbilityArray = ArrayList<String>()
            for (ability in item.abilities) {
                stringAbilityArray.add("\"${ability}\"")
            }
            val beforeString = stringAbilityArray.joinToString(", ")
            BnogoSQL.con.prepareStatement(
                "UPDATE \"combatGear\" SET " +
                        "\"stars\" = ${item.rarity!!}, " +
                        "\"name\" = '${item.initItem.itemMeta.displayName}', " +
                        "\"itemStack\" = '${serializeItem(item.initItem)}', " +
                        "\"abilities\" = ARRAY [$beforeString]::text[] " +
                        "WHERE \"id\" = ${item.id} AND \"material\" = '${item.initItem.itemMeta.displayName}';"
            ).executeUpdate()
        }
    }

    private fun setupEconomy(): Boolean {
        val economyProvider = server.servicesManager.getRegistration(Economy::class.java)
        if (economyProvider != null) {
            econ = economyProvider.provider
            return true
        }
        return false
    }

    private fun addGlow(stacks: Array<ItemStack?>) {
        for (stack in stacks) {
            if (stack != null) {
                // Only update those stacks that have our flag enchantment
                if (stack.type != Material.BOW) {
                    if (stack.getEnchantmentLevel(Enchantment.ARROW_DAMAGE) == 32) {
                        val compound = NbtFactory.fromItemTag(stack) as NbtCompound
                        compound.put(NbtFactory.ofList<Any>("ench"))
                        continue
                    }
                } else {
                    if (stack.getEnchantmentLevel(Enchantment.WATER_WORKER) == 32) {
                        val compound = NbtFactory.fromItemTag(stack) as NbtCompound
                        compound.put(NbtFactory.ofList<Any>("ench"))
                        continue
                    }
                }
            }
        }
    }
}