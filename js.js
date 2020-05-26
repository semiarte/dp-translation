// smooth window load
function loadPage() {
  loadingTime = setTimeout(showPage, 400);
}
function showPage() {
  $(".loader").fadeOut();
}

// open hidden nav menu
function open_menu() {
  $(".menu-button").hide();
  $(".menu-button_close").show();
  $(".menu-button_close").addClass('animate_rightToLeft');
  $(".nav_menu").fadeIn();
}
// close hidden nav menu
function close_menu() {
  $(".menu-button").show();
  $(".menu-button_close").hide();
  $(".nav_menu").fadeOut();
}

$(document).ready(function(){
  // smooth scroll
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// header scroll
/*function navigationScroll() {
  var navElement = document.querySelector('.header');
  var navHeight = navElement.clientHeight;
  var reference = document.querySelector('#start');

  function checkPosition() {
    var positionY = reference.getBoundingClientRect().bottom;
    if (positionY - navHeight < 0) {
      navElement.classList.add('header_bg');
    } else {
      navElement.classList.remove('header_bg');
    }
  }
  window.addEventListener('scroll', checkPosition);
}
navigationScroll();
*/

// animations on scroll
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}
loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}