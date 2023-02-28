var POINTS = document.querySelector("#points")
var COOKIE = document.querySelector("#cookie")



var CLICKERBTN = document.querySelector("#clicker-btn");
var GRANNIEBTN = document.querySelector("#grannie-btn");

var CLICKER = document.querySelector("#clickers");
var CLICKERPRICETAG = document.querySelector("#clickers-price");
var GRANNIE = document.querySelector("#grannies");
var GRANNIEPRICETAG = document.querySelector("#grannies-price");
var CPS = document.querySelector("#cps");

var POINTSCOUNTER = 0;
var CLICKERCOUNTER = 0;
var CLICKERPRICE = 50;
var GRANNIECOUNTER = 0;
var GRANNIEPRICE = 500;

var POP = new Audio('audio/pop.mp3');



function addPoint(){
    POINTSCOUNTER += 1;
    POP.play();
}

function addClick(){
    POP.play();
    if (POINTSCOUNTER >= CLICKERPRICE){
        POINTSCOUNTER -= CLICKERPRICE;
        CLICKERCOUNTER += 1;
        showClickers(CLICKER);
        addClickPrice(CLICKERPRICE);
        showClickersPrice(CLICKERPRICETAG);
    }
}

function addClickPrice(){
    CLICKERPRICE += Math.floor(CLICKERPRICE / 3);
}

function addGrannie(){
    POP.play();
    if (POINTSCOUNTER >= GRANNIEPRICE){
        POINTSCOUNTER -= GRANNIEPRICE;
        GRANNIECOUNTER += 1;
        showGrannies(GRANNIE);
        addGranniePrice(GRANNIEPRICE);
        showGrannniesPrice(GRANNIEPRICETAG);
    }
}

function addGranniePrice(){
    GRANNIEPRICE += Math.floor(GRANNIEPRICE / 3);
}



function showPoints(POINTS){
    if (POINTSCOUNTER < 1000){
        POINTS.innerText = POINTSCOUNTER;
    }
    else if (POINTSCOUNTER < 1000000){
        POINTS.innerText = `${(POINTSCOUNTER/1000).toFixed(3)}K`;
    }
    else{
        POINTS.innerText = `${(POINTSCOUNTER/1000000).toFixed(3)}M`;
    }
}

function showClickers(){
    if (CLICKERCOUNTER < 1000){
        CLICKER.innerText = `Clickers: ${CLICKERCOUNTER}`
    } else if (CLICKERCOUNTER < 1000000){
        CLICKER.innerText = `Clickers: ${(CLICKERCOUNTER/1000).toFixed(3)}K`
    }
    else{
        CLICKER.innerText = `Clickers: ${(CLICKERCOUNTER/1000000).toFixed(3)}M`
    }
}

function showClickersPrice(){
    if (CLICKERPRICE < 1000){
        CLICKERPRICETAG.innerText = `Clickers price: ${CLICKERPRICE}`
    } else if (CLICKERPRICE < 1000000){
        CLICKERPRICETAG.innerText = `Clickers price: ${(CLICKERPRICE/1000).toFixed(3)}K`
    }
    else{
        CLICKERPRICETAG.innerText = `Clickers price: ${(CLICKERPRICE/1000000).toFixed(3)}M`
    }
}

function showGrannies(){
    if (GRANNIECOUNTER < 1000){
        GRANNIE.innerText = `Grannies: ${GRANNIECOUNTER}`
    } else if (GRANNIECOUNTER < 1000000){
        GRANNIE.innerText = `Grannies: ${(GRANNIECOUNTER/1000).toFixed(3)}K`
    }
    else{
        GRANNIE.innerText = `Grannies: ${(GRANNIECOUNTER/1000000).toFixed(3)}M`
    }
}

function showGrannniesPrice(){
    if (GRANNIEPRICE < 1000){
        GRANNIEPRICETAG.innerText = `Grannies price: ${GRANNIEPRICE}`
    } else if (GRANNIEPRICE < 1000000){
        GRANNIEPRICETAG.innerText = `Grannies price: ${(GRANNIEPRICE/1000).toFixed(3)}K`
    }
    else{
        GRANNIEPRICETAG.innerText = `Grannies price: ${(GRANNIEPRICE/1000000).toFixed(3)}M`
    }
}




setInterval(()=>{
    showPoints(POINTS);
},10);


setInterval(()=>{
    POINTSCOUNTER += CLICKERCOUNTER * 5 + GRANNIECOUNTER * 100;
    CPS.innerText = `Cps: ${CLICKERCOUNTER* 5 + GRANNIECOUNTER * 100}`;
}, 1000);

COOKIE.addEventListener("click", addPoint);
CLICKERBTN.addEventListener("click", addClick);
GRANNIEBTN.addEventListener("click", addGrannie);