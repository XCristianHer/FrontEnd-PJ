// Seleccionamos los elementos necesarios del DOM
const slider = document.querySelector('#slider');
const slides = slider.querySelectorAll('.slide');
const controlerLinks = slider.querySelectorAll('.slider-controler a');

let currentSlideIndex = 0;
const slideIntervalTime = 3000; // Tiempo en milisegundos entre cada slide
let slideInterval;

function moveSlideTo(index) {
  // Movemos el slider a la posición del slide indicado por index
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });

  // Actualizamos el índice del slide actual
  currentSlideIndex = index;

  // Actualizamos la clase active en el controlador de slides
  controlerLinks.forEach(link => link.classList.remove('active'));
  controlerLinks[currentSlideIndex].classList.add('active');
}

function moveSlideNext() {
  const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
  moveSlideTo(nextSlideIndex);
}

// Iniciamos el intervalo para mover los slides automáticamente
slideInterval = setInterval(moveSlideNext, slideIntervalTime);

// Manejamos los eventos del mouse para detener y reanudar el movimiento automático
slider.addEventListener('mouseover', () => {
  clearInterval(slideInterval);
});

slider.addEventListener('mouseout', () => {
  slideInterval = setInterval(moveSlideNext, slideIntervalTime);
});

// Manejamos los eventos de click en el controlador de slides
controlerLinks.forEach((link, index) => {
  link.addEventListener('click', event => {
    event.preventDefault();
    moveSlideTo(index);

    // Reiniciamos el intervalo después de cada click en el controlador de slides
    clearInterval(slideInterval);
    slideInterval = setInterval(moveSlideNext, slideIntervalTime);
  });
});
  