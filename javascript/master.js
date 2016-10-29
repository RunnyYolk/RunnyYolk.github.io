$(document).ready(function(){
  var btns = $(".enquire-btn");
  btns.click(function(){
    $(".enquiries").toggleClass("open");
    $(".nav-right").toggleClass("enquiries-open");
  })

  $(".down-arrow").click(function(){
    var offset = $(".section-two").offset();
    $("html, body").animate({
      scrollTop: offset.top
    }, 700, "swing");
  });

});
