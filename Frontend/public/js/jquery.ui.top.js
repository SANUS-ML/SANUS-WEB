jQuery(function($){

    "use strict";
  
    var $returnToTop = $('#return-to-top');
  
    $(window).scroll(function() {
  
        ( $(this).scrollTop() >= 50 ) ? $returnToTop.fadeIn(500) : $returnToTop.fadeOut(500);
  
    });
  
    $returnToTop.click(function(){ $('body,html').animate({ scrollTop : 0 }, 500); });
  
  });