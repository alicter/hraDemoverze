'use strict';
var bunkaBludiste = new Array;
var zasobnik = new Array;
var hotovo = false;
var aktualnibunkaBludiste;
function zbludistuj () {
  
    for (let abcBludiste = 0; abcBludiste <= yosa; abcBludiste++) {
        for (let bacBludiste =0; bacBludiste <= xosaMax; bacBludiste++) {

         if (bacBludiste == xosaMax-1 )  mapa =  mapa.substr(0,((abcBludiste*xosaMax)+bacBludiste)) + "d" + mapa.substr((((abcBludiste*xosaMax)+bacBludiste)), 1)
            else { 
                mapa =  mapa.substr(0,((abcBludiste*xosaMax)+bacBludiste)) + bunkaBludiste[abcBludiste][bacBludiste].znak + mapa.substr((((abcBludiste*xosaMax)+bacBludiste)), 1);
            }
        }
        };

 
        for (let abcBludiste2 = 0; abcBludiste2 < 5; abcBludiste2++) {
        mapa = "d"+ mapa;
        for (let abcBludiste1 = 0; abcBludiste1 < xosaMax -1; abcBludiste1++) mapa = "." + mapa;


        for (let abcBludiste3 = 0; abcBludiste3 < xosaMax -1; abcBludiste3++) mapa = mapa + ".";
     
        mapa =  mapa+"d";

        };
       mapa = ".....h...." +  mapa.replaceAll("d", "..........d..........");

};
class PrototypBunky {
    constructor(y,x,znak,navstiveno) {
        this.y = y;
        this.x = x;
        this.znak = znak;
        this.navstiveno = navstiveno;
    }
}; 



function deklarace () {
for (let abcBludiste = 0; abcBludiste <= yosa; abcBludiste++) {
bunkaBludiste[abcBludiste] = new Array(xosaMax);
for (let bacBludiste =0; bacBludiste <= xosaMax; bacBludiste++){
    bunkaBludiste[abcBludiste][bacBludiste] = new PrototypBunky(abcBludiste, bacBludiste, "x", false ); 
}
};
};
function ranodmbunkaBludiste(){
    let nahoda_x, nahoda_y;
    nahoda_x = Math.floor(Math.random()*xosaMax);
nahoda_y = Math.floor(Math.random()*yosa);
aktualnibunkaBludiste = bunkaBludiste[nahoda_y][nahoda_x];
};


function jadro() {
    for (let abcBludiste =0; abcBludiste <= 15000; abcBludiste ++) {
    let nahoda = Math.floor(Math.random()*4);


    let x = aktualnibunkaBludiste.x;
    let y = aktualnibunkaBludiste.y;

    if (nahoda == 0 && y-2 >=0) {
        aktualnibunkaBludiste.y = aktualnibunkaBludiste.y -2; 
        if ( bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno == false ){

            bunkaBludiste[aktualnibunkaBludiste.y+1][aktualnibunkaBludiste.x].znak = ".";
            bunkaBludiste[aktualnibunkaBludiste.y+1][aktualnibunkaBludiste.x].navstiveno = true;
            bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno = true;
            bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].znak = ".";

        } else {
          
        };
    };
    if (nahoda == 1 && x+2 <=xosaMax) {
    aktualnibunkaBludiste.x = aktualnibunkaBludiste.x +2;
    if ( bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno == false ){
        bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x-1].znak = ".";
        bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x-1].navstiveno = true;
        bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno = true;
        bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].znak = ".";

     
    } else {
        
    };
    };
    if (nahoda == 2 && y+2 <=yosa ){
         aktualnibunkaBludiste.y = aktualnibunkaBludiste.y +2;
     if (bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno == false) {
        bunkaBludiste[aktualnibunkaBludiste.y-1][aktualnibunkaBludiste.x].znak = ".";
        bunkaBludiste[aktualnibunkaBludiste.y-1][aktualnibunkaBludiste.x].navstiveno = true;
        bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno = true;
        bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].znak = ".";


    
    } else {
      
    };
    };
    if (nahoda == 3 && x-2 >= 0 ){

        aktualnibunkaBludiste.x = aktualnibunkaBludiste.x -2;
        if (bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno == false) {
            bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x+1].znak = ".";
            bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x+1].navstiveno = true;
            bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].navstiveno = true;
            bunkaBludiste[aktualnibunkaBludiste.y][aktualnibunkaBludiste.x].znak = ".";
            
         
        } else {
         
        };
    };
};
};



function generator() {
dekoduj();
deklarace();
ranodmbunkaBludiste();
jadro();
zbludistuj();
dekoduj();
};
