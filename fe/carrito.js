const carrito = document.getElementById("carrito");
carrito.addEventListener("click", function() {
  // Código para abrir la ventana emergente
});
const ventanaEmergente = document.createElement("div");
ventanaEmergente.classList.add("ventana-emergente");

const titulo = document.createElement("h2");
titulo.textContent = "Carrito de compras";

ventanaEmergente.appendChild(titulo);

// Agregar detalles del carrito aquí

document.body.appendChild(ventanaEmergente);
