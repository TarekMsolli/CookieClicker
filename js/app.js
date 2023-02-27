var COUNTER = document.querySelector("#counter");
var COOKIE = document.querySelector("#cookie");
var POINTS = 0;
function addPoint(){
    POINTS = POINTS + 1;
    COUNTER.innerText = POINTS;
}
COOKIE.addEventListener("click", addPoint);