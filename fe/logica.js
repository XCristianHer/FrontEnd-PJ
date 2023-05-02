// muestra las opciones del menú desplegable al hacer hover en la opción "Productos"
const menuIndex = document.querySelector('.menu_index');
const productosLink = document.querySelector('li a[href="index.html"]');

productosLink.addEventListener('mouseover', () => {
  menuIndex.style.display = 'block';
});

// oculta las opciones del menú desplegable al sacar el cursor de la opción "Productos"
productosLink.addEventListener('mouseout', () => {
  menuIndex.style.display = 'none';
});
const inicioLink = document.querySelector('#inicio');

// Agregar un mensaje de alerta al hacer clic en el enlace
inicioLink.addEventListener('click', () => {
  alert('¡Bienvenidos a JuanjosMarket!');
});

const inicioLink = document.querySelector('#inicio');

// Cambiar el texto del enlace "Inicio" al hacer clic en una opción del menú desplegable
const opciones = document.querySelectorAll('.lista_index a');
for (let i = 0; i < opciones.length; i++) {
  opciones[i].addEventListener('click', (event) => {
    event.preventDefault();
    inicioLink.textContent = event.target.textContent;
  });
}


