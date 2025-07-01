export const gallerySlider = (Swiper, Navigation, Pagination) => {
    var swiper = new Swiper(".gallery--swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        /* centeredSlides: true, */
        modules: [Navigation],
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1441: {
                /* slidesPerView: "auto", */
                spaceBetween: 60,
                /* centeredSlides: false, */
            },
            
        },
    });

    var swiper = new Swiper(".popular-dishes--swiper", {
        /* slidesPerView: 1, */
        centeredSlides: true,
        spaceBetween: 20,
        modules: [Navigation],
        navigation: {
            nextEl: ".popular-swiper-button-next",
            prevEl: ".popular-swiper-button-prev",
        },

        breakpoints: {
            1441: {
                centeredSlides: false,
                spaceBetween: 60,
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
