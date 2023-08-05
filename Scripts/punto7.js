/*7) Precio final
a) Realiza un algoritmo para determinar cuánto pagará finalmente una persona
por un artículo, considerando que tiene un descuento de 20%, y debe pagar
15% de IVA (debe mostrar el precio con descuento y el precio final).*/

let value=prompt("Ingresa el valor del producto que vas a llevar ")

let opr=(parseInt(value)*.20)
let opr1=(parseInt(value)*.15)
let opr2=(value-opr+opr1)

alert("Usted tiene un descuento del 20% por un valor de $: "+opr+" El total a pagar del iva es del 15% $: "+opr1+" El total a pagar es de $: "+opr2)

// alert("El total a pagar del iva es del 15% $: "+opr1)
// alert("El total a pagar es de $: "+opr2)