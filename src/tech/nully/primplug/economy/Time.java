package tech.nully.primplug.economy;

public class Time {
    private int days;
    private int hours;
    private int minutes;
    private int seconds;

    public Time(int days, int hours, int minutes, int seconds) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    public int getDays() {
        return this.days;
    }

    public void takeDays(int days) {
        if (this.days <= 0) {
            this.hours = 23;
            this.minutes = 59;
            this.seconds = 59;
            return;
        }
        this.days = this.days - days;
    }

    public int getHours() {
        return this.hours;
    }

    public void takeHours(int hours) {
        if (this.hours <= 0) {
            this.days = this.days - 1;
            this.hours = 23;
            this.minutes = 59;
            this.seconds = 59;
            return;
        }
        this.hours = this.hours - hours;
    }

    public int getMinutes() {
        return this.minutes;
    }

    public void setminutes(int minutes) {
        if (this.minutes <= 0) {
            this.hours = this.hours - 1;
            this.minutes = 59;
            this.seconds = 59;
            return;
        }
        this.minutes = this.minutes - minutes;
    }

    public void addExtraTime() {
        this.minutes = 5;
    }

    public int getSeconds() {
        return this.seconds;
    }

    public void takeSeconds(int seconds) {
        if (this.seconds <= 0) {
            this.minutes = this.minutes - 1;
            this.seconds = 59;
            return;
        }
        this.seconds = this.seconds - seconds;
    }
}
