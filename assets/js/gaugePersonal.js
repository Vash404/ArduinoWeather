//------------------------------------------------------------------------------------------------------------------------------

var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.16, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.52, // // Relative to gauge radius
            strokeWidth: 0.062, // The thickness
            color: '#000000' // Fill color
        },
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: [0, 520, 1040],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },

        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        };
var target = document.getElementById('gauge1'); // your canvas element
var gauge1 = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge1.maxValue = 1040; // set max gauge value
gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 128; // set animation speed (32 is default value)
gauge1.set(300); // set actual value
gauge1.setTextField(document.getElementById("gauge1text"));

//------------------------------------------------------------------------------------------------------------------------------
var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.16, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.52, // // Relative to gauge radius
        strokeWidth: 0.062, // The thickness
        color: '#000000' // Fill color
    },/*
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [100, 130, 150, 220.1, 260, 3000],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },*/
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 15}, // Red from 100 to 130
        {strokeStyle: "#FFDD00", min: 15, max: 18}, // Yellow
        {strokeStyle: "#30B32D", min: 18, max: 25}, // Green
        {strokeStyle: "#FFDD00", min: 25, max: 30}, // Yellow
        {strokeStyle: "#F03E3E", min: 30, max: 35}  // Red
     ],

    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
    
};
var target = document.getElementById('gauge2'); // your canvas element
var gauge2 = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge2.maxValue = 35; // set max gauge value
gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge2.animationSpeed = 128; // set animation speed (32 is default value)
gauge2.set(30); // set actual value
gauge2.setTextField(document.getElementById("gauge2text"));

//------------------------------------------------------------------------------------------------------------------------------

var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.16, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.52, // // Relative to gauge radius
        strokeWidth: 0.062, // The thickness
        color: '#000000' // Fill color
    },/*
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [100, 130, 150, 220.1, 260, 3000],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },*/
    staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 15}, // Red from 100 to 130
        {strokeStyle: "#FFDD00", min: 15, max: 20}, // Yellow
        {strokeStyle: "#30B32D", min: 20, max: 30}, // Green
        {strokeStyle: "#FFDD00", min: 30, max: 35}, // Yellow
        {strokeStyle: "#F03E3E", min: 35, max: 40}  // Red
     ],


    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
    
};
var target = document.getElementById('gauge3'); // your canvas element
var gauge3 = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge3.maxValue = 40; // set max gauge value
gauge3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge3.animationSpeed = 128; // set animation speed (32 is default value)
gauge3.set(30); // set actual value
gauge3.setTextField(document.getElementById("gauge3text"));

//------------------------------------------------------------------------------------------------------------------------------

var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.16, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.52, // // Relative to gauge radius
        strokeWidth: 0.062, // The thickness
        color: '#000000' // Fill color
    },/*
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [100, 130, 150, 220.1, 260, 3000],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },*/
    

    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
    
};
var target = document.getElementById('gauge4'); // your canvas element
var gauge4 = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge4.maxValue = 100; // set max gauge value
gauge4.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge4.animationSpeed = 128; // set animation speed (32 is default value)
gauge4.set(30); // set actual value
gauge4.setTextField(document.getElementById("gauge4text"));

//------------------------------------------------------------------------------------------------------------------------------

var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.16, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.52, // // Relative to gauge radius
        strokeWidth: 0.062, // The thickness
        color: '#000000' // Fill color
    },/*
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [100, 130, 150, 220.1, 260, 3000],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },*/

    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
    
};
var target = document.getElementById('gauge5'); // your canvas element
var gauge5 = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge5.maxValue = 100; // set max gauge value
gauge5.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge5.animationSpeed = 128; // set animation speed (32 is default value)
gauge5.set(30); // set actual value
gauge5.setTextField(document.getElementById("gauge5text"));

//------------------------------------------------------------------------------------------------------------------------------

var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.16, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.52, // // Relative to gauge radius
        strokeWidth: 0.062, // The thickness
        color: '#000000' // Fill color
    },/*
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [100, 130, 150, 220.1, 260, 3000],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },*/

    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
    
};
var target = document.getElementById('gauge6'); // your canvas element
var gauge6 = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge6.maxValue = 3000; // set max gauge value
gauge6.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge6.animationSpeed = 128; // set animation speed (32 is default value)
gauge6.set(3000); // set actual value
gauge6.setTextField(document.getElementById("gauge6text"));

//------------------------------------------------------------------------------------------------------------------------------
