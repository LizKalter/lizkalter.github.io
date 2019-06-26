// Sticky Nav from w3schools
// See: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

window.onscroll = function() {stickyNav()};

// Get the navbar
var nav = document.getElementById("sticky-nav");

// Get the offset position of the navbar.
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position.
function stickyNav() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
