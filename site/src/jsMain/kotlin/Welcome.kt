import csstype.px
import csstype.rgb
import emotion.react.css
import kotlinx.coroutines.Job
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.*
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input

external interface WelcomeProps : Props {
    var name: String
}

private var scope = MainScope()

private var currentJob: Job? = null

val Welcome = FC<WelcomeProps> { props ->
    println("welcome created")
    var name by useState(props.name)

    var output = "Searching database..."

    var data by useState(listOf<Person>())
    currentJob?.cancel()
    currentJob = scope.launch {
        data = getPerson(name)
    }
    output = if (data.isEmpty()) "User not Found" else "Welcome back, ${data[0].name}, Age: ${data[0].age}"


    div {
        css {
            padding = 5.px
            backgroundColor = rgb(8, 97, 22)
            color = rgb(56, 246, 137)
        }
        +output
    }
    input {
        css {
            marginTop = 5.px
            marginBottom = 5.px
            fontSize = 14.px
        }
        type = InputType.text
        value = name
        onChange = { event ->
            name = event.target.value
            currentJob?.cancel()
            output = "Searching database..."
            currentJob = scope.launch {
                data = getPerson(name)
            }
            output = if (data.isEmpty()) "User not Found" else "Welcome back, ${data[0].name}, Age: ${data[0].age}"
        }
    }
}