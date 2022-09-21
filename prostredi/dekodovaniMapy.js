'use strict';
function prinesMapu () {
    let objektMapa, pomocnaMapa;
    fetch("/mapuchci/" + vlastnostiHrdiny.cisloMapy )
    .then(response => response.json())
    .then(prostrediPrijatoMapa => { 
        objektMapa = prostrediPrijatoMapa;
        pomocnaMapa = objektMapa;
        mapa = pomocnaMapa.mapa;
      
        generator();
        vygenerujMapu();
    });
};
function dekoduj () {
    yosa = 0;
    xosa = 0; 
    for (blijem=0; blijem<=20; blijem++) mapa = mapa.replaceAll(/\n/g, '');
    
    for (osa = 0; osa < mapa.length; osa++) {
        if (mapa.charAt(osa) == "d") {
            xosaMax = xosa;
              yosa = yosa + 1;
            xosa = 0;
        };
    
        if (mapa.charAt(osa) == ".") {
            
            typPole[osa] = ".";
            kytka ();
            
        };
        if (mapa.charAt(osa) == ":") {
            
            typPole[osa] = ".";
        };
    
        if (mapa.charAt(osa) == "n") {
            
            typPole[osa] = "n";
        };
    
    
        if (mapa.charAt(osa) == "c") {
            
            typPole[osa] = "c";
        };
        if (mapa.charAt(osa) == "0") {
            
            typPole[osa] = "0";
        };
        if (mapa.charAt(osa) == "1") {
            
            typPole[osa] = "1";
        };
        if (mapa.charAt(osa) == "2") {
            
            typPole[osa] = "2";
        };
        if (mapa.charAt(osa) == "3") {
            
            typPole[osa] = "3";
        };
        if (mapa.charAt(osa) == "o") {
            
            typPole[osa] = "o";
    
        };
    
        if (mapa.charAt(osa) == "h") {
            
            typPole[osa] = "h";
            xhrdinastart = sirkaPolicka * xosa;
            yhrdinastart = vyskaPolicka * yosa;
        };
        if (mapa.charAt(osa) == "x") {
            
            typPole[osa] = "x";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/zed/panel11.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
            
    
        };
    
        if (mapa.charAt(osa) == "t") {
            
            typPole[osa] = "t";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/stromy/strom.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.zIndex = 3;
            predmetyF[cisloObjektu].style.filter = "brightness(60%)";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
            
    
        };
        if (mapa.charAt(osa) == "f") {
            
            typPole[osa] = "f";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/reka/reka2.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
            
    
        };
        if (mapa.charAt(osa) == "e") {
            
            typPole[osa] = "e";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/zabradli/zabradliMostu.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
            
            predmetyF[cisloObjektu].style.zIndex = 3;
    
        };
        if (mapa.charAt(osa) == "j") {
            
            typPole[osa] = "j";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/jezero/jezero.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
            
    
        };
        if (mapa.charAt(osa) == "i") {
            
            typPole[osa] = "i";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/dira/dira.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).style.zIndex = 0;
            
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
    
        };
        if (mapa.charAt(osa) == "u") {
            
            typPole[osa] = "u";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/domy/dum1_v2.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).style.zIndex = 0;
            
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
    
        };
        if (mapa.charAt(osa) == "a") {
            
            typPole[osa] = "a";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/studna/studna.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).style.zIndex = 0;
            
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
    
        };
        if (mapa.charAt(osa) == "z") {
            
            typPole[osa] = "z";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/parez/parez.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).style.zIndex = 0;
            
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
    
        };
        if (mapa.charAt(osa) == "k") {
            
            typPole[osa] = "k";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/kamen/kamen_v1.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).style.zIndex = 0;
            
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
    
        };
        if (mapa.charAt(osa) == "l") {
            
            typPole[osa] = "l";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/skala/skala.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            document.getElementById("predmetF:" + cisloObjektu).style.zIndex = 0;
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
            
    
        };
        if (mapa.charAt(osa) == "S") {
            
            typPole[osa] = "S";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/domy/stan.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            nepruchozi_predmet[nepruchozi_predmet.length] = "predmetF:" + cisloObjektu;
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
        };
        if (mapa.charAt(osa) == "s") {
            
            typPole[osa] = "s";
            cisloObjektu = cisloObjektu + 1;
            predmetyF[cisloObjektu] = new Image();
            document.body.appendChild(predmetyF[cisloObjektu]);
            predmetyF[cisloObjektu].src = "obrazky/prostredi/zed/panel7.png";
            predmetyF[cisloObjektu].id = "predmetF:" + cisloObjektu;
            predmetyF[cisloObjektu].style.position = "absolute";
            predmetyF[cisloObjektu].style.left = sirkaPolicka * xosa + "px";
            predmetyF[cisloObjektu].style.top = vyskaPolicka * yosa + "px";
            nepruchozi_predmet[nepruchozi_predmet.length] = "predmetF:" + cisloObjektu;
            document.getElementById("predmetF:" + cisloObjektu).draggable = false;
        };
        if (mapa.charAt(osa) == "p") {
            
            typPole[osa] = "p";
            cisloPrisery = cisloPrisery + 1;
            prisery_pole[cisloPrisery] = new Image();
            document.body.appendChild(prisery_pole[cisloPrisery]);
            prisery_pole[cisloPrisery].src = "obrazky/prisery/pavouk/stoji_levo.png";
            prisery_pole[cisloPrisery].id = "prisera:" + cisloPrisery;
            prisery_pole[cisloPrisery].style.position = "absolute";
            prisery_pole[cisloPrisery].style.left = sirkaPolicka * xosa + "px";
            prisery_pole[cisloPrisery].style.top = vyskaPolicka * yosa + "px";
            jmenapriser[cisloPrisery] = prisery_pole[cisloPrisery].id;
            pohybpriser[cisloPrisery] = 0;
            document.getElementById(jmenapriser[cisloPrisery]).style.visibility = "visible";
            nepruchozi_predmet[nepruchozi_predmet.length] = prisery_pole[cisloPrisery].id;
            aktivitapole[aktivitapole.length] = "prisera:" + cisloPrisery;
            utoky_priserky_cislo[cisloPrisery] = 3;
            utok_priserek[cisloPrisery] = 0;
            zivoty_max_prisery[cisloPrisery] = 5;
            zivoty_akt_prisery[cisloPrisery] = 5;
            document.getElementById("prisera:" + cisloPrisery).draggable = false;
        };
        if (mapa.charAt(osa) != "d") xosa = xosa + 1;
    };
    };
    

    function vygenerujMapu() { 
        for ( abc = 0; abc < yosa ; abc++) {
            bunka[abc] = new Array(xosaMax);
            for ( bac =0; bac < xosaMax; bac++){
                bunka[abc][bac] = new polickoGeneratorMapyPrototyp(abc, bac, "x", undefined, false, 0, 0, 0 ); 
                bunka[abc][bac].znak = mapa.charAt(pomocnaPromenaVygenerujMapu); 
               if (mapa.charAt(pomocnaPromenaVygenerujMapu+1) == "d") pomocnaPromenaVygenerujMapu = pomocnaPromenaVygenerujMapu +2;
                else pomocnaPromenaVygenerujMapu = pomocnaPromenaVygenerujMapu +1;
               
            }
            };
           
     }