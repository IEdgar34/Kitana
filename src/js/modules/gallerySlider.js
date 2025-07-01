export const gallerySlider = (Swiper, Navigation, Pagination) => {
    var swiper = new Swiper(".gallery--swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        /* centeredSlides: true, */
        modules: [Navigation],
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1441: {
                loop: true,
                slidesPerView: "auto",
                spaceBetween: 60,
                /* centeredSlides: false, */
            },
           /*  1441: {
                loop: false,
                spaceBetween: 60,
            }, */
            
        },
    });

    var swiper = new Swiper(".popular-dishes--swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        modules: [Navigation],
        navigation: {
            nextEl: ".popular-swiper-button-next",
            prevEl: ".popular-swiper-button-prev",
        },

        breakpoints: {
            1441: {
                centeredSlides: false,
                spaceBetween: 50,
            },
            780: {
                centeredSlides: false,
            },
            426: {
                centeredSlides: false,
                slidesPerView: "auto",
            },
        },
    });
};
