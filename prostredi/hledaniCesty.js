'use strict';
document.getElementById("telo").addEventListener("click", predKliknutim);
function predKliknutim (eventA){
    prekazka = false;
    yCileBunky = Math.floor(eventA.pageY/vyskaPolicka);
    xCileBunky = Math.floor(eventA.pageX/sirkaPolicka);
    if ( document.getElementById('hrdina:' + cisloHrdiny).offsetLeft + sirkaPolicka - document.getElementById("kamenMudrcu").offsetLeft <= 50 && document.getElementById("kamenMudrcu").offsetLeft - document.getElementById('hrdina:' + cisloHrdiny).offsetLeft <= 200 && document.getElementById("kamenMudrcu").style.visibility == "visible" && document.getElementById('hrdina:' + cisloHrdiny).offsetTop + vyskaPolicka - document.getElementById("kamenMudrcu").offsetTop <= 50 && document.getElementById("kamenMudrcu").offsetTop - document.getElementById('hrdina:' + cisloHrdiny).offsetTop + vyskaPolicka <= 200) {
        document.getElementById("kamenMudrcu").style.visibility = "hidden";
        setTimeout("window.location.href='/vyhra'", 1000)
    
    };
for (i61 = 0; i61 < pismenka.length; i61++){
if (bunka[yCileBunky][xCileBunky].znak == pismenka[i61]) {prekazka = true;} 
};
if (prekazka == false) kliknuti();
};

 function vratjesteBlizsiBunkyASpocitejF (potrhlaBunka) {
    yAktualniBunky = potrhlaBunka.y;
    xAktualniBunky = potrhlaBunka.x;
    if (yAktualniBunky >1 && xAktualniBunky >1 && yAktualniBunky < yosa -1  && xAktualniBunky < xosaMax -1 ) {
    nejBlizsiBunky[0] = bunka[yAktualniBunky-1][xAktualniBunky-0];
    nejBlizsiBunky[1] = bunka[yAktualniBunky-0][xAktualniBunky-1];
    nejBlizsiBunky[2] = bunka[yAktualniBunky-0][xAktualniBunky+1];
    nejBlizsiBunky[3] = bunka[yAktualniBunky+1][xAktualniBunky-0];
    }
for( i36 = 0; i36 < nejBlizsiBunky.length ; i36++ ){
    for( i40 = 0; i40 < pismenka.length;  i40++) {
    if (nejBlizsiBunky[i36].znak === pismenka[i40]) {
            nejBlizsiBunky[i36].nepochuzi = true;
        }
    }
   }
for (i42 = 0; i42 < nejBlizsiBunky.length ; i42++) {
    if (nejBlizsiBunky[i42].nepochuzi === false) jesteBlizsi[jesteBlizsi.length] = nejBlizsiBunky[i42];
}
for( i49 = 0; i49 < jesteBlizsi.length ; i49++ ){
for (i45 = 0; i45< uzavrenySeznam.length; i45++) {
    if (jesteBlizsi[i49].x === uzavrenySeznam[i45].x && jesteBlizsi[i49].y === uzavrenySeznam[i45].y ) {ignor = true;};
}
if (ignor == true) {}
else {
    for (i46 = 0; i46 < otevrenySeznam.length; i46++) {
        if (jesteBlizsi[i49].x === otevrenySeznam[i46].x && jesteBlizsi[i49].y === otevrenySeznam[i46].y ) {jeVOtevrenemSeznamu = true; indexOS = i46;}
    }
    if (jeVOtevrenemSeznamu === false) {
vzdalenostX[i49] = (jesteBlizsi[i49].x <= cilovaBunka.x ) ?  (cilovaBunka.x - jesteBlizsi[i49].x) : (jesteBlizsi[i49].x - cilovaBunka.x );
vzdalenostY[i49] = (jesteBlizsi[i49].y <= cilovaBunka.y ) ?  (cilovaBunka.y - jesteBlizsi[i49].y) : (jesteBlizsi[i49].y - cilovaBunka.y );
 Dpromena = 1;
 DDvaPromena = Math.sqrt(1 + 1 );
vzdalenost[i49] = Dpromena *(vzdalenostX[i49] + vzdalenostY[i49] ) + (DDvaPromena - 2* Dpromena) * vzdalenostX[i49];
jesteBlizsi[i49].H =  vzdalenost[i49];
jesteBlizsi[i49].G =  matka.G +1;  
jesteBlizsi[i49].F = jesteBlizsi[i49].G + jesteBlizsi[i49].H;
jesteBlizsi[i49].prichodZ = matka;
otevrenySeznam[otevrenySeznam.length] = jesteBlizsi[i49];

}
else {
    vzdalenostX[i49] = (jesteBlizsi[i49].x <= cilovaBunka.x ) ?  (cilovaBunka.x - jesteBlizsi[i49].x) : (jesteBlizsi[i49].x - cilovaBunka.x );
    vzdalenostY[i49] = (jesteBlizsi[i49].y <= cilovaBunka.y ) ?  (cilovaBunka.y - jesteBlizsi[i49].y) : (jesteBlizsi[i49].y - cilovaBunka.y );
     Dpromena = 1;
     DDvaPromena = Math.sqrt(1 + 1 );
    vzdalenost[i49] = Dpromena *(vzdalenostX[i49] + vzdalenostY[i49] ) + (DDvaPromena - 2* Dpromena) * vzdalenostX[i49];
    jesteBlizsi[i49].H =  vzdalenost[i49];
    jesteBlizsi[i49].G =  matka.G +1;  
    jesteBlizsi[i49].F = jesteBlizsi[i49].G + jesteBlizsi[i49].H;
    jesteBlizsi[i49].prichodZ = matka;
    otevrenySeznam[indexOS] = jesteBlizsi[i49];
   
}
jeVOtevrenemSeznamu = false;
vCesteJizJE = false;
}
ignor = false;
};
jesteBlizsi = [];
nejBlizsiBunky = [];
 };

