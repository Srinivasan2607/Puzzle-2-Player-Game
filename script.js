var first=Math.floor(Math.random()*6)+1;
var second=Math.floor(Math.random()*6)+1;

if(first>second){
    document.querySelector("h1").innerHTML="Player One Won !!";
}

if(first<second){
    document.querySelector("h1").innerHTML="Player Two Won !!";
}
switch (first) {
    case 1:
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        break;

    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
        break;

    case 3:
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        break;

    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
        break;

    case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        break;

    case 6:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        break;
}

switch (second) {
    case 1:
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        break;

    case 2:
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        break;

    case 3:
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
        break;

    case 4:
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
        break;

    case 5:
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
        break;

    case 6:
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
        break;
}




