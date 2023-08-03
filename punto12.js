/*12) Monto en cuotas
a) Dado un número real que representa el valor total de una compra, informar
las posibles formas de pago según la siguiente tabla. Específica los datos de
entrada, de salida, estrategia.
1 cuota de $................. (0% de recargo)
2 cuotas de $................. total $................. ( 5% de recargo)
6 cuotas de $................. total $................. ( 40% de recargo)*/

 alert("Tenga en cuenta la siguiente informacion") 
 alert("1 cuota: pagas el 0% de recargo, 2 cuotas: pagas el 5% de recargo y 6 cuotas: pagas el 40% de recargo")
 let valor =prompt("Ingresa el valor del producto")
 let cuota =prompt("Ingresa el numero de cuotas que vas a pagar ")
 let op1   =(parseInt(valor)/2)
 let op2   =((op1*.05)+op1) 
 let op3   =(parseInt(valor)/6)
 let op4   =((op3*.40)+op3)   

if (cuota==1) {
    alert("1 Cuota de $ "+valor+" 0% de recargo")
}else if (cuota==2){
    alert("2 cuotas de $ "+op1+" Total a pagar  $ "+op2+" Aplicanco 5% de recargo")
}else if (cuota==6){
    alert("6 cuotas de $ "+op3+" Total a pagar  $ "+op4+" Aplicanco 40% de recargo")
}else{
    alert("Cuotas no permitidas. Ingresa el numero de cuotas permitido")
}