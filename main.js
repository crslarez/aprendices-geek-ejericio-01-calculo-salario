const sueldoMinimo = 16000;
const sueldoMaximo = 20000;

let cantidadHora;
let salarioSemanal;

cantidadHora = document.getElementById(cantidadHora).value;
console.log(cantidadHora);

function myFunction(btnCalc) {
  if (cantidadHora <= 40) {
    cantidadHora * sueldoMinimo;
  } else {
    cantidadHora * sueldoMaximo;
  }
}
