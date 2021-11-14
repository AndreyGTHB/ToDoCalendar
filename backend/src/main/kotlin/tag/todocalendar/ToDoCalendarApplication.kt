package tag.todocalendar

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ToDoCalendarApplication

fun main(args: Array<String>) {
	runApplication<ToDoCalendarApplication>(*args)
}
