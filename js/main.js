// MAIN JS
// Developer: Daniel Espinoza
// Email: espinoza.dev@gmail.com
// Whatsapp: +5491127010154

$(window).on('load', function () {
    $('#loader').delay(350).fadeOut('slow');
    $('#icon').fadeOut('slow');
    onScroll();
});

$(function () {
    $(document).on('scroll', onScroll);
    $('.back-to-top').on('touchstart click', function () {
        $(window).scrollTo('#top', 1000);
    });
});

function onScroll() {
    let headerHeight = $('header').height();
    let scrollPosition = $(document).scrollTop() + headerHeight;
    let refElement = $('.black-block');
    if ($(window).scrollTop() - 75 > headerHeight) {
        $('.back-to-top').addClass('show');
    } else {
        $('.back-to-top').removeClass('show');
    }
    if (refElement.position().top - 75 <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition - 75) {
        $('.back-to-top').addClass('go-white');
    } else {
        $('.back-to-top').removeClass('go-white');
    }
}