const express = require('express');
const path = require('path');
const app = express();

// Configurar múltiples directorios estáticos
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'Modulo 1/unidad 1/public')));

app.get('/hello-world', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});