// $(window).scroll(function() {
//   	// var scroll = $(this).scrollTop();
//   	// $('#zarai').text("El scrollTop actual es: " + scroll);
//     if ($(window).scrollTop() > ($(window).height() - 90)) {
//       $(".navbar").addClass('on-scroll');
//     } else {
//       $(".navbar").removeClass('on-scroll');
//     }
//   });

// $(".circulo").click(function(){
// 	$().toggle();
// });

// $().hover(function(){
// 	$().toggleClass();
// });

$(document).ready(function()
{
    $(".circulo-interno").hover
    (
        function()
        {
            $(this).stop().animate({ opacity: 0.1 }, 1000);
        },
        function()
        {
            $(this).stop().animate({ opacity: 1 }, 1000);
        }
    );
});