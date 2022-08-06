let precioEntrada = document.getElementById("precioEntrada").innerHTML;

console.log(precioEntrada);

let descuento1 = document.getElementById("descuentoEstudiante").innerHTML;
let descuento2 = document.getElementById("descuentoTrainee").innerHTML;
let descuento3 = document.getElementById("descuentoJunior").innerHTML;

console.log(descuento1);
console.log(descuento2);
console.log(descuento3);

let categoria = document.getElementById("categoria").innerHTML;

let cant = document.querySelector("#cantidad");

let total = document.getElementById("total").innerHTML;

let resumen = document.getElementById("calcularPrecio");

let borrado = document.getElementById("borrado");

precioEntrada = parseFloat(precioEntrada);
descuento1 = parseFloat(descuento1);
descuento1 = parseFloat(descuento2);
descuento1 = parseFloat(descuento3);
cant = parseInt(cant);

/*resumen.onmouseover = mouseOver;
resumen.onmouseout = mouseOut;
borrado.onmouseover = mouseOver;
borrado.onmouseout = mouseOut;
resumen.onclick = calcularPrecio;
borrado.onclick = borrar;*/

/*function mouseOver(event) {
  let textoOriginal = event.target.innerHTML;
  event.target.innerHTML = "Hacé click";
}
function mouseOut(event) {
  event.target.innerHTML = textoOriginal;
}*/

// Función para calcular precio
function calcularPrecio() {

  let precioFinal = 0;

  if (categoria.innerHTML == "2") {
    precioFinal = precioEntrada - (precioEntrada * descuento1) / 100;
  } else if (categoria.innerHTML == "3") {
    precioFinal = precioEntrada - (precioEntrada * descuento2) / 100;
  } else if (categoria.innerHTML == "4") {
    precioFinal = precioEntrada - (precioEntrada * descuento3) / 100;
  } else {
    precioFinal = precioEntrada;
  }

  precioFinal = precioFinal * cant;

  console.log(precioFinal);

  total=document.getElementById("total").innerHTML = "$" + precioFinal;
}

// Función para borrar
function borrar() {
  
  document.getElementById("total").innerHTML = total.innerHTML;
  document.getElementById("cantidad").innerHTML = " ";
  document.getElementById("categoria").innerHTML = " ";
}

document.getElementById("borrado").onclick = borrar;

document.getElementById("calcularPrecio").onclick = calcularPrecio;
