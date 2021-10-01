const sueldoMinimo = 16000;
const sueldoMaximo = 20000;

let cantidadHora;
let salarioSemanal;

cantidadHora = document.getElementById("cantidadHora").value;
    
function myFunction(){ 
if(cantidadHora <= 40){
    salarioSemanal = cantidadHora * sueldoMinimo;
}else{
    salarioSemanal = cantidadHora * sueldoMaximo;
}
console.log(salarioSemanal);
}