// HEADER

const menu = document.getElementById("menu");
const navlinks = document.getElementById("navlinks");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");

const showNavlinks = () => {
  navlinks.style.display = "flex";
  overlay.classList.add("active");
};

const hideNavlinks = () => {
  navlinks.style.display = "none";
  overlay.classList.remove("active");
};

menu.addEventListener("click", showNavlinks);
close.addEventListener("click", hideNavlinks);

// IMAGE SLIDER

// Slider data: image headings and descriptions
const slideData = [
  {
    heading: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    heading: "We are available all across the globe",
    description: `We are available all across the globe With stores all over the world, it'seasy for you to find furniture for your home or place of business. Locally,we’re in most major cities throughout the country. Find the branch nearestyou using our store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    heading: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advancedtechnology to ensure that every product is made as perfect and as consistentas possible. With three decades of experience in this industry, weunderstand what customers want for their home and office.",
  },
];

const slides = document.querySelectorAll(".slides img.slide");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const slideHeading = document.getElementById("heading");
const slideDescription = document.getElementById("description");

let slideIndex = 0;

function initialiseSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index) {
   // ✅ Prevent invalid index
  if (index < 0) index = slideData.length - 1;
  if (index >= slideData.length) index = 0;
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

  // Update slide info
  slideHeading.textContent = slideData[slideIndex].heading;
  slideDescription.textContent = slideData[slideIndex].description;
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
showSlide(0);

// Attach listeners only if the buttons exist
if (prevBtn) prevBtn.addEventListener("click", prevSlide);
if (nextBtn) nextBtn.addEventListener("click", nextSlide);

initialiseSlider();
