// loader

const preloaderWrapper = document.querySelector(".preloader-wrapper");

window.addEventListener("load", function () {
  preloaderWrapper.classList.add("fade-out-animation");
});
// navbar
let menuIcon = document.querySelector(".navbar-toggler");
let navbar = document.querySelector(".navbar-collapse");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".card-patient,.services-card", {
  origin: "top",
});
ScrollReveal().reveal(
  ".services-card,.form ,.accordion,.card,.footer-panel1,.footer-panel4,.footer-panel2,.footer-hospitalServies,.footer-about.footer-imgtitle,.footer-info,.footer-socialLinks,.hero-btn",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".heading,.form-check,.eligible-info,.hero-heading,.subheading,.hero-subheading",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(".overview-img,.hero-img", {
  origin: "right",
});
