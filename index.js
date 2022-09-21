const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var fs = require('fs');
var path = require('path');
const open = require('open');
var bodyParser = require('body-parser');
const { json } = require('express');
const dns = require('dns');
const ip = require("ip");
var url = require('url');
app.use(express.static("./prostredi"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static(path.join(__dirname, 'public')));



const mapyConstPocet = 1100;

app.get('/', (req, res) => {

    fs.readFile('./prostredi/hlavni-menu.html', function (error, content) {
        if (error) {
            writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }

    });


});
app.get('/menu', (req, res) => {

    fs.readFile('./prostredi/hlavni-menu.html', function (error, content) {
        if (error) {
            writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }

    });


});
app.get('/vyhra', (req, res) => {

    fs.readFile('./prostredi/vyhra.html', function (error, content) {
        if (error) {
            writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }

    });


});
app.get('/tvorbaPostavy', (req, res) => {

    fs.readFile('./prostredi/tvorbaPostavy.html', function (error, content) {
        if (error) {
            writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }

    });


});
for (let iForGet = 0 ; iForGet <= mapyConstPocet ; iForGet ++) 
{
    app.get('/' + iForGet, (req, res) => {
        console.log ( "Prostredi je :" +'/'+ iForGet);
    fs.readFile('./prostredi/'+ iForGet + '.html', function (error, content) {
        if (error) {
            writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }

    });


});

app.get('/mapuchci/' + iForGet , (req, res) => {

let objekticek, objSTR;
    fs.readFile('./prostredi/mapy/mapa' + iForGet + '.txt', 'utf8', function (err, data) {
        if (err) console.log(err);
        else {
            objekticek = {
                mapa : data
            }
          //  objSTR = JSON.stringify(objekticek);
          
            res.json(objekticek);
        };
    });

});
};

app.get('/smrt', (req, res) => {
    fs.readFile('./prostredi/smrt.html', function (error, content) {
        if (error) {
            writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }

    });


});





//-------------------------------------------------------------------------------------- MP MP MP MP MP MP
var spojovaciObjekt = {
    startovani: "ano",
        nacitani: "ne",
        pocetHrdinu : 4,
        ktery : 0,
        aktualniHrdina: 1,
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

            x: 200,
            y: 200,
            prechodOdkud: 0,
            stav: 0,
            obsazenost: "volno",
            zivotyMax: 20,
            zivotyAkt:  20,
            utok: 3,
            obrana: 0,
            vzhledOdeslany: 0
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
            x: 250,
            y: 200,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: 20,
            zivotyAkt:  20,
            utok: 3,
            obrana: 0,
            vzhledOdeslany: 0
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
            x: 250,
            y: 200,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: 20,
            zivotyAkt:  20,
            utok: 3,
            obrana: 0,
            vzhledOdeslany: 0
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
            x: 300,
            y: 200,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: 20,
            zivotyAkt:  20,
            utok: 3,
            obrana: 0,
            vzhledOdeslany: 0
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
            x: 350,
            y: 200,
            prechodOdkud: 0,
            stav : 0,
            obsazenost: "volno",
            zivotyMax: 20,
            zivotyAkt:  20,
            utok: 3,
            obrana: 0,
            vzhledOdeslany: 0
        }]};
var mapyMP = new Array();

for (let i0MP = 0; i0MP <= mapyConstPocet ; i0MP++) {

mapyMP[i0MP] = {
priseraMP : [{
typ : 'pavouk',
cislo : 0,
x : 350,
y : 350,
utok : 1,
obrana : 1,
zivotyAkt : 5,
zivotyMax : 5
},
{
    typ : 'pavouk',
    cislo : 0,
    x : 400,
    y : 350,
    utok : 1,
    obrana : 1,
    zivotyAkt : 5,
    zivotyMax : 5
    }]
};

};

app.get('/prvniSpusteni', (req, res) => {
               res.json(spojovaciObjekt);
});

var iForGetMapyMP;
for (iForGetMapyMP = 0; iForGetMapyMP <= mapyConstPocet; iForGetMapyMP++){
app.get('/druhespusteni/' + iForGetMapyMP , (req, res) => {
    let brambora = url.parse(req.url, true);
    let bramboracka = brambora.path.slice(15);
    res.json(mapyMP[bramboracka]);
});
};

   


        io.on('connection', (socket) => {
            setInterval(() => {
                           socket.emit('aktualizaceHrdiny', (spojovaciObjekt));
               }, 1);});












var pridelLocStrgCisloHrace = {
    cisloHrace : 0,
    plno: "FREE"
};
var cisloHracePridelene = 0;

