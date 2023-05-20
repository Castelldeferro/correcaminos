const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  menu.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function() {
  var menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);

      if (target) {
        var offsetTop = target.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
