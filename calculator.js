//Get Dart Numbers
function dartOneNumber() {
    var dartone = Math.floor(Math.random() * 21);
    var multione = Math.floor((Math.random() * 3) + 1);
    var darttwo = Math.floor(Math.random() * 21);
    var multitwo = Math.floor((Math.random() * 3) + 1);
    var dartthree = Math.floor(Math.random() * 21);
    var multithree = Math.floor((Math.random() * 3) + 1);
    document.getElementById("dartone").value = dartone;
    document.getElementById("multione").value = multione;
    document.getElementById("darttwo").value = darttwo;
    document.getElementById("multitwo").value = multitwo;
    document.getElementById("dartthree").value = dartthree;
    document.getElementById("multithree").value = multithree;
    document.getElementById("darttotal").value = "";
}

//Check Guess is Correct
function checkGuess() {
    var dartone = document.getElementById("dartone").value;
    var multione = document.getElementById("multione").value;
    var darttwo = document.getElementById("darttwo").value;
    var multitwo = document.getElementById("multitwo").value;
    var dartthree = document.getElementById("dartthree").value;
    var multithree = document.getElementById("multithree").value;    
    var darttotal = dartone*multione + darttwo*multitwo + dartthree*multithree;
    if (document.getElementById("scoretotal").value > 0 && document.getElementById("darttotal").value == "") {
        document.getElementById("scoretotal").value = document.getElementById("scoretotal").value - darttotal
    }
    document.getElementById("darttotal").value = darttotal
}

//Reset
function resetGame() {
    document.getElementById("dartone").value = "";
    document.getElementById("multione").value = "";
    document.getElementById("darttwo").value = "";
    document.getElementById("multitwo").value = "";
    document.getElementById("dartthree").value = "";
    document.getElementById("multithree").value = "";
    document.getElementById("darttotal").value = "";
    document.getElementById("scoretotal").value = "501";
}
