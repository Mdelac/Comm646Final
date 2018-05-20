$(document).ready(function () {
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(600);
            $(".plusminus").text('+');
        }
        $(this).next(".accordion_body").slideDown(600);
        $(this).children(".plusminus").text('-');
    });
});

$("accordion_head").click(function() {
  $(this).toggleClass( "highlight" );
});