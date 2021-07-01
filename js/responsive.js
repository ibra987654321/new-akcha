(() => {
  "use strict";

  let refOffset = 0;
  const bannerHeight = 77;
  const bannerWrapper = document.querySelector(".banner-wrapper");
  const banner = document.querySelector(".banner");

  const handler = () => {
    const newOffset = window.scrollY || window.pageYOffset;

    if (newOffset > bannerHeight) {
      if (newOffset > refOffset) {
        bannerWrapper.classList.remove("animateIn");
        bannerWrapper.classList.add("animateOut");
      } else {
        bannerWrapper.classList.remove("animateOut");
        bannerWrapper.classList.add("animateIn");
      }
      banner.style.background = "#02182F";
      refOffset = newOffset;
    } else {
      banner.style.backgroundColor = "rgba(255, 255, 255,  0)";
    }
  };

  window.addEventListener("scroll", handler, false);

  // define all UI variable
  const navToggler = document.querySelector(".nav-toggler");
  const navMenu = document.querySelector(".site-navbar ul");
  const navLinks = document.querySelectorAll(".site-navbar a");

  // load all event listners
  allEventListners();

  // functions of all event listners
  function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener("click", togglerClick);
    // nav links click event
    navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
  }

  // togglerClick function
  function togglerClick() {
    navToggler.classList.toggle("toggler-open");
    navMenu.classList.toggle("open");
  }

  // navLinkClick function
  function navLinkClick() {
    if (navMenu.classList.contains("open")) {
      navToggler.click();
    }
  }
})();
