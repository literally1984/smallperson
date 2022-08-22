package games.bnogocarft.bnogorpg.Utils.ItemFactory

import games.bnogocarft.bnogorpg.OtherCommands.customItemMap
import games.bnogocarft.bnogorpg.Utils.Abilities.ItemAbility.AbilityTrigger
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BItemUtils
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItems.BMaterial
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.LeatherArmorMeta

class BItemFactory {
    companion object {
        fun register(name: String, Item: ItemStack) {
            customItemMap[name] = Item
        }

        fun createBGearItem(displayName: String, mat: Material): FactoryItem {
            return FactoryItem(displayName, mat)
        }

        fun produceItem(item: FactoryItem): ItemStack { // Don't even try to understand this shit lmao
            val itemStack = ItemStack(item.mat)
            val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
            meta.displayName = item.name
            val lore = ArrayList<String>()
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

            lore.add("${ChatColor.BOLD}${item.rarity.getDisplay()}")
            if (item.armorColor != null) {
                val armorMeta = meta as LeatherArmorMeta
                armorMeta.color = item.armorColor
            }

            meta.lore = lore
            itemStack.itemMeta = meta

            if (BItemUtils.getBType(itemStack) == "weapon") BItemUtils.addBWeapon(itemStack, item.stats)
            else BItemUtils.addBArmor(itemStack, item.stats)

            return itemStack
        }

        fun makeItem(mat: BMaterial) {
            val item = ItemStack(mat.getBukkitMaterial())
            val meta = mat.getDefaultMeta()
        }
    }
}