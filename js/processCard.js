$(document).ready(function(){
  var zindex = 10;

  $("section.servicedetails").click(function(e){
    e.preventDefault();
    $("div.processCards")
    .removeClass("showing");
    $("div.processCard.show")
    .removeClass("show");
  });
  
  $("div.processCard").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.processCards").hasClass("showing")) {
      // a processCard is already in view
      $("div.processCard.show")
        .removeClass("show");

      if (isShowing) {
        // this processCard was showing - reset the grid
        $("div.processCards")
          .removeClass("showing");
      } else {
        // this processCard isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.processCards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
  

});

$(".serviceSelect").on("click", function(){
	
	// Card toggle state 	
	$(this).toggleClass("active");
	
});