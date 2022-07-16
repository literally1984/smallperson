package tech.nully.primplug.recode.Utils.RecipeBook

class RecipeBook {
    companion object {
        val pages = ArrayList<RecipePage>()
        fun getRecipePage(page: Int): RecipePage {
            return pages[page + 1]
        }
    }
}