// responsive navbar

var mobileNav = document.getElementById('nav-items');
var mobileBar = document.getElementById('bar');

mobileBar.addEventListener('click', () => {
    mobileBar.classList.toggle('fa-xmark');
    mobileNav.classList.toggle('active');
});

// responsive nav tag active

var navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', () => {
    mobileBar.classList.remove('fa-xmark');
    mobileNav.classList.remove('active');
}));

// sub header clock

var digitHours = document.getElementById("hour_time");
var digitMinutes = document.getElementById("min_time");
var digitPeriod = document.getElementById("ampm_time");

function subClock() {
    var currentTime = new Date();
    var nowHours = currentTime.getHours();
    var nowMinutes = currentTime.getMinutes();

    if (nowHours > 12) {
        nowHours = nowHours - 12;
        digitPeriod = digitPeriod.innerText = 'PM';
    }

    if (nowHours < 10) {
        nowHours = "0" + nowHours;
    }

    if (nowMinutes < 10) {
        nowMinutes = "0" + nowMinutes;
    }

    digitHours.innerText = nowHours;
    digitMinutes.innerText = nowMinutes;
};
setInterval(subClock, 1000);
subClock();

// sub day calendar

var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var nowDay = new Date();
var currentDay = weekDay[nowDay.getDay()];
var subDay = document.getElementById('day_time').innerText = currentDay;

//seheri and ifter time set

var seheriDay = document.getElementById('day');
var seheriDate = document.getElementById('date');
var seheriMonth = document.getElementById('month');
var seheriYear = document.getElementById('year');
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function date_box() {
    var currentDate = new Date();

    var theDay = day[currentDate.getDay()];
    var theDate = currentDate.getDate();
    var theMonth = month[currentDate.getMonth()];
    var theYear = currentDate.getFullYear();

    seheriDay.innerText = theDay;
    seheriDate.innerText = theDate + 'th';
    seheriMonth.innerText = theMonth;
    seheriYear.innerText = theYear;

};
date_box();

//counter day code

// var count_day = document.getElementById('count_day');
// var count_hour = document.getElementById('count_hour');
// var count_min = document.getElementById('count_min');
// var count_sec = document.getElementById('count_sec');
// var target = ("22 April, 2023 00:00:00");

// function countDate() {
//     var count_date = new Date("April 21, 2023 06:25:59 pm").getTime();
//     var now = new Date().getTime();
//     var divider_counter = count_date - now;

//     // time generate

//     var second = 1000;
//     var minutes = second * 60;
//     var hour = minutes * 60;
//     var day = hour * 24;

//     // day set

//     var setDay = Math.floor(divider_counter / day);
//     var setHour = Math.floor((divider_counter % day) / hour);
//     var setMinutes = Math.floor((divider_counter % hour) / minutes);
//     var setSecond = Math.floor((divider_counter % minutes) / second);

//     // final set counter

//     // proper time set

//     if (setDay < 10) {
//         setDay = '0' + setDay;
//     }

//     if (setHour < 10) {
//         setHour = '0' + setHour;
//     }

//     if (setMinutes < 10) {
//         setMinutes = '0' + setMinutes;
//     }

//     if (setSecond < 10) {
//         setSecond = '0' + setSecond
//     }

//     //html time print

//     count_day.innerText = setDay;
//     count_hour.innerText = setHour;
//     count_min.innerText = setMinutes;
//     count_sec.innerText = setSecond;
// }
// setInterval(countDate, 1000);