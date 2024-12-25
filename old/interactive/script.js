document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector('.hamburger-menu');
  var menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
  });

  const content = `ARTISTS NOTE: This website is not only my portfolio, but is also one of my biggest personal projects that I coded entirely from scratch. Everything you are navigating through is made with HTML, CSS, and Javascript.`;

      const targetElement = document.getElementById('intro');
      let index = 0;

      function typeWriter() {
          if (index < content.length) {
              targetElement.innerHTML += content.charAt(index);
              index++;
              setTimeout(typeWriter, 50); // Adjust the speed by changing the timeout value
          }
      }

      typeWriter();

});
