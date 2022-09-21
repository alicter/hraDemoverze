'use strict'
document.title = "Hra";
document.body.id = "telo";
document.body.style.width = "4000px";
document.body.style.height = "4000px";
document.getElementById("telo").style.backgroundColor = "white";
document.getElementById("telo").draggable = false;


let snizecek;
    snizecek = new Image();
    document.body.appendChild(snizecek);
    snizecek.src = '/obrazky/specialni/snezeni.gif';
    snizecek.id = "snizecek";
    snizecek.style.position = "fixed";
    document.getElementById("snizecek").style.left = "0px";
    document.getElementById("snizecek").style.top = "0px";
    document.getElementById("snizecek").style.width = "100%";
    document.getElementById("snizecek").style.height = "100%";
    document.getElementById("snizecek").style.zIndex = 50;
    document.getElementById("snizecek").style.visibility = "visible";
    document.getElementById("snizecek").draggable = false;

