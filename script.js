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

var header = document.querySelector('header');
var prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('scroll-down');
  } else {
    header.classList.add('scroll-down');
  }

  prevScrollPos = currentScrollPos;
});
