/*8) Ahorros
a) Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
un año si considera que cada semana ahorra 15% de su sueldo (considera
cuatro semanas por mes y que no cambia el sueldo).*/

let salario=prompt("Ingresa el Salario que ganas mensualmente")

opr=(.15*4)
opr1=(salario*opr)
opr2=(opr1*12)

alert("Tu ahorro por año es de: 💸 "+opr2)
