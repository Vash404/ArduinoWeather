str_RESET = "";
str_BUZZER_OFF = "";
str_OUT_1 = "";
str_OUT_2 = "";

var RESET_state = 0;
var BUZZER_OFF_state = 0;
var OUT_1_state = 0;
var OUT_2_state = 0;
var OUT_3_state = 0;
var OUT_4_state = 0;
var P = 104000;	
var t1 = 35;
var h1 = 100;
var t2 = 40;
var h2 = 100;
var ppmCO2_b = 50;
var realPower = 3000;
var supplyVoltage = 250;
var wind_speed = 50;
var aqspercent = 50;
var rain_fall = 50;

								
function GetArduinoIO()
{
    
nocache = "&nocache=" + Math.random() * 1000000;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (this.readyState == 4) {
            if (this.status == 200) {
                if (this.responseXML != null) {
                    
                    // XML file received
                
                    // get pushbutton state
                    
                    if (this.responseXML.getElementsByTagName('button')[0].childNodes[0].nodeValue === "on") {
                        document.getElementById("RESET").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#f33;'></div>"+"CLEAR/LOCK &#9650&#9660: ON";
                        RESET_state = 1;
                    }
                    else {
                        document.getElementById("RESET").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#00cc00;'></div>"+"CLEAR/LOCK &#9650&#9660: OFF";
                        RESET_state = 0;
                    }   														
                                            
                    if (this.responseXML.getElementsByTagName('button')[1].childNodes[0].nodeValue === "on") {
                        document.getElementById("BUZZER_OFF").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#f33;'></div>"+"MUTE ALARM: ON";
                        BUZZER_OFF_state = 1;
                    }
                    else {
                        document.getElementById("BUZZER_OFF").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#00cc00;'></div>"+"MUTE ALARM: OFF";
                        BUZZER_OFF_state = 0;
                    }   				
    
                    if (this.responseXML.getElementsByTagName('button')[2].childNodes[0].nodeValue === "on") {
                        document.getElementById("OUT_1").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#f33;'></div>"+"SET OUT 1: ON";
                        OUT_1_state = 1;
                    }
                    else {
                        document.getElementById("OUT_1").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#00cc00;'></div>"+"SET OUT 1: OFF";
                        OUT_1_state = 0;
                    }   				
                
                    if (this.responseXML.getElementsByTagName('button')[3].childNodes[0].nodeValue === "on") {
                        document.getElementById("OUT_2").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#f33;'></div>"+"SET OUT 2: ON";
                        OUT_2_state = 1;
                    }
                    else {
                        document.getElementById("OUT_2").innerHTML = "<div style='width:40px;height:13px;border-radius:2px;background:#00cc00;'></div>"+"SET OUT 2: OFF";
                        OUT_2_state = 0;
                    }   				
                    
                    // get digital outputs state
                    
                    if (this.responseXML.getElementsByTagName('digital_outputs')[0].childNodes[0].nodeValue === "on") {
                        document.getElementById("OUT_3").innerHTML = "<div style='width:20px;height:20px;border-radius:20px;background:#f33; float:left; margin-left:75px;margin-right:5px;'></div><div style='width:20px;float:left;'>YES</div>";
                        OUT_3_state = 1;
                    }
                    else {
                        document.getElementById("OUT_3").innerHTML = "<div style='width:20px;height:20px;border-radius:20px;background:#00cc00; float:left; margin-left:75px;margin-right:5px;'></div><div style='width:20px;float:left;'>NO</div>";
                        OUT_3_state  = 0;
                    }   				
                    
                    if (this.responseXML.getElementsByTagName('digital_outputs')[1].childNodes[0].nodeValue === "on") {
                        document.getElementById("OUT_4").innerHTML = "<div style='width:20px;height:20px;border-radius:20px;background:#f33; float:center;margin-left:70px;'></div>";
                        OUT_4_state = 1;
                    }
                    else {
                        document.getElementById("OUT_4").innerHTML = "<div style='width:20px;height:20px;border-radius:20px;background:#00cc00; float:center;margin-left:70px;'></div>";
                        OUT_4_state  = 0;
                    }   				
                
                    // get RTC time & time server
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('time').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("time")[count].innerHTML =
                            this.responseXML.getElementsByTagName('time')[count].childNodes[0].nodeValue;
                    }
                    
                    // get bmp sensor temperature and alarm
                        var count;
                        var num_an = this.responseXML.getElementsByTagName('bmp_temp').length;
                        for (count = 0; count < num_an; count++) {
                            document.getElementsByClassName("bmp_temp")[count].innerHTML =
                                this.responseXML.getElementsByTagName('bmp_temp')[count].childNodes[0].nodeValue;
                        }														
                    
                    //get data for gauge
                    
                    P  = this.responseXML.getElementsByTagName('gauge')[0].childNodes[0].nodeValue;
                    t1 = this.responseXML.getElementsByTagName('gauge')[1].childNodes[0].nodeValue;
                    h1 = this.responseXML.getElementsByTagName('gauge')[2].childNodes[0].nodeValue;
                    t2 = this.responseXML.getElementsByTagName('gauge')[3].childNodes[0].nodeValue;
                    h2 = this.responseXML.getElementsByTagName('gauge')[4].childNodes[0].nodeValue;
                    realPower = this.responseXML.getElementsByTagName('gauge')[5].childNodes[0].nodeValue;
                    
                    
                    // get wind speed data
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('wind_speed_data').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("wind_speed_data")[count].innerHTML =
                            this.responseXML.getElementsByTagName('wind_speed_data')[count].childNodes[0].nodeValue;
                        wind_speed = this.responseXML.getElementsByTagName('wind_speed_data')[0].childNodes[0].nodeValue
                    }
                    
                    // get rain data
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('rain_data').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("rain_data")[count].innerHTML =
                            this.responseXML.getElementsByTagName('rain_data')[count].childNodes[0].nodeValue;
                        rain_fall = this.responseXML.getElementsByTagName('rain_data')[0].childNodes[0].nodeValue;
                    
                    }
                                                            
                    // get barometric pressure delta value 
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('Delta_P').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("Delta_P")[count].innerHTML =
                            this.responseXML.getElementsByTagName('Delta_P')[count].childNodes[0].nodeValue;
                    }
                                            
                    // get barometric pressure state
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('Delta_P_state').length;
                    for (count = 0; count < num_an; count++) {
                    
                    if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP1_good"){
document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#00cc00;margin:0 auto;'></div>";
                        } 
                    
                    else if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP1_stable") {
        document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#ffffff;margin:0 auto;'></div>";
                    
        }
                    
                    else if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP1_alarm") {
        document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#f33;margin:0 auto;'></div>";
                    
        }
                    
                    if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP2_good"){
