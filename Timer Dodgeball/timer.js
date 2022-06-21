let updateClock = 100; // Aggiornamento n millisecondi
let started = false;
let remainSet = 0;
let remainTime = 0;
let x;

function timeHandler() {
    console.log("test");
    // If the count down is finished, stop
    if (remainSet < 0 || remainTime < 0) {
        clearInterval(x);
        document.getElementById("timeMinutes").innerHTML = "STOP";
        document.getElementById("timeSeconds").innerHTML = "STOP";
        document.getElementById("timeMilliSeconds").innerHTML = "STOP";
        document.getElementById("setMinutes").innerHTML = "STOP";
        document.getElementById("setSeconds").innerHTML = "STOP";
        document.getElementById("setMilliSeconds").innerHTML = "STOP";
        document.getElementById("timerContainer").style.backgroundColor = "red";
    }
    else {
        remainTime -= updateClock;
        remainSet -= updateClock;

        // Get remaining time
        let remainTimeM = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
        let remainTimeS = Math.floor((remainTime % (1000 * 60)) / 1000);

        let remainSetM = Math.floor((remainSet % (1000 * 60 * 60)) / (1000 * 60));
        let remainSetS = Math.floor((remainSet % (1000 * 60)) / 1000);

        document.getElementById("timeMinutes").innerHTML = (remainTimeM < 10) ? "0" + remainTimeM : remainTimeM;
        document.getElementById("timeSeconds").innerHTML = (remainTimeS < 10) ? "0" + remainTimeS : remainTimeS;

        document.getElementById("setMinutes").innerHTML = (remainSetM < 10) ? "0" + remainSetM : remainSetM;
        document.getElementById("setSeconds").innerHTML = (remainSetS < 10) ? "0" + remainSetS : remainSetS;
    }
}

function startTimer() {
    remainTime = parseInt(document.getElementById("timeMinutes").innerHTML) * 60 * 1000 + parseInt(document.getElementById("timeSeconds").innerHTML) * 1000;

    remainSet = parseInt(document.getElementById("setMinutes").innerHTML) * 60 * 1000 + parseInt(document.getElementById("setSeconds").innerHTML) * 1000;

    if (!started)
        x = setInterval(timeHandler, updateClock);
    else
        console.log("Gia' partito!");
    started = true;
}


function pauseTimer() {
    clearInterval(x);
    started = false;
}


function resetTimer() {
    document.getElementById("timeMinutes").innerHTML = "15";
    document.getElementById("timeSeconds").innerHTML = "00";
    document.getElementById("setMinutes").innerHTML = "03";
    document.getElementById("setSeconds").innerHTML = "00";

    clearInterval(x);
    started = false;
}