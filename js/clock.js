"use strict";

const clock = document.getElementById("clock");

 function theTime() {
     const getTime = new Date();
     const hh = String(getTime.getHours()).padStart(2, "0");
     const mm = String(getTime.getMinutes()).padStart(2, "0");
     const ss = String(getTime.getSeconds()).padStart(2, "0");
     clock.innerHTML = hh + ":" + mm + ":" + ss
     const t = setTimeout(theTime, 500);
 }

 theTime();

 let item = document.documentElement;
function fullScreenNow() {
   if (item.requestFullscreen) {
      item.requestFullscreen();
   } else if (item.webkitRequestFullscreen) {
      item.webkitRequestFullscreen();
   } else if (item.msRequestFullscreen) {
      item.msRequestFullscreen();
   }
};

clock.addEventListener("click", fullScreenNow);