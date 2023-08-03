/*4) Estacionamiento
a) Un estacionamiento requiere determinar el cobro que debe aplicar a las
personas que lo utilizan. Considera que el cobro es con base en las horas
que lo disponen y que las fracciones de hora se toman como completas,
realiza el algoritmo que permita determinar el cobro.*/


let hours =prompt("cuantas horas dejaste tu vehiculo en el parqueadero ")
let minutes=prompt("Cuantos minutos")

let value =2000
let operation =(parseInt(hours)*value)

if (hours>0) {
    alert("El valor Total a pagar por "+hours+" H es 💲 "+operation)
}else if (minutes>0){

    alert("El valor Total a pagar por "+minutes+" Min es 💲 "+operation)
}



