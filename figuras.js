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

// ***** Start: código del triangulo isósceles *****
console.group('Triángulo Isósceles');

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    console.error('Los lados a y b no son iguales');
  } else {
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}

console.groupEnd();
// ***** End: código del triangulo isósceles *****

// ***** Código para interacción con HTML *****
function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  const resultElement = document.getElementById('result-cuadrado');
  resultElement.innerHTML = `<div class="result-container"><p>PERÍMETRO = <span>${perimetro}</span></p></div>`;
}
function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  const resultElement = document.getElementById('result-cuadrado');
  resultElement.innerHTML = `<div class="result-container"><p>ÁREA = <span>${area}</span></p></div>`;
}
