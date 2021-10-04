const sueldoMin = 16000;
const sueldoMax = 20000;
const cantHrs = 40;

const input = document.getElementById("user-input");
const bnt = document.getElementById("calculate");
const finalPriceContainer = document.getElementById("finalPrice");

let totalSal = bnt.addEventListener ("click", function () {
  let totalHrs = Number(input.value.trim());
  if (totalHrs <= cantHrs) {

    totalMin = totalHrs * sueldoMin;
    console.log("Tu sueldo equivale a " + totalMin);
  } else {
    totalMax = totalHrs * sueldoMax;
    console.log("Tu sueldo equivale a " + totalMax);
  }
  
}
);
console.log(totalSal);

//document.getElementById("totalImp").innerHTML = "Cambio de texto";
