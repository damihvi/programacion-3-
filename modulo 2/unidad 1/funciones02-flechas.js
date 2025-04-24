//forma clasica

const saludar = ()=> {
    console.log("Hola desde la arrow function");
}
saludar();
saludar();
saludar();
saludar();

//retorno directo
const cuadrado =  x => x * x;
console.log("5x5=", cuadrado(5));

const cuadrado1 = (num) => {
    console.log("cuadrado de ", num, " es igual a ", num * num);
}
cuadrado1(6);

const cuadrado2 = (num) => {
    console.log("cuadrado de ", num, " es igual a ", num * num);
}
cuadrado2(6);



