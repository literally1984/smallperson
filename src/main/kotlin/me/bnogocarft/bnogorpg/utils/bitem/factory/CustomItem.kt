package me.bnogocarft.bnogorpg.utils.bitem.factory

import me.bnogocarft.bnogorpg.utils.bitem.BItems.BItem
import me.bnogocarft.bnogorpg.utils.bitem.CraftItems.CraftItem
import org.bukkit.inventory.ItemStack
import kotlin.reflect.KClass
import kotlin.reflect.full.*

abstract class CustomItem {
    fun<T : CustomItem> init(clazz: KClass<T>) {
        val funcs = clazz.functions
        val item = clazz.createInstance()
        for (func in funcs) {
            if (func.name.contains("create")) {
                func.call()
            }
        }


        if (clazz.companionObject != null) {
            for (field in clazz.companionObject!!.memberProperties) {
                if (field.name.contains("item")) {
                    val item = field.getter.call(clazz.companionObjectInstance) as ItemStack
                    BMaterial[item.itemMeta.displayName.replace(" ", "_").uppercase()]= CraftItem.new(item)

                }
            }
        } else {
            throw IllegalArgumentException("Provided class does not have a companion object")
        }
    }
}