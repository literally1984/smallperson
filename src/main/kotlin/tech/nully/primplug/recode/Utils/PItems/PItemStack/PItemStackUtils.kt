package tech.nully.primplug.recode.Utils.PItems.PItemStack

import net.minecraft.server.v1_5_R3.ItemStack


class PItemStackUtils {

    var ItemStackMap: HashMap<ItemStack, PItemStack>? = null
    init {
        ItemStackMap = HashMap()
    }
}