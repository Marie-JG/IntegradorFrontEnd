let total = document.getElementById("total").innerHTML;

let resumen = document.getElementById("calcularPrecio");

let borrado = document.getElementById("borrado");

let textoOriginal;

function mouseOver(event) {
  let textoOriginal = event.target.innerHTML;
  event.target.innerHTML = "Hacé click";
}
function mouseOut(event) {
  event.target.innerHTML = textoOriginal;
}

function calcularPrecio() {
  let precioFinal = 0;
  let categoria = document.getElementById("categoria").innerHTML;
  let cant = document.querySelector("#cantidad");
  let precioEntrada = document.getElementById("precioEntrada").innerHTML;

  console.log(precioEntrada);

  let descuento1 = document.getElementById("descuentoEstudiante").innerHTML;
  let descuento2 = document.getElementById("descuentoTrainee").innerHTML;
  let descuento3 = document.getElementById("descuentoJunior").innerHTML;

  console.log(descuento1);
  console.log(descuento2);
  console.log(descuento3);

  if (categoria.innerHTML == "1") {
    precioFinal = parseInt(precioEntrada - (precioEntrada * descuento1) / 100);
  } else if (categoria.innerHTML == "2") {
    precioFinal = parseInt(precioEntrada - (precioEntrada * descuento2) / 100);
  } else if (categoria.innerHTML == "3") {
    precioFinal = parseInt(precioEntrada - (precioEntrada * descuento3) / 100);
  }

  total = total.innerHTML + (" " + precioFinal * cant);
  console.log(total);
}

function borrar() {
  document.getElementById("total").innerHTML = total.innerHTML;
  document.getElementById("cantidad").innerHTML = "";
  document.getElementById("categoria").innerHTML = "";
}

resumen.onmouseover = mouseOver;
resumen.onmouseout = mouseOut;
borrado.onmouseover = mouseOver;
borrado.onmouseout = mouseOut;
resumen.onclick = calcularPrecio;
borrado.onclick = borrar;



 
