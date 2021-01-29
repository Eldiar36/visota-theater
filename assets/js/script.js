
    $('.multiple-items').slick({
        infinite: false,
        dots: true,
        slidesToShow: 2.4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: "unslick"
            },
            {
                breakpoint: 1025,
                settings: "slick"
            },
            {
                breakpoint: 767,
                settings:{
                    slidesToShow: 1.2,
                }
            },
        ]
    });
