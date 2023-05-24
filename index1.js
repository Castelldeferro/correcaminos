document.getElementById("imagen1").addEventListener("click", function() {
  window.location.href = "index1.html"; // Redirecciona al index.html
});

document.getElementById("imagen2").addEventListener("click", function() {
  window.location.href = "index2.html"; // Redirecciona a otra_pagina.html
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

