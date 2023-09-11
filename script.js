/*
    Función para eliminar la ultima vocal de cada palabra de una oración
*/

function removeLastVowel ( str ) {
    return str.split(' ').map( item => item.replace(/[aeiou](?=[^aeiou]*\b)/i, '')).join(' ');
}

let response = removeLastVowel("Hola Mundo desde Javascript") // El resultado deberia ser Hol Mund desd JavaScrpt
console.log("🚀 ~ file: script.js:10 ~ response:", response)
