const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const navigation = document.getElementById("site-navigation");
const navigationLinks = navigation.querySelectorAll("a");

function openMenu() {
    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu");
}

function closeMenu() {
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
});

menuClose.addEventListener("click", closeMenu);
navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) closeMenu();
});
