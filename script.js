// IMAGE SLIDER

// Select only the actual slide images (they have class="slide").
// This avoids accidentally selecting the arrow icons inside the buttons.
const slides = document.querySelectorAll(".slides img.slide");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;

function initialiseSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index) {
  // nothing to do if there are no slides
  if (!slides || slides.length === 0) return;

  // normalize/wrap the requested index into the valid range
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Attach listeners only if the buttons exist
if (prevBtn) prevBtn.addEventListener("click", prevSlide);
if (nextBtn) nextBtn.addEventListener("click", nextSlide);

initialiseSlider();
