 "use strict";

 const btns = document.querySelectorAll(".btn");
 const screen = document.querySelector(".screen");
 const equalBtn = document.querySelector(".btn-equal");
 const clearBtn = document.querySelector(".btn-clear");
 const fahrenheit = document.querySelector(".fahrenheit");

 console.log(fahrenheit);

 for (let x = 0; x < btns.length; x++) {
     let btn = btns[x];
     btn.addEventListener("click", function() {
         let number = btn.getAttribute("data-num");
         screen.value += number;
         //  console.log(screen.value);
     });
 };

 equalBtn.addEventListener("click", function() {
     if (screen.value === "") {
         alert("Enter Data")
     } else {
         let value = eval(screen.value);
         screen.value = value;
     }
 });

 fahrenheit.addEventListener("click", function() {
     let x = (5 / 9) * (screen.value - 32);
     // 5/9 * (F-32)
     x = x.toFixed(1);
     screen.value = x + " °C";
 })

 clearBtn.addEventListener("click", function() {
     screen.value = "";
 });