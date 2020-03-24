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
  $(".nav_menu").fadeIn();
}
// close hidden nav menu
function close_menu() {
  $(".menu-button").show();
  $(".menu-button_close").hide();
  $(".nav_menu").fadeOut();
}

// initialize swiper
var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  centeredSlides: true,
  mousewheel: true,
  forceToAxis: true,
  setWrapperSize: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets"
  }
});
