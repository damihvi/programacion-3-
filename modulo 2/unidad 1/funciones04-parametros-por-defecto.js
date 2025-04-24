//funciones con parametros por defecto
console.log("Funciones con parametros por defecto");
function saludar(nombre = "invitado"){
    console.log("bienvenido ", nombre);
}

saludar("pedra fulano");
saludar();

function multiplicar(num1 = 5, num2 = 10){
    console.log("multiplicacion de ", num1, " * ", num2, " = ", num1 * num2);
}

multiplicar(3, 4);
multiplicar();

function multiplicar(num1 = 5, num2 = 10){
    console.log("multiplicacion de ", num1, " * ", num2, " = ", num1 * num2);
}

function areaTriangulo(base = 5, altura = 10){
    console.log("el area del triangulo es :", (base * altura) / 2);
}

areaTriangulo(5, 10);
areaTriangulo();

// calcular el promedio del siguiente arreglo;
notas = [8,5,8,7,9];

function promedio(notas = []){
    let suma = 0;
    for(let i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    return suma / notas.length;
}

console.log("el promedio es: ", promedio(notas));