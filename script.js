$(document).ready(function(){
    $('#proyectos ul li').each(function(){
      $(this).find('.carrusel').slick({
        dots: true, // muestra los indicadores de navegación
        arrows: false, // oculta los botones de navegación
        infinite: true, // permite la navegación infinita del carrusel
        speed: 500, // velocidad de transición
        autoplay: true, // reproduce automáticamente el carrusel
        autoplaySpeed: 3000 // velocidad de reproducción automática
      });
    });
  });