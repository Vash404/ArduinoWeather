var elem = document.getElementById("myBar");   
var width = 50;
var id = setInterval(frame, 10);

function frame() {
if (width > wind_speed) {
    width--; 
    elem.style.width = width + '%'; 
    } 

if (width < wind_speed) {
    width++; 
    elem.style.width = width + '%';
    }

if (width == wind_speed) {
    elem.style.width = width + '%';
}
}







var elem4 = document.getElementById("myBar4");   
var width4 = 50;
var id4 = setInterval(frame, 10);

function frame() {
if (width4 > rain_fall) {
    width4--; 
    elem4.style.width = width4 + '%'; 
    } 

if (width4 < rain_fall) {
    width4++; 
    elem4.style.width = width4 + '%';
    }

if (width4 == rain_fall) {
    elem4.style.width = width4 + '%';
}
}
                  





var elem2 = document.getElementById("myBar2");   
var width2 = 50;
var id2 = setInterval(frame, 10);

function frame() {
if (width2 > aqspercent) {
    width2--; 
    elem2.style.width = width2 + '%'; 
    } 

if (width2 < aqspercent) {
    width2++; 
    elem2.style.width = width2 + '%';
    }

if (width2 == aqspercent) {
    elem2.style.width = width2 + '%';
}
}
               





var elem3 = document.getElementById("myBar3");   
var width3 = 50;
var id3 = setInterval(frame, 10);

function frame() {
if (width3 > ppmCO2_b) {
    width3--; 
    elem3.style.width = width3 + '%'; 
    } 

if (width3 < ppmCO2_b) {
    width3++; 
    elem3.style.width = width3 + '%';
    }

if (width3 == ppmCO2_b) {
    elem3.style.width = width3 + '%';
}
}
