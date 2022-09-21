'use strict';
 function novyHrdina() {
    hrdinove[cisloHrdiny] = new Image();
    document.body.appendChild(hrdinove[cisloHrdiny]);
    hrdinove[cisloHrdiny].src = '/obrazky/postavy/muj_otec/p2_predni_stoji_1.png';
    hrdinove[cisloHrdiny].id ='hrdina:' + cisloHrdiny;
    hrdinove[cisloHrdiny].style.position = "absolute";
    document.getElementById('hrdina:' + cisloHrdiny).style.left = xhrdinastart+ "px";
    document.getElementById('hrdina:' + cisloHrdiny).style.top = yhrdinastart  + "px";
    document.getElementById('hrdina:' + cisloHrdiny).style.filter = "brightness(70%)";
    document.getElementById('hrdina:' + cisloHrdiny).style.zIndex = 1;
    document.getElementById('hrdina:' + cisloHrdiny).style.visibility = "visible";
    document.getElementById('hrdina:' + cisloHrdiny).draggable = false;
    window.scrollTo((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft + document.getElementById('hrdina:' + cisloHrdiny).offsetWidth / 2 - window.innerWidth / 2), (document.getElementById('hrdina:' + cisloHrdiny).offsetTop + (document.getElementById('hrdina:' + cisloHrdiny).offsetHeight / 2) - window.innerHeight / 2));
    
};