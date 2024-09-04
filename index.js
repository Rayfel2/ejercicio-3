// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importa las funciones del módulo math.js
const { sum, subtract, multiply, divide } = require('./math');

// Ruta para realizar operaciones matemáticas
app.get('/calculate', (req, res) => {
  const { operation, a, b } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  
  try {
    let result;
    switch (operation) {
      case 'sum':
        result = sum(numA, numB);
        break;
      case 'subtract':
        result = subtract(numA, numB);
        break;
      case 'multiply':
        result = multiply(numA, numB);
        break;
      case 'divide':
        result = divide(numA, numB);
        break;
      default:
        return res.status(400).send('Operación no válida');
    }
    res.send(`El resultado de ${operation} de los numeros ${numA} y ${numB} es ${result}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