function prohledejOtevrenySeznam(){
    for ( i47 = 0; i47 < otevrenySeznam.length   ; i47++){
        kratsiVzdalenost = (otevrenySeznam[i47].F <= kratsiVzdalenost) ? otevrenySeznam[i47].F : kratsiVzdalenost ;
     };
     for(i48 = 0 ; i48 <  otevrenySeznam.length  ; i48++){
        if (otevrenySeznam[i48].x == cilovaBunka.x && otevrenySeznam[i48].y == cilovaBunka.y) {
            cilovaBunkaIndexOS = i48; 
            nalezeno = true;
        }
        if (otevrenySeznam[i48].F == kratsiVzdalenost) {
           index = i48;
        } 
     };
      if ( nalezeno == true) {
     }
     else {     
     aktualniBunka = otevrenySeznam[index];
        uzavrenySeznam[uzavrenySeznam.length] = aktualniBunka;
    }
     otevrenySeznam.splice(index, 1);
     index = undefined;
     kratsiVzdalenost = Number.MAX_VALUE;
     cilovaBunkaIndexOS = undefined;
     
};

 function kliknuti () { 
    if (nA == true) { }
    else { 
        pohybovani[cisloHrdiny] = true;
         nA = true;
         konecOpakovani = false;
    nejBlizsiBunka = [];
    jesteBlizsi = [];
    vzdalenostX = [];
    vzdalenostY = [];
    vzdalenost = [];
    cesta = [];
    kratsiVzdalenost=  Number.MAX_VALUE;
    uzavrenySeznam = [];
    otevrenySeznam = [];
    cilovaBunkaIndexOS = undefined;
    nalezeno = false;
       
        ignor = false;
        yStartuBunky = Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 100) / 50);
        xStartuBunky = Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft  + 50 ) / 50);
        startovniBunka = bunka[yStartuBunky][xStartuBunky];
    matka = startovniBunka;
    aktualniBunka = startovniBunka;
    uzavrenySeznam[uzavrenySeznam.length] = startovniBunka;
    cilovaBunka = bunka[yCileBunky][xCileBunky];
    if (cilovaBunka.x == startovniBunka.x && cilovaBunka.y == startovniBunka.y) {  
        konecOpakovani = true;
        nalezeno = false;
    nA = false;
        return ;
    } ;
    vratjesteBlizsiBunkyASpocitejF (aktualniBunka);
    prohledejOtevrenySeznam(); 
    matka = aktualniBunka; 
     while(otevrenySeznam.length > 0 && konecOpakovani == false) {
        vratjesteBlizsiBunkyASpocitejF (aktualniBunka);
        prohledejOtevrenySeznam();
        matka = aktualniBunka; 
        if ((aktualniBunka.x == cilovaBunka.x && aktualniBunka.y == cilovaBunka.y) || nalezeno == true) { konecOpakovani = true; };
      }
      cesta[cesta.length] = cilovaBunka; 
if ( (uzavrenySeznam.length-1) > 1 ) {
       cesta[cesta.length -1].prichodZ = uzavrenySeznam[uzavrenySeznam.length-1]; 
       cesta[cesta.length] = cesta[cesta.length -1];
        otec = cesta[cesta.length -1].prichodZ;
           while ( !(otec.x == startovniBunka.x && otec.y == startovniBunka.y) ) {
                   cesta[cesta.length] = cesta[cesta.length-1].prichodZ;
                   otec = cesta[cesta.length -1].prichodZ;
           };
        } else if ((uzavrenySeznam.length-1) == 0 || (uzavrenySeznam.length-1) == 1) {
            cesta[cesta.length -1].prichodZ = uzavrenySeznam[uzavrenySeznam.length-1]; 

            cesta[cesta.length] = cesta[cesta.length -1];
            otec = cesta[cesta.length -1].prichodZ;

           while ( !(otec.x == startovniBunka.x && otec.y == startovniBunka.y) ) {
                   cesta[cesta.length] = cesta[cesta.length-1].prichodZ;
                   otec = cesta[cesta.length -1].prichodZ;
           };
         };
        cesta[cesta.length] = startovniBunka;
        opacnyUzavrenyList = cesta ;
        indexOUS = opacnyUzavrenyList.length - 1;
        pohybovani[cisloHrdiny] = true;
      nA = false;
      
    }
 };

 function jdi () {  
    indexOUS = indexOUS -1;
    if (indexOUS <= 0 ) {
        pohybovani[cisloHrdiny] = false;
    }
    else {
     pohybovani[cisloHrdiny] = true;
    }
};

