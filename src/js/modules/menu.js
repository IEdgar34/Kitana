export const menu = () => {
    const menu = document.querySelector(".nav");
    const burger = document.querySelector(".burger");
    const navItems = document.querySelectorAll(".nav_list-item");

    burger.addEventListener("click", menuOpen);
    navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (e.target.closest(".nav_active")) {
                menuOpen();
            }else {
                console.log("клик на пк")
            }
        });
    });

    function menuOpen() {
        menu.classList.toggle("nav_active");
        burger.classList.toggle("burger_active");
        document.body.classList.toggle("overflow")
    }
};
