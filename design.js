document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".work-card:not(.gif-card)").forEach((card) => {
    const slides = Array.from(card.querySelectorAll("img, video"));

    if (slides.length === 0) return;

    let current = 0;

    function showSlide(index) {
      slides.forEach(slide => {
        slide.classList.remove("is-active");

        if (slide.tagName === "VIDEO") {
          slide.pause();
          slide.currentTime = 0;
        }
      });

      const slide = slides[index];
      slide.classList.add("is-active");

      if (slide.tagName === "VIDEO") {
        slide.play().catch(() => {});
      }

      // Images: 0.5 sec, Videos: 3 sec
      const duration = slide.tagName === "VIDEO" ? 3000 : 1000;

      setTimeout(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, duration);
    }

    showSlide(current);
  });
});