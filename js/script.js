const now = new Date();
 function nowDate() {
     return now.getDate();
    }

 function theYear () {
     return " " + now.getFullYear();
 }

 function theTime () {
    var getTime = new Date();
     var hh = String(getTime.getHours()).padStart(2,"0");
     var mm = String(getTime.getMinutes()).padStart(2, "0");
     var ss = String(getTime.getSeconds()).padStart(2, "0");
     document.getElementById("nowTime").innerHTML = hh + ":" + mm + ":" + ss
     var t = setTimeout (theTime, 500);
 }
 
 function getDay() {
    var now = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday"; 
  var n = weekday[now.getDay()];
  document.getElementById("weekDay").textContent = n;
//   console.log(n);
}
getDay();

function getDay() {
    var now = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday"; 
  var n = weekday[now.getDay()];
  document.getElementById("weekDay").textContent = n;
//   console.log(n);
}
getDay();

var today = new Date();
 function dateTest() {
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
// console.log(dd);
 return dd + "." + mm + "." + yyyy;
};
var fuck = dateTest();
elNowDate = document.getElementById("nowDate");
elNowDate.innerHTML=fuck;
// console.log(fuck);

// var t = theTime();
//  elTime = document.getElementById("nowTime");
//  elTime.innerHTML = t;


// var today = new Date();
//  function dateTest() {
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// console.log(dd);
//  return mm + '/' + dd + '/' + yyyy;
// };

//  function theMonth () {
//      var month = new Array(12);
//      month[0] = "January";
//      month[1] = "February";
//      month[2] = "March";
//      month[3] = "April";
//      month[4] = "May";
//      month[5] = "June";
//      month[6] = "July";
//      month[7] = "August";
//      month[8] = "September";
//      month[9] = "October";
//      month[10] = "November";
//      month[11] = "December";
//      var m = month[now.getMonth()];
//      document.getElementById("nowMonth").textContent = m;
//      console.log(m);
//  }
//  theMonth();


//  var a = nowDate();
//  el = document.getElementById("nowDay");
//  el.textContent = a;
//  console.log(a);

//  var y = theYear();
//  elYear = document.getElementById("nowYear");
//  elYear.textContent = y;

 