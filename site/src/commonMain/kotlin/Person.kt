import kotlinx.serialization.Serializable

@Serializable
data class Person(val name: String, val age: Int?) {
    val id: Int = name.hashCode()

    companion object {
        const val path = "/test"
    }
}