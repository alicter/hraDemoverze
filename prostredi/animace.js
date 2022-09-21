'use strict';
function animujPohybHrdiny() {
if (pohybHrdiny[cisloHrdiny] == false || indexOUS <= 0) {obrazky = ["obrazky/postavy/muj_otec/p2_predni_stoji_1.png"]; return;} 

if (opacnyUzavrenyList[indexOUS].x * sirkaPolicka > Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft  + 50 ) / 50)*50 && opacnyUzavrenyList[indexOUS].y * vyskaPolicka == Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 100) / 50)*50) {obrazky = ['obrazky/postavy/muj_otec/p2_pravo_chodi_1.png', 'obrazky/postavy/muj_otec/p2_pravo_chodi_2.png', 'obrazky/postavy/muj_otec/p2_pravo_chodi_3.png','obrazky/postavy/muj_otec/p2_pravo_chodi_4.png', 'obrazky/postavy/muj_otec/p2_pravo_chodi_5.png', 'obrazky/postavy/muj_otec/p2_pravo_chodi_6.png', 'obrazky/postavy/muj_otec/p2_pravo_chodi_7.png', 'obrazky/postavy/muj_otec/p2_pravo_chodi_8.png', 'obrazky/postavy/muj_otec/p2_pravo_chodi_9.png'];}

if (opacnyUzavrenyList[indexOUS].x * sirkaPolicka < Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft  + 50 ) / 50)*50 && opacnyUzavrenyList[indexOUS].y * vyskaPolicka == Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 100) / 50)*50) {obrazky = ["obrazky/postavy/muj_otec/p2_levo_chodi_1.png", "obrazky/postavy/muj_otec/p2_levo_chodi_2.png", "obrazky/postavy/muj_otec/p2_levo_chodi_3.png","obrazky/postavy/muj_otec/p2_levo_chodi_4.png","obrazky/postavy/muj_otec/p2_levo_chodi_3.png", "obrazky/postavy/muj_otec/p2_levo_chodi_2.png", "obrazky/postavy/muj_otec/p2_levo_chodi_1.png"];}

if (opacnyUzavrenyList[indexOUS].x * sirkaPolicka == Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft  + 50 ) / 50)*50 && opacnyUzavrenyList[indexOUS].y * vyskaPolicka > Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 100) / 50)*50) {obrazky = ["obrazky/postavy/muj_otec/p2_predni_chodi_1.png", "obrazky/postavy/muj_otec/p2_predni_chodi_2.png", "obrazky/postavy/muj_otec/p2_predni_chodi_3.png", "obrazky/postavy/muj_otec/p2_predni_chodi_4.png", "obrazky/postavy/muj_otec/p2_predni_chodi_5.png","obrazky/postavy/muj_otec/p2_predni_chodi_6.png", "obrazky/postavy/muj_otec/p2_predni_chodi_7.png", "obrazky/postavy/muj_otec/p2_predni_chodi_8.png","obrazky/postavy/muj_otec/p2_predni_chodi_9.png","obrazky/postavy/muj_otec/p2_predni_chodi_10.png","obrazky/postavy/muj_otec/p2_predni_chodi_11.png","obrazky/postavy/muj_otec/p2_predni_chodi_12.png"]}

if (opacnyUzavrenyList[indexOUS].x * sirkaPolicka == Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetLeft  + 50 ) / 50)*50 && opacnyUzavrenyList[indexOUS].y * vyskaPolicka < Math.floor((document.getElementById('hrdina:' + cisloHrdiny).offsetTop + 100) / 50)*50) {obrazky = ["obrazky/postavy/muj_otec/p2_zadni_chodi_1.png", "obrazky/postavy/muj_otec/p2_zadni_chodi_2.png", "obrazky/postavy/muj_otec/p2_zadni_chodi_3.png", "obrazky/postavy/muj_otec/p2_zadni_chodi_4.png", "obrazky/postavy/muj_otec/p2_zadni_chodi_5.png","obrazky/postavy/muj_otec/p2_zadni_chodi_6.png","obrazky/postavy/muj_otec/p2_zadni_chodi_7.png","obrazky/postavy/muj_otec/p2_zadni_chodi_8.png","obrazky/postavy/muj_otec/p2_zadni_chodi_9.png","obrazky/postavy/muj_otec/p2_zadni_chodi_10.png","obrazky/postavy/muj_otec/p2_zadni_chodi_11.png","obrazky/postavy/muj_otec/p2_zadni_chodi_12.png"]}



if (obr >= obrazky.length - 1) {
    obr = 0;
    } else obr++;
document.getElementById('hrdina:' + cisloHrdiny).src = obrazky[obr];
};