package me.bnogocarft.bnogorpg.Utils.ItemFactory

import me.bnogocarft.bnogorpg.Main
import me.bnogocarft.bnogorpg.OtherCommands.customItemMap
import me.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems.CraftItemType
import me.bnogocarft.bnogorpg.Utils.BItemStack.CraftItems.TalismanVariable
import me.bnogocarft.bnogorpg.Utils.BItemStack.Rarity.Rarity
import me.bnogocarft.bnogorpg.Utils.StatUtils.ItemStat
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.ShapedRecipe
import org.bukkit.inventory.meta.LeatherArmorMeta
import java.util.Arrays

data class FactoryItem(val name: String, val mat: Material, val type: BItemType) {
    val abilities = ArrayList<ItemAbility>()
    val customAbility = ArrayList<String>()
    val levelReq = -1
    var stats = ArrayList<Int>()
    var rarity = Rarity.COMMON
    var armorColor: Color? = null
    var craftItemType: CraftItemType? = null
}

class BItemFactory {
    companion object {
        val craftTalismanList = HashMap<ItemStack, List<TalismanVariable>>()

        fun register(name: String, Item: ItemStack) {
            customItemMap[name] = Item
        }

        fun createBItem(displayName: String, mat: Material, type: BItemType): FactoryItem {
            return FactoryItem(displayName, mat, type)
        }

        fun registerCraftTalisman(vars: List<TalismanVariable>, itemStack: ItemStack) {

        }

        fun produceItem(item: FactoryItem): ItemStack { // Don't even try to understand this shit lmao
            when (item.type) {
                BItemType.ARMOR -> {
                    val itemStack = ItemStack(item.mat)
                    val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
                    val lore = ArrayList<String>()
                    meta.displayName = item.name
                    var type = ""

                    // Stats lore
                    lore.add("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${item.stats[0]}")
                    lore.add("${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${item.stats[1]}")
                    lore.add("${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${item.stats[2]}")
                    lore.add("${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${item.stats[3]}")
                    lore.add("${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${item.stats[4]}")
                    lore.add("${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${item.stats[5]}")
                    lore.add("")

                    // abilities lore
                    for (ability in item.abilities) {
                        if (ability.getType().equals(AbilityTrigger.SET_BONUS)) {
                            lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}Set Bonus: ${ChatColor.RESET}${ChatColor.RED}${ItemAbility.nameMap[ability]}")
                            type = "armor"
                            for (s in ability.getDescription()) lore.add("${ChatColor.GRAY}$s")
                            lore.add("")
                            continue
                        }
                        lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}${ability.getTypeString()} ${ChatColor.RESET}${ChatColor.RED}Ability:")
                        for (s in ability.getDescription()) lore.add("${ChatColor.GRAY}$s")
                        lore.add("")
                    }
                    lore.add("${ChatColor.BLUE}Enchantments:")
                    lore.add("")

                    lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
                    lore.add("${ChatColor.GREEN}EXP: ${ChatColor.GRAY}0/10")
                    lore.add("")
                    lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Armor Item")

                    lore.add(
                        when (item.rarity) {
                            Rarity.COMMON -> "${ChatColor.GOLD}✪"
                            Rarity.UNCOMMON -> "${ChatColor.GOLD}✪✪"
                            Rarity.RARE -> "${ChatColor.GOLD}✪✪✪"
                            Rarity.EPIC -> "${ChatColor.GOLD}✪✪✪✪"
                            Rarity.LEGENDARY -> "${ChatColor.GOLD}✪✪✪✪✪"
                            Rarity.MYTHICAL -> "${ChatColor.GOLD}✪✪✪✪✪✪"
                            Rarity.DIVINE -> "${ChatColor.GOLD}✪✪✪✪✪✪✪"
                        }
                    )

                    meta.lore = lore
                    itemStack.itemMeta = meta

                    return itemStack
                }

                BItemType.WEAPON -> {
                    val itemStack = ItemStack(item.mat)
                    val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
                    val lore = ArrayList<String>()
                    meta.displayName = item.name
                    var type = ""

                    // Stats lore
                    lore.add("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${item.stats[0]}")
                    lore.add("${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${item.stats[1]}")
                    lore.add("${ChatColor.LIGHT_PURPLE}Magic DMG: ${ChatColor.DARK_GRAY}+${item.stats[2]}")
                    lore.add("${ChatColor.DARK_PURPLE}Magic DEF: ${ChatColor.DARK_GRAY}+${item.stats[3]}")
                    lore.add("${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${item.stats[4]}")
                    lore.add("${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${item.stats[5]}")
                    lore.add("")

                    // abilities lore
                    for (ability in item.abilities) {
                        if (ability.getType().equals(AbilityTrigger.SET_BONUS)) {
                            lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}Set Bonus: ${ChatColor.RESET}${ChatColor.RED}${ItemAbility.nameMap[ability]}")
                            type = "armor"
                            for (s in ability.getDescription()) lore.add("${ChatColor.GRAY}$s")
                            lore.add("")
                            continue
                        }
                        lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}${ability.getTypeString()} ${ChatColor.RESET}${ChatColor.RED}Ability:")
                        for (s in ability.getDescription()) lore.add("${ChatColor.GRAY}$s")
                        lore.add("")
                    }
                    lore.add("${ChatColor.BLUE}Enchantments:")
                    lore.add("")

