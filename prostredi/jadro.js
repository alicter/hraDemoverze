'use strict';

prinesMapu();
xhrdinastart = 50;
yhrdinastart = 50;
cisloHrdiny = 0;
novyHrdina();
vlozKamenMudrcu();
//spustit();
function vlozKamenMudrcu(){ 

kamenMudrcu = new Image();
document.body.appendChild(kamenMudrcu);
kamenMudrcu.src = '/obrazky/specialni/kamenMudrcu.png';
kamenMudrcu.id = "kamenMudrcu";
kamenMudrcu.style.position = "absolute";
document.getElementById("kamenMudrcu").style.left = Math.floor(Math.random()* 40  ) * sirkaPolicka + "px";
document.getElementById("kamenMudrcu").style.top = Math.floor(Math.random()* 40 ) * vyskaPolicka + "px";
document.getElementById("kamenMudrcu").style.zIndex = 3;
document.getElementById("kamenMudrcu").style.visibility = "visible";
document.getElementById("kamenMudrcu").draggable = false;
};


function spustit() { 
    fetch('/prvniSpusteni')
    .then(response => response.json())
    .then(prvniSpusteniPrijato => { 
aktPrvniPrebal = prvniSpusteniPrijato ;
pomocnyObjektProstredi = aktPrvniPrebal;

                if (pomocnyObjektProstredi.nacitani == "ano") {} 
                 else {
                          //start bez načtení
                        
                          
                          for (i1= 0; i1 < pocetHrdinuMAX; i1++) 
                                    { 
                                     cisloHrdiny = i1;
                                     xhrdinastart = pomocnyObjektProstredi.hrac[i1].x;
                                     yhrdinastart = pomocnyObjektProstredi.hrac[i1].y;

                                     if (pomocnyObjektProstredi.hrac[i1].prechodOdkud == vlastnostiHrdiny.cisloMapy - 1 )  {
                                        yhrdinastart =    3500;
                                     }
                                     if (pomocnyObjektProstredi.hrac[i1].prechodOdkud == vlastnostiHrdiny.cisloMapy + 1 )  {
                                        yhrdinastart =    500;
                                     }
                                     if (pomocnyObjektProstredi.hrac[i1].prechodOdkud == vlastnostiHrdiny.cisloMapy - 28 )  {
                                        xhrdinastart =    3500;
                                     }
                                     if (pomocnyObjektProstredi.hrac[i1].prechodOdkud == vlastnostiHrdiny.cisloMapy + 28 )  {
                                        xhrdinastart =    500;
                                     }
                               
                                     novyHrdina();
                                    };


                            let pomocnaPromnena3 = 0 ;
                           for (i7 = 0; i7 < pocetHrdinuMAX; i7++ ) 
                                    {
                                        if (pomocnyObjektProstredi.hrac[i7].obsazenost == "volno")
                                        {
                                      
                                      cisloHrdiny = localStorage.locStrgCisloHrace;
                                       pomocnyObjektProstredi.aktualniHrdina = cisloHrdiny;
                                       i7 = pocetHrdinuMAX + 1 ;
                                       pomocnaPromnena3 = 1;
                                        }
                                    };
                                        if (pomocnaPromnena3 == 0) alert("SERVER IS FULL");



        
                                    if (pomocnyObjektProstredi.aktualniHrdina == 0) pristiHrac = 1;
                                    else if (pomocnyObjektProstredi.aktualniHrdina == 1) pristiHrac = 2;
                                    else if (pomocnyObjektProstredi.aktualniHrdina == 2) pristiHrac = 3;
                                    else if (pomocnyObjektProstredi.aktualniHrdina == 3) pristiHrac = 4;
                                    else if (pomocnyObjektProstredi.aktualniHrdina == 4) pristiHrac = 0;

                                    hracVzhled[0] = pomocnyObjektProstredi.hrac[0].vzhledOdeslany;
                                    hracVzhled[1] = pomocnyObjektProstredi.hrac[1].vzhledOdeslany;
                                    hracVzhled[2] = pomocnyObjektProstredi.hrac[2].vzhledOdeslany;
                                    hracVzhled[3] = pomocnyObjektProstredi.hrac[3].vzhledOdeslany;
                                    hracVzhled[4] = pomocnyObjektProstredi.hrac[4].vzhledOdeslany;

                                    predavanyObjektMPStart = {
                                        startovani: "ne",
                                        nacitani: "ne",
                                        prechodOdkud: 0,
            pocetHrdinu : pocetHrdinuMAX,
            ktery : cisloHrdiny,
            aktualniHrdina: pristiHrac,
            hrac : [{
                vlastnosti:{
                jmeno: "Sever",
                povolani: "Nikdo",
                level: 0,
                zk: 0,
                sila: 0,
                obratnost: 0,
                inteligence: 0,
                moudrost: 0
            },
            vybava:{
                zbran: "nic",
                brni: "nic",
                kouzlo: "zadne"
            },
                inventar: "",
                cisloMapy: 0,
                x: document.getElementById('hrdina:0').offsetLeft,
                y: document.getElementById('hrdina:0').offsetTop,
                prechodOdkud: 0,
                stav: 0,
                obsazenost: "volno",
                zivotyMax: zivotyMaxHrdinove[0],
                zivotyAkt:  zivotyAktHrdinove[0],
                utok: 3,
                obrana: 0,
                vzhledOdeslany: hracVzhled[0]
            },
            {   
                vlastnosti:{
                jmeno: "Sever",
                povolani: "Nikdo",
                level: 0,
                zk: 0,
                sila: 0,
                obratnost: 0,
                inteligence: 0,
                moudrost: 0
            },
            vybava:{
                zbran: "nic",
                brni: "nic",
                kouzlo: "zadne"
            },
            inventar: "",
                cisloMapy: 0,
                x: document.getElementById('hrdina:1').offsetLeft,
                y: document.getElementById('hrdina:1').offsetTop,
                prechodOdkud: 0,
                stav : 0,
                obsazenost: "volno",
                zivotyMax: zivotyMaxHrdinove[1],
                zivotyAkt:  zivotyAktHrdinove[1],
                utok: 3,
                obrana: 0,
                vzhledOdeslany: hracVzhled[1]
            },
            {   
                vlastnosti:{
                jmeno: "Sever",
                povolani: "Nikdo",
                level: 0,
                zk: 0,
                sila: 0,
                obratnost: 0,
                inteligence: 0,
                moudrost: 0
            },
            vybava:{
                zbran: "nic",
                brni: "nic",
                kouzlo: "zadne"
            },
            inventar: "",
                cisloMapy: 0,
                x: document.getElementById('hrdina:2').offsetLeft,
                y: document.getElementById('hrdina:2').offsetTop,
                prechodOdkud: 0,
                stav : 0,
                obsazenost: "volno",
                zivotyMax: zivotyMaxHrdinove[2],
                zivotyAkt:  zivotyAktHrdinove[2],
                utok: 3,
                obrana: 0,
                vzhledOdeslany: hracVzhled[2]
            },
            {   
                vlastnosti:{
                jmeno: "Sever",
                povolani: "Nikdo",
                level: 0,
                zk: 0,
                sila: 0,
                obratnost: 0,
                inteligence: 0,
                moudrost: 0
            },
            vybava:{
                zbran: "nic",
                brni: "nic",
                kouzlo: "zadne"
            },
            inventar: "",
                cisloMapy: 0,
                x: document.getElementById('hrdina:3').offsetLeft,
                y: document.getElementById('hrdina:3').offsetTop,
                prechodOdkud: 0,
                stav : 0,
                obsazenost: "volno",
                zivotyMax: zivotyMaxHrdinove[3],
                zivotyAkt:  zivotyAktHrdinove[3],
                utok: 3,
                obrana: 0,
                vzhledOdeslany: hracVzhled[3]
            },
            {   
                vlastnosti:{
                jmeno: "Sever",
                povolani: "Nikdo",
                level: 0,
                zk: 0,
                sila: 0,
                obratnost: 0,
                inteligence: 0,
                moudrost: 0
            },
            vybava:{
                zbran: "nic",
                brni: "nic",
                kouzlo: "zadne"
            },
            inventar: "",
                cisloMapy: 0,
                x: document.getElementById('hrdina:4').offsetLeft,
                y: document.getElementById('hrdina:4').offsetTop,
                prechodOdkud: 0,
                stav : 0,
                obsazenost: "volno",
                zivotyMax: zivotyMaxHrdinove[4],
                zivotyAkt:  zivotyAktHrdinove[4],
                utok: 3,
                obrana: 0,
                vzhledOdeslany: hracVzhled[4]
            }]};
            predavanyObjektMPStart.startovani = "ne";
                                    
                                        predavanyObjektMPStart.hrac[cisloHrdiny].obsazenost = "obsazeno";
                                        hracVzhled[cisloHrdiny] = 1;
                                        predavanyObjektMPStart.hrac[cisloHrdiny].vzhledOdeslany = 1;
                                        predavanyObjektMPStart.hrac[cisloHrdiny].cisloMapy = vlastnostiHrdiny.cisloMapy;
                                        predavanyObjektMPStart.hrac[cisloHrdiny].prechodOdkud = vlastnostiHrdiny.cisloMapy;
                                        socket.emit('pohybPrvni', predavanyObjektMPStart); 
                                        
                                    cas();















































        }});

















fetch(('/druhespusteni/' + vlastnostiHrdiny.cisloMapy))
.then(response => response.json())
.then(druheSpusteniPrijato => { 
    aktDruhePrebal = druheSpusteniPrijato ;
    for (i4 = 0; i4 < aktDruhePrebal.priseraMP.length; i4 ++ ){
        novaPrisera();
        document.getElementById('prisera:' + cisloPrisery).style.left = aktDruhePrebal.priseraMP[cisloPrisery].x + "px";
        document.getElementById('prisera:' + cisloPrisery).style.top = aktDruhePrebal.priseraMP[cisloPrisery].y + "px";
        cisloPrisery ++;
    }
    


});};

      /*
socket.on('aktualizaceHrdiny', (aktualizovanyHrac) => {
 
    aktPrebal = aktualizovanyHrac;

for (i5 = 0; i5 < pocetHrdinuMAX ; i5++) {


    
        if (i5 == cisloHrdiny) {


            
            zivotyAktHrdinove[i5] = aktPrebal.hrac[i5].zivotyAkt;
            document.getElementById("zivoty_panel_2").style.width = (zivotyAktHrdinove[i5] / zivotyMaxHrdinove[i5] * 100) + "%";
            if (zivotyAktHrdinove[i5] <= 0 ){
                document.getElementById('hrdina:' + i5).style.visibility = "hidden";
                hracVzhled[i5] = 0;
                
            }
        }
        else {

        if (aktPrebal.hrac[i5].vzhledOdeslany === 0 || aktPrebal.hrac[i5].cisloMapy !== vlastnostiHrdiny.cisloMapy ) document.getElementById('hrdina:' + i5).style.visibility = "hidden";
        else {  document.getElementById('hrdina:' + i5).style.visibility = "visible";
            document.getElementById('hrdina:' + i5).style.left = aktPrebal.hrac[i5].x + "px";
            document.getElementById('hrdina:' + i5).style.top = aktPrebal.hrac[i5].y + "px";
            zivotyAktHrdinove[i5] = aktPrebal.hrac[i5].zivotyAkt;
            zivotyMaxHrdinove[i5] =  aktPrebal.hrac[i5].zivotyMax;
            vybavyHrdinu[i5].zbran = aktPrebal.hrac[i5].vybava.zbran;
            vybavyHrdinu[i5].brni = aktPrebal.hrac[i5].vybava.brni;
            vybavyHrdinu[i5].kouzlo = aktPrebal.hrac[i5].vybava.kouzlo;
    
            
        }
        }
            
    
    
    }

});
*/
function casMP () {
    predavanyObjektCasMP
predavanyObjektCasMP = {
    startovani : "ne",
        nacitani: "ne",
        prechodOdkud: 0,
        pocetHrdinu : pocetHrdinuMAX,
        ktery : cisloHrdiny,
        aktualniHrdina: pristiHrac,
        hrac : [{
            vlastnosti:{
            jmeno: "Sever",
            povolani: "Nikdo",
            level: 0,
            zk: 0,
            sila: 0,
            obratnost: 0,
            inteligence: 0,
            moudrost: 0
        },
        vybava:{
            zbran: "nic",
            brni: "nic",
            kouzlo: "zadne"
        },
        inventar: "",
            cisloMapy: 0,
            x: document.getElementById('hrdina:0').offsetLeft,
            y: document.getElementById('hrdina:0').offsetTop,
            prechodOdkud: 0,
            stav: 0,
            obsazenost: "volno",
            zivotyMax: zivotyMaxHrdinove[0],
            zivotyAkt:  zivotyAktHrdinove[0],
            utok: 3,
            obrana: 0,
            vzhledOdeslany: hracVzhled[0]
        },
        {    
            vlastnosti:{
            jmeno: "Sever",
            povolani: "Nikdo",
            level: 0,
            zk: 0,
            sila: 0,
            obratnost: 0,
            inteligence: 0,
            moudrost: 0
        },
        vybava:{
            zbran: "nic",
            brni: "nic",
            kouzlo: "zadne"
        },
        inventar: "",
            cisloMapy: 0,
            x: document.getElementById('hrdina:1').offsetLeft,
            y: document.getElementById('hrdina:1').offsetTop,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: zivotyMaxHrdinove[1],
            zivotyAkt:  zivotyAktHrdinove[1],
            utok: 3,
            obrana: 0,
            vzhledOdeslany: hracVzhled[1]
        },
        {  
            vlastnosti:{
            jmeno: "Sever",
            povolani: "Nikdo",
            level: 0,
            zk: 0,
            sila: 0,
            obratnost: 0,
            inteligence: 0,
            moudrost: 0
        }, 
        vybava:{
            zbran: "nic",
            brni: "nic",
            kouzlo: "zadne"
        },
        inventar: "",
            cisloMapy: 0,
            x: document.getElementById('hrdina:2').offsetLeft,
            y: document.getElementById('hrdina:2').offsetTop,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: zivotyMaxHrdinove[2],
            zivotyAkt:  zivotyAktHrdinove[2],
            utok: 3,
            obrana: 0,
            vzhledOdeslany: hracVzhled[2]
        },
        {   
            vlastnosti:{
            jmeno: "Sever",
            povolani: "Nikdo",
            level: 0,
            zk: 0,
            sila: 0,
            obratnost: 0,
            inteligence: 0,
            moudrost: 0
        },
        vybava:{
            zbran: "nic",
            brni: "nic",
            kouzlo: "zadne"
        },
        inventar: "",
            cisloMapy: 0,
            x: document.getElementById('hrdina:3').offsetLeft,
            y: document.getElementById('hrdina:3').offsetTop,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: zivotyMaxHrdinove[3],
            zivotyAkt:  zivotyAktHrdinove[3],
            utok: 3,
            obrana: 0,
            vzhledOdeslany: hracVzhled[3]
        },
        {
            vlastnosti:{
            jmeno: "Sever",
            povolani: "Nikdo",
            level: 0,
            zk: 0,
            sila: 0,
            obratnost: 0,
            inteligence: 0,
            moudrost: 0
        },
        vybava:{
            zbran: "nic",
            brni: "nic",
            kouzlo: "zadne"
        },
        inventar: "",
            cisloMapy: 0,
            x: document.getElementById('hrdina:4').offsetLeft,
            y: document.getElementById('hrdina:4').offsetTop,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: zivotyMaxHrdinove[4],
            zivotyAkt:  zivotyAktHrdinove[4],
            utok: 3,
            obrana: 0,
            vzhledOdeslany: hracVzhled[4]
        }]

};
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.jmeno = vlastnostiHrdiny.jmeno;
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.povolani = vlastnostiHrdiny.povolani;
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.level = vlastnostiHrdiny.level;
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.zk= vlastnostiHrdiny.zk;
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.sila = vlastnostiHrdiny.sila;
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.obratnost = vlastnostiHrdiny.obratnost;
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.inteligence = vlastnostiHrdiny.inteligence;
predavanyObjektCasMP.hrac[cisloHrdiny].vlastnosti.moudrost = vlastnostiHrdiny.moudrost;


predavanyObjektCasMP.hrac[cisloHrdiny].vybava.zbran = vybavyHrdinu[cisloHrdiny].zbran ;
predavanyObjektCasMP.hrac[cisloHrdiny].vybava.brni = vybavyHrdinu[cisloHrdiny].brni ;
predavanyObjektCasMP.hrac[cisloHrdiny].vybava.kouzlo = vybavyHrdinu[cisloHrdiny].kouzlo ;
//predavanyObjektCasMP.hrac[cisloHrdiny].inventar = document.getElementById("inventar_panel").innerHTML;


predavanyObjektCasMP.hrac[cisloHrdiny].cisloMapy = vlastnostiHrdiny.cisloMapy;
 predavanyObjektCasMP.hrac[cisloHrdiny].stav = stavAktualnihoHrace;
 predavanyObjektCasMP.hrac[cisloHrdiny].vzhledOdeslany = hracVzhled[cisloHrdiny];
 predavanyObjektCasMP.hrac[cisloHrdiny].obsazenost = "obsazeno";
 predavanyObjektCasMP.hrac[cisloHrdiny].zivotyMax = zivotyMaxHrdinove[cisloHrdiny];
 predavanyObjektCasMP.hrac[cisloHrdiny].zivotyAkt = zivotyAktHrdinove[cisloHrdiny];
//  predavanyObjektCasMP.hrac[cisloHrdiny].prechodOdkud = vlastnostiHrdiny.cisloMapy;
  

 


 socket.emit('pohyb', predavanyObjektCasMP); 



/*
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

      */
} ; 
