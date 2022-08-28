package games.bnogocarft.bnogorpg.Utils.Database

import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet

class BnogoSQL {
    companion object {
        lateinit var con: Connection
        fun enaableDB() {
            Class.forName("org.postgresql.Driver").newInstance()
            val url = "jdbc:postgresql://5.230.67.108:5432/main?user=postgres&password=bnogocarft&sslmode=require"
            con = DriverManager.getConnection(url)
        }

        fun getResult(path: String): ResultSet {
            val query = con.prepareStatement("SELECT * FROM users")
            return query.executeQuery()
        }

        fun createTable(something: Any) {

        }
    }
}