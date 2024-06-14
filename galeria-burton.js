document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-track img');
    const imageWidth = images[0].clientWidth; // Ancho de cada imagen

    let index = 0;

    function nextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        carouselTrack.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    setInterval(nextSlide, 1500); // Es el nro de los segundos en los q tarda en cambiar
});
