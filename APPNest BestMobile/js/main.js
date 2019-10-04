jQuery(document).ready(function($) {
    $(".js-blog-carousel").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        margin:0,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
    });

    $(".js-menu-toggle").click(function () {
       $(this).toggleClass("activated");

       $(".js-main-navigation-wrapper").toggleClass("navigation-displayed");
    });
});