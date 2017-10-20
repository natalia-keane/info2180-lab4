"use strict"

var loser = false;

var seshStart = false;

window.onload = function(){

    var boundary = document.querySelectorAll(".boundary");

    for (var i = 0; i < boundary.length-1; i++) {

        boundary[i].addEventListener("mouseover", gameOver);

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

    var boundary = document.querySelectorAll(".boundary");

    for (var i = 0; i < boundary.length-1; i++) {

        boundary[i].className = cssName;

    }

}



function setStat(stat){

    document.getElementById("status").innerHTML = stat;

}
