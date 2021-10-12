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
