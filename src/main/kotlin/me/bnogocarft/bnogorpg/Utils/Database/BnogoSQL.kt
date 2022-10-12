package me.bnogocarft.bnogorpg.Utils.Database

import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet

class BnogoSQL {
    companion object {
        lateinit var con: Connection
        fun enaableDB() {
            Class.forName("org.postgresql.Driver").newInstance()
            val url = "jdbc:postgresql://140.238.71.159:5432/postgres?user=root&password=BongoIsGay1984"
            con = DriverManager.getConnection(url)
        }
    }
}