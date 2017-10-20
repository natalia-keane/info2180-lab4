"use strict";
window.onload=function(){

var loser = false;

var sessionStart = false;

var blinky = document.querySelectorAll(".boundary");

for(var count=0; count<blinky.length-1; count++){
blinky[count].addEventListener("mouseover", gameOver);
}
blinky.addEventListener("mouseover", function(){
  blinky.classList.add("youlose");
})
}
    document.getElementById("end").addEventListener("mouseover",goal);

    document.getElementById("start").addEventListener("click",beginGame);

}



function gameOver(){

    if(sessionStart){

        setBoundaryCSS("boundary youlose");

        loser = true;

    }

}



function goal(){

    if(sessionStart){

        if(!loser){

            setStat("You Win!");

        }

        else{

            setStat("You Lose!");

        }

        sessionStart = false;

    }

}



function beginGame(){

    setBoundaryCSS("boundary");

    sessionStart = true;

    loser = false;

    setStat("Game In Session");

}



function setBoundaryCSS(cssName){

    var blinky = document.querySelectorAll(".boundary");

    for (var i = 0; i < blinky.length-1; i++) {

        blinky[i].className = cssName;

    }

}



function setStat(stat){

    document.getElementById("status").innerHTML = stat;

}
