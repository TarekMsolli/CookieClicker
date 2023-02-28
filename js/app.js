POINTS = document.querySelector("#points")
COOKIE = document.querySelector("#cookie")

CLICKERBTN = document.querySelector("#clicker-btn");
GRANNIEBTN = document.querySelector("#grannie-btn");

CLICKER = document.querySelector("#clickers");
CLICKERPRICETAG = document.querySelector("#clickers-price");
GRANNIE = document.querySelector("#grannies");
GRANNIEPRICETAG = document.querySelector("#grannies-price");
CPS = document.querySelector("#cps");

POINTSCOUNTER = 0;
CLICKERCOUNTER = 0;
CLICKERPRICE = 50;
GRANNIECOUNTER = 0;
GRANNIEPRICE = 500;





function addPoint(){
    POINTSCOUNTER += 1;
    showPoints(POINTS);
}

function addClick(){
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
    CLICKER.innerText = `Clickers: ${CLICKERCOUNTER}`
}

function showClickersPrice(){
    CLICKERPRICETAG.innerText = `Clickers price: ${CLICKERPRICE}`
}

function showGrannies(){
    GRANNIE.innerText = `Grannies: ${GRANNIECOUNTER}`
}

function showGrannniesPrice(){
    GRANNIEPRICETAG.innerText = `Grannies price: ${GRANNIEPRICE}`
}







setInterval(()=>{
    POINTSCOUNTER += CLICKERCOUNTER * 5 + GRANNIECOUNTER * 100;
    showPoints(POINTS);
    CPS.innerText = `Cps: ${CLICKERCOUNTER* 5 + GRANNIECOUNTER * 100}`;
}, 1000);

COOKIE.addEventListener("click", addPoint);
CLICKERBTN.addEventListener("click", addClick);
GRANNIEBTN.addEventListener("click", addGrannie);