                    lore.add("${ChatColor.YELLOW}Level: ${ChatColor.GRAY}0")
                    lore.add("${ChatColor.GREEN}EXP: ${ChatColor.GRAY}0/10")

                    lore.add("")
                    lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Weapon")

                    lore.add(
                        when (item.rarity) {
                            Rarity.COMMON -> "${ChatColor.GOLD}✪"
                            Rarity.UNCOMMON -> "${ChatColor.GOLD}✪✪"
                            Rarity.RARE -> "${ChatColor.GOLD}✪✪✪"
                            Rarity.EPIC -> "${ChatColor.GOLD}✪✪✪✪"
                            Rarity.LEGENDARY -> "${ChatColor.GOLD}✪✪✪✪✪"
                            Rarity.MYTHICAL -> "${ChatColor.GOLD}✪✪✪✪✪✪"
                            Rarity.DIVINE -> "${ChatColor.GOLD}✪✪✪✪✪✪✪"
                        }
                    )
                    if (item.armorColor != null) {
                        val armorMeta = meta as LeatherArmorMeta
                        armorMeta.color = item.armorColor
                    }

                    meta.lore = lore
                    itemStack.itemMeta = meta

                    return itemStack
                }

                BItemType.TALISMAN -> {
                    val itemStack = ItemStack(item.mat)
                    val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
                    val lore = ArrayList<String>()

                    meta.displayName = item.name

                    lore.add("")
                    for (s in item.customAbility) {
                        lore.add(s)
                    }

                    lore.add("")
                    lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Talisman")
                    lore.add(
                        when (item.rarity) {
                            Rarity.COMMON -> "${ChatColor.GOLD}✪"
                            Rarity.UNCOMMON -> "${ChatColor.GOLD}✪✪"
                            Rarity.RARE -> "${ChatColor.GOLD}✪✪✪"
                            Rarity.EPIC -> "${ChatColor.GOLD}✪✪✪✪"
                            Rarity.LEGENDARY -> "${ChatColor.GOLD}✪✪✪✪✪"
                            Rarity.MYTHICAL -> "${ChatColor.GOLD}✪✪✪✪✪✪"
                            Rarity.DIVINE -> "${ChatColor.GOLD}✪✪✪✪✪✪✪"
                        }
                    )

                    meta.lore = lore
                    itemStack.itemMeta = meta

                    return itemStack
                }

                BItemType.SCROLL -> {
                    val itemStack = ItemStack(item.mat)
                    val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
                    val lore = ArrayList<String>()

                    meta.displayName = item.name

                    lore.add("")
                    for (s in item.customAbility) {
                        lore.add(s)
                    }
                    lore.add("")
                    lore.add("${ChatColor.GREEN}Level Requirement: ${ChatColor.GRAY}${item.levelReq}")
                    lore.add("")
                    lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Ability Scroll")
                    lore.add(
                        when (item.rarity) {
                            Rarity.COMMON -> "${ChatColor.GOLD}✪"
                            Rarity.UNCOMMON -> "${ChatColor.GOLD}✪✪"
                            Rarity.RARE -> "${ChatColor.GOLD}✪✪✪"
                            Rarity.EPIC -> "${ChatColor.GOLD}✪✪✪✪"
                            Rarity.LEGENDARY -> "${ChatColor.GOLD}✪✪✪✪✪"
                            Rarity.MYTHICAL -> "${ChatColor.GOLD}✪✪✪✪✪✪"
                            Rarity.DIVINE -> "${ChatColor.GOLD}✪✪✪✪✪✪✪"
                        }
                    )

                    meta.lore = lore
                    itemStack.itemMeta = meta

                    return itemStack
                }

                BItemType.MISC -> {
                    val itemStack = ItemStack(item.mat)
                    val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
                    val lore = ArrayList<String>()

                    meta.displayName = item.name

                    lore.add("")
                    for (s in item.customAbility) {
                        lore.add(s)
                    }
                    lore.add("")
                    lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Misc Item")
                    lore.add(
                        when (item.rarity) {
                            Rarity.COMMON -> "${ChatColor.GOLD}✪"
                            Rarity.UNCOMMON -> "${ChatColor.GOLD}✪✪"
                            Rarity.RARE -> "${ChatColor.GOLD}✪✪✪"
                            Rarity.EPIC -> "${ChatColor.GOLD}✪✪✪✪"
                            Rarity.LEGENDARY -> "${ChatColor.GOLD}✪✪✪✪✪"
                            Rarity.MYTHICAL -> "${ChatColor.GOLD}✪✪✪✪✪✪"
                            Rarity.DIVINE -> "${ChatColor.GOLD}✪✪✪✪✪✪✪"
                        }
                    )

                    meta.lore = lore
                    itemStack.itemMeta = meta

                    return itemStack
                }

                BItemType.CRAFT_ITEM -> {
                    val itemStack = ItemStack(item.mat)
                    val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
                    val lore = ArrayList<String>()
                    meta.displayName = item.name
                    var type = ""

                    when (item.craftItemType) {
                        CraftItemType.WEAPON -> {
                            // Stats lore
                            lore.add("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${item.stats[0]}-${item.stats[1]}")
                            lore.add("${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${item.stats[2]}-${item.stats[3]}")
                            lore.add("${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${item.stats[4]}-${item.stats[5]}")
                            lore.add("${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${item.stats[6]}-${item.stats[7]}")
                            lore.add("${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${item.stats[8]}-${item.stats[9]}")
                            lore.add("${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${item.stats[10]}-${item.stats[11]}")
                            lore.add("")

                            // abilities lore
                            for (ability in item.abilities) {
                                lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}${ability.getTypeString()} ${ChatColor.RESET}${ChatColor.RED}Ability:")
                                for (s in ability.getDescription()) lore.add("${ChatColor.GRAY}$s")
                                lore.add("")
                            }
                            lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Weapon")

                            lore.add("${ChatColor.GOLD}${item.stats[12]}-${item.stats[13]} ✪Star✪")

                            meta.lore = lore
                            itemStack.itemMeta = meta
                        }
                        CraftItemType.TALISMAN -> {
                            lore.add("")
                            for (s in item.customAbility) {
                                lore.add(s)
                            }
                            lore.add("")
                            lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Talisman")

                            lore.add("${ChatColor.GOLD}${item.stats[12]}-${item.stats[13]} ✪Star✪")

                            meta.lore = lore
                            itemStack.itemMeta = meta
                        }
                        CraftItemType.ABILITY_SCROLL -> {
                            lore.add("")
                            for (s in item.customAbility) {
                                lore.add(s)
                            }
                            lore.add("")
                            lore.add("${ChatColor.GREEN}Level Requirement: ${ChatColor.GRAY}${item.levelReq}")
                            lore.add("")
                            lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Ability Scroll")

                            lore.add("${ChatColor.GOLD}${item.stats[0]}-${item.stats[1]} ✪Star✪")

                            meta.lore = lore
                            itemStack.itemMeta = meta
                        }
                        CraftItemType.ARMOR -> {
                            // Stats lore
                            lore.add("${ChatColor.RED}Damage: ${ChatColor.DARK_GRAY}+${item.stats[0]}-${item.stats[1]}")
                            lore.add("${ChatColor.GREEN}Defense: ${ChatColor.DARK_GRAY}+${item.stats[2]}-${item.stats[3]}")
                            lore.add("${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.DARK_GRAY}+${item.stats[4]}-${item.stats[5]}")
                            lore.add("${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.DARK_GRAY}+${item.stats[6]}-${item.stats[7]}")
                            lore.add("${ChatColor.AQUA}Mana: ${ChatColor.DARK_GRAY}+${item.stats[8]}-${item.stats[9]}")
                            lore.add("${ChatColor.GOLD}Stamina: ${ChatColor.DARK_GRAY}+${item.stats[10]}-${item.stats[11]}")
                            lore.add("")

                            // abilities lore
                            for (ability in item.abilities) {
                                lore.add("${ChatColor.YELLOW}${ChatColor.BOLD}Set Bonus: ${ChatColor.RESET}${ChatColor.RED}${ItemAbility.nameMap[ability]}")
                                for (s in ability.getDescription()) lore.add("${ChatColor.GRAY}$s")
                                lore.add("")
                            }
                            lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Armor")

                            lore.add("${ChatColor.GOLD}${item.stats[12]}-${item.stats[13]} ✪Star✪")

                            meta.lore = lore
                            itemStack.itemMeta = meta
                        }
                        CraftItemType.MISC -> {
                            lore.add("")
                            for (s in item.customAbility) {
                                lore.add(s)
                            }
                            lore.add("")
                            lore.add("${ChatColor.GOLD}${ChatColor.ITALIC}Misc Item")
                            lore.add("${ChatColor.GOLD}${item.stats[0]}-${item.stats[1]} ✪Star✪")

                            meta.lore = lore
                            itemStack.itemMeta = meta
                        }
                        null -> {}
                    }

                    return itemStack
                }
            }
        }

        fun makeItem(mat: BMaterial): ItemStack {
            val item = ItemStack(mat.getBukkitMaterial())
            val meta = mat.getDefaultMeta()
            val stats = ItemStat(item)
            stats.damage

            val lore = meta.lore

            lore.add(
                0, "${ChatColor.AQUA}ID: ${
                    Main.ymlConfig.getInt(
                        "items.indexes." +
                                meta.displayName.replace(" ", "")
                    )
                }"
            )

            meta.lore = lore
            item.itemMeta = meta

            Main.ymlConfig.set(
                "items.indexes." + meta.displayName.replace(" ", ""),
                Main.ymlConfig.getInt(
                    "items.indexes." +
                            meta.displayName.replace(" ", "")
                ) + 1
            )
            return item
        }

        fun makeItem(item: ItemStack): ItemStack {
            val meta = item.itemMeta.clone()

            val lore = meta.lore

            lore.add(
                0, "${ChatColor.AQUA}ID: ${
                    Main.ymlConfig.getInt(
                        "items.indexes." +
                                meta.displayName.replace(" ", "")
                    )
                }"
            )
            meta.lore = lore
            item.itemMeta = meta
            return item
        }
    }
}