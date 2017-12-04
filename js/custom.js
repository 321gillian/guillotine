//JCarousel custom styles
$('.jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
      //Creates variable element which is equal to the jcarousel
        var element = $(this),
        //Declares that varialbe width is equal to the width of element
            width = element.innerWidth();
            //Updates the variable width to total width divided by the number of items to display
            width = width / 2;
        // Gets the item width in
        element.jcarousel('items').css('width', width + 'px');
    })
    .jcarousel({
        // Space left for more custom options
    });

// Hides the default caption as soon as one of the arrows is clicked.
$(".jcarousel-control-prev, .jcarousel-control-next").click(function(){
        $("#default-caption").hide();
    });

//Uses the targetin event to output the title and alt tags of the image
$('.jcarousel').on('jcarousel:targetin', 'li', function(event, carousel)
              {
                  var comment = $(this).find('img').attr('alt');
                  var title = $(this).find('img').attr('title');
                  if(comment) $('.image-caption').html('<strong>'+title+'</strong> '+comment);
              });

//Hides the description when the gallery moves to the mobile version
if (screen.width < 690) {
   $(".stripe-box").hide();
}




















