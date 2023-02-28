var COUNTER = document.querySelector("#counter");
var COOKIE = document.querySelector("#cookie");
var POINTS = 0;

var AUTOCLICKER = document.querySelector("#click-auto");
var AUTOCOUNTER = 0;
var AUTOPRICE = 50;

var STATS = document.querySelector("#stats");

function addPoint(){
    POINTS += 1;
    COUNTER.innerText = POINTS;
}

function addClicker(){
    if (POINTS >= AUTOPRICE){
    POINTS -= AUTOPRICE;
    AUTOCOUNTER += 1;
    AUTOPRICE = AUTOPRICE * 2;
    COUNTER.innerText = POINTS;
    STATS.innerHTML = `<p>Auto clickers: ${AUTOCOUNTER}</p> <p>Price = ${AUTOPRICE}</p>`;
    }
}

setInterval(()=>{
    POINTS += AUTOCOUNTER * 5;
    COUNTER.innerText = POINTS;
}, 2000);



COOKIE.addEventListener("click", addPoint);
AUTOCLICKER.addEventListener("click", addClicker)