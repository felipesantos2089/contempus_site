
/* ---------------------------------------------- /*
 * Projects Filter
/* ---------------------------------------------- */
$(window).load(function() {
  var $container = $('.projects-grid');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.projects-filter a').click(function(){
    $('.projects-filter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
     });
     return false;
  });
});



/* ---------------------------------------------- /*
 * Project Images Popup
/* ---------------------------------------------- */

$('a.popup').magnificPopup({
  type: 'image',
  tClose: 'Fechar (ESC)',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1],
    tPrev: 'Anterior (Seta para esquerda)',
    tNext: 'Próxima (Seta para direita)',
    tCounter: '%curr% de %total%',
  },
  image: {
    tError: 'Não foi possível carregar a imagem'
  }
});