app.get('/locstrgcislohrace', (req, res) => {


if (cisloHracePridelene <= 3 ) {

    
    res.json(pridelLocStrgCisloHrace);
    cisloHracePridelene = cisloHracePridelene + 1;
    pridelLocStrgCisloHrace = {
        cisloHrace : cisloHracePridelene,
        plno: "FREE"
    };

} else {
    pridelLocStrgCisloHrace.plno = "FULL"
    res.json(pridelLocStrgCisloHrace);
};
    
});



io.on('connection', (socket) => {
    socket.on('pohybPrvni', (supermanOdNichD) => {
  let supermanPrijatyD, kterouckyD, supermanPrebalenyD;

  supermanPrebalenyD = supermanOdNichD;
  supermanPrebalenyD = JSON.stringify(supermanOdNichD);
            supermanPrijatyD = JSON.parse(supermanPrebalenyD);
            

            kterouckyD = supermanPrijatyD.ktery;

            
            spojovaciObjekt.aktualniHrdina = supermanPrijatyD.aktualniHrdina;




            spojovaciObjekt.hrac[kterouckyD].vlastnosti.jmeno = supermanPrijatyD.hrac[kterouckyD].vlastnosti.jmeno;
            spojovaciObjekt.hrac[kterouckyD].vlastnosti.povolani = supermanPrijatyD.hrac[kterouckyD].vlastnosti.povolani;
spojovaciObjekt.hrac[kterouckyD].vlastnosti.level = supermanPrijatyD.hrac[kterouckyD].vlastnosti.level;
spojovaciObjekt.hrac[kterouckyD].vlastnosti.zk = supermanPrijatyD.hrac[kterouckyD].vlastnosti.zk;
spojovaciObjekt.hrac[kterouckyD].vlastnosti.sila = supermanPrijatyD.hrac[kterouckyD].vlastnosti.sila;
spojovaciObjekt.hrac[kterouckyD].vlastnosti.obratnost = supermanPrijatyD.hrac[kterouckyD].vlastnosti.obratnost ;
spojovaciObjekt.hrac[kterouckyD].vlastnosti.inteligence = supermanPrijatyD.hrac[kterouckyD].vlastnosti.inteligence;
spojovaciObjekt.hrac[kterouckyD].vlastnosti.moudrost = supermanPrijatyD.hrac[kterouckyD].vlastnosti.moudrost;

spojovaciObjekt.hrac[kterouckyD].vybava.zbran = supermanPrijatyD.hrac[kterouckyD].vybava.zbran;
spojovaciObjekt.hrac[kterouckyD].vybava.brni = supermanPrijatyD.hrac[kterouckyD].vybava.brni;
spojovaciObjekt.hrac[kterouckyD].vybava.kouzlo = supermanPrijatyD.hrac[kterouckyD].vybava.kouzlo;
spojovaciObjekt.hrac[kterouckyD].inventar = supermanPrijatyD.hrac[kterouckyD].inventar;


            spojovaciObjekt.hrac[kterouckyD].cisloMapy = supermanPrijatyD.hrac[kterouckyD].cisloMapy;
 
            spojovaciObjekt.hrac[kterouckyD].x = supermanPrijatyD.hrac[kterouckyD].x;
            spojovaciObjekt.hrac[kterouckyD].y = supermanPrijatyD.hrac[kterouckyD].y;
            spojovaciObjekt.hrac[kterouckyD].zivotyAkt = supermanPrijatyD.hrac[kterouckyD].zivotyAkt;
            spojovaciObjekt.hrac[kterouckyD].zivotyMax = supermanPrijatyD.hrac[kterouckyD].zivotyMax;


            spojovaciObjekt.hrac[kterouckyD].obsazenost = supermanPrijatyD.hrac[kterouckyD].obsazenost;
            spojovaciObjekt.hrac[kterouckyD].vzhledOdeslany = supermanPrijatyD.hrac[kterouckyD].vzhledOdeslany;
            spojovaciObjekt.hrac[kterouckyD].prechodOdkud = supermanPrijatyD.hrac[kterouckyD].prechodOdkud;
            spojovaciObjekt.hrac[kterouckyD].startovani = supermanPrijatyD.hrac[kterouckyD].startovani;
            

});
});

  io.on('connection', (socket) => {
    socket.on('pohyb', (supermanOdNich) => {
        let kteroucky, supermanPrijaty, supermanPrebaleny;

            supermanPrebaleny = JSON.stringify(supermanOdNich) ;
            supermanPrijaty = JSON.parse(supermanPrebaleny);
            kteroucky = supermanPrijaty.ktery;

            spojovaciObjekt.hrac[kteroucky].vlastnosti.jmeno = supermanPrijaty.hrac[kteroucky].vlastnosti.jmeno;
            spojovaciObjekt.hrac[kteroucky].vlastnosti.povolani = supermanPrijaty.hrac[kteroucky].vlastnosti.povolani;
            spojovaciObjekt.hrac[kteroucky].vlastnosti.level = supermanPrijaty.hrac[kteroucky].vlastnosti.level;
            spojovaciObjekt.hrac[kteroucky].vlastnosti.zk = supermanPrijaty.hrac[kteroucky].vlastnosti.zk;
            spojovaciObjekt.hrac[kteroucky].vlastnosti.sila = supermanPrijaty.hrac[kteroucky].vlastnosti.sila;
            spojovaciObjekt.hrac[kteroucky].vlastnosti.obratnost = supermanPrijaty.hrac[kteroucky].vlastnosti.obratnost;
            spojovaciObjekt.hrac[kteroucky].vlastnosti.inteligence = supermanPrijaty.hrac[kteroucky].vlastnosti.inteligence;
            spojovaciObjekt.hrac[kteroucky].vlastnosti.moudrost = supermanPrijaty.hrac[kteroucky].vlastnosti.moudrost;

            spojovaciObjekt.hrac[kteroucky].vybava.zbran = supermanPrijaty.hrac[kteroucky].vybava.zbran ;
            spojovaciObjekt.hrac[kteroucky].vybava.brni = supermanPrijaty.hrac[kteroucky].vybava.brni ;
            spojovaciObjekt.hrac[kteroucky].vybava.kouzlo = supermanPrijaty.hrac[kteroucky].vybava.kouzlo ;
            spojovaciObjekt.hrac[kteroucky].inventar = supermanPrijaty.hrac[kteroucky].inventar ;



            spojovaciObjekt.hrac[kteroucky].cisloMapy = supermanPrijaty.hrac[kteroucky].cisloMapy;
            spojovaciObjekt.hrac[kteroucky].x = supermanPrijaty.hrac[kteroucky].x;
            spojovaciObjekt.hrac[kteroucky].y = supermanPrijaty.hrac[kteroucky].y;
            spojovaciObjekt.hrac[kteroucky].stav = supermanPrijaty.hrac[kteroucky].stav;
            spojovaciObjekt.hrac[kteroucky].obsazenost = supermanPrijaty.hrac[kteroucky].obsazenost;
            spojovaciObjekt.hrac[kteroucky].vzhledOdeslany = supermanPrijaty.hrac[kteroucky].vzhledOdeslany;
           // spojovaciObjekt.hrac[kteroucky].prechodOdkud = supermanPrijaty.hrac[kteroucky].prechodOdkud;


    });
 });


