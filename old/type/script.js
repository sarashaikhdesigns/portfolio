document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector('.hamburger-menu');
  var menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function () {
      menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
  });


});


