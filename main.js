
let frutas = [];
let verduras = [];
let laticinios = [];

let perguntaFruta = prompt("Quais frutas você deseja comprar?")
let perguntaVerdura = prompt("Quais verduras você deseja comprar?")
let perguntaLaticinios = prompt("Quais laticinios você deseja comprar?")

let aparecerFrutas = document.getElementById("frutas");
aparecerFrutas.innerHTML += `<li>${perguntaFruta}</li>`;

let aparecerLegumas = document.getElementById("legumes");
aparecerLegumas.innerHTML += `<li>${perguntaVerdura}</li>`;

let aparecerLaticinios = document.getElementById("laticinios");
aparecerLaticinios.innerHTML += `<li>${perguntaLaticinios}</li>`;

if (perguntaFruta == perguntaFruta) {
     frutas.push(perguntaFruta.toLocaleUpperCase());
} else {  
}

if (perguntaVerdura == perguntaVerdura) {
     verduras.push(perguntaVerdura.toLocaleUpperCase());
} else {  
}

if (perguntaLaticinios == perguntaLaticinios) {
     laticinios.push(perguntaLaticinios.toLocaleUpperCase());
} else { 
}



