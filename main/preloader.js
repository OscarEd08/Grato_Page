
//LOADER

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('animate').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(1000000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
})

