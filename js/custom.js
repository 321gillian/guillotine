$('.jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 300) {
            width = width / 2;
        } else if (width > 300) {
            width = width / 1;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    .jcarousel({
        // Your configurations options
    });

$(".jcarousel-control-prev, .jcarousel-control-next").click(function(){
        $("#default-caption").hide();
    });

$('.jcarousel').on('jcarousel:targetin', 'li', function(event, carousel)
              {
                  var comment = $(this).find('img').attr('alt');
                  var title = $(this).find('img').attr('title');
                  if(comment) $('.image-caption').html('<strong>'+title+'</strong> '+comment);
              });



