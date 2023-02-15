let updateClock = 100; // Aggiornamento n millisecondi

let startedTime = false;
let startedSet = false;
let remainTime = 0;
let remainSet = 0;
let timeHandlerID;
let setHandlerID;

var loadFile1 = function(event) {
	var image = document.getElementById('team1');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile2 = function(event) {
	var image = document.getElementById('team2');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function timeHandler() {
    // If the count down is finished, stop
    if (remainTime <= 0) {
        pauseAllTimers();
        clearInterval(timeHandlerID);
        document.getElementById("timeMinutes").innerHTML = "00";
        document.getElementById("timeSeconds").innerHTML = "00";
        document.body.style.background = "red";
        var audio = new Audio("alarm.mp3");
        audio.play();
    }
    else {
        remainTime -= updateClock;

        // Get remaining time
        let remainTimeM = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
        let remainTimeS = Math.floor((remainTime % (1000 * 60)) / 1000);

        document.getElementById("timeMinutes").innerHTML = (remainTimeM < 10) ? "0" + remainTimeM : remainTimeM;
        document.getElementById("timeSeconds").innerHTML = (remainTimeS < 10) ? "0" + remainTimeS : remainTimeS;
    }
}

function setHandler() {
    // If the count down is finished, stop
    if (remainSet <= 0) {
        clearInterval(setHandlerID);
        document.getElementById("setMinutes").innerHTML = "00";
        document.getElementById("setSeconds").innerHTML = "00";
        document.body.style.background = "red";
        var audio = new Audio("alarm.mp3");
        audio.play();
    }
    else {
        remainSet -= updateClock;

        // Get remaining time
        let remainSetM = Math.floor((remainSet % (1000 * 60 * 60)) / (1000 * 60));
        let remainSetS = Math.floor((remainSet % (1000 * 60)) / 1000);

        document.getElementById("setMinutes").innerHTML = (remainSetM < 10) ? "0" + remainSetM : remainSetM;
        document.getElementById("setSeconds").innerHTML = (remainSetS < 10) ? "0" + remainSetS : remainSetS;
    }
}

function startTime() {
    remainTime = parseInt(document.getElementById("timeMinutes").innerHTML) * 60 * 1000 + parseInt(document.getElementById("timeSeconds").innerHTML) * 1000;

    if (!startedTime) {
        timeHandlerID = setInterval(timeHandler, updateClock);
        startedTime = true;
    }
    else {
        console.log("Già partito Time timer!");
    }
}

function startSet() {
    remainSet = parseInt(document.getElementById("setMinutes").innerHTML) * 60 * 1000 + parseInt(document.getElementById("setSeconds").innerHTML) * 1000;

    if (remainTime < remainSet) {
        remainSet = remainTime;
    }

    if (!startedSet) {
        setHandlerID = setInterval(setHandler, updateClock);
        startedSet = true;
    }
    else {
        console.log("Già partito Set timer!");
    }
}

function pauseTime() {
    clearInterval(timeHandlerID);
    startedTime = false;
}

function resetTime() {
    document.getElementById("timeMinutes").innerHTML = "15";
    document.getElementById("timeSeconds").innerHTML = "00";

    clearInterval(timeHandlerID);
    startedTime = false;
}

function pauseSet() {
    clearInterval(setHandlerID);
    startedSet = false;
}

function resetSet() {
    document.getElementById("setMinutes").innerHTML = "03";
    document.getElementById("setSeconds").innerHTML = "00";
    
    document.body.style.background = "white";

    clearInterval(setHandlerID);
    startedSet = false;
}

function startAllTimers() {
    startTime();
    startSet();
}

function pauseAllTimers() {
    clearInterval(timeHandlerID);
    startedTime = false;

    clearInterval(setHandlerID);
    startedSet = false;
}

function resetAll() {
    document.getElementById("timeMinutes").innerHTML = "15";
    document.getElementById("timeSeconds").innerHTML = "00";
    document.getElementById("setMinutes").innerHTML = "03";
    document.getElementById("setSeconds").innerHTML = "00";

    clearInterval(timeHandlerID);
    startedTime = false;
    clearInterval(setHandlerID);
    startedSet = false;

    document.getElementById("pointS1").innerHTML = "00";
    document.getElementById("pointS2").innerHTML = "00";

    document.body.style.background = "white";
}

function resetAllTimers() {
    document.getElementById("timeMinutes").innerHTML = "15";
    document.getElementById("timeSeconds").innerHTML = "00";
    document.getElementById("setMinutes").innerHTML = "03";
    document.getElementById("setSeconds").innerHTML = "00";

    clearInterval(timeHandlerID);
    startedTime = false;
    clearInterval(setHandlerID);
    startedSet = false;

    document.body.style.background = "white";
}

function subPointS1() {
    let n = parseInt(document.getElementById("pointS1").innerHTML);
    if (n)
        document.getElementById("pointS1").innerHTML = (n - 1 < 10) ? '0' + (n - 1) : n - 1;
}

function addPointS1() {
    let n = parseInt(document.getElementById("pointS1").innerHTML);
    document.getElementById("pointS1").innerHTML = (n + 1 < 10) ? '0' + (n + 1) : n + 1;
}

function subPointS2() {
    let n = parseInt(document.getElementById("pointS2").innerHTML);
    if (n)
        document.getElementById("pointS2").innerHTML = (n - 1 < 10) ? '0' + (n - 1) : n - 1;
}

function addPointS2() {
    let n = parseInt(document.getElementById("pointS2").innerHTML);
    document.getElementById("pointS2").innerHTML = (n + 1 < 10) ? '0' + (n + 1) : n + 1;
}

function changeTimeRemain() {
    let input = prompt("TEMPO IN FORMATO 12:34");
    document.getElementById("timeMinutes").innerHTML = input.substring(0, 2);
    document.getElementById("timeSeconds").innerHTML = input.substring(3, 5);
}

function changeSetRemain() {
    let input = prompt("TEMPO IN FORMATO 01:23");
    document.getElementById("setMinutes").innerHTML = input.substring(0, 2);
    document.getElementById("setSeconds").innerHTML = input.substring(3, 5);
}

document.addEventListener("keypress", function (e) {
    if (e.keyCode == 32) {
        pressedKey();
    }
});

document.onkeydown = function (e) {
    if (e.key == 'p') {
        pressedKey();
    }
}

function pressedKey() {
    if (startedSet || startedTime) {
        pauseAllTimers();
        startedSet = false;
        startedTime = false;
    }
    else {
        startAllTimers();
        startedSet = true;
        startedTime = true;
    }
}

function setupLastSet() {
    document.getElementById("timeMinutes").innerHTML = "01";
    document.getElementById("timeSeconds").innerHTML = "30";
    document.getElementById("setMinutes").innerHTML = "01";
    document.getElementById("setSeconds").innerHTML = "30";

    clearInterval(timeHandlerID);
    startedTime = false;
    clearInterval(setHandlerID);
    startedSet = false;

    document.body.style.background = "white";
}
