/*5) Pinturería
a) Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
generando presupuestos para cada cliente.*/

let squareMeter=prompt("Ingresa la cantidad en m2 que el cliente va pintar")
let value=prompt("Ingresa el valor segun la pintura que el cliente va aplicar")

let opr=(parseInt(squareMeter)*parseInt(value))

alert("El valor total a pagar es de:💲 "+opr)
console.log("El valor total a pagar es de:💲 "+opr)
