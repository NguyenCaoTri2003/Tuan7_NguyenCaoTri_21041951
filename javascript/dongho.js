// var $ = document;
// var getID = (id) => {
//     return $.getElementById(id);
// }

// var time = getID('time');
// var btnStart = getID('start');
// var btnReset = getID('reset');


// var minutes = getID('minutes');
// var seconds = getID('seconds');
// var milliseconds = getID('milliseconds')

// btnStart.onclick = function(){start()};

// function start(){
//     var t = 0;
//     var i = 1;
//     var j = 1;
//         setInterval(() => {
//             milliseconds.innerText = t++;
//             if(t == 99){
//                 seconds.innerText = i++;
//                 t = 0;
//             }  
//             if(i == 61){
//                 minutes.innerText = j++;
//                 i = 0;
//             }
//             },10)
//     btnStart.textContent= 'Stop';

//     let div = document.getElementsByName('b');

//     for (let o = 0; o < div.length; o++){
//         div[o].style.background = "red";
//     }

//     btnStart.onclick = function(){stop()};
//     function stop(){
//     btnStart.textContent= 'Start';
//     let div = document.getElementsByName('b');

//     for (let o = 0; o < div.length; o++){
//         div[o].style.background = "green";
//     }
//     btnStart.classList.toggle("on");
    
// }
// }
var $ = document;
var getID = (id) => {
    return $.getElementById(id);
}
var mili = getID("milliseconds");
var sec = getID("seconds");
var min = getID("minutes");

var btn_start = getID('start');
var btn_stop = getID('stop');
var btn_reset = getID('reset');

var interval;
var milliseconds = 00;
var seconds = 00;
var minutes = 00;

function start(){
    milliseconds++;

    if(milliseconds <= 9)
        mili.innerHTML = "0" + milliseconds;
    if(milliseconds > 9)
        mili.innerHTML = milliseconds;
    if(milliseconds > 99){
        milliseconds = 0;
        mili.innerHTML = "0" + 0;
        seconds++;
        if(seconds <= 9)
            sec.innerHTML = "0" + seconds;
        if(seconds > 9)
            sec.innerHTML = seconds;
        if(seconds == 60){
            seconds = 0;
            sec.innerHTML = "0" + 0;
            minutes++;
            if(minutes <= 9)
                min.innerHTML = "0" + minutes;
            if(minutes > 9)
                min.innerHTML = minutes;   
        }  
    }
}

let isRunning = false;

btn_start.onclick = function(){
    if(!isRunning){
        isRunning = true;
        interval = setInterval(start,10)
    }
}
btn_stop.onclick = function(){
    clearInterval(interval);
    isRunning = false;
}
btn_reset.onclick = function(){
    clearInterval(interval);
    isRunning = false;
    milliseconds = "00";
    seconds = "00";
    minutes = "00";

    mili.innerHTML = milliseconds;
    sec.innerHTML = seconds;
    min.innerHTML = minutes;

}










