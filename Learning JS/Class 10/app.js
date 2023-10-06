// setInterval(function(){
//     document.write("Hello world")
// },1000)

// function timer(){
//     document.write("saad")
// }
// setInterval(timer,4000)

// setTimeout(() => {
//     document.write("Abc")
// },4000);

// var num = 0;
// setInterval((){
//     num++
//     console.log("num")
// },1000);

var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var hours = 0;
var getmin = document.getElementById("min")
var getsec = document.getElementById("sec")
var getmili = document.getElementById("msec")
var gethour = document.getElementById("hours")
var interval;

function start() {
    interval = setInterval(function () {
        miliseconds++
        getmili.innerHTML = miliseconds
        if (miliseconds >= 100) {
            seconds++
            getsec.innerHTML = seconds
            miliseconds = 0
        }
        else if (seconds >= 60) {
            minutes++
            getmin.innerHTML = minutes
            seconds = 0
        }
        else if (minutes >= 60) {
            hours++
            gethour.innerHTML = hours
            minutes = 0,0
        }
    }, 10)
    document.getElementById("sss").disabled = true
}

function stop() {
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}

function reset() {
    hours = 0
    minutes = 0
    miliseconds = 0
    seconds = 0

    getmin.innerHTML = minutes
    getsec.innerHTML = seconds
    getmili.innerHTML = miliseconds
    gethour.innerHTML = hours
    clearInterval(stop())
}





