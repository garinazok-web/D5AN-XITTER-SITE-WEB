function direBonjour() {
  alert("Salut ! Bienvenue sur mon site 😄");
}

// Image Slider Functionality - Multiple sliders support
const sliders = document.querySelectorAll('.image-slider');

sliders.forEach((slider, sliderIndex) => {
  let currentImageIndex = 0;
  const images = slider.querySelectorAll('.slider-image');
  const prevArrow = slider.querySelector('.prev-arrow');
  const nextArrow = slider.querySelector('.next-arrow');

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  if (nextArrow && prevArrow) {
    nextArrow.addEventListener('click', nextImage);
    prevArrow.addEventListener('click', prevImage);
  }
});
