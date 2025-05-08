console.log(document.head);

const titulo = document.getElementById("titulo");
console.log("elemento titulo: ", titulo);

const notas = document.getElementsByClassName("notas");
Array.from(notas).forEach(n=>console.log(n.textContent));

const items = document.querySelectorAll(".item");
items.forEach(elemento=>console.log(elemento.textContent));

const mensaje = document.getElementById("mensaje");
console.log(mensaje);
mensaje.textContent="nuestro h2 se ah actualizado";
mensaje.style.color = "red";

const enlace = document.getElementById("link");
console.log(enlace);
enlace.setAttribute("href", "https://www.google.com");
enlace.textContent = "www.google.com";