document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#00cc00;margin:0 auto;'></div>";
                        } 
                    
                    else if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP2_stable") {
        document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#ffffff;margin:0 auto;'></div>";
                    
        }
                    else if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP2_alarm") {
        document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#f33;margin:0 auto;'></div>";
                    
        }
    
                    if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP3_good"){
document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#00cc00;margin:0 auto;'></div>";
                        } 
                    
                    else if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP3_stable") {
        document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#ffffff;margin:0 auto;'></div>";
                    }
        
        else if (this.responseXML.getElementsByTagName('Delta_P_state')[count].childNodes[0].nodeValue == "DeltaP3_alarm") {
        document.getElementsByClassName("Delta_P_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#f33;margin:0 auto;'></div>";
                    
        }
    }																	
                    
                    
                    // get heat index state
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('HI_state').length;
                    for (count = 0; count < num_an; count++) {
                    
                    if (this.responseXML.getElementsByTagName('HI_state')[count].childNodes[0].nodeValue == "A"){
document.getElementsByClassName("HI_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#f33;margin:0 auto;'></div>";
                        } 
                    
                    else if (this.responseXML.getElementsByTagName('HI_state')[count].childNodes[0].nodeValue == "B"){
document.getElementsByClassName("HI_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#fd6012;margin:0 auto;'></div>";
                        } 
                    
                    
                    else if (this.responseXML.getElementsByTagName('HI_state')[count].childNodes[0].nodeValue == "C"){
document.getElementsByClassName("HI_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#ffac33;margin:0 auto;'></div>";
                        } 
                    
                    
                    else if (this.responseXML.getElementsByTagName('HI_state')[count].childNodes[0].nodeValue == "D"){
document.getElementsByClassName("HI_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#ffff33;margin:0 auto;'></div>";
                        } 
                    
                    else if (this.responseXML.getElementsByTagName('HI_state')[count].childNodes[0].nodeValue == "E"){
document.getElementsByClassName("HI_state")[count].innerHTML = "<div style='width:15px;height:15px;border-radius:15px;background:#00cc00;margin:0 auto;'></div>";
                        } 
    }



            // get temperature and humidity data
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('T_H_data').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("T_H_data")[count].innerHTML =
                            this.responseXML.getElementsByTagName('T_H_data')[count].childNodes[0].nodeValue;
                    }
                                                                        
                    
                    // get air quality sensor value
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('aqs_data').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("aqs_data")[count].innerHTML =
                            this.responseXML.getElementsByTagName('aqs_data')[count].childNodes[0].nodeValue;
                    if (count == 0){
                            aqspercent = this.responseXML.getElementsByTagName('aqs_data')[count].childNodes[0].nodeValue;
                        } 
                    }
                                    
                    // get CO2 concentration current value, max/min value, and alarm
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('CO2_data').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("CO2_data")[count].innerHTML =
                            this.responseXML.getElementsByTagName('CO2_data')[count].childNodes[0].nodeValue;	 
                    }

                    // get CO2 concentration for graphic bar
                    ppmCO2_b = this.responseXML.getElementsByTagName('CO2_data')[0].childNodes[0].nodeValue/20;							 

        
                    //get data for Energy monitor value
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('energy_monitor').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("energy_monitor")[count].innerHTML =
                            this.responseXML.getElementsByTagName('energy_monitor')[count].childNodes[0].nodeValue;
                    }
                    
                    // get Energy monitor max/min value and alarm
                    
                    var count;
                    var num_an = this.responseXML.getElementsByTagName('energy_monitor_max_min_data').length;
                    for (count = 0; count < num_an; count++) {
                        document.getElementsByClassName("energy_monitor_max_min_data")[count].innerHTML =
                            this.responseXML.getElementsByTagName('energy_monitor_max_min_data')[count].childNodes[0].nodeValue;
                    }
                }
            }
        }
    }

    // send HTTP GET request
    
    request.open("GET", "ajax_inputs" + str_RESET + str_BUZZER_OFF + str_OUT_1 + str_OUT_2 + nocache, true);
    request.send(null);
    setTimeout('GetArduinoIO()', 5000);