io.on('connection', (socket) => {
    socket.on('utok', (predavany_objekt_utok_MP_prijaty) => {
        let kterouckyE, supermanPrijatyE, supermanPrebalenyE;

        supermanPrebalenyE = JSON.stringify(predavany_objekt_utok_MP_prijaty) ;
        supermanPrijatyE = JSON.parse(supermanPrebalenyE);
        kterouckyE = supermanPrijatyE.ktery;

        spojovaciObjekt.hrac[kterouckyE].zivotyAkt = spojovaciObjekt.hrac[kterouckyE].zivotyAkt - supermanPrijatyE.hrac[kterouckyE].utok;

    });
 });








  io.on('connection', (socket) => {
    console.log('a user connected');
         socket.on('disconnect', () => {
            let soucasnyHrdina = 0;
                if (spojovaciObjekt.aktualniHrdina === 0) soucasnyHrdina = 4;
                else if (spojovaciObjekt.aktualniHrdina === 1) soucasnyHrdina = 0;
                else if (spojovaciObjekt.aktualniHrdina === 2) soucasnyHrdina = 1;
                else if (spojovaciObjekt.aktualniHrdina === 3) soucasnyHrdina = 2;
                else if (spojovaciObjekt.aktualniHrdina === 4) soucasnyHrdina = 3;
                     spojovaciObjekt.hrac[soucasnyHrdina].obsazenost = "volno";
                     spojovaciObjekt.hrac[soucasnyHrdina].vzhledOdeslany = 0;
                     spojovaciObjekt.hrac[soucasnyHrdina].zivotyMax = 20;
                     spojovaciObjekt.hrac[soucasnyHrdina].zivotyAkt = 20;                  
               console.log('user disconnected');


        });

     
    });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(80, () => {
    console.log(" port   :80");
});
open('http://localhost:80/');