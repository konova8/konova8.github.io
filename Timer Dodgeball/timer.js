let updateClock = 100; // Aggiornamento n millisecondi

let startedTime = false;
let startedSet = false;
let remainTime = 0;
let remainSet = 0;
let timeHandlerID;
let setHandlerID;

function timeHandler() {
    // If the count down is finished, stop
    if (remainSet < 0 || remainTime < 0) {
        clearInterval(timeHandlerID);
        document.getElementById("timeMinutes").innerHTML = "STOP";
        document.getElementById("timeSeconds").innerHTML = "STOP";
        document.getElementById("rightContainer").style.backgroundColor = "red";
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
    if (remainSet < 0) {
        clearInterval(setHandlerID);
        document.getElementById("setMinutes").innerHTML = "STOP";
        document.getElementById("setSeconds").innerHTML = "STOP";
        document.getElementById("rightContainer").style.backgroundColor = "red";
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
    
    if (!startedSet) {
        setHandlerID = setInterval(setHandler, updateClock);
        startedSet = true;
    }
    else {
        console.log("Già partito Set timer!");
    }
}

function startBoth() {
    startTime();
    startSet();
}

function pauseTimer() {
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

    document.getElementById("rightContainer").style.backgroundColor = "white";
}

function subPointS1() {
    let n = parseInt(document.getElementById("pointS1").innerHTML);
    document.getElementById("pointS1").innerHTML = (n-1 < 10)? '0'+(n-1) : n-1;
}

function addPointS1() {
    let n = parseInt(document.getElementById("pointS1").innerHTML);
    document.getElementById("pointS1").innerHTML = (n+1 < 10)? '0'+(n+1) : n+1;
}

function subPointS2() {
    let n = parseInt(document.getElementById("pointS2").innerHTML);
    document.getElementById("pointS2").innerHTML = (n-1 < 10)? '0'+(n-1) : n-1;
}

function addPointS2() {
    let n = parseInt(document.getElementById("pointS2").innerHTML);
    document.getElementById("pointS2").innerHTML = (n+1 < 10)? '0'+(n+1) : n+1;
}

function changeTimeRemain() {
    let input = prompt();
    document.getElementById("timeMinutes").innerHTML = input.substring(0, 2);
    document.getElementById("timeSeconds").innerHTML = input.substring(3, 5);
}

function changeSetRemain() {
    let input = prompt();
    document.getElementById("setMinutes").innerHTML = input.substring(0, 2);
    document.getElementById("setSeconds").innerHTML = input.substring(3, 5);
}