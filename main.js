const sueldoMin= 16000;
const sueldoMax= 20000;



const input = document.getElementById("user-input");
const bnt = document.getElementById("calculate");
const finalPriceContainer = document.getElementById('finalPrice');

bnt.addEventListener("click", function() {
    let totalHrs = Number(input.value.trim());
    if(totalHrs <= 40){
        totalMin = totalHrs * sueldoMin
        console.log("Tu sueldo equivale a " + totalMin )
    }else{
        totalMax = totalHrs * sueldoMax
        console.log("Tu sueldo equivale a " + totalMax)
    }
    
}
);