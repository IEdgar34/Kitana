export const gallerySlider = (Swiper, Navigation, Pagination) => {
    var swiper = new Swiper(".gallery--swiper", {
        slidesPerView: "auto",
        spaceBetween: 60,
        modules: [Navigation],
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
    });

    var swiper = new Swiper(".popular-dishes--swiper", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        modules: [Navigation],
        navigation: {
            nextEl: ".popular-swiper-button-next",
            prevEl: ".popular-swiper-button-prev",
        },

        breakpoints: {
            374: {
                slidesPerView: "auto",
                spaceBetween: 60,
                centeredSlides: false,
            },
        },
    });
};
