package me.bnogocarft.bnogorpg.utils.bitem.factory

import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftItem
import me.bnogocarft.bnogorpg.utils.getStaticFields
import org.bukkit.inventory.ItemStack
import kotlin.reflect.KClass
import kotlin.reflect.full.*

abstract class CustomItem {
    fun<T : CustomItem> init(clazz: KClass<T>) {
        for (func in clazz.functions) {
            if (func.name.contains("create")) {
                func.call()
            }
        }


        if (clazz.getStaticFields("item", true).isEmpty()) {
            throw NoSuchFieldException("Provided class does not have field 'item'")
        } else {
            val itemStack = clazz.getStaticFields("item", true) as ItemStack
            BMaterial[
                itemStack.itemMeta.displayName.replace(
                    " ",
                    "_"
                ).uppercase()] = CraftItem.new(itemStack)
        }
    }
}