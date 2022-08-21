package games.bnogocarft.bnogorpg.Utils.economyUtils.auction

data class AuctionTime(var days: Int, var hours: Int, var minutes: Int, var seconds: Int) {
    // 0D0H0M0S
    val string: String
        get() = "${days}D${hours}H${minutes}M${seconds}S"

    constructor(s: String) : this(0, 0, 0, 0) {
        val ints = s.replace(Regex("[A-Za-z]"), "s").split("s")
        days = ints[0].toInt()
        hours = ints[1].toInt()
        minutes = ints[2].toInt()
        seconds = ints[3].toInt()

        while (seconds > 60) {
            seconds -= 60
            minutes += 1
        }

        while (minutes > 60) {
            minutes -= 60
            hours += 1
        }

        while (hours > 24) {
            hours -= 24
            days += 1
        }
    }

    fun add(s: String) {
        val ints = s.replace(Regex("[A-Za-z]"), "s").split("s")

        days += ints[0].toInt()
        hours += ints[1].toInt()
        minutes += ints[2].toInt()
        seconds += ints[3].toInt()

        while (seconds >= 60) {
            seconds -= 60
            minutes += 1
        }

        while (minutes >= 60) {
            minutes -= 60
            hours += 1
        }

        while (hours >= 24) {
            hours -= 24
            days += 1
        }
    }

    fun add(days: Int, hours: Int, minutes: Int, seconds: Int) {
        this.days += days
        this.hours += hours
        this.minutes += minutes
        this.seconds += seconds

        while (this.seconds >= 60) {
            this.seconds -= 60
            this.minutes += 1
        }

        while (this.minutes >= 60) {
            this.minutes -= 60
            this.hours += 1
        }

        while (this.hours >= 24) {
            this.hours -= 24
            this.days += 1
        }
    }

    fun add(time: AuctionTime) {
        this.days += time.days
        this.hours += time.hours
        this.minutes += time.minutes
        this.seconds += time.seconds

        while (this.seconds >= 60) {
            this.seconds -= 60
            this.minutes += 1
        }

        while (this.minutes >= 60) {
            this.minutes -= 60
            this.hours += 1
        }

        while (this.hours >= 24) {
            this.hours -= 24
            this.days += 1
        }
    }

    fun subtract(s: String) {
        val ints = s.replace(Regex("[A-Za-z]"), "s").split("s")

        days -= ints[0].toInt()
        hours -= ints[1].toInt()
        minutes -= ints[2].toInt()
        seconds -= ints[3].toInt()

        while (seconds < 0) {
            seconds += 60
            minutes -= 1
        }

        while (minutes < 0) {
            minutes += 60
            hours -= 1
        }

        while (hours < 0) {
            hours += 24
            days -= 1
        }

        while (days < 0) {
            days = 0
        }
    }

    fun subtract(days: Int, hours: Int, minutes: Int, seconds: Int) {
        this.days -= days
        this.hours -= hours
        this.minutes -= minutes
        this.seconds -= seconds

        while (this.seconds < 0) {
            this.seconds += 60
            this.minutes -= 1
        }

        while (this.minutes < 0) {
            this.minutes += 60
            this.hours -= 1
        }

        while (this.hours < 0) {
            this.hours += 24
            this.days -= 1
        }

        while (this.days < 0) {
            this.days = 0
        }
    }

    fun subtract(time: AuctionTime) {
        this.days -= time.days
        this.hours -= time.hours
        this.minutes -= time.minutes
        this.seconds -= time.seconds

        while (this.seconds < 0) {
            this.seconds += 60
            this.minutes -= 1
        }

        while (this.minutes < 0) {
            this.minutes += 60
            this.hours -= 1
        }

        while (this.hours < 0) {
            this.hours += 24
            this.days -= 1
        }

        while (this.days < 0) {
            this.days = 0
        }
    }
}