function createPopup(id){
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".control");

    function openPopup(){
        popupNode.classList.add("position-open");
        popupNode.classList.remove("position-close");
    }

    function closePopup(){
        popupNode.classList.remove("position-open");
        popupNode.classList.add("position-close");
        stopvideo();
    }

    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    return openPopup;
}

function stopvideo(){
    const cheaz = document.getElementById("stopcheaz");
    const liptint = document.getElementById("stopliptint");
    const cansim = document.getElementById("stopcansim");
    const ctrl = document.getElementById("stopctrl");
    const y19 = document.getElementById("stopy19");
    const sky = document.getElementById("stopsky");
    const sirkel = document.getElementById("stopsirkel")
    const egoisme = document.getElementById("stopegoisme")

    cheaz.pause();
    cheaz.currentTime = 0;
    liptint.pause();
    liptint.currentTime = 0;
    cansim.pause();
    cansim.currentTime = 0;
    ctrl.pause();
    ctrl.currentTime = 0;
    y19.pause();
    y19.currentTime = 0;
    sky.pause();
    sky.currentTime = 0;
    sirkel.pause();
    sirkel.currentTime = 0;
    egoisme.pause();
    egoisme.currentTime = 0;
}

let popup = createPopup("#popup");
let popupcummal = createPopup("#popupcummal");
let cansim = createPopup("#popupcansim");
let geocan = createPopup("#popupgeocan");
let popupzack = createPopup("#popupzack");
let petrified = createPopup("#popuppetrified");
let pokemon = createPopup("#popuppokemon");
let hut = createPopup("#popuphut");
let kuro = createPopup("#popupkuro");
let ctrl = createPopup("#popupctrl");
let y19 = createPopup("#popupy19");
let sky = createPopup("#popupsky");
let sirkel = createPopup("#popupsirkel");
let egoisme = createPopup("#popupegoisme");

document.querySelector("#cheazz").addEventListener("click", popup);
document.querySelector("#liptint").addEventListener("click", popupcummal);
document.querySelector("#cansim").addEventListener("click", cansim);
document.querySelector("#geocan").addEventListener("click", geocan);
document.querySelector("#zack").addEventListener("click", popupzack);
document.querySelector("#petrified").addEventListener("click", petrified);
document.querySelector("#pokemon").addEventListener("click", pokemon);
document.querySelector("#hut").addEventListener("click", hut);
document.querySelector("#kuro").addEventListener("click", kuro);
document.querySelector("#ctrl").addEventListener("click", ctrl);
document.querySelector("#y19").addEventListener("click", y19);
document.querySelector("#sky").addEventListener("click", sky);
document.querySelector("#sirkel").addEventListener("click", sirkel);
document.querySelector("#egoisme").addEventListener("click", egoisme);