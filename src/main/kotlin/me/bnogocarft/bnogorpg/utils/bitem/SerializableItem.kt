package me.bnogocarft.bnogorpg.utils.bitem

import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import java.io.Serializable
import kotlin.reflect.KMutableProperty
import kotlin.reflect.full.memberProperties

class SerializableItem(val material: Material) : ItemStack(material), Serializable {

    constructor(item: ItemStack) : this(item.type) {
        val itemClazz = item::class
        val thisClazz = this::class
        for (field in itemClazz.memberProperties) {
            for (thisField in thisClazz.memberProperties.filterIsInstance<KMutableProperty<*>>()) {
                if (field.name == thisField.name) {
                    thisField.setter.call(this, field.getter.call(item))
                }
            }
        }
    }
}