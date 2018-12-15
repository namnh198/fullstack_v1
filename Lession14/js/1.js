$(document).ready(function(){
  $(window).on('scroll', function() {
    if($(window).scrollTop()) {
      $('.main-navbar').addClass('scroll');
    } else {
      $('.main-navbar').removeClass('scroll');
    }
  });
   
   $('#backtotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 2000);
    return false;
  });

  $('.navbar-brand').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 2000);
    return false;
  });

  $('#backtotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 2000);
    return false;
  });

  $('#menu1').click(function(){
    $('html,body').animate({scrollTop: 0}, 2000);
    return false;
  });

  $('#menu2').click(function () {
    $('html,body').animate({ scrollTop: $('.services').offset().top }, 2000);
    return false;
  });

  $('#menu3').click(function () {
    $('html,body').animate({ scrollTop: $('.skill').offset().top }, 2000);
    return false;
  });

  $('#menu4').click(function () {
    $('html,body').animate({ scrollTop: $('.portfolio').offset().top }, 2000);
    return false;
  });

  $('#menu5').click(function () {
    $('html,body').animate({ scrollTop: $('.about').offset().top }, 2000);
    return false;
  });

  $('#menu6').click(function () {
    $('html,body').animate({ scrollTop: $('.contact').offset().top }, 2000);
    return false;
  });

  $('.web').animate({ width: '90%' }, 2000);
  $('.app').animate({ width: '75%' }, 2000);
  $('.seo').animate({ width: '50%' }, 2000);
  $('.dev').animate({ width: '70%' }, 2000);
  $('.ds').animate({ width: '45%' }, 2000);
});  
 
