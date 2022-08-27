package games.bnogocarft.bnogorpg.Utils.Database

import java.sql.DriverManager

class BnogoSQL {
    companion object {
        fun enaableDB() {
            val url = "jdbc:postgre://5.230.67.108:5432/main"
            val connection = DriverManager
                .getConnection(url, "postgres", "bnogocarft")
        }
    }
}