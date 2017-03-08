let testData = [
    { day: 1,  month: 1,  year: 2017, dow: 1 }, 
    { day: 8,  month: 3,  year: 2017, dow: 4 }, 
    { day: 31, month: 12, year: 1999, dow: 6 },
    { day: 1,  month: 1,  year: 2000, dow: 0 },
    { day: 29, month: 2,  year: 2000, dow: 3 }
];

//function zeller(day, month, year) {
function zeller({day: d, month: m, year: y}) {
    let modMonth = m;
    let month = m;
    let modYear = y;
    let day = d;
    if (month < 3) {
        modMonth += 12;
        modYear--;
    }
    return (day
            + Math.floor(13 * (modMonth + 1) / 5)
            + modYear
            + Math.floor(modYear / 4)
            - Math.floor(modYear / 100)
            + Math.floor(modYear / 400)) % 7;
}

let dayNames = ["Satur", "Sun", "Mon", "Tue", "Wednes", "Thurs", "Fri"];

function toDayOfWeek(day) {
    return dayNames[day] + "day";
}

//function toDayOfWeek(day) {
//    switch(day) {
//        case 0: return "Saturday";
//        case 1: return "Sunday";
//        case 2: return "Monday";
//        case 3: return "Tuesday";
//        case 4: return "Wendesday";
//        case 5: return "Thursday";
//        case 6: return "Friday";
//    }
//}

for (let x = 0; x < testData.length; x++) {
    let day = testData[x].day;
    let month = testData[x].month;
    let year = testData[x].year;

//    let dow = zeller(day, month, year);
    let dow = zeller(testData[x]);
    if (dow !== testData[x].dow) {
        console.log("ERROR: expected " + testData[x].dow + " got " + dow);
    }
    console.log("day: " + day + " month: " + month + " year: " + year + " is on day "
            + toDayOfWeek(dow));
}