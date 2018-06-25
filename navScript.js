$(document).ready(function(){
  var mn = $(".main-nav");
  $(window).scroll(function(){
    if( $(this).scrollTop() > 160 ) {
      mn.addClass("main-nav-scrolled");
      }
      else{
        mn.removeClass("main-nav-scrolled");
      }
    });
});
