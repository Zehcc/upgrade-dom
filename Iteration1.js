/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */
 const showME = (document.querySelector('.showme'));
 console.log(showME);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const pillado = document.querySelector('#pillado');
console.log(pillado);

/* 1.3 Usa querySelector para mostrar por consola todos los p */
const allParagraph = document.querySelectorAll('p');
console.log(allParagraph);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

const allPokemon = document.querySelectorAll('.pokemon')
console.log(allPokemon);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */

const allData = document.querySelectorAll('[data-function="testMe"]')
console.log(allData);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

console.log(allData[2]);