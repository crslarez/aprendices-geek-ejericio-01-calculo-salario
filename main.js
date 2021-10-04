const sueldoMin= 16000;
const sueldoMax= 20000;

const input = document.getElementById("user-input");
const bnt = document.getElementById("calculate");
const finalPriceContainer = document.getElementById('finalPrice');

let finalPrice = bnt.addEventListener("click", function() {
    let totalHrs = Number(input.value.trim());
    if(totalHrs <= 40){
        
      document.write('Tu sueldo total es: ' + totalHrs * sueldoMin)
        //console.log("cada hora de trabajo equivale a" + sueldoMin)
    }else{
      document.write('Tu sueldo total es: ' + totalHrs * sueldoMax)
        //console.log("cada hora de trabajo equivale a" + sueldoMax)
    }
});