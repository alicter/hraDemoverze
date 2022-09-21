'use strict'
function cas() { 
     setInterval("pohybHrdiny()", rychlostPohybu);
     setInterval("animujPohybHrdiny()", rychlostPohybu);
};
setTimeout("cas()", 900);