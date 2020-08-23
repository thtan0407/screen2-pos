$(document).ready(function () {

    // $('#navigation .grid-nav > ul >li.menu-item-has-children > ul > li:first-child').before('<li><img src="' + url_icons + 'arrow-left.svg"> Quay về</li>');
    // $('#navigation .grid-nav > ul >li.menu-item-has-children > ul > li.menu-item-has-children-small > ul > li:first-child').before('<li><img src="' + url_icons + 'arrow-left.svg">  Quay về</li>');

    $('.header_navigation > ul > li.menu-item-has-children > a').append('<i class="flaticon-down-arrow"></i>');

    $(document).on("click", "#navigation .humburger", function () {
        $('#navigation .grid-nav ul').toggleClass('show_menu');
        $("#navigation .humburger").toggleClass("active_humburger");
        $("#navigation .grid-nav > ul > li > i, .grid-nav > ul > li > svg").next("ul").removeClass("show_iner_menu");
        $("#navigation .grid-nav").toggleClass("overlay");
    });
    $(document).on("click", '#navigation .grid-nav > ul > li.menu-item-has-children > a, #navigation .grid-nav > ul > li > ul > li.menu-item-has-children-small > a', function () {
        $(this).next("ul").toggleClass("show_iner_menu");
        $("#navigation .grid-nav ul").toggleClass("overflow");
    });
    $(document).on("click", "#navigation .grid-nav > ul > li > ul > li:first-child, #navigation .grid-nav > ul > li > ul > li > ul > li:first-child", function () {
        $(this).parent().removeClass("show_iner_menu");
    });

    $(document).on("mouseup", function (e) {
        var o = $("#navigation .grid-nav ul");
        o.is(e.target) || 0 !== o.has(e.target).length || (
            $("#navigation .grid-nav ul").removeClass("show_menu"),
                $("#navigation .humburger").removeClass("active_humburger"),
                $("#navigation .grid-nav > ul > li > i, .grid-nav > ul > li > svg").next("ul").removeClass("show_iner_menu"),
                $("#navigation .grid-nav").removeClass("overlay"))
    });

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 0;

        if (top > height) {
            jQuery('.m-header').addClass('jsScroll');
        } else {
            jQuery('.m-header').removeClass('jsScroll');
        }
    })

});