'use strict';
var socket = io();
var protokol = window.location.protocol;
var ipcko = window.location.hostname;
var port = "80";

var vlastnostiHrdiny ={
    cisloMapy: parseInt(window.location.pathname.substring(1)),
    jmeno: localStorage.getItem("jmenoProm"),
    povolani: localStorage.getItem("povolaniProm"),
    level: 0,
    zk: 0,
    sila: localStorage.getItem("silaProm"),
    obratnost: localStorage.getItem("obratnostProm"),
    inteligence: localStorage.getItem("inteligenceProm"),
    moudrost: localStorage.getItem("moudrostProm")
};
class polickoGeneratorMapyPrototyp  {
    constructor(y,x,znak, prichodZ, nepochuzi, F, G, H) {
        this.y = y;
        this.x = x;
        this.znak = znak;
        this.prichodZ = prichodZ;
        this.nepochuzi = nepochuzi;
        this.F = F;
        this.G = G;
        this.H = H;
    }
}; 
class vybavaHrdiny { 
     constructor(zbran, brni, kouzlo)
    {
   this.zbran  =  zbran,
   this.brni =  brni,
   this.kouzlo  =  kouzlo
}
};
var vybavyHrdinu = new Array;
var mapa, blijem;
var xosa =0;
var typPole = new Array;
var pristiHrac = 0;
var osa = 0;
var yosa = 0;
var sirkaPolicka = 50;
var vyskaPolicka = 50;
var cisloKytky = 0;
var kytkyPole = new Array;
var cisloModreKytky = 0;
var houbyPole = new Array;
var modreKytkyPole = new Array;
var aktivitapole = new Array;
var cisloHouby =0;
var xosaMax =0;
var abc;
var bac;
var xhrdinastart = 250;
var yhrdinastart = 250;
var hrdinove =new Array();
var yCileBunky;
var xCileBunky;
var nalezeno = false;
var uzivanyOtevrenySeznam;
var cilovaBunkaIndexOS;
var otevrenySeznam = new Array();
var uzavrenySeznam = new Array();
var jesteBlizsi = new Array();
var aktualniBunka;
var pocetPismenek = new Array();
var bunka = new Array();
var vyhodnoceniCesty = new Array();
var nejBlizsiBunky = new Array ();
var vzdalenostY = new Array();
var vzdalenostX = new Array();
var vzdalenost = new Array();
var kratsiVzdalenosti = new Array();
var opacnyUzavrenyList;
var ignor = false;
var jeVOtevrenemSeznamu = false;
var indexOUS = 0;
var index;
var blizsiBunka;
var kratsiVzdalenost = 80*80; 
var cilovaBunka, pocatecniBunka, xCileBunky, yCileBunky, xStartuBunky, yStartuBunky, startovniBunka, nejBlizsiBunka;
var konecOpakovani = false;
var nA = false;
var krok;
var Dpromena, DDvaPromena = 0;
var i1,i2,i3,i4,i5,i6,i7, i16,i21, i36, i40,i41, i42,i45, i46,i47,i48, i49,i50,i51,i53,i54,i55,i56,i57,i58,i59,i60,i61,i62;
var yAktualniBunky ;
var xAktualniBunky;
var pismenka = new Array;
var pismenkaCil = new Array;
pismenka[pismenka.length] = "x";
pismenka[pismenka.length] = "j";
pismenka[pismenka.length] = "s";
//pismenka[pismenka.length] = "h";
//pismenka[pismenka.length] = "t";
//pismenka[pismenka.length] = "e";
pismenka[pismenka.length] = "p";
//pismenka[pismenka.length] = "o";
pismenka[pismenka.length] = "u";
pismenka[pismenka.length] = "f";
pismenka[pismenka.length] = "a";
pismenka[pismenka.length] = "z";
pismenka[pismenka.length] = "k";
pismenka[pismenka.length] = "l";
pismenka[pismenka.length] = "n";
pismenkaCil[pismenkaCil.length] = "c";
pismenkaCil[pismenkaCil.length] = "0";
pismenkaCil[pismenkaCil.length] = "1";
pismenkaCil[pismenkaCil.length] = "2";
pismenkaCil[pismenkaCil.length] = "3";
var xKurzoru;
var yKurzoru ;
var rychlostPohybu = 50;
var pohybovani = new Array();
pohybovani = [false,false,false,false,false];
var pohnuti = new Array();
pohnuti = [0,0,0,0,0];
var cisloHrdiny = 0;
var cisloPrisery = 0;
var cisloObjektu = 0;
var predmetyF = new Array() ;
var pomocnaPromenaVygenerujMapu =0;
var cesta = [];
var zUS;
var matka;
var otec;
var kratsiVzdalenostOtcu;
var indexOS = 0;
var zindexUS;
var vCesteJizJE = false;
var prekazka = false;
const pocetHrdinuMAX = 5;
var udalostiPole = new Array (pocetHrdinuMAX);
for (i2 = 0 ; i2 <= pocetHrdinuMAX; i2++ ) 
{
udalostiPole[i2] = new Array (100);
for (i3 = 0 ; i3 < udalostiPole[i2].length; i3++)
{
    udalostiPole[i2][i3] = 0;
}
udalostiPole[i2][0] = 1;
}

var dialogPole = new Array ();

var cisloDialogu = 0;
var predchoziDialog;
var obrazky = new Array();
var obr = 0 ;
var kam = ".";
var aktPrvniPrebal;
var pomocnyObjektProstredi;
var pocetHrdinu;
var pomocnaPromnena3;
var prvniSpusteniPrijato;
var druheSpusteniPrijato;
var aktDruhePrebal;
var prisery = new Array();
var zivotyAktHrdinove = new Array ();
var zivotyMaxHrdinove = new Array();
var hracVzhled = new Array();
var hracVzhledPrijaty = new Array;
for (i6 = 0; i6 < pocetHrdinuMAX; i6++) {
    zivotyAktHrdinove[i6] = 20;
    zivotyMaxHrdinove[i6] = 20;
    hracVzhled[i6] = 0;
    hracVzhledPrijaty[i6] = 0;
    vybavyHrdinu[i6] = new vybavaHrdiny ("mec","kosile","ohen");

};
var predavanyObjektCasMP;
var stavAktualnihoHrace;
stavAktualnihoHrace = 0; 
var aktPrebal;
var predavanyObjektMPStart;
var kamenMudrcu;