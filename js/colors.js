 "use strict";

 const colorsDiv = document.querySelector(".colors");
 const allColors = document.querySelector(".all-colors");
 const btn = document.querySelector("#btn");
 const input = document.querySelector("#colName");

 function fillColors() {
     for (let x = 0; x < cssColors.length; x++) {
         let colorWrap = document.createElement("div");
         let par = document.createElement("p");
         let red = document.createElement("span");
         let black = document.createElement("span");
         colorWrap.classList = "colorWrap";
         red.classList = "red";
         black.classList = "black";
         par.className = "colorPar";
         red.innerText = cssColors[x].name;
         black.innerText = cssColors[x].color;
         par.style.backgroundColor = cssColors[x].color;
         //  par.innerHTML = `<span class="red">${cssColors[x].name}</span>   ==    <span class="black">${cssColors[x].color}</span>`;

         colorWrap.appendChild(red);
         colorWrap.appendChild(par);
         colorWrap.appendChild(black);
         allColors.appendChild(colorWrap);
     };
 }


 btn.addEventListener("click", function() {

     let par = document.createElement("p");
     let parSpan = document.createElement("span");

     colorsDiv.appendChild(par);
     colorsDiv.appendChild(parSpan);
     const colorName = cssColors.filter(function(item, index) {
         let regex = new RegExp(`^${input.value}$`, "i");
         const name = item.name.toLowerCase().match(regex);
         //  console.log(regex);
         return name;
     });
     par.className = "added";
     parSpan.className = "parSpan";
     par.style.backgroundColor = colorName[0].color;
     parSpan.innerText = colorName[0].color;
 });

 fillColors();

 const clear = document.getElementById("clear");
 clear.addEventListener("click", function() {
     input.value = "";

 });