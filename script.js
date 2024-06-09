var score = 0;
var timer = 20;
var hitrn;

let n = 162;

let height = window.screen.height;
let width = window.screen.width;

if(height>width){
    n = 40;
}

console.log(height,width);


function makeBubble(){

    var clutter = "";
    
    for (let i = 1; i<=n; i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `
        <div id="circles" class="circle">${rn}
        </div>`
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerInt = setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector("#timer-cnt").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`;
        }
    },1000)
}

function getHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit-cnt").textContent = hitrn;
}


function increaseScore(){
    score +=10;
    document.querySelector("#score-cnt").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum == hitrn){
        increaseScore();
        makeBubble();
        getHit();
    }
})

makeBubble();
runTimer();
getHit();
