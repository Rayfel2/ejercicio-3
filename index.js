// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importa las funciones del módulo math.js
const { sum, subtract, multiply, divide } = require('./math');

// Define una ruta para sumar dos números
app.get('/sum/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const result = sum(a, b);
  res.send(`La suma de ${a} y ${b} es ${result}`);
});

// Define una ruta para restar dos números
app.get('/subtract/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const result = subtract(a, b);
  res.send(`La resta de ${a} y ${b} es ${result}`);
});

// Define una ruta para multiplicar dos números
app.get('/multiply/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const result = multiply(a, b);
  res.send(`La multiplicación de ${a} y ${b} es ${result}`);
});

// Define una ruta para dividir dos números
app.get('/divide/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  try {
    const result = divide(a, b);
    res.send(`La división de ${a} entre ${b} es ${result}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
