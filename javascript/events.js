$( document ).ready(function() {
  $(".menu-icon").click(function() {

    $(".main-container").animate({
      width: "80%"
    }, 500, function() {
      $(".menu-icon").fadeOut();
    })

    $("aside").animate({
      width: "20%",
    }, 500, function() {
      
    })
  })

  $(".close-icon").click(function() {

    $(".main-container").animate({
      width: "100%"
    }, 500, function() {
      $(".menu-icon").fadeIn();
    })

    $("aside").animate({
      width: 0,
    }, 500, function() {
      
    })
  })
})
