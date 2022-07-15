


  let precioEntrada = parseInt( document.getElementById("precioEntrada").innerHTML.split("$"))
  let categoria = document.getElementById("categoria").value;
  let cantidad = document.getElementById("inputCantidad").value;
  console.log(cantidad);
  let precioFinal = 0;
  let descuento1 = parseInt(
    document.getElementById("descuentoEstudiante").innerHTML.split("%")[0]
  );
  let descuento2 = parseInt(
    document.getElementById("descuentoTrainee").innerHTML.split("%")[0]
  );
  let descuento3 = parseInt(
    document.getElementById("descuentoJunior").innerHTML.split("%")[0]
  );


  function calcularPrecio() {
  if (categoria == "1") {
    precioFinal =
      parseInt(precioEntrada) - (parseInt(precioEntrada) * descuento1) / 100;
  } else if (categoria == "2") {
    precioFinal =
      parseInt(precioEntrada) - (parseInt(precioEntrada) * descuento2) / 100;
  } else if (categoria == "3") {
    precioFinal =
      parseInt(precioEntrada) - (parseInt(precioEntrada) * descuento3) / 100;
  } else {
    precioFinal = parseInt(precioEntrada);
  }
  document.getElementById("total").value = "$" + precioFinal * cantidad;

  function borrar() {
    document.getElementById("total").value = "";
    document.getElementById("inputCantidad").value = "";
    document.getElementById("categoria").value = "";
  }

  document.getElementById("borrar").onclick = borrar;

  document.getElementById("calcularPrecio").onclick = calcularPrecio;
}
