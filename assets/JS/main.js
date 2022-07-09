const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navClose = document.querySelector(".nav__close");
const navLink = document.querySelectorAll(".nav__link");

// Open nav menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// close nav menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach(link => {
  link.addEventListener("click", linkAction);
});
