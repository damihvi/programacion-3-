//funcion anonima

console.log("funciones anonimas");
setTimeout(function(){
    console.log("Hola desde la funcion setTime");
}, 3000);

let mensaje = function(){
    console.log("Hola desde la funcion anonima");
}
console.log(mensaje());