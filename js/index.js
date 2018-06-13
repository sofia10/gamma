var swiper = new Swiper('.s1', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.s2', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.projects .swiper-button-next',
        prevEl: '.projects .swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
        }
    }
});
var swiper = new Swiper('.s3', {
    slidesPerView: 7,
    spaceBetween: 20,
    navigation: {
        nextEl: '.partners .swiper-button-next',
        prevEl: '.partners .swiper-button-prev',
    },
    breakpoints: {
        1199: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        380: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
});