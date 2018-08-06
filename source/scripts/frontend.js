(function ($) {

    var app = function () {
        this.body = $('body');

        //CREATE FUNCTIONS FOR THE SITE
        var fullpageAnimation = function () {

            $('#fullpage').fullpage({
                // sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
                anchors: ['firstSection', 'secondSection', 'thirdSection'],
                menu: '.main-nav ul'
            });
        };

        //THEN ADD THEM TO THE RUN FUNCTION
        var run = function () {
            fullpageAnimation();
        };

        run();
    };

    $(function () {
        app();
    });
})(jQuery);