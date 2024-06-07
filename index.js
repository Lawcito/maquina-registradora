//Obtener elementos.
var dineroEnCaja = document.getElementById("dineroEnCaja");
var productoValor = document.getElementById("productoValor");
var vueltoFinal = document.getElementById("vueltoFinal");
var compraRealizada = document.getElementById("compraRealizada");
var dineroInicial = document.getElementById("dineroInicial")
//Variables.
var monto = parseInt(prompt("Ingrese su monto inicial"));
var costoProducto = parseInt(prompt("Ingrese el precio del producto"));
var dineroCliente = parseInt(prompt("Ingrese el pago del cliente"));

//Funcion registrar: Si dineroCliente menor dineroProducto "Insuficiente" else Suma el costo del producto
//al monto, resta dineroCliente y dineroProducto para generar el vuelto
//Y si el vuelto es > a 0 muesstra el monto final = montoProducto - vuelto.

productoValor.textContent = costoProducto;
dineroInicial.textContent = monto;
productos = [];


function registrar(a, b) {
  if (a < b) {
    console.log(a,b)
    return alert("Usted no tiene dinero suficiente.");
    
  } else {
    productos.push(costoProducto);
    console.log(productos);
    montoProducto = monto + b;
    vuelto = a - b;
    vueltoFinal.textContent = vuelto;
    compraTerminada = document.createElement("p");
    compraTerminada.textContent = `Usted ha realizado la compra, su vuelto es de ${vuelto} pesos`;
    compraRealizada.appendChild(compraTerminada);
  }
  if (vuelto > 0) {
    montoFinal = montoProducto - vuelto;
  }
  dineroEnCaja.textContent = montoFinal;
}

//LLamada a la función.

registrar(dineroCliente, costoProducto);


