"use strict";
window.onload=function(){

var loser = false;

var seshStart = false;

var blinky = document.querySelectorAll("#boundary");

for(var count=0; count<blinky.length-1; count++){
blinky[count].addEventListener("mouseover");
}
document.getElementById("end").addEventListener("mouseover",goal);

document.getElementById("start").addEventListener("click",beginGame);

}



function gameOver(){

    if(seshStart){

        setBoundaryCSS("boundary youlose");

        loser = true;

    }

}



function goal(){

    if(seshStart){

        if(!loser){

            setStat("You Win!");

        }

        else{

            setStat("You Lose!");

        }

        seshStart = false;

    }

}



function beginGame(){

    setBoundaryCSS("boundary");

    seshStart = true;

    loser = false;

    setStat("Game In Session");

}



function setBoundaryCSS(cssName){

    var blinky = document.querySelectorAll("#boundary");

    for (var i = 0; i < blinky.length-1; i++) {

        blinky[i].className = cssName;

    }

}



function setStat(stat){

    document.getElementById("status").innerHTML = stat;

}
