console.log("declaracion de arreglos");
let numeros = [2,3,2,3,267,4]
for(let num of arreglo){
    console.log("numero: ", num);
}
let vacio = new Array();
for(let v of vacio){
    console.log("elemento", v);
}
console.log(vacio);

//acceder a un elemento
console.log("elemento 0: ", numeros[0]);
console.log("elemento 1: ", numeros[1]);
console.log("elemento 2: ", numeros[2]);

//modificacion de elementos de un arreglo

console.log("array de numeros: ", numeros);
numeros[0] = 8888;
numeros[2] = 98;
numeros[5] = 1000;
console.log("array de numeros modificados: ", numeros);

//agregar elemento a un array
//agregar al final del array
numeros.push(50);
// agregar al inicio del array
numeros.unshift(70);
console.log("array con elementos inclusidos: ", numeros);

//borrar elementos de un array
//eliminar el ultimo
numeros.pop();
//eliminar el primero
numeros.shift();
console.log("array con elementos eliminados: ", numeros);