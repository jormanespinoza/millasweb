$(window).on('load', function () {
    // Loader
    $('#loader').delay(350).fadeOut('slow');
    $('#icon').fadeOut('slow');
    // Init Scroll function
    onScroll();
});

$(function () {
    // Smoth Scroll
    $(document).on('scroll', onScroll);

    $('.back-to-top').on('touchstart click', function () {
        $(window).scrollTo('#top', 1000);
    });
});

// Detects current section when scroll
function onScroll() {
    let headerHeight = $('header').height();
    let scrollPosition = $(document).scrollTop() + headerHeight;
    let refElement = $('.black-block');
    if ($(window).scrollTop() - 75 > headerHeight) {
        $('.back-to-top').addClass('show');
    } else {
        $('.back-to-top').removeClass('show');
    }
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('.back-to-top').addClass('go-white');
    } else {
        $('.back-to-top').removeClass('go-white');
    }
}