  $(document).on('scroll', function (e) {
   var alpha = $(document).scrollTop() / 550;
   $('.navbar-default').css('background-color', 'rgba(0,0,0,' + alpha + ')');
 });

  $(document).ready(function(){
    $(".nav").hide(0).delay(500).fadeIn(3000); 
    $(".photo").addClass("flip-top");
    $('.ancla').click(function(){
      var link = $(this);
      var anchor  = link.attr('href');
      $('html, body').stop().animate({
        scrollTop: jQuery(anchor).offset().top
      }, 2000);
      return false;
    });
  });
