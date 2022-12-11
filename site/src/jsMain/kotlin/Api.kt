import io.ktor.http.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.serialization.kotlinx.json.*

import kotlinx.browser.window

val jsonClient = HttpClient {
    install(ContentNegotiation) {
        json()
    }
}

suspend fun getPerson(name: String): List<Person> {
    val response: List<Person> = jsonClient.get("http://localhost:6969/test/$name").body()
    return response
}