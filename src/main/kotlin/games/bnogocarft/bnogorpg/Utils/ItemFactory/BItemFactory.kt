package games.bnogocarft.bnogorpg.Utils.ItemFactory

import games.bnogocarft.bnogorpg.OtherCommands.customItemMap
import games.bnogocarft.bnogorpg.Utils.PPlayer.Abilities.ItemAbility.AbilityTrigger
import games.bnogocarft.bnogorpg.Utils.BItemStack.BItemUtils
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.ItemStack

class BItemFactory {
    companion object {
        fun register(name: String, Item: ItemStack) {
            customItemMap[name] = Item
        }

        fun createRPGItem(displayName: String, mat: Material): FactoryItem {
            return FactoryItem(displayName, mat)
        }

        fun produceItem(item: FactoryItem): ItemStack { // Dont even try to understand this shit lmao
            val itemStack = ItemStack(item.mat)
            val meta = Bukkit.getItemFactory().getItemMeta(item.mat)
            meta.displayName = item.name
            val lore = ArrayList<String>()

            // Stats lore
            lore.add("")
            lore.add("${ChatColor.RED}Damage: ${ChatColor.WHITE}${item.stats[0]}")
            lore.add("${ChatColor.GREEN}Defense: ${ChatColor.WHITE}${item.stats[1]}")
            lore.add("${ChatColor.LIGHT_PURPLE}Magic Dmg: ${ChatColor.WHITE}${item.stats[2]}")
            lore.add("${ChatColor.DARK_PURPLE}Magic Def: ${ChatColor.WHITE}${item.stats[3]}")
            lore.add("${ChatColor.AQUA}Mana: ${ChatColor.WHITE}${item.stats[4]}")
            lore.add("${ChatColor.GOLD}Stamina: ${ChatColor.WHITE}${item.stats[5]}")
            lore.add("")

            // abilities lore
            for (ability in item.abilities) {
                if (ability.getType().equals(AbilityTrigger.SET_BONUS)) {
                    lore.add("${ChatColor.YELLOW}Set Bonus:")
                    for (s in ability.getDescription()) lore.add(s)
                    lore.add("")
                    continue
                }
                lore.add("${ability.getType().toString().replace("_", " ")} Ability:")
                for (s in ability.getDescription()) lore.add(s)
                lore.add("")
            }

            lore.add(item.rarity.name)



            meta.lore = lore
            itemStack.itemMeta = meta

            BItemUtils.addBWeapon(itemStack, item.stats)

            return itemStack
        }
    }
}