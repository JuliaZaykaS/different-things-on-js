function slidesPlugin() {
  const slides = document.querySelectorAll(".slide");
  const activeSlide = Math.floor(Math.random() * (slides.length - 0 + 0));

  slides[activeSlide].classList.add("active");
  [...slides].forEach((el) =>
    el.addEventListener("click", () => {
      clearActiveClasses();
      el.classList.add("active");
    })
  );

  function clearActiveClasses() {
    [...slides].forEach((el) => el.classList.remove("active"));
  }
}

slidesPlugin();
