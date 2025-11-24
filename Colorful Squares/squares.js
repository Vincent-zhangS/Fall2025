var topZ = 0;

window.onload = function () {

 //3.Add Button(done in class)
    var add = document.getElementById("add");
    add.onclick = addSquare;
//3.Change Color
    var colorChange = document.getElementById('color');
    colorChange.onclick = changeAllColors;

    var squareCount = parseInt(Math.random() * 21) + 30;
    for (let i = 0; i < squareCount; i++) {
        addSquare();
    }
}

function getRandomColor() {
    var possibilities = "0123456789ABCDEF";
    var result = "#";
    for (var i = 0; i < 6; i++) 
    {
        result += possibilities.charAt(parseInt(
            Math.random() * possibilities.length));
    }
    return result;
}

//1. Adds Square(done in class)
function addSquare() {
    var squarearea = document.getElementById("squarearea");
    var newSquare = document.createElement("div");
    newSquare.className = "square";
    newSquare.style.left = parseInt(Math.random() * 651) + "px";
    newSquare.style.top = parseInt(Math.random() * 251) + "px";

//5.Randomizing Square
newSquare.style.height = parseInt(Math.random() * 10) + 45 + "px";
newSquare.style.width = parseInt(Math.random() * 10) + 45 + "px";
    newSquare.style.backgroundColor = getRandomColor();
    squarearea.appendChild(newSquare);
    newSquare.onclick = bringFrontOrRemove;
}

//4.on click behavoir
function bringFrontOrRemove(){
    if(parseInt(this.style.zIndex) == topZ){
        this.remove();
    }
    else{
        topZ++;
        this.style.zIndex = topZ;
    }
}

//2. Change Colors
function changeAllColors(){
    var squareArea = document.getElementById("squarearea");
    var allSquares = Array.from(squareArea.querySelectorAll('.square'));
    for (let i = 0; i< allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}