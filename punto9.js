/*9) Cheque
a) Una empresa desea determinar el monto de un cheque que debe
proporcionar a uno de sus empleados que tendrá que viajar durante un
determinado número de días. Los gastos que cubre la empresa son: hotel,
comida y 200 pesos diarios para otros gastos. El monto debe estar
desglosado para cada concepto. Realiza un algoritmo que determine el
monto del cheque.*/

let hotel=prompt ("Ingresa el valor que cobra el Hotel por dia a una persona")
let comida=prompt("Ingresa el costo diario de la comida del empleado ")
let gastos=200

opr=(parseInt(hotel)+parseInt(comida)+gastos)

alert("El valor del hotel es:$ "+hotel+" El valor de la comida es:$ "+comida+" El total del cheque es de:$ "+opr)
