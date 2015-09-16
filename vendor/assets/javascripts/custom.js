
/* ---------------------------------------------- /*
 * Scrolling Nav
/* ---------------------------------------------- */

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});





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