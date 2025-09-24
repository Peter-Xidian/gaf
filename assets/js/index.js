/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  const heroSec = document.querySelector(".hero");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 480) {
    scrollUp.classList.add("show-scroll");
    heroSec.classList.add("active");
  } else {
    scrollUp.classList.remove("show-scroll");
    heroSec.classList.remove("active");
  }
}
window.addEventListener("scroll", scrollUp);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    nav.classList.add("active");
    header.classList.add("active");
  } else {
    nav.classList.remove("active");
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", scrollHeader);

/*==================== TOGGLE MENU MOBILE ====================*/
const navMenu = document.querySelector(".nav-menu");

function toggleMenu() {
  navMenu.classList.toggle("active");
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nml");

function linkAction() {
  const navMenu = document.querySelector(".nav-menu");
  // When we click on each nav__link, we remove the toggle-nav-menu class
  navMenu.classList.remove("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ------------- TOGGLE SERVICES ------------- */
const sTab = document.querySelectorAll(".sett");
const sBox = document.querySelectorAll(".sec");

// Add a click event listener to each sidebar element
sTab.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Remove active class from all sidebar elements
    sTab.forEach((stb) => {
      stb.classList.remove("active");
    });
    // Add active class to the clicked sidebar element
    element.classList.add("active");

    // Remove active class from all containers
    sBox.forEach((sbx) => {
      sbx.classList.remove("active");
    });
    // Add active class to the container with the same index as the clicked sidebar element
    sBox[index].classList.add("active");
  });
});

/* ------------- TESTIMONIALS CAROUSEL ------------- */
const wrapper = document.querySelector(".te-wrapper");
const cards = document.querySelector(".te-cards");
const wrapperWidth = wrapper.offsetWidth;
const cardsWidth = cards.scrollWidth;

gsap.to(cards, {
  x: `-${cardsWidth}px`,
  duration: 10,
  repeat: -1,
  ease: "linear",
  modifiers: {
    x: gsap.utils.wrap([-cardsWidth, 0]),
  },
});

wrapper.addEventListener("mouseenter", () => {
  gsap.globalTimeline.pause();
});

wrapper.addEventListener("mouseleave", () => {
  gsap.globalTimeline.resume();
});

/* ------------- SERVICES PAGE (NAVIGATION LOGIC) ------------- */
