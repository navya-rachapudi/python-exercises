function isLeapYear(year) {
    if (year%4==0) {
        return true
    }
    if (year%100==0 && year%400!=0) {
        return false
    }
}

isLeapYear(2024)