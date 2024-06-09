document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector('.hamburger-menu');
  var menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  });
});



// slideshow//
document.addEventListener("DOMContentLoaded", function () {
  showSlides("slideshow-container");
  showSlides("slideshow-container2");
});

function showSlides(containerId) {
  let slideIndex = 0;
  const slides = document.querySelector(`.${containerId}`).getElementsByClassName("fade");

  function displaySlides() {
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
          slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
      setTimeout(displaySlides, 2000); // Change slide every 2 seconds
  }

  displaySlides();
}
