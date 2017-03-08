$(document).on('scroll', function (e) {
  var alpha = $(document).scrollTop() / 550;
  $('.navbar-default').css('background-color', 'rgba(0,0,0,' + alpha + ')');
});

$(document).ready(function(){

  $(".nav").hide(0).delay(300).fadeIn(3000); 
  $(".photo").addClass("flip-top");

  $('.ancla').click(function(){
     $('.ancla').css("color", "white");
     $(this).css("color", "#F7F3BC");
     var link = $(this);
     var anchor  = link.attr('href');
     $('html, body').stop().animate({
       scrollTop: $(anchor).offset().top
     }, 1000);
     return false;
  });

  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },6000);
  });

  $(".linkGallery").click(function(){
    var link = $('img', $(this)).attr('alt');
    window.open(link, '_blank');
  });
  
});
