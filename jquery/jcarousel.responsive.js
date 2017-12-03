// Core elements of the responsive JCarousel example from https://sorgalla.com/jcarousel/examples/responsive/
(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
/*The standard example uses an if/else three images at above 300 and and 2 below.
However, as we want the carousel to stick to 2 images on all sizes, we've just
stripped it back to a basic width value
*/
                    width = width / 2;

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })

 // The next looks at the carousel controls and sets that it'll scroll forward and back by 2 items
            var prev = $('.jcarousel-control-prev');
            var next = $('.jcarousel-control-next')

        prev
            .jcarouselControl({
                target: '-=2'
            });

       next
            .jcarouselControl({
                target: '+=2'
            });


    });
})(jQuery);
