$(document).ready(function() {
  $('nav ul li').hover(
    function() {
      $(this).children('ul').stop(true, false).slideDown(200);
    },
    function() {
      $(this).children('ul').stop(true, false).slideUp(200);
    }
  );
});
