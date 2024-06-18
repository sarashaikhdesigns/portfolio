document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.menu');
  
    menuButton.addEventListener('click', function () {
        menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
    });
  
    // to start slideshow
    function startSlides(slideshow) {
      const slides = slideshow.querySelectorAll('.slides img');
      let currentSlide = 0;
      const slideCount = slides.length;
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        });
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
      }
  
      showSlide(currentSlide);
  
      setInterval(nextSlide, 2000);
    }
  
    const slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach(slideshow => {
      startSlides(slideshow);
    });
});
