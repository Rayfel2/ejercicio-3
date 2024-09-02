const { sum, subtract, multiply, divide } = require('./math');

test('suma 1 + 2 es igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('resta 5 - 3 es igual a 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  
  test('multiplicación de 4 * 3 es igual a 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });
  
  test('división de 10 / 2 es igual a 5', () => {
    expect(divide(10, 2)).toBe(5);
  });
  
  test('división por cero lanza un error', () => {
    expect(() => divide(10, 0)).toThrow('No se puede dividir por cero');
  });