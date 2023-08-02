/*4) Estacionamiento
a) Un estacionamiento requiere determinar el cobro que debe aplicar a las
personas que lo utilizan. Considera que el cobro es con base en las horas
que lo disponen y que las fracciones de hora se toman como completas,
realiza el algoritmo que permita determinar el cobro.*/


let horas =prompt("Ingresa la cantidad de horas que utilizaste el parqueadero ")
let valor =2500
let op =(parseInt(horas)*valor)

if (horas>0) {

    alert("El valor Total a pagar por "+horas+" H es 💲 "+op)
}else{
    alert("Por favor ingresa la cantidad de horas, recuerda que la minima es una hora")
} 



