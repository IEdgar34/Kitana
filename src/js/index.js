import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { menu } from "./modules/menu";
import { gallerySlider } from "./modules/gallerySlider";
document.addEventListener("DOMContentLoaded", () => {
    menu();
    gallerySlider(Swiper, Navigation, Pagination);
});
