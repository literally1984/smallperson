package me.bnogocarft.bnogorpg.utils.Database

import java.sql.Connection
import java.sql.DriverManager

class BnogoSQL {
    companion object {
        lateinit var con: Connection
        fun enaableDB() {
            Class.forName("org.postgresql.Driver").newInstance()
            val url = "jdbc:postgresql://140.238.71.159:5432/BnogoDB?user=root&password=BongoIsGay1984"
            con = DriverManager.getConnection(url)
        }
    }
}