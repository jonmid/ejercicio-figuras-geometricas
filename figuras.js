// ***** Start: código del cuadrado *****
console.group('Cuadrados');

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();
// ***** End: código del cuadrado *****

// ***** Start: código del triángulo *****
console.group('Triángulos');

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();
// ***** End: código del triángulo *****

// ***** Start: código del círculo *****
console.group('Círculos');

const PI = Math.PI;

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();
// ***** End: código del círculo *****

// ***** Código para interacción con HTML *****
function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
