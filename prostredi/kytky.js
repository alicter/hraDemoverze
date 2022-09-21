'use strict';
function kytka () {
    let kytkaPomoc = Math.floor(Math.random()*30);
    let kytkaPomocX, kytkaPomocY;
    kytkaPomocX = Math.floor(Math.random() * (sirkaPolicka) ) + (sirkaPolicka * xosa ) + "px";
    kytkaPomocY = Math.floor(Math.random() * (vyskaPolicka)) + (vyskaPolicka * yosa ) + "px";

    if (kytkaPomoc == 0)
    {
       cisloKytky = cisloKytky + 1;
    kytkyPole[cisloKytky] = new Image();
    document.body.appendChild(kytkyPole[cisloKytky]);
    kytkyPole[cisloKytky].src = "obrazky/veci_na_zvedani/kvetina.png";
    kytkyPole[cisloKytky].id = "kvetina:" + cisloKytky;
    kytkyPole[cisloKytky].style.position = "absolute";
    kytkyPole[cisloKytky].style.left = kytkaPomocX;
    kytkyPole[cisloKytky].style.top = kytkaPomocY;
    document.getElementById("kvetina:" + cisloKytky).style.zIndex = -1;
    aktivitapole[aktivitapole.length] = "kvetina:" + cisloKytky;
    document.getElementById(kytkyPole[cisloKytky].id).style.visibility = "visible";  
    
    };
    if (kytkaPomoc == 1)  
{
 cisloModreKytky = cisloModreKytky + 1;
    modreKytkyPole[cisloModreKytky] = new Image();
    document.body.appendChild(modreKytkyPole[cisloModreKytky]);
    modreKytkyPole[cisloModreKytky].src = "obrazky/veci_na_zvedani/kvetina1.png";
    modreKytkyPole[cisloModreKytky].id = "modra_kytka:" + cisloModreKytky;
    modreKytkyPole[cisloModreKytky].style.position = "absolute";
    modreKytkyPole[cisloModreKytky].style.left = kytkaPomocX;
    modreKytkyPole[cisloModreKytky].style.top = kytkaPomocY;
    document.getElementById("modra_kytka:" + cisloModreKytky).style.zIndex = -1;
    aktivitapole[aktivitapole.length] = "modra_kytka:" + cisloModreKytky;
    document.getElementById(modreKytkyPole[cisloModreKytky].id).style.visibility = "visible";
    

}
if (kytkaPomoc == 2)
   {
         cisloHouby = cisloHouby + 1;
    houbyPole[cisloHouby ] = new Image();
    document.body.appendChild(houbyPole[cisloHouby ]);
    houbyPole[cisloHouby ].src = "obrazky/veci_na_zvedani/houba.png";
    houbyPole[cisloHouby ].id = "houba:" + cisloHouby ;
    houbyPole[cisloHouby ].style.position = "absolute";
    houbyPole[cisloHouby ].style.left = kytkaPomocX;
    houbyPole[cisloHouby ].style.top = kytkaPomocY;
    document.getElementById("houba:" + cisloHouby ).style.zIndex = -1;
    aktivitapole[aktivitapole.length] = "houba:" + cisloHouby ;
    document.getElementById(houbyPole[cisloHouby ].id).style.visibility = "visible";
   }
   
};