/*11) Nota promedio
a) Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
considerando que realiza tres exámenes, de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero de 50%.*/

let note1=prompt("Ingresa la nota del examen 1")
let note2=prompt("Ingresa la nota del examen 2")
let note3=prompt("Ingresa la nota del examen 3")    

let op1=((parseInt(note1)+parseInt(note2)+parseInt(note3))/3)

alert("El promedio del alumno es de: "+op1)
