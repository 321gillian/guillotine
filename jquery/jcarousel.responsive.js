(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 300) {
                    width = width / 2;
                } else if (width >= 300) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

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