str_RESET = "";
str_BUZZER_OFF = "";
str_OUT1 = "";
str_OUT2 = "";
str_OUT3 = "";
}

function GetButtonReset()
{
    if (RESET_state === 1) {
        RESET_state = 0;
        str_RESET = "&RESET=0";
        
    }
    else {
        RESET_state = 1;
        str_RESET = "&RESET=1";
    }
}

function GetButtonTacitate()
{
    if (BUZZER_OFF_state === 1) {
        BUZZER_OFF_state = 0;
        str_BUZZER_OFF = "&BUZZER_OFF=0";
        
    }
    else {
        BUZZER_OFF_state = 1;
        str_BUZZER_OFF = "&BUZZER_OFF=1";
    }
}

function GetButtonOUT1()
{
    if (OUT_1_state === 1) {
        OUT_1_state = 0;
        str_OUT_1 = "&OUT_1=0";
        
    }
    else {
        OUT_1_state = 1;
        str_OUT_1 = "&OUT_1=1";
    }
}

function GetButtonOUT2()
{
    if (OUT_2_state === 1) {
        OUT_2_state = 0;
        str_OUT_2 = "&OUT_2=0";
        
    }
    else {
        OUT_2_state = 1;
        str_OUT_2 = "&OUT_2=1";
    }
}

