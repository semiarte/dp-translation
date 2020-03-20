// smooth window load
function loadPage(){
    loadingTime = setTimeout(showPage, 400);
}
function showPage(){
    $('.loader').fadeOut();
}

// open hidden nav menu
function open_menu() {
    $('.menu-button').hide();
    $('.menu-button_close').show();
    $('.nav_menu').fadeIn();
}
// close hidden nav menu
function close_menu() {
    $('.menu-button').show();
    $('.menu-button_close').hide();
    $('.nav_menu').fadeOut();
}