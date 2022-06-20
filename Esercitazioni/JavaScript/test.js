function hello() {
    alert('hello');
}

function add() {
    var n = parseInt(document.getElementById('s1').innerHTML);
    document.getElementById('s1').innerHTML = n+1;
}

function reset() {
    document.getElementById('s1').innerHTML = 0;
}

document.write("<p>A second paragraph</p>");