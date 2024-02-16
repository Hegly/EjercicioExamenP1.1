document.getElementById("descuentoForm").addEventListener("submit", function(event){
    event.preventDefault();

  let producto1 = parseInt(document.getElementById("producto1").value);
  let producto2 = parseInt(document.getElementById("producto2").value);
  let producto3 = parseInt(document.getElementById("producto3").value);
  let producto4 = parseInt(document.getElementById("producto4").value);
  let producto5 = parseInt(document.getElementById("producto5").value);
  
    // Validación
  var isValid = true;
  var errorMessage = "";
  var inputs = document.querySelectorAll('.producto');
  inputs.forEach(function(input) {
    if (!/^[\d.]+$/.test(input.value)) {
      errorMessage += "Por favor, ingrese solo números válidos en todos los campos.\n";
      isValid = false;
    }
  });
  
  if (!isValid) {
    alert(errorMessage);
    return;
  }
  
  // Calcular el subtotal
  var subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
  
  // Mostrar el subtotal
  document.getElementById("subtotal").value = subtotal.toFixed(2);
  
  // Calcular el descuento
  var descuento = 0;
  var descuentoLabel = "Descuento 0%";
  if(subtotal >= 1000 && subtotal < 5000) {
    descuento = 0.1;
    descuentoLabel = "Descuento 10%";
  } else if(subtotal >= 5000 && subtotal < 9000) {
    descuento = 0.2;
    descuentoLabel = "Descuento 20%";
  } else if(subtotal >= 9000 && subtotal < 13000) {
    descuento = 0.3;
    descuentoLabel = "Descuento 30%";
  } else if(subtotal >= 13000) {
    descuento = 0.4;
    descuentoLabel = "Descuento 40%";
  }
  
  // Mostrar el descuento
  document.getElementById("descuento").value = descuentoLabel;
  
  // Calcular el descuento aplicado
  var descuentoAplicado = subtotal * descuento;
  
  // Calcular el total con descuento
  var totalConDescuento = subtotal - descuentoAplicado;
  
  // Mostrar el total a pagar
  document.getElementById("total").value = totalConDescuento.toFixed(2);
  });

  function limpiarFormulario() {
    document.getElementById("producto1").value = "";
    document.getElementById("producto2").value = "";
    document.getElementById("producto3").value = "";
    document.getElementById("producto4").value = "";
    document.getElementById("producto5").value = "";
    document.getElementById("subtotal").value = "";
    document.getElementById("descuento").value = "Descuento 0%";
    document.getElementById("total").value = "";
  }
