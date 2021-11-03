let scrollBtn = document.querySelector(".scroll-to-top");
// scroll to top BTN

window.onscroll = scrollToTop;

function scrollToTop() {
  let scrollHeight = window.scrollY;
  scrollHeight > 500
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
  scrollBtn.onclick = function () {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
}

// mobile navbar

let navToggle = document.querySelector(".menu-toggle");
let navBar = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navBar.classList.toggle("active");
});

// navigation

let navListItems = document.querySelectorAll("header ul a");

function scrollToSection(navLinks) {
  navLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // remove any active class on navLink on click
      navLinks.forEach((item) => item.classList.remove("active"));
      // add active class when clicking a nav link
      e.currentTarget.classList.add("active");
      // smooth scroll to desired section automatically
      let sectionToGo = document.querySelector(e.target.dataset.nav).offsetTop;
      window.scrollTo({
        top: sectionToGo,
        behaviour: "smooth",
      });
    });
  });
}

scrollToSection(navListItems);

// filter items logic
let galleryLists = document.querySelectorAll(".gallery-list li a");
let galleryItems = document.querySelectorAll(".gallery figure");

function filterItems(triggers) {
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      // remove active class from active triggers
      triggers.forEach((list) => {
        list.classList.remove("active");
      });
      e.currentTarget.classList.add("active");

      // set the opacity of all images to 0.5
      galleryItems.forEach((item) => (item.style.opacity = "0.5"));
      // change the opacity for clicked items to 1
      document
        .querySelectorAll(e.target.dataset.make)
        .forEach((item) => (item.style.opacity = "1"));
    });
  });
}

//calling function
filterItems(galleryLists);
