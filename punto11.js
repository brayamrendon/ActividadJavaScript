/*11) Nota promedio
a) Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
considerando que realiza tres exámenes, de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero de 50%.*/

let nota1=prompt("Ingresa la nota del examen 1")
let nota2=prompt("Ingresa la nota del examen 2")
let nota3=prompt("Ingresa la nota del examen 3")    

let op1=((parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3)

alert("El promedio del alumno es de: "+op1)
