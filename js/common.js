$(document).ready(function () {
    $('.partners__boxdescr').click(function () {
        $(this).toggleClass('open');
    });

    $(function () {
        $('.footer .up').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });

    $('.partners .orangelink').click(function (e) {
        e.preventDefault();
        $('.partners').toggleClass('showall');
        $(this).find('span').toggle();
    });

    $('.benefits .orangelink').click(function (e) {
        e.preventDefault();
        $('.benefits').toggleClass('showall');
        $(this).find('span').toggle();
    });

    // menu
    $('.sublink a').click(function () {
        $(this).toggleClass('rotate');
        $(this).next('.sublist').slideToggle();
    });

    $('.burger').click(function () {
        $('.header__nav').addClass('show');
    });

    $('.closemenu').click(function (e) {
        e.preventDefault();
        $('.header__nav').removeClass('show');
    });


    // footer slider

    $('.footertext-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true
    });


    if ($('.partners__box').length > 6) {
        $('.partners .orangelink').css('display', 'inline-block');
    }
    if ($('.benefits__box').length > 6) {
        $('.benefits .orangelink').css('display', 'inline-block');
    }

    // reviews slider

    $('.reviewslider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,

    });



    // Customers

    $('.customers__sidebar-listbox .title').click(function(){
        $(this).next('.customers__sidebar-list').slideToggle();
    });



});