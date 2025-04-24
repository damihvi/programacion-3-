console.log("recorrer arreglos");
let numeros = [2,3,2,3,267,4]
for(let num of numeros){
    console.log("numero: ", num);
}

let ciudades = ["quito", "guayaquil", "caracas", "maracaibo", "tumbaco"]
for(let i=0; i < ciudades.length; i++){
    console.log("ciudad: ", ciudades[i]);
}

let colores = ["azul", "amarillo", "verde", "rojo"];
colores.forEach(function(valor, indice){
    console.log("color: ", indice, " : ", valor);
}
);