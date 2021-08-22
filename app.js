const slides = document.querySelectorAll(".slide"),
  backdrop = document.querySelector("body");

for (const slide of slides) {
  slide.addEventListener("click", (e) => {
    clearActiveClasses();
    slide.classList.add("active");
    e.stopPropagation();
  });
}

backdrop.addEventListener("click", (e) => {
  clearActiveClasses();
});

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
