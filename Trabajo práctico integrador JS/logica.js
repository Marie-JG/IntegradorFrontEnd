alert("Bienvenido al sistema de venta de tickets");

document.getElementById("borrado").onclick = borrar;

document.getElementById("calcularPrecio").onclick = calcularPrecio;


// Función para calcular precio

function calcularPrecio() {
  let cant = document.querySelector("#cantidad").value;
  let categoria = document.getElementById("categoria").value;
  let precioEntrada = document.getElementById("precioEntrada").innerHTML;

  console.log("Precio de la entrada: $"+precioEntrada);
  
  console.log("Cantidad: " + cant +" Categoría: "+ categoria);

  let descuento1 = precioEntrada - (precioEntrada * 80) / 100;
  let descuento2 = precioEntrada - (precioEntrada * 50) / 100;
  let descuento3 = precioEntrada - (precioEntrada * 15) / 100;
  let precioFinal=0;
  

  if (categoria == "2") {
    precioFinal = descuento1 * cant;
    document.getElementById("total").innerHTML =
        "Total a Pagar: $ "+ precioFinal;
  } else if (categoria == "3") {
    precioFinal = descuento2 * cant;
    document.getElementById("total").innerHTML =
        "Total a Pagar: $ "+ precioFinal;
  } else if (categoria == "4") {
    precioFinal = descuento3 * cant;
    document.getElementById("total").innerHTML =
        "Total a Pagar: $ "+ precioFinal;
  
  }else{
     alert('Debe ingresar la cantidad en enteros');
  }

  precioFinal = precioFinal * cant;


  return precioFinal;
}

// Función para borrar

function borrar() {
  
  document.getElementById("total").innerHTML= "Total a pagar: $";
  document.getElementById("cantidad").value= " ";
  document.getElementById("categoria").value= " ";
}



 
