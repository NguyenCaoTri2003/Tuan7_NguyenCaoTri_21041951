// function Stopwatch(elem){
//     var time = 0;
//     var offset;
//     var interval;

//     function delta(){
//         var now = Date.now;
//         var timePassed = now - offset;

//         offset = now;

//         return timePassed;
//     }

//     function timeFormatter(time){
//         time = new Date(time);

//         var minutes = time.getMinutes().toString();
//         var seconds = time.getSeconds().toString();
//         var minutes = time.getMinutes().toString();

//     }

//     function update(){
//         if(this.isOn){
//             time += delta();
//         }
//         elem.textContent = timeFormatter(time);
//     }

// }



// this.start = function(){
//     interval = setInterval(update.bind(this),1);
//     offset = Date.now();
//     this.isOn = true;
// }

//
var $ = document;
var getID = (id) => {
    return $.getElementById(id);
}

var time = getID('time');
var btnStart = getID('start');
var btnReset = getID('reset');


var minutes = getID('minutes');
var seconds = getID('seconds');
var milliseconds = getID('milliseconds')

btnStart.onclick = function(){start()};

function start(){
    var t = 0;
    var i = 1;
    var j = 1;
        setInterval(() => {
            milliseconds.innerText = t++;
            if(t == 99){
                seconds.innerText = i++;
                t = 0;
            }  
            if(i == 61){
                minutes.innerText = j++;
                i = 0;
            }
            },10)
    btnStart.textContent= 'Stop';

    let div = document.getElementsByName('b');

    for (let o = 0; o < div.length; o++){
        div[o].style.background = "red";
    }

    btnStart.onclick = function(){stop()};
    function stop(){
    btnStart.textContent= 'Start';
    let div = document.getElementsByName('b');

    for (let o = 0; o < div.length; o++){
        div[o].style.background = "green";
    }
    btnStart.classList.toggle("on");
    
}

}