function pohybHrdiny(){
    
 if (pohybovani[cisloHrdiny] == false ) return;
 if (!((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft +50) >= (opacnyUzavrenyList[indexOUS].x * sirkaPolicka - sirkaPolicka) && (document.getElementById('hrdina:' + cisloHrdiny).offsetLeft +50) <= (opacnyUzavrenyList[indexOUS].x * sirkaPolicka + sirkaPolicka) && (document.getElementById('hrdina:' + cisloHrdiny).offsetTop +100) >= ((opacnyUzavrenyList[indexOUS].y * vyskaPolicka) - vyskaPolicka) && (document.getElementById('hrdina:' + cisloHrdiny).offsetTop +100) <= ((opacnyUzavrenyList[indexOUS].y * vyskaPolicka) + vyskaPolicka)) ) return;
if (document.getElementById('hrdina:' + cisloHrdiny).offsetLeft +50 < opacnyUzavrenyList[indexOUS].x * sirkaPolicka) document.getElementById('hrdina:' + cisloHrdiny).style.left = document.getElementById('hrdina:' + cisloHrdiny).offsetLeft + 5 +"px";
if (document.getElementById('hrdina:' + cisloHrdiny).offsetLeft +50 > opacnyUzavrenyList[indexOUS].x * sirkaPolicka) document.getElementById('hrdina:' + cisloHrdiny).style.left = document.getElementById('hrdina:' + cisloHrdiny).offsetLeft - 5 +"px";
if (document.getElementById('hrdina:' + cisloHrdiny).offsetLeft +50 == opacnyUzavrenyList[indexOUS].x * sirkaPolicka) document.getElementById('hrdina:' + cisloHrdiny).style.left = document.getElementById('hrdina:' + cisloHrdiny).offsetLeft + "px";

if (document.getElementById('hrdina:' + cisloHrdiny).offsetTop +100 < opacnyUzavrenyList[indexOUS].y * vyskaPolicka) document.getElementById('hrdina:' + cisloHrdiny).style.top = document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 5 +"px";
if (document.getElementById('hrdina:' + cisloHrdiny).offsetTop +100 > opacnyUzavrenyList[indexOUS].y * vyskaPolicka) document.getElementById('hrdina:' + cisloHrdiny).style.top = document.getElementById('hrdina:' + cisloHrdiny).offsetTop - 5 +"px";
if (document.getElementById('hrdina:' + cisloHrdiny).offsetTop +100 == opacnyUzavrenyList[indexOUS].y * vyskaPolicka) document.getElementById('hrdina:' + cisloHrdiny).style.top = document.getElementById('hrdina:' + cisloHrdiny).offsetTop + "px";

/*
for (i62 = 0 ; i62 < pismenkaCil.length ; i62++)
if ( bunka[Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 100) / 50)][Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft  + 50 ) / 50)].znak == pismenkaCil[i62]) {
    kam = bunka[Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 100) / 50)][Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft  + 50 ) / 50)].znak;
    if (kam == "c"){
       
        window.location = "/" + 1036;
       } 
       if (kam  == "0"){
         
          odkazSmer(1);
          } 
       if (kam  == "1"){
         
          odkazSmer(-28);
          } 
       if (kam  == "2"){
          
           odkazSmer(-1);
          } 
       if (kam  == "3"){
       
        odkazSmer(28);
          } 
          kam = ".";
}  ;
*/

/*
document.getElementById("dialog:" + 'hrdina:' + cisloHrdiny).style.left = (document.getElementById('hrdina:' + cisloHrdiny).offsetLeft - 50 ) +"px";
document.getElementById("dialog:" + 'hrdina:' + cisloHrdiny).style.top = (document.getElementById('hrdina:' + cisloHrdiny).offsetTop - 100 ) + "px";

*/
 window.scrollTo((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft + document.getElementById('hrdina:' + cisloHrdiny).offsetWidth / 2 - window.innerWidth / 2), (document.getElementById('hrdina:' + cisloHrdiny).offsetTop + (document.getElementById('hrdina:' + cisloHrdiny).offsetHeight / 2) - window.innerHeight / 2));
  
  if ( indexOUS <= 0 || (document.getElementById('hrdina:' + cisloHrdiny).offsetLeft +50 == opacnyUzavrenyList[indexOUS].x *sirkaPolicka && document.getElementById('hrdina:' + cisloHrdiny).offsetTop +100 == opacnyUzavrenyList[indexOUS].y *vyskaPolicka) ) {
    pohybovani[cisloHrdiny] = false ;
  } 
 if ((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft +50 == opacnyUzavrenyList[indexOUS].x *sirkaPolicka && document.getElementById('hrdina:' + cisloHrdiny).offsetTop +100== opacnyUzavrenyList[indexOUS].y *vyskaPolicka) ) jdi();
};
