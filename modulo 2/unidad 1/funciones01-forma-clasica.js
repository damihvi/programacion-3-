//forma clasica

function saludar (){
    console.log("Hola desde la funcion saludar()")
}
saludar();
saludar();
saludar();

function suma (){
    console.log("Suma 1 + 2 = 3")
}

function resta (){
    console.log("Resta 10 - 2 = ", 10 - 2);
}
suma();
resta();
suma();
resta();
resta();

//funcion con parametros y retorno

function dividir (a, b){
    return a / b;
}

let resultado = dividir(40, 8);
console.log("resultado: ", resultado);


function tablaDeMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for(let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tablaDeMultiplicar(9);

function tabla(numero){
    let i=1;
    while(i<=10){
        console.log(i," + ", numero, " = ", i * numero);
        i++;
    }
}
tabla(5);






