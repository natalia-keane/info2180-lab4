"use strict";
window.onload=function(){

var blinky = document.querySelector("#boundary1");
blinky.addEventListener("mouseover", function(){
  blinky.classList.add("youlose");
})
}
