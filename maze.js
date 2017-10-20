"use strict"

var loser = false;

var sessionStart = false;

window.onload = function(){

    var bound = document.querySelectorAll(".boundary");

    for (var i = 0; i < bound.length-1; i++) {

        bound[i].addEventListener("mouseover", gameOver);

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

    var bound = document.querySelectorAll(".boundary");

    for (var i = 0; i < bound.length-1; i++) {

        bound[i].className = cssName;

    }

}



function setStat(stat){

    document.getElementById("status").innerHTML = stat;

}
