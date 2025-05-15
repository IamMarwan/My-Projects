var swiper = new Swiper('#university-slider', {
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // Enable swiper to be responsive
        breakpoints: {
        // when window width is >= 640px
        440: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 768px
        850: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1025: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
});

var swiper = new Swiper('.swiper-container-why', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }
});