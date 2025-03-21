'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textohora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    El hora es: ${hora}
    El minutos es: ${minutos}
    El segundos es: ${segundos}
`;
console.log(textohora);