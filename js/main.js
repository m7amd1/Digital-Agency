$(document).ready(function () {

  // Scroll To Top

  let Top = $('#top');

  $(window).on('scroll', function () {

    if ($(window).scrollTop() >= 1200) {
      
      if (Top.is(':hidden')) {
        
        Top.fadeIn(500);

      }

    } else {
      
      Top.fadeOut(500);

    }

  });


  Top.on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: 0

    }, 1000);

  });

  // Scroll To Element 

  $('.navbar nav a').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

    }, 1000);

  });

  // Toggle Humbrger Menu on Click

  let menu = $('.navbar .humbrger'),
      links = $('.navbar nav');

  menu.on('click', function () {

    if (links.is(':hidden')) {

      links.show();

    } else {

      links.hide();

    }

  });

});  
