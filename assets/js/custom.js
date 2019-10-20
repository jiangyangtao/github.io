(function ($) {
    jQuery(window).bind('scroll', function () {
        const height = $("#mu-featured-slider").height();
        if ($(window).scrollTop() > height - 100) {
            $('#mu-header').addClass('mu-fixed-nav');
            $('#menu-list').addClass('menu-list');
        } else {
            $('#mu-header').removeClass('mu-fixed-nav');
            $('#menu-list').removeClass('menu-list');
        }
    });

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 1000,
        loop: true,
        loopCount: Infinity
    });


    const tabItems = $('#slider-tab').children();
    const tabItem = $('#slider-tab li a');
    const contentItems = $('.tab-content');
    tabItem.click(function (e) {
        tabItems.removeClass('active');
        $(e.target.parentNode).addClass('active');
        contentItems.children().removeClass('active');
        contentItems.children().eq(tabItems.index(e.target.parentNode)).addClass('active');
    });


    var lastId,
        topMenu = $(".mu-menu"),
        topMenuHeight = topMenu.outerHeight() + 13,
        menuItems = topMenu.find('a[href^=\\#]'),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });


    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 55;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1500);
        e.preventDefault();
    });


    $('.mu-skill-progress-bar').appear(function () {
        const progress = $('.mu-pro-bar');
        for (var i = 0; i < progress.length; i++) {
            const progressElement = progress[i];
            $(progressElement).LineProgressbar({
                percentage: progressElement.getAttribute('progress'),
                triggerOnce: true
            });
        }
    });


    jQuery(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems.parent().removeClass("active").end().filter("[href=\\#" + id + "]").parent().addClass("active");
        }
    });
})(jQuery